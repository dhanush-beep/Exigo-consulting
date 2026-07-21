"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, [isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [isAnimating]);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(handleNext, 7000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const current = testimonials[activeIndex];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 relative bg-[#F7F9FA] animate-section">
      <Container className="max-w-5xl">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Testimonials"
          description="Read feedback from founders, investors, and boards of directors who have partnered with Exigo."
        />

        <div className="relative">
          {/* Large quote watermark */}
          <div className="absolute -top-4 -left-4 text-[#0F6B82]/5 pointer-events-none select-none">
            <Quote className="w-28 h-28" />
          </div>

          {/* Testimonial Card */}
          <div
            className={`testimonial-card p-8 sm:p-12 transition-all duration-400 ${isAnimating ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6 text-[#DE7A66] justify-center">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Content */}
            <blockquote
              className="text-xl sm:text-[22px] text-[#1B2730] text-center leading-relaxed mb-8 font-[400]"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              &ldquo;{current.content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#0F6B82]/10 flex items-center justify-center">
                <span className="text-[#0F6B82] font-[700] text-lg" style={{ fontFamily: "var(--font-outfit)" }}>
                  {current.name.charAt(0)}
                </span>
              </div>
              <div className="text-center">
                <h4
                  className="font-[600] text-[#1B2730] text-base"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  {current.name}
                </h4>
                <p className="text-sm text-[#0F6B82] mt-0.5">
                  {current.role},{" "}
                  <span className="text-[#6C7A86]">{current.company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-8 px-2">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-[#E5EBEF] flex items-center justify-center text-[#6C7A86] hover:text-[#0F6B82] hover:border-[#0F6B82] hover:shadow-[0_4px_12px_0_rgba(15,107,130,0.15)] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                    ? "bg-[#0F6B82] w-6"
                    : "bg-[#E5EBEF] hover:bg-[#0F6B82]/30 w-2"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white border border-[#E5EBEF] flex items-center justify-center text-[#6C7A86] hover:text-[#0F6B82] hover:border-[#0F6B82] hover:shadow-[0_4px_12px_0_rgba(15,107,130,0.15)] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
