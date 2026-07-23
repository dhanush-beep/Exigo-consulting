"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, Sparkles, ChevronRight, CheckCircle2 } from "lucide-react";

interface ServiceSectionData {
  id: number;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  link: string;
  image: string;
  accentBadge: string;
}

const SERVICES_DATA: ServiceSectionData[] = [
  {
    id: 1,
    title: "Mergers and Acquisitions (M&A)",
    subtitle: "COMPREHENSIVE TRANSACTION ADVISORY",
    tags: ["UX AUDIT", "USABILITY TESTING", "USER INTERVIEWS", "EYE TRACKING", "COMPETITIVE BENCHMARKING"],
    description:
      "At Exigo Consulting, we specialize in providing comprehensive Mergers and Acquisitions (M&A) advisory services, acting as trusted consultants for both buyers and sellers in the dynamic world of corporate transactions. With a wealth of experience and a proven track record, we are dedicated to helping our clients navigate the complexities of M&A, ensuring they make informed decisions that align with their strategic goals.",
    link: "/services/mergers-acquisitions",
    image: "file:///Users/balusupati/.gemini/antigravity-ide/brain/be31916a-2d0e-4bc0-8f75-1fffff986ac8/service_ma_analytics_1784782839779.png",
    accentBadge: "35+ Years of Combined Experience",
  },
  {
    id: 2,
    title: "Business Consulting",
    subtitle: "OPERATIONAL EXCELLENCE & BOT",
    tags: ["UX DESIGN", "UI DESIGN", "UX WRITING", "DESIGN SYSTEM", "MOTION DESIGN"],
    description:
      "Welcome to Exigo Consulting, where we redefine operational excellence through strategic insights and innovative solutions. Specializing in Build Operate Transfer (BOT) models, process optimization, and technology transformation, we partner with industry leaders to unlock scalable business growth and enduring value.",
    link: "/services/business-consulting",
    image: "file:///Users/balusupati/.gemini/antigravity-ide/brain/be31916a-2d0e-4bc0-8f75-1fffff986ac8/service_business_wireframe_1784782855865.png",
    accentBadge: "Build Operate Transfer (BOT) Leaders",
  },
  {
    id: 3,
    title: "Fund Raising",
    subtitle: "STRATEGIC CAPITAL & INVESTOR ACCESS",
    tags: ["SERVICE AUDITS AND RESEARCH", "STAKEHOLDER WORKSHOP", "IMPLEMENTATION SUPPORT"],
    description:
      "Welcome to Exigo Consulting, your strategic ally in the IT services and staffing industry. Harness the power of our specialized expertise to access a vast network of capital sources, venture funds, growth equity, and strategic debt financing tailored to scale your enterprise operations.",
    link: "/services/fundraising",
    image: "file:///Users/balusupati/.gemini/antigravity-ide/brain/be31916a-2d0e-4bc0-8f75-1fffff986ac8/service_fundraising_diagram_1784782874857.png",
    accentBadge: "Vast Capital Network",
  },
  {
    id: 4,
    title: "Executive Search & Brand Advisory",
    subtitle: "LEADERSHIP TALENT & CXO PLACEMENT",
    tags: ["BRAND STRATEGY", "BRAND IDENTITY", "BRAND MANAGEMENT"],
    description:
      "At Exigo Consulting, our Executive Search service is designed to meet your specific leadership needs. We conduct tailored searches based on precise requirements, leveraging our extensive network of industry executives and leadership talent to place transformational CXO leaders.",
    link: "/services/talent-acquisition",
    image: "file:///Users/balusupati/.gemini/antigravity-ide/brain/be31916a-2d0e-4bc0-8f75-1fffff986ac8/service_executive_search_1784782892657.png",
    accentBadge: "Tailored Executive Leadership",
  },
];

export default function SplitServicesScroll() {
  const [activeSection, setActiveSection] = useState<number>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // IntersectionObserver to sync scroll position with active section & indicator
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0.3,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const targetRef = sectionRefs.current[index];
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="relative w-full bg-[#E8E5FA] py-20 sm:py-28 overflow-hidden select-none border-t border-b border-purple-200/50">
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-[#6C5CE7] text-white text-xs font-black tracking-widest uppercase">
              OUR SERVICES
            </span>
            <span className="text-xs font-bold text-purple-900 tracking-wider uppercase">
              FROM INSIGHT TO EXECUTION
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.1] font-display">
            Navigating Success: A Comprehensive Approach with Exigo Consulting
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
            Delivering end-to-end M&amp;A advisory, operational transformation, capital fundraising, and leadership search tailored for growth enterprises.
          </p>
        </div>

        {/* Split Screen Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Panel: Content Sections & Vertical Progress Bar (~58% Width) */}
          <div className="lg:col-span-7 relative pr-0 lg:pr-8">
            {/* Floating Vertical Progress Pill Indicator Bar (Fixed along right edge of Left Panel) */}
            <div className="hidden lg:flex absolute right-0 top-10 bottom-10 w-2 bg-purple-300/50 rounded-full flex-col justify-between items-center py-2 z-30">
              <div
                className="absolute top-0 w-2.5 bg-[#6C5CE7] rounded-full transition-all duration-500 ease-out shadow-md"
                style={{
                  height: `${100 / SERVICES_DATA.length}%`,
                  transform: `translateY(${activeSection * 100}%)`,
                }}
              />
              {SERVICES_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(i)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 z-10 ${
                    i === activeSection ? "bg-[#6C5CE7] scale-125" : "bg-purple-300 hover:bg-purple-500"
                  }`}
                  aria-label={`Jump to service ${i + 1}`}
                />
              ))}
            </div>

            {/* Vertical Scroll Service Content Cards */}
            <div className="space-y-24 sm:space-y-32">
              {SERVICES_DATA.map((service, index) => {
                const isActive = index === activeSection;

                return (
                  <div
                    key={service.id}
                    ref={(el) => {
                      sectionRefs.current[index] = el;
                    }}
                    data-index={index}
                    className={`transition-all duration-700 ease-out transform ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-40 translate-y-6"
                    }`}
                  >
                    {/* Top Pill / Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-200/80 text-[#5243C2] text-xs font-bold tracking-wider uppercase mb-5 border border-purple-300/50">
                      <Sparkles className="w-3.5 h-3.5 text-[#6C5CE7]" />
                      <span>{service.subtitle}</span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight font-display mb-6">
                      {service.title}
                    </h3>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-2.5 mb-6">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3.5 py-1.5 rounded-full bg-[#5243C2] text-white text-[11px] font-extrabold tracking-wider uppercase shadow-xs transform hover:scale-105 transition-transform"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal mb-8">
                      {service.description}
                    </p>

                    {/* Action Button: Yellow Pill Button */}
                    <Link href={service.link}>
                      <button className="px-6 py-3.5 rounded-full bg-[#FFE600] hover:bg-[#F5DC00] text-neutral-950 font-black text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4 text-neutral-950 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Sticky Synchronized Media Showcase (~42% Width) */}
          <div className="lg:col-span-5 sticky top-24 h-[520px] sm:h-[580px] w-full rounded-[36px] overflow-hidden shadow-2xl border-4 border-white/60 bg-neutral-900">
            {SERVICES_DATA.map((service, index) => {
              const isActive = index === activeSection;

              return (
                <div
                  key={service.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                    isActive ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-105"
                  }`}
                >
                  {/* High Quality Synchronized Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay & Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 sm:p-8 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold tracking-wider uppercase border border-white/20">
                        SERVICE 0{service.id} / 04
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    </div>

                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE600] text-neutral-950 text-xs font-black uppercase tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-950" />
                        <span>{service.accentBadge}</span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug font-display">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Yellow Action / Chat Button (Fixed at Bottom-Right Corner) */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="/contact">
          <button
            aria-label="Chat with Exigo Advisory"
            className="px-5 py-3.5 rounded-2xl bg-[#FFE600] text-neutral-950 font-black text-xs uppercase tracking-wider shadow-2xl border-2 border-neutral-950/10 hover:bg-yellow-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 flex items-center gap-2.5"
          >
            <MessageSquare className="w-4 h-4 fill-current text-neutral-950" />
            <span className="hidden sm:inline">How can I help you?</span>
          </button>
        </Link>
      </div>
    </section>
  );
}
