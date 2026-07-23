"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";
import Container from "../ui/Container";

const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote:
      '"A trusted partner in every step of our merger journey. Highly recommend their strategic insights!"',
    name: "Sarah Mitchell",
    role: "CFO, Tech Ventures",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    quote:
      '"Exigo Consulting provided clarity and confidence throughout our complex transaction. Truly top-notch advisors!"',
    name: "Michael Brown",
    role: "VP, Enterprise Software",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    quote:
      '"Exigo\'s advisory team exceeded expectations, delivering exceptional results in our divestment process."',
    name: "Raj Patel",
    role: "Managing Director, HealthTech",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    quote:
      '"Their partner-led approach was invaluable during our cross-border acquisition. Exceptional financial precision."',
    name: "David Vance",
    role: "Partner, Apex Private Equity",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 5,
    quote:
      '"Exigo brought extraordinary market intelligence to the table. Their BOT consultancy restructured our growth roadmap."',
    name: "Elena Rostova",
    role: "Chief Strategy Officer, Cleantech",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 6,
    quote:
      '"Working with Rajesh and Exigo gave our board absolute confidence. They closed our equity mandate ahead of schedule."',
    name: "Vikram Malhotra",
    role: "CEO, SaaS ScaleUp",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length
    );
  }, []);

  // Infinite continuous auto-scroll interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#FAFBFD] select-none text-[#1B2730] border-t border-b border-neutral-200/60">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-teal-100/40 via-amber-50/30 to-rose-100/40 blur-3xl rounded-full pointer-events-none opacity-80" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-xs font-extrabold uppercase tracking-widest text-[#DE7A66] shadow-xs mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CLIENT TESTIMONIALS &amp; REVIEWS</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#1B2730] tracking-tight leading-tight font-display"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            What They Say About Exigo
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal pt-1">
            Discover how our expertise in Mergers &amp; Acquisitions has empowered clients to achieve seamless transactions and strategic growth.
          </p>
        </div>

        {/* Interactive Animated Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Main Displayed Grid (3 Cards Visible per view with Smooth Transition) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {[0, 1, 2].map((offset) => {
              const itemIndex = (activeIndex + offset) % TESTIMONIALS_DATA.length;
              const item = TESTIMONIALS_DATA[itemIndex];

              return (
                <div
                  key={item.id}
                  className="bg-white border border-neutral-200/80 rounded-[30px] p-8 sm:p-9 shadow-xl flex flex-col justify-between transition-all duration-700 ease-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-[#0F6B82]/40 group"
                >
                  <div>
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-amber-400 mb-6">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium mb-6">
                      {item.quote}
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-neutral-100"
                      />
                      <div>
                        <h4 className="text-base font-bold text-[#0F6B82] leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Coral Quote Icon */}
                    <div className="text-3xl font-serif text-[#DE7A66] font-black leading-none opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all">
                      ““
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls & Continuous Indicator Bar */}
          <div className="flex items-center justify-between mt-12 px-4">
            {/* Arrow Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                aria-label="Previous Testimonials"
                className="w-11 h-11 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:text-[#0F6B82] hover:border-[#0F6B82] hover:shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Testimonials"
                className="w-11 h-11 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:text-[#0F6B82] hover:border-[#0F6B82] hover:shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    idx === activeIndex
                      ? "w-8 bg-[#0F6B82] shadow-md"
                      : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Continuous Auto-Scrolling Infinite Marquee Band */}
        <div className="mt-16 sm:mt-20 overflow-hidden py-4 border-t border-b border-neutral-200/50 relative">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap opacity-60">
            {TESTIMONIALS_DATA.concat(TESTIMONIALS_DATA).map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white border border-neutral-200 text-xs font-bold text-neutral-700 shadow-2xs">
                <span className="text-[#DE7A66]">★★★★★</span>
                <span>{item.name}</span>
                <span className="text-neutral-400">•</span>
                <span className="text-[#0F6B82]">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
