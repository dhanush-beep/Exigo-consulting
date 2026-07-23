"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  ArrowRight,
  Calculator,
  Coins,
  TrendingUp,
  UserCheck,
  Briefcase,
} from "lucide-react";

interface ServiceSlideData {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  href: string;
  icon: React.ElementType;
}

const SERVICE_SLIDES: ServiceSlideData[] = [
  {
    id: 1,
    title: "MERGERS & ACQUISITIONS",
    category: "SPECIALIZED ADVISORY",
    subtitle: "Seamless Transactions & Maximized Value",
    description:
      "Welcome to Exigo Consulting, your trusted partner for seamless transactions and maximized value. Our team specializes in connecting buyers and sellers to structure optimal M&A deals.",
    bgColor: "#0F6B82", // Deep Teal
    textColor: "#FFFFFF",
    accentColor: "#DE7A66",
    href: "/services/mergers-acquisitions",
    icon: Calculator,
  },
  {
    id: 2,
    title: "BUSINESS CONSULTING",
    category: "SPECIALIZED ADVISORY",
    subtitle: "Operational Excellence & Build Operate Transfer (BOT)",
    description:
      "Welcome to Exigo Consulting, where we redefine operational excellence through strategic insights and innovative solutions. Specializing in Build Operate Transfer (BOT) models.",
    bgColor: "#102A35", // Deep Navy
    textColor: "#FFFFFF",
    accentColor: "#0F6B82",
    href: "/services/business-consulting",
    icon: Coins,
  },
  {
    id: 3,
    title: "FUND RAISING",
    category: "SPECIALIZED ADVISORY",
    subtitle: "Strategic Capital & Investor Network Access",
    description:
      "Welcome to Exigo Consulting, your strategic ally in the IT services and staffing industry. Harness the power of our specialized expertise to access a vast network of capital sources.",
    bgColor: "#DE7A66", // Coral Accent
    textColor: "#FFFFFF",
    accentColor: "#FFE600",
    href: "/services/fundraising",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "EXECUTIVE SEARCH",
    category: "SPECIALIZED ADVISORY",
    subtitle: "Leadership Talent & CXO Acquisition",
    description:
      "At Exigo Consulting, our Executive Search service is designed to meet your specific leadership needs. We conduct tailored searches leveraging our extensive industry network.",
    bgColor: "#11382B", // Forest Green
    textColor: "#FFFFFF",
    accentColor: "#A2E2C9",
    href: "/services/talent-acquisition",
    icon: UserCheck,
  },
  {
    id: 5,
    title: "OTHER SERVICES",
    category: "SPECIALIZED ADVISORY",
    subtitle: "Financial & Accounting Due Diligence & Legal Support",
    description:
      "Welcome to Exigo Consulting, your one-stop solution provider tailored specifically for IT services and staffing. From meticulous financial due diligence to legal compliance.",
    bgColor: "#E5A420", // Ochre Gold
    textColor: "#1A1305",
    accentColor: "#0F6B82",
    href: "/services/other-services",
    icon: Briefcase,
  },
];

export default function Portfolio3DCarousel() {
  // Start with FUND RAISING (index 2) active by default to match screenshot
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SERVICE_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + SERVICE_SLIDES.length) % SERVICE_SLIDES.length);
  }, []);

  // Continuous non-stop infinite auto-slide carousel
  useEffect(() => {
    if (isDragging) return; // Only pause briefly during active mouse drag
    const interval = setInterval(() => {
      nextSlide();
    }, 2800);
    return () => clearInterval(interval);
  }, [nextSlide, isDragging, isHovered]);

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Mouse move 3D tilt tracking for active front card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setDragOffset(clientX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    if (dragOffset < -40) {
      nextSlide();
    } else if (dragOffset > 40) {
      prevSlide();
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  // Relative card position offset computation (-2, -1, 0, 1, 2)
  const getCardOffset = (index: number) => {
    const total = SERVICE_SLIDES.length;
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      className="relative w-full bg-[#F7F7F2] flex flex-col justify-between items-center overflow-hidden py-16 sm:py-24 select-none border-t border-b border-neutral-200/60"
      style={{ touchAction: "pan-y" }} // Natural vertical page scrolling is preserved
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-r from-rose-100/40 via-teal-100/30 to-amber-100/40 blur-3xl rounded-full opacity-70" />
      </div>

      {/* Section Header */}
      <div className="relative z-20 w-full max-w-7xl px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6">
        <div>
          <span className="px-3.5 py-1.5 rounded-full bg-[#0F6B82] text-white text-xs font-bold tracking-widest uppercase mb-3 inline-block">
            EXIGO ADVISORY CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            Our Specialized Advisory Services
          </h2>
        </div>
        <p className="text-sm font-medium text-neutral-600 max-w-md">
          Partner-led strategic insights, M&amp;A transaction excellence, and corporate growth solutions. Click any background card to bring it to the front.
        </p>
      </div>

      {/* 3D Stacked Carousel Stage */}
      <div className="relative z-10 w-full max-w-[1400px] my-4 py-4 sm:py-8 flex items-center justify-center perspective-1200">
        <div
          className="relative w-full h-[480px] sm:h-[540px] md:h-[580px] flex items-center justify-center preserve-3d cursor-grab active:cursor-grabbing"
          style={{ touchAction: "pan-y" }}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => {
            handleMouseMove(e);
            handleDragMove(e.clientX);
          }}
          onMouseUp={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {SERVICE_SLIDES.map((slide, index) => {
            const offset = getCardOffset(index);
            const isActive = offset === 0;
            const IconComponent = slide.icon;

            // Compute exact 3D card transforms and z-index layering
            let transformStr = "";
            let zIndex = 10;
            let opacity = 0;

            if (offset === 0) {
              // Active Front Card
              const tiltX = mousePos.y * -12;
              const tiltY = mousePos.x * 14;
              const dragX = isDragging ? dragOffset * 0.8 : 0;
              transformStr = `translateX(${dragX}px) translateZ(80px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1)`;
              zIndex = 40;
              opacity = 1;
            } else if (offset === 1) {
              // Right Immediate Background Card
              transformStr = `translateX(58%) translateZ(-90px) rotateY(-20deg) scale(0.85)`;
              zIndex = 25;
              opacity = 0.85;
            } else if (offset === -1) {
              // Left Immediate Background Card
              transformStr = `translateX(-58%) translateZ(-90px) rotateY(20deg) scale(0.85)`;
              zIndex = 25;
              opacity = 0.85;
            } else {
              // Far Background Cards
              const dir = offset > 0 ? 1 : -1;
              transformStr = `translateX(${dir * 92}%) translateZ(-260px) rotateY(${dir * -32}deg) scale(0.68)`;
              zIndex = 10;
              opacity = 0.5;
            }

            return (
              <div
                key={slide.id}
                ref={isActive ? cardRef : null}
                onClick={() => {
                  // Interactive Card Switching Behavior: Clicking ANY background card immediately brings it to the front!
                  if (Math.abs(dragOffset) < 12) {
                    setActiveIndex(index);
                  }
                }}
                className={`absolute w-[92%] max-w-[860px] h-full rounded-[36px] sm:rounded-[44px] overflow-hidden transition-all duration-500 ease-out preserve-3d shadow-2xl ${
                  isActive ? "cursor-default ring-1 ring-white/20" : "cursor-pointer hover:scale-[0.88] hover:opacity-100"
                }`}
                style={{
                  transform: transformStr,
                  zIndex,
                  opacity,
                  backgroundColor: slide.bgColor,
                  boxShadow: isActive
                    ? "0 35px 80px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15)"
                    : "0 20px 45px -10px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div
                  className="w-full h-full relative p-6 sm:p-12 flex flex-col justify-between items-start overflow-hidden"
                  style={{ color: slide.textColor }}
                >
                  {/* Top Bar Header: Badge Tag & Card Navigation Controls */}
                  <div className="w-full flex justify-between items-center z-10">
                    <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold tracking-wider uppercase border border-white/20">
                      {slide.category}
                    </span>

                    {/* Top Right Controls & Icon */}
                    <div className="flex items-center gap-2">
                      {/* Integrated Prev/Next Card Navigation Arrows on Active Front Card */}
                      {isActive && (
                        <div className="hidden sm:flex items-center gap-1.5 mr-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevSlide();
                            }}
                            aria-label="Previous Slide"
                            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all active:scale-95"
                          >
                            <ChevronLeft className="w-4 h-4 text-white" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextSlide();
                            }}
                            aria-label="Next Slide"
                            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all active:scale-95"
                          >
                            <ChevronRight className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      )}

                      <div
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shadow-lg border border-white/20"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                      >
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Card Main Body Content & Glassmorphism Metrics Panel */}
                  <div className="z-10 my-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* Left Column: Subtitle, Title, Description, and CTA Button */}
                    <div className="md:col-span-7 space-y-4">
                      <span className="text-xs font-bold tracking-widest uppercase opacity-80 block">
                        {slide.subtitle}
                      </span>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight font-display">
                        {slide.title}
                      </h3>
                      <p className="text-sm sm:text-base opacity-90 leading-relaxed font-normal">
                        {slide.description}
                      </p>

                      <div className="pt-3">
                        <Link href={slide.href}>
                          <button className="px-7 py-3.5 rounded-full bg-white text-neutral-900 font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-neutral-100 transition-all transform hover:scale-105 flex items-center gap-2.5">
                            <span>EXPLORE ADVISORY</span>
                            <ArrowRight className="w-4 h-4 text-[#0F6B82]" />
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Inner Glassmorphism Metrics Card */}
                    <div className="md:col-span-5 hidden sm:flex justify-center">
                      <div className="w-full max-w-[290px] p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col gap-3.5">
                        <div className="flex items-center justify-between border-b border-white/15 pb-2">
                          <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">
                            EXIGO METRICS
                          </span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                        </div>

                        {slide.id === 1 && (
                          /* M&A Metrics Mockup */
                          <div className="space-y-2.5 text-xs">
                            <div className="flex justify-between items-center p-2.5 rounded-xl bg-black/20">
                              <span>Deal Value Range</span>
                              <span className="font-bold text-emerald-300">$10M - $250M</span>
                            </div>
                            <div className="flex justify-between items-center p-2.5 rounded-xl bg-black/20">
                              <span>Transaction Match</span>
                              <span className="font-bold text-teal-200">100% Seamless</span>
                            </div>
                            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mt-1">
                              <div className="bg-emerald-400 h-full w-[88%]" />
                            </div>
                          </div>
                        )}

                        {slide.id === 2 && (
                          /* BOT / Business Consulting Mockup */
                          <div className="space-y-2.5 text-xs">
                            <div className="flex justify-between items-center p-2.5 rounded-xl bg-black/20">
                              <span>Operational Model</span>
                              <span className="font-bold text-amber-300">Build-Operate-Transfer</span>
                            </div>
                            <div className="flex justify-between items-center p-2.5 rounded-xl bg-black/20">
                              <span>Efficiency Boost</span>
                              <span className="font-bold text-emerald-300">+42% Scalability</span>
                            </div>
                            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mt-1">
                              <div className="bg-amber-400 h-full w-[92%]" />
                            </div>
                          </div>
                        )}

                        {slide.id === 3 && (
                          /* Fundraising Metrics Mockup (Matching Screenshot) */
                          <div className="space-y-2.5 text-xs">
                            <div className="flex justify-between items-center p-2.5 rounded-xl bg-black/20">
                              <span>Capital Raised</span>
                              <span className="font-bold text-yellow-300">Growth Equity &amp; Debt</span>
                            </div>
                            <div className="flex justify-between items-center p-2.5 rounded-xl bg-black/20">
                              <span>Investor Access</span>
                              <span className="font-bold text-white">Vast Network</span>
                            </div>
                            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mt-1">
                              <div className="bg-yellow-300 h-full w-[82%]" />
                            </div>
                          </div>
                        )}

                        {slide.id === 4 && (
                          /* Executive Search Mockup */
                          <div className="space-y-2.5 text-xs">
                            <div className="flex justify-between items-center p-2.5 rounded-xl bg-black/20">
                              <span>Leadership Talent</span>
                              <span className="font-bold text-emerald-200">CXO Placement</span>
                            </div>
                            <div className="flex justify-between items-center p-2.5 rounded-xl bg-black/20">
                              <span>Industry Fit</span>
                              <span className="font-bold text-emerald-300">Tailored Search</span>
                            </div>
                            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mt-1">
                              <div className="bg-emerald-300 h-full w-[95%]" />
                            </div>
                          </div>
                        )}

                        {slide.id === 5 && (
                          /* Other Services Mockup */
                          <div className="space-y-2.5 text-xs">
                            <div className="flex justify-between items-center p-2.5 rounded-xl bg-black/20">
                              <span>Due Diligence</span>
                              <span className="font-bold text-neutral-900">Financial &amp; Legal</span>
                            </div>
                            <div className="flex justify-between items-center p-2.5 rounded-xl bg-black/20">
                              <span>Compliance Rate</span>
                              <span className="font-bold text-neutral-900">100% Verified</span>
                            </div>
                            <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden mt-1">
                              <div className="bg-neutral-900 h-full w-[94%]" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Bar */}
                  <div className="z-10 w-full flex justify-between items-center text-xs font-semibold opacity-75 border-t border-white/15 pt-4">
                    <span>EXIGO ADVISORY SOLUTIONS</span>
                    <span>TRUSTED PARTNER</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Carousel Controls */}
      <footer className="relative z-30 w-full max-w-7xl px-6 sm:px-12 flex justify-between items-center mt-4">
        {/* Left Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous Service"
            className="w-11 h-11 rounded-full bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center shadow-md border border-neutral-200/80 transition-all duration-300 transform hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Service"
            className="w-11 h-11 rounded-full bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center shadow-md border border-neutral-200/80 transition-all duration-300 transform hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Center Pill Pagination Bar */}
        <div className="px-5 py-2.5 rounded-full bg-neutral-200/70 backdrop-blur-md border border-black/5 flex items-center gap-2.5 shadow-inner">
          {SERVICE_SLIDES.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to service ${index + 1}`}
                className={`transition-all duration-300 ease-out focus:outline-none ${
                  isActive
                    ? "w-8 h-2.5 bg-neutral-900 rounded-full shadow"
                    : "w-2.5 h-2.5 bg-neutral-400/80 hover:bg-neutral-600 rounded-full"
                }`}
              />
            );
          })}
        </div>

        {/* Floating Contact Trigger Button */}
        <Link href="/contact">
          <button
            aria-label="Contact Us"
            className="w-12 h-12 rounded-2xl bg-[#DE7A66] text-white flex items-center justify-center shadow-xl border-2 border-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-6 active:scale-95"
          >
            <Mail className="w-5 h-5 fill-current" />
          </button>
        </Link>
      </footer>
    </section>
  );
}
