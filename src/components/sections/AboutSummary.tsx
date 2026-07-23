"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import Container from "../ui/Container";

export default function AboutSummary() {
  // Focus state: "about" | "whyChooseUs"
  const [activeSide, setActiveSide] = useState<"about" | "whyChooseUs">("about");
  const containerRef = useRef<HTMLDivElement>(null);

  const highlights = [
    "Partner-level commitment on every advisory mandate",
    "Tailored execution strategy with milestone alignment",
    "Confidential institutional networks across Europe, Americas & APAC",
    "Cross-sector competence in Enterprise Tech, Health-Tech & Cleantech",
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;

    // Automatically shift active side focus based on cursor position
    if (x < 0 && activeSide !== "about") {
      setActiveSide("about");
    } else if (x >= 0 && activeSide !== "whyChooseUs") {
      setActiveSide("whyChooseUs");
    }
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#FAFBFD] select-none">
      {/* Dynamic Ambient Spotlight Glow following active side */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-[700px] h-[500px] blur-[120px] rounded-full transition-all duration-1000 ease-out ${
            activeSide === "about"
              ? "left-[10%] bg-gradient-to-r from-teal-500/15 via-teal-400/10 to-transparent opacity-80"
              : "right-[10%] bg-gradient-to-l from-rose-500/15 via-amber-400/10 to-transparent opacity-80"
          }`}
        />
      </div>

      <Container className="relative z-10">
        {/* Clean Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight font-display max-w-3xl">
            Discover Exigo: <span className="text-[#0F6B82]">Our Foundation</span> &amp; <span className="text-[#DE7A66]">Why Clients Choose Us</span>
          </h2>
        </div>

        {/* Seamless Fluid Dual Canvas */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Narrative: About EXIGO */}
          <div
            onMouseEnter={() => setActiveSide("about")}
            className={`lg:col-span-6 space-y-6 transition-all duration-700 ease-out transform ${
              activeSide === "about"
                ? "opacity-100 scale-100 translate-x-0"
                : "opacity-45 scale-[0.98] translate-x-[-10px] filter grayscale-[30%]"
            }`}
          >
            {/* Tagline */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0F6B82] animate-pulse" />
              <span className="text-xs font-extrabold tracking-widest uppercase text-[#0F6B82]">
                BOUTIQUE M&amp;A ADVISORY
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.1] font-display">
              About EXIGO <br />
              <span className="text-[#0F6B82]">Mergers &amp; Acquisitions</span>
            </h3>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Exigo Consulting is a boutique advisory firm serving scaling tech companies and established mid-market enterprises. We bridge the gap between high-level management strategy and precise financial execution.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Founded by Rajesh K. Sen, our firm operates on a simple principle: corporate growth requires partner-led execution. Unlike traditional consultancies, Exigo guarantees experienced advisory attention on every transaction, hire, and restructuring roadmap.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0F6B82]/15 text-[#0F6B82] flex items-center justify-center font-bold text-xs shrink-0">
                    ✓
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-neutral-800">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link href="/about">
                <button className="px-6 py-3.5 rounded-full bg-[#0F6B82] hover:bg-[#155B6D] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  <span>Our Firm &amp; Values</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/about/meet-rajesh">
                <button className="px-6 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-800 font-bold text-xs uppercase tracking-wider border border-neutral-300 shadow-xs transition-all flex items-center gap-2">
                  <span>Meet Rajesh Sen</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Central Parallax Divider Line Accent */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-neutral-300 to-transparent -translate-x-1/2 z-10 pointer-events-none" />

          {/* Right Narrative: Why Choose Us */}
          <div
            onMouseEnter={() => setActiveSide("whyChooseUs")}
            className={`lg:col-span-6 space-y-6 transition-all duration-700 ease-out transform ${
              activeSide === "whyChooseUs"
                ? "opacity-100 scale-100 translate-x-0"
                : "opacity-45 scale-[0.98] translate-x-[10px] filter grayscale-[30%]"
            }`}
          >
            {/* Tagline */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#DE7A66] animate-pulse" />
              <span className="text-xs font-extrabold tracking-widest uppercase text-[#DE7A66]">
                EXCELLENCE · INTEGRITY · INNOVATION
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.1] font-display">
              Why Choose <br />
              <span className="text-[#DE7A66]">Exigo Consulting</span>
            </h3>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Exigo Consulting aims to become the leading M&amp;A advisory firm, known for excellence, integrity, and innovation. We exceed client expectations by delivering tailored solutions and addressing unique challenges.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Through strategic partnerships and a global network, we shape the future of M&amp;A, driving transformative outcomes, and creating enduring value for clients and stakeholders alike.
            </p>

            {/* Floating Stat Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { number: "50+", label: "Clients", icon: Users, color: "#0F6B82" },
                { number: "20+", label: "Deals", icon: Award, color: "#DE7A66" },
                { number: "30+", label: "Fundraising", icon: TrendingUp, color: "#0F6B82" },
              ].map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:border-transparent group"
                    style={{
                      transform: activeSide === "whyChooseUs" ? `translateY(${idx * -4}px)` : "none",
                    }}
                  >
                    <IconComp className="w-5 h-5 mb-2 transition-transform group-hover:scale-125" style={{ color: stat.color }} />
                    <p className="text-2xl sm:text-4xl font-black tracking-tight text-neutral-900 font-display">
                      {stat.number}
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mt-1">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Coral Consultation CTA */}
            <div className="pt-6">
              <Link href="/contact">
                <button className="w-full py-4 rounded-full bg-[#DE7A66] hover:bg-[#C96958] text-white font-extrabold text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center gap-2 group">
                  <span>Start Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
