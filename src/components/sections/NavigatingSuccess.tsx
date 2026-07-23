"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TrendingUp, Calculator, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import Container from "../ui/Container";

const APPROACH_CARDS = [
  {
    id: 1,
    title: "Market Research Excellence",
    subtitle: "Strategic Market Intelligence",
    description:
      "At Exigo Consulting, we believe that informed decisions pave the way for success. Our seasoned team of experts conducts thorough market research to identify lucrative opportunities and potential challenges. We analyze market trends, competitor landscapes, and consumer behavior, providing you with invaluable insights to make well-informed M&A decisions.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    activeBg: "bg-[#E6E2FA] border-[#7F6BFF]/40 text-[#1B2730]",
    activeAccent: "text-[#6246EA]",
    badgeBg: "bg-[#6246EA] text-white",
    btnStyle: "bg-[#6246EA] hover:bg-[#4F35C9] text-white",
    link: "/services/mergers-acquisitions",
  },
  {
    id: 2,
    title: "Data Analysis for Informed Decision-Making",
    subtitle: "Actionable Intelligence & Models",
    description:
      "Data is the cornerstone of any successful business venture. Our data analysis team at Exigo Consulting leverages cutting-edge tools and methodologies to extract actionable intelligence from vast datasets. This empowers our clients with the knowledge needed to make strategic decisions during the M&A process, optimizing for efficiency and profitability.",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    activeBg: "bg-[#0F6B82] border-teal-500 text-white",
    activeAccent: "text-teal-200",
    badgeBg: "bg-white text-[#0F6B82]",
    btnStyle: "bg-white hover:bg-neutral-100 text-[#0F6B82]",
    link: "/services/business-consulting",
  },
  {
    id: 3,
    title: "Valuation and Due Diligence",
    subtitle: "Independent & Objective Assessments",
    description:
      "Accurate valuations and thorough due diligence are critical to informed decision-making. Our experts provide independent, objective assessments to help you navigate M&A, financing, and investment opportunities with confidence.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    activeBg: "bg-[#FBE8E3] border-[#DE7A66]/50 text-[#1B2730]",
    activeAccent: "text-[#C95C46]",
    badgeBg: "bg-[#DE7A66] text-white",
    btnStyle: "bg-[#DE7A66] hover:bg-[#C95C46] text-white",
    link: "/services/mergers-acquisitions",
  },
];

export default function NavigatingSuccess() {
  // Currently active focused card (Card 2 center by default)
  const [activeCardId, setActiveCardId] = useState<number>(2);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#FAFBFD] select-none border-t border-b border-neutral-200/60">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-purple-100/30 via-teal-100/20 to-rose-100/30 blur-3xl rounded-full pointer-events-none opacity-70" />

      <Container className="relative z-10">
        {/* Section Header (Formatted strictly into 2 balanced lines) */}
        <div className="max-w-5xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0F6B82]" />
            <span className="text-xs font-bold tracking-widest text-neutral-800 uppercase font-mono">
              CLICK CARD TO FOCUS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[44px] font-black text-[#1B2730] tracking-tight leading-[1.25] font-display">
            <span className="block">Navigating Success: A Comprehensive Approach to</span>
            <span className="block mt-1">
              <span className="relative inline-block text-[#0F6B82]">
                Mergers and Acquisitions
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#DE7A66] rounded-full" />
              </span>{" "}
              with Exigo Consulting.
            </span>
          </h2>
        </div>

        {/* 3D Depth Card Stack (Clicking any card smoothly brings it to the front) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center perspective-1000 py-4">
          {APPROACH_CARDS.map((card) => {
            const IconComponent = card.icon;
            const isActive = card.id === activeCardId;

            return (
              <div
                key={card.id}
                onClick={() => setActiveCardId(card.id)}
                onMouseEnter={() => setActiveCardId(card.id)}
                className={`cursor-pointer rounded-[32px] overflow-hidden transition-all duration-700 ease-out flex flex-col justify-between relative group ${
                  isActive
                    ? `${card.activeBg} z-30 scale-[1.06] -translate-y-4 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)] ring-4 ring-offset-4 ring-black/5`
                    : "bg-[#F3F5F7] text-[#1B2730] border border-neutral-200/80 z-10 scale-[0.95] translate-y-2 opacity-75 filter grayscale-[15%] hover:opacity-100 hover:scale-[0.98] shadow-md"
                }`}
              >
                {/* Active Indicator Badge */}
                {isActive && (
                  <div className="absolute top-4 right-4 z-40 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0F6B82] animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-800">
                      ACTIVE FOCUS
                    </span>
                  </div>
                )}

                {/* High-Res Image Banner Header */}
                <div className="relative w-full h-[220px] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 ${
                      isActive
                        ? card.id === 2
                          ? "bg-gradient-to-t from-[#0F6B82] via-[#0F6B82]/30 to-transparent"
                          : card.id === 1
                          ? "bg-gradient-to-t from-[#E6E2FA] via-[#E6E2FA]/40 to-transparent"
                          : "bg-gradient-to-t from-[#FBE8E3] via-[#FBE8E3]/40 to-transparent"
                        : "bg-gradient-to-t from-[#F3F5F7] via-transparent to-transparent"
                    }`}
                  />

                  {/* Icon Badge */}
                  <div
                    className={`absolute bottom-4 left-6 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border transition-transform duration-300 ${
                      isActive ? card.badgeBg : "bg-white text-neutral-700 border-neutral-200"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-4">
                  <div>
                    <span
                      className={`text-[11px] font-extrabold tracking-widest uppercase block mb-2 ${
                        isActive ? card.activeAccent : "text-neutral-500"
                      }`}
                    >
                      {card.subtitle}
                    </span>
                    <h3
                      className={`text-2xl font-black tracking-tight leading-snug font-display mb-3 ${
                        isActive
                          ? card.id === 2
                            ? "text-white"
                            : "text-[#1B2730]"
                          : "text-[#1B2730]"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed font-normal ${
                        isActive
                          ? card.id === 2
                            ? "text-white/90"
                            : "text-neutral-700"
                          : "text-neutral-500"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* CTA Link Button */}
                  <div className="pt-4 border-t border-neutral-200/20">
                    <Link href={card.link}>
                      <button
                        className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                          isActive
                            ? card.btnStyle
                            : "bg-white text-neutral-800 hover:bg-neutral-900 hover:text-white border border-neutral-200"
                        }`}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Bottom Pagination Indicator Bar */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {APPROACH_CARDS.map((card) => (
            <button
              key={card.id}
              onClick={() => setActiveCardId(card.id)}
              className={`h-3 rounded-full transition-all duration-500 ${
                activeCardId === card.id
                  ? "w-12 bg-[#0F6B82] shadow-md"
                  : "w-3 bg-neutral-300 hover:bg-neutral-400"
              }`}
              title={`Focus ${card.title}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
