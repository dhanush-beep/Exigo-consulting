"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mail, ChevronRight } from "lucide-react";

interface ServiceSectionData {
  id: number;
  title: string;
  tags: string[];
  description: string;
  image: string;
  ctaText: string;
  ctaHref: string;
}

const SERVICE_SECTIONS: ServiceSectionData[] = [
  {
    id: 1,
    title: "UX RESEARCH & STRATEGY",
    tags: [
      "UX AUDIT",
      "USABILITY TESTING",
      "USER INTERVIEWS",
      "EYE TRACKING",
      "COMPETITIVE BENCHMARKING",
    ],
    description:
      "Unlock user insights and market clarity with our specialized UX research at Exigo Consulting. Our team is adept at uncovering core behaviors to propel your digital product forward and maximize ROI.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    ctaText: "View Details",
    ctaHref: "/services/business-consulting",
  },
  {
    id: 2,
    title: "UX/UI & DIGITAL PRODUCT DESIGN",
    tags: [
      "UX DESIGN",
      "UI DESIGN",
      "UX WRITING",
      "DESIGN SYSTEM",
      "MOTION DESIGN",
    ],
    description:
      "As a leading consultancy, we translate strategy and research into intuitive, scalable, digital products that delight users and deliver a return on your business investment (ROI).",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    ctaText: "View Details",
    ctaHref: "/services/mergers-acquisitions",
  },
  {
    id: 3,
    title: "CX AND SERVICE DESIGN",
    tags: [
      "SERVICE AUDITS AND RESEARCH",
      "STAKEHOLDER WORKSHOP",
      "IMPLEMENTATION SUPPORT",
    ],
    description:
      "Empower your organization with seamless customer experiences and stakeholder alignment. We design end-to-end service blueprints that optimize operational efficiency and client satisfaction.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    ctaText: "View Details",
    ctaHref: "/services/fundraising",
  },
  {
    id: 4,
    title: "BRAND STRATEGY & DESIGN",
    tags: ["BRAND STRATEGY", "BRAND IDENTITY", "BRAND MANAGEMENT"],
    description:
      "Build a memorable brand presence and strategic market positioning. We combine creative design with corporate strategy to elevate your brand value in competitive landscapes.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    ctaText: "View Details",
    ctaHref: "/services/other-services",
  },
];

export default function CompanyProgress() {
  const [activeSection, setActiveSection] = useState<number>(0);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  // Scrollspy: Smooth scroll-driven section calculator
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollTrackRef.current) return;
      const rect = scrollTrackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScrollableDistance = rect.height - windowHeight;
      if (totalScrollableDistance <= 0) return;

      const currentScrollPosition = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScrollPosition / totalScrollableDistance));

      const sectionIndex = Math.min(
        SERVICE_SECTIONS.length - 1,
        Math.floor(progress * SERVICE_SECTIONS.length)
      );

      setActiveSection(sectionIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = SERVICE_SECTIONS[activeSection];

  return (
    <div
      ref={scrollTrackRef}
      className="relative w-full h-[360vh] bg-[#E8E5FA] select-none border-t border-b border-purple-200/50"
    >
      {/* CSS Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Full-Bleed Split Screen Grid Layout */}
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Panel (~58% Width) - Soft Lavender/Periwinkle (#E8E5FA) */}
          <div className="lg:col-span-7 bg-[#E8E5FA] p-8 sm:p-14 lg:p-20 flex flex-col justify-between relative overflow-hidden">
            {/* Header Tag */}
            <div className="space-y-2.5 z-10">
              <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-[#7C5CFC]">
                OUR SERVICES
              </span>
              <p className="text-xs font-extrabold text-neutral-500 uppercase tracking-widest">
                FROM INSIGHT TO INTERFACE
              </p>
            </div>

            {/* Smooth Stacked Matter Container (Zero Overlap / Zero Collision) */}
            <div className="my-auto py-6 relative h-[320px] sm:h-[350px] w-full max-w-2xl z-10">
              {SERVICE_SECTIONS.map((section, idx) => {
                const isActive = idx === activeSection;

                return (
                  <div
                    key={section.id}
                    className={`absolute inset-0 w-full h-full flex flex-col justify-center space-y-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto z-10"
                        : idx < activeSection
                        ? "opacity-0 -translate-y-12 scale-95 pointer-events-none z-0"
                        : "opacity-0 translate-y-12 scale-95 pointer-events-none z-0"
                    }`}
                  >
                    {/* Title Header */}
                    <h2
                      className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-[1.1] uppercase font-display"
                      style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                    >
                      {section.title}
                    </h2>

                    {/* Bullet Tags Grid */}
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                      {section.tags.map((tag, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-xs bg-[#7C5CFC]" />
                          <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-[#7C5CFC]">
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed font-medium">
                      {section.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Fixed Bottom Yellow CTA Button Slot (Never Collides with Text) */}
            <div className="z-10 pt-4">
              <a href={current.ctaHref}>
                <button className="px-7 py-3.5 rounded-full bg-[#FFE600] hover:bg-[#F2DC00] text-neutral-900 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg border border-neutral-900/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-2.5 group">
                  <span>{current.ctaText}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-900 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>

            {/* Vertical Scroll Progress Pill Control (Right Margin of Left Panel) */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col items-center gap-2 p-2 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-white/60">
              {SERVICE_SECTIONS.map((_, idx) => {
                const isActive = idx === activeSection;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveSection(idx)}
                    aria-label={`Go to section ${idx + 1}`}
                    className={`transition-all duration-500 ease-out ${
                      isActive
                        ? "w-2.5 h-6 bg-[#7C5CFC] rounded-full shadow-sm"
                        : "w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400 rounded-full"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Panel (~42% Width) - Full-Bleed Media Display with Butter-Smooth Cross-Fade */}
          <div className="lg:col-span-5 relative w-full h-full min-h-[400px] bg-neutral-900 overflow-hidden">
            {SERVICE_SECTIONS.map((section, idx) => {
              const isActive = idx === activeSection;
              return (
                <div
                  key={section.id}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-105 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}

            {/* Floating Action / Chat Button (Yellow Rounded Button at Bottom Right) */}
            <div className="absolute bottom-8 right-8 z-30">
              <a href="/contact">
                <button
                  aria-label="Action Desk"
                  className="w-14 h-14 rounded-2xl bg-[#FFE600] text-neutral-900 flex items-center justify-center shadow-2xl border-2 border-white/40 transition-all duration-300 transform hover:scale-110 active:scale-95 hover:rotate-6"
                >
                  <Mail className="w-6 h-6 stroke-[2.5]" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
