"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Briefcase, Globe, Target, Quote } from "lucide-react";
import Container from "../ui/Container";
import AnimatedText from "../motion/AnimatedText";
import AnimatedCard from "../motion/AnimatedCard";
import AnimatedIcon from "../motion/AnimatedIcon";
import { APPLE_EASE, DURATION, SPRING_CONFIG, cardRevealVariants } from "@/lib/motion";

export default function ResultsAndTestimonialSection() {
  const [activeTab, setActiveTab] = useState(0);

  const testimonials = [
    {
      quote:
        "Exigo Consulting played a crucial role in our acquisition strategy. Their expertise, network, and dedication helped us complete our largest acquisition to date.",
      author: "John Smith",
      role: "CEO, Manufacturing Solutions Ltd.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    },
    {
      quote:
        "The partner-led execution model at Exigo provided unparalleled confidence during complex valuation and sell-side negotiations.",
      author: "Elena Rostova",
      role: "Founder & Managing Director, Enterprise Cloud System",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
    },
    {
      quote:
        "Seamless cross-border due diligence and integration planning. Exigo unlocked significant synergies for our enterprise growth.",
      author: "Marcus Vance",
      role: "Chief Strategy Officer, Global FinTech Capital",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
    },
  ];

  const stats = [
    { icon: TrendingUp, number: "£500M+", label: "Total Deal Value" },
    { icon: Briefcase, number: "300+", label: "Successful Deals" },
    { icon: Globe, number: "15+", label: "Countries Served" },
    { icon: Target, number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFBFD] relative overflow-hidden select-none">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column — Proven Results */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: DURATION.major, ease: APPLE_EASE }}
                className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#0F6B82] mb-3"
              >
                PROVEN RESULTS
              </motion.p>

              <AnimatedText
                as="headline"
                element="h2"
                className="text-3xl sm:text-4xl font-extrabold text-[#1B2730] font-display"
              >
                Delivering Value That Matters
              </AnimatedText>
            </div>

            {/* 2x2 Stats Grid — AnimatedCards */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <AnimatedCard
                    key={idx}
                    index={idx}
                    hoverShadow="0 16px 40px -12px rgba(15,107,130,0.12), 0 6px 16px -6px rgba(0,0,0,0.04)"
                    className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col items-start group"
                  >
                    <AnimatedIcon index={idx} delay={0.1} className="w-10 h-10 rounded-xl bg-[#0F6B82]/10 border border-[#0F6B82]/20 flex items-center justify-center text-[#0F6B82] mb-4 group-hover:bg-[#0F6B82] group-hover:text-white color-transition">
                      <Icon className="w-5 h-5" />
                    </AnimatedIcon>
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#1B2730] font-display tracking-tight">
                      {item.number}
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {item.label}
                    </p>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>

          {/* Right Column — Testimonial with shared-element morphing */}
          <div className="lg:col-span-6 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: DURATION.major, ease: APPLE_EASE }}
              className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#0F6B82] mb-3"
            >
              CLIENT TESTIMONIAL
            </motion.p>

            {/* Quote Card — mockup reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotateX: 4, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: DURATION.section, ease: APPLE_EASE }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-[var(--shadow-card)] relative overflow-hidden flex flex-col justify-between min-h-[300px] promote-layer"
              style={{ perspective: "800px" }}
            >
              {/* Quote icon — AnimatedIcon */}
              <AnimatedIcon delay={0.3} className="w-12 h-12 rounded-2xl bg-[#0F6B82]/10 border border-[#0F6B82]/20 flex items-center justify-center text-[#0F6B82] mb-6">
                <Quote className="w-6 h-6 fill-current" />
              </AnimatedIcon>

              {/* Animated Quote — shared-element morph (scale + blur, never instant) */}
              <div className="relative min-h-[100px] mb-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeTab}
                    initial={{ opacity: 0, y: 20, scale: 0.97, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -16, scale: 0.97, filter: "blur(6px)" }}
                    transition={{
                      duration: DURATION.standard,
                      ease: APPLE_EASE,
                    }}
                    className="text-base sm:text-lg text-slate-700 leading-relaxed italic"
                  >
                    &ldquo;{testimonials[activeTab].quote}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Author Info + Dots */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                <div className="flex items-center gap-4">
                  {/* Avatar — crossfade with scale + blur */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0F6B82]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.85, filter: "blur(6px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.85, filter: "blur(6px)" }}
                        transition={{ duration: 0.4, ease: APPLE_EASE }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={testimonials[activeTab].image}
                          alt={testimonials[activeTab].author}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div>
                    <AnimatePresence mode="wait">
                      <motion.h4
                        key={`name-${activeTab}`}
                        initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                        transition={{ duration: 0.35, ease: APPLE_EASE }}
                        className="text-base font-bold text-[#1B2730] font-display"
                      >
                        {testimonials[activeTab].author}
                      </motion.h4>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`role-${activeTab}`}
                        initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                        transition={{ duration: 0.35, ease: APPLE_EASE, delay: 0.03 }}
                        className="text-xs text-slate-500 font-medium"
                      >
                        {testimonials[activeTab].role}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Pagination dots — sliding active indicator */}
                <div className="relative flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className="relative h-2.5 rounded-full transition-all duration-500"
                      style={{
                        width: activeTab === idx ? 28 : 10,
                        background: activeTab === idx ? "#0F6B82" : "rgba(148, 163, 184, 0.4)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
