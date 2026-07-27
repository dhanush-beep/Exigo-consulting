"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/lib/data/blogPosts";

interface Blog3DCoverFlowProps {
  posts: BlogPost[];
}

export default function Blog3DCoverFlow({ posts }: Blog3DCoverFlowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);

  // Smooth spring-animated indicator progress (0 → posts.length - 1)
  const indicatorProgress = useMotionValue(0);
  const smoothProgress = useSpring(indicatorProgress, {
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  });

  // Keep indicator synchronized with activeIndex
  useEffect(() => {
    indicatorProgress.set(activeIndex);
  }, [activeIndex, indicatorProgress]);

  // Auto-slide infinite loop
  useEffect(() => {
    if (isPaused || isDragging) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % posts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [posts.length, isPaused, isDragging]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % posts.length);
  }, [posts.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + posts.length) % posts.length);
  }, [posts.length]);

  // Touch/Mouse drag support
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    dragStartX.current = clientX;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const delta = clientX - dragStartX.current;
    if (Math.abs(delta) > 60) {
      if (delta < 0) handleNext();
      else handlePrev();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleNext, handlePrev]);

  // Compute 3D CoverFlow transform for each card position
  const getCardTransform = (index: number) => {
    const total = posts.length;
    let diff = (index - activeIndex + total) % total;
    if (diff > total / 2) diff -= total;

    const absDiff = Math.abs(diff);

    // Center active card — full size, flat, sharp
    if (diff === 0) {
      return {
        x: 0,
        scale: 1,
        rotateY: 0,
        zIndex: 50,
        opacity: 1,
        blur: 0,
        shadow: "0 20px 60px rgba(15, 107, 130, 0.25), 0 8px 24px rgba(0,0,0,0.08)",
      };
    }

    // Immediate adjacent cards — angled peek with depth
    if (absDiff === 1) {
      const direction = diff > 0 ? 1 : -1;
      return {
        x: direction * 340,
        scale: 0.78,
        rotateY: direction * -28,
        zIndex: 40,
        opacity: 0.75,
        blur: 1.5,
        shadow: "0 12px 35px rgba(0,0,0,0.12)",
      };
    }

    // Second-tier adjacent cards — deeper perspective recede
    if (absDiff === 2) {
      const direction = diff > 0 ? 1 : -1;
      return {
        x: direction * 540,
        scale: 0.62,
        rotateY: direction * -42,
        zIndex: 30,
        opacity: 0.4,
        blur: 3,
        shadow: "0 8px 20px rgba(0,0,0,0.08)",
      };
    }

    // Farther cards — hidden in deep 3D perspective
    const direction = diff > 0 ? 1 : -1;
    return {
      x: direction * 700,
      scale: 0.5,
      rotateY: direction * -50,
      zIndex: 10,
      opacity: 0,
      blur: 6,
      shadow: "none",
    };
  };

  // Pill trackbar total width & indicator width
  const dotWidth = 12;
  const activeDotWidth = 36;
  const dotGap = 8;
  const totalTrackWidth = posts.length * dotWidth + (posts.length - 1) * dotGap + (activeDotWidth - dotWidth);

  return (
    <div
      className="relative w-full py-10 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Perspective Container */}
      <div
        ref={containerRef}
        className="relative h-[500px] sm:h-[540px] w-full flex items-center justify-center overflow-visible"
        style={{ perspective: "1400px", perspectiveOrigin: "50% 50%" }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {posts.map((post, index) => {
          const t = getCardTransform(index);
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={post.id}
              onClick={() => !isDragging && setActiveIndex(index)}
              initial={false}
              animate={{
                x: t.x,
                scale: t.scale,
                rotateY: t.rotateY,
                opacity: t.opacity,
                zIndex: t.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
                mass: 0.9,
              }}
              style={{
                transformStyle: "preserve-3d",
                boxShadow: t.shadow,
                filter: `blur(${t.blur}px)`,
                backfaceVisibility: "hidden",
              }}
              className={`absolute w-[88%] sm:w-[520px] md:w-[600px] h-full rounded-[28px] cursor-pointer bg-white border overflow-hidden flex flex-col justify-between ${
                isActive
                  ? "border-[#0F6B82]/40 ring-1 ring-[#0F6B82]/20"
                  : "border-slate-200/70"
              }`}
            >
              {/* Image Frame with Cinematic Overlay */}
              <div className="relative h-[52%] w-full bg-slate-900 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out hover:scale-110"
                  sizes="(max-width: 768px) 90vw, 600px"
                  priority={isActive}
                />
                {/* Cinematic bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category Badge — vibrant teal pill */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: isActive ? 1 : 0.6, y: 0 }}
                  className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#0F6B82] text-white font-extrabold text-[10px] uppercase tracking-widest shadow-lg backdrop-blur-sm"
                >
                  {post.category}
                </motion.div>

                {/* Date Tag — glass morphism */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-lg text-white text-[11px] flex items-center gap-1.5 font-medium border border-white/20">
                  <Calendar className="w-3 h-3 text-[#4CC9F0]" />
                  <span>{post.publishedAt}</span>
                </div>

                {/* Bottom title overlay on image */}
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white font-display line-clamp-2 leading-snug drop-shadow-lg">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow bg-white">
                <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 leading-relaxed font-normal">
                  {post.excerpt}
                </p>

                {/* Footer Action Row */}
                <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#0F6B82]" />
                    <span>{post.readTime}</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-[#1B2730] font-bold text-xs">{post.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F6B82] hover:bg-[#155B6D] text-white text-[11px] font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 group"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls: Arrows + Animated Pill Trackbar */}
      <div className="flex items-center justify-center gap-5 mt-10">
        {/* Left Arrow */}
        <motion.button
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="w-12 h-12 rounded-full bg-white border border-slate-200 text-[#1B2730] hover:bg-[#0F6B82] hover:text-white hover:border-[#0F6B82] flex items-center justify-center shadow-lg transition-colors duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        {/* Pill-Shaped Pagination Trackbar with Sliding Active Indicator */}
        <div
          className="relative flex items-center px-5 py-3 rounded-full bg-slate-100/80 backdrop-blur-md border border-slate-200/60 shadow-sm"
          style={{ minWidth: totalTrackWidth + 40 }}
        >
          {/* Sliding active indicator (animated pill that glides) */}
          <motion.div
            className="absolute h-3 rounded-full bg-[#0F6B82] shadow-[0_0_12px_rgba(15,107,130,0.5)]"
            style={{
              width: activeDotWidth,
              top: "50%",
              y: "-50%",
            }}
            animate={{
              left: 20 + activeIndex * (dotWidth + dotGap),
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
              mass: 0.6,
            }}
          />

          {/* Dot indicators */}
          <div className="relative flex items-center gap-2 z-10">
            {posts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-3 rounded-full transition-all duration-500 ${
                  activeIndex === idx
                    ? "w-9 bg-transparent"
                    : "w-3 bg-slate-300/60 hover:bg-slate-400/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <motion.button
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleNext}
          aria-label="Next Slide"
          className="w-12 h-12 rounded-full bg-white border border-slate-200 text-[#1B2730] hover:bg-[#0F6B82] hover:text-white hover:border-[#0F6B82] flex items-center justify-center shadow-lg transition-colors duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Floating "Show Reel" Badge — Bottom Right */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-24 right-6 z-50 hidden sm:flex"
      >
        <button
          onClick={handleNext}
          className="px-5 py-3 rounded-full bg-[#FBBF24] text-[#1B2730] font-extrabold text-xs uppercase tracking-widest shadow-[0_6px_20px_rgba(251,191,36,0.4)] hover:shadow-[0_10px_30px_rgba(251,191,36,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <span>Show Reel</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}
