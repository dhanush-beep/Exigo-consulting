"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Building2,
  Target,
  Cpu,
  TrendingUp,
  Users,
  CheckCircle2,
  XCircle,
  Lock,
  X,
  Send,
  Sparkles,
  Phone,
  Mail,
  FileText,
  DollarSign,
  PieChart,
  HelpCircle
} from "lucide-react";
import { OpportunityMandate } from "@/types/opportunity";
import { OPPORTUNITY_MANDATES } from "@/lib/data/opportunities";

interface Props {
  mandates?: OpportunityMandate[];
}

export default function Opportunities3DCarousel({
  mandates = OPPORTUNITY_MANDATES
}: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // NDA Request Form Modal state
  const [interestMandate, setInterestMandate] = useState<OpportunityMandate | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % mandates.length);
  }, [mandates.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + mandates.length) % mandates.length);
  }, [mandates.length]);

  // Auto-slide carousel
  useEffect(() => {
    if (isDragging || interestMandate) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isDragging, isHovered, interestMandate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (interestMandate) return;
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, interestMandate]);

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

  const getCardOffset = (index: number) => {
    const total = mandates.length;
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const activeMandate = mandates[activeIndex];

  return (
    <section
      className="relative w-full bg-[#F7F7F2] text-neutral-900 flex flex-col justify-between items-center overflow-hidden py-4 sm:py-6 select-none border-t border-b border-neutral-200/60"
      style={{ touchAction: "pan-y" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1050px] h-[550px] bg-gradient-to-r from-teal-100/50 via-rose-100/40 to-amber-100/50 blur-3xl rounded-full opacity-70" />
      </div>

      {/* Section Header */}
      <div className="relative z-20 w-full max-w-7xl px-6 sm:px-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-2 sm:mb-4">
        <div>
          <span className="px-3.5 py-1 rounded-full bg-[#0F6B82] text-white text-[11px] font-bold tracking-widest uppercase mb-1.5 inline-block shadow-sm">
            CONFIDENTIAL M&amp;A MANDATE TEASERS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">
            Active Investment Mandates
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-medium text-neutral-600 max-w-md leading-relaxed">
          Exact structured mandate teasers formatted directly on interactive 3D cards. Click any background card to bring it to the front.
        </p>
      </div>

      {/* 3D Stacked Carousel Stage */}
      <div className="relative z-10 w-full max-w-[1420px] my-1 py-1 flex items-center justify-center perspective-1200">
        <div
          className="relative w-full h-[530px] sm:h-[560px] md:h-[580px] flex items-center justify-center preserve-3d cursor-grab active:cursor-grabbing"
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
          {mandates.map((item, index) => {
            const offset = getCardOffset(index);
            const isActive = offset === 0;

            let transformStr = "";
            let zIndex = 10;
            let opacity = 0;

            if (offset === 0) {
              // Active Front Card
              const tiltX = mousePos.y * -10;
              const tiltY = mousePos.x * 12;
              const dragX = isDragging ? dragOffset * 0.8 : 0;
              transformStr = `translateX(${dragX}px) translateZ(80px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1)`;
              zIndex = 40;
              opacity = 1;
            } else if (offset === 1) {
              // Right Background Card
              transformStr = `translateX(58%) translateZ(-90px) rotateY(-20deg) scale(0.85)`;
              zIndex = 25;
              opacity = 0.85;
            } else if (offset === -1) {
              // Left Background Card
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
                key={item.id}
                ref={isActive ? cardRef : null}
                onClick={() => {
                  if (Math.abs(dragOffset) < 12) {
                    setActiveIndex(index);
                  }
                }}
                className={`absolute w-[95%] max-w-[1020px] h-full rounded-[32px] overflow-hidden transition-all duration-500 ease-out preserve-3d shadow-2xl ${
                  isActive
                    ? "cursor-default ring-1 ring-white/20"
                    : "cursor-pointer hover:scale-[0.88] hover:opacity-100"
                }`}
                style={{
                  transform: transformStr,
                  zIndex,
                  opacity,
                  backgroundColor: item.bgColor,
                  boxShadow: isActive
                    ? "0 35px 80px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15)"
                    : "0 20px 45px -10px rgba(0, 0, 0, 0.3)"
                }}
              >
                {/* Top Glowing Gradient Accent Line */}
                <div
                  className="h-1.5 w-full shrink-0"
                  style={{
                    background: `linear-gradient(90deg, ${item.accentColor}, #38BDF8, ${item.accentColor})`
                  }}
                />

                <div className="w-full h-[calc(100%-6px)] p-4 sm:p-6 md:p-7 flex flex-col justify-between items-start overflow-hidden text-white">
                  {/* Top Card Flyer Banner */}
                  <div className="w-full flex justify-between items-start z-10 shrink-0 pb-3 border-b border-white/15">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-[#EB6A4C] text-white text-[11px] font-black tracking-wider uppercase shadow-sm">
                          {item.type}
                        </span>
                        <span className="px-3 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-extrabold tracking-wider border border-white/20">
                          {item.code}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white font-display">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-slate-200 line-clamp-1">
                        {item.description}
                      </p>
                    </div>

                    {/* Nav Control Buttons */}
                    {isActive && (
                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevSlide();
                          }}
                          aria-label="Previous Mandate"
                          className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all active:scale-95 text-white"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextSlide();
                          }}
                          aria-label="Next Mandate"
                          className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all active:scale-95 text-white"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* 4 Strategic Badges Strip */}
                  <div className="w-full my-2 flex flex-wrap gap-1.5 shrink-0 z-10">
                    {item.badges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-slate-100 flex items-center gap-1.5"
                      >
                        {bIdx === 0 && <Target className="w-3 h-3 text-[#38BDF8]" />}
                        {bIdx === 1 && <Cpu className="w-3 h-3 text-[#EB6A4C]" />}
                        {bIdx === 2 && <TrendingUp className="w-3 h-3 text-emerald-400" />}
                        {bIdx === 3 && <Users className="w-3 h-3 text-amber-300" />}
                        <span>{badge}</span>
                      </span>
                    ))}
                  </div>

                  {/* ========================================================= */}
                  {/* FULL FLYER CONTENT - 8 STRUCTURED MODULES (UN-TRUNCATED)   */}
                  {/* ========================================================= */}
                  <div className="w-full flex-1 overflow-y-auto pr-1 my-1 space-y-3 text-xs text-slate-200 scrollbar-thin scrollbar-thumb-white/25 scrollbar-track-transparent z-10">
                    
                    {/* Row 1: Sections 1, 2, 3 (Acquirer Snapshot, Strategic Rationale, Target Criteria) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {/* 1. Acquirer Snapshot */}
                      <div className="p-3 rounded-2xl bg-black/40 border border-white/12 space-y-2">
                        <div className="flex items-center gap-1.5 text-[#38BDF8] font-bold text-[11px] font-display border-b border-white/10 pb-1">
                          <span className="w-4.5 h-4.5 rounded-md bg-[#38BDF8]/20 flex items-center justify-center text-[10px]">
                            1
                          </span>
                          <span>ACQUIRER SNAPSHOT</span>
                        </div>
                        <div className="space-y-1.5 text-[10px] leading-snug">
                          <div>
                            <span className="text-slate-400 font-semibold block">Acquirer Type</span>
                            <span className="text-white font-medium">{item.acquirerSnapshot.acquirerType}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 font-semibold block">HQ / Primary Markets</span>
                            <span className="text-white font-medium">{item.acquirerSnapshot.headquarters}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 font-semibold block">Sector Focus</span>
                            <span className="text-white font-medium">{item.acquirerSnapshot.sectorFocus}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 font-semibold block">M&amp;A Track Record</span>
                            <span className="text-slate-300">{item.acquirerSnapshot.trackRecord}</span>
                          </div>
                        </div>
                      </div>

                      {/* 2. Strategic Rationale */}
                      <div className="p-3 rounded-2xl bg-black/40 border border-white/12 space-y-2">
                        <div className="flex items-center gap-1.5 text-[#EB6A4C] font-bold text-[11px] font-display border-b border-white/10 pb-1">
                          <span className="w-4.5 h-4.5 rounded-md bg-[#EB6A4C]/20 flex items-center justify-center text-[10px]">
                            2
                          </span>
                          <span>STRATEGIC RATIONALE</span>
                        </div>
                        <div className="space-y-1.5 text-[10px] leading-relaxed">
                          <div>
                            <span className="text-slate-400 font-semibold block">Objective:</span>
                            <span className="text-white font-medium">{item.strategicRationale.objective}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 font-semibold block">Overview:</span>
                            <span className="text-slate-300">{item.strategicRationale.description}</span>
                          </div>
                        </div>
                      </div>

                      {/* 3. Target Criteria */}
                      <div className="p-3 rounded-2xl bg-black/40 border border-white/12 space-y-2">
                        <div className="flex items-center gap-1.5 text-teal-300 font-bold text-[11px] font-display border-b border-white/10 pb-1">
                          <span className="w-4.5 h-4.5 rounded-md bg-teal-300/20 flex items-center justify-center text-[10px]">
                            3
                          </span>
                          <span>TARGET CRITERIA</span>
                        </div>
                        <div className="space-y-1.5 text-[10px] leading-snug">
                          <div>
                            <span className="text-slate-400 font-semibold block">Sector</span>
                            <span className="text-white font-medium">{item.targetCriteria.sector}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 font-semibold block">Preferred Sub-Verticals</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {item.targetCriteria.preferredSubVerticals.map((sv, sidx) => (
                                <span key={sidx} className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] text-slate-200">
                                  {sv}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="text-slate-400 font-semibold block">Delivery &amp; Geography</span>
                            <span className="text-white font-medium">
                              {item.targetCriteria.deliveryModel} | {item.targetCriteria.preferredGeography}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Sections 4 & 5 (Financial Parameters & Deal Structure) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {/* 4. Financial Parameters */}
                      <div className="p-3 rounded-2xl bg-black/40 border border-white/12 space-y-2">
                        <div className="flex items-center gap-1.5 text-amber-300 font-bold text-[11px] font-display border-b border-white/10 pb-1">
                          <span className="w-4.5 h-4.5 rounded-md bg-amber-300/20 flex items-center justify-center text-[10px]">
                            4
                          </span>
                          <span>FINANCIAL PARAMETERS</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                          <div className="p-2 rounded-xl bg-white/10 border border-white/10">
                            <span className="text-[8px] text-slate-400 uppercase font-bold block">Revenue Range</span>
                            <span className="font-black text-white">{item.financialParameters.revenueRange}</span>
                          </div>
                          <div className="p-2 rounded-xl bg-white/10 border border-white/10">
                            <span className="text-[8px] text-slate-400 uppercase font-bold block">EBITDA Target</span>
                            <span className="font-black text-emerald-300">{item.financialParameters.ebitdaTarget}</span>
                          </div>
                          <div className="p-2 rounded-xl bg-white/10 border border-white/10">
                            <span className="text-[8px] text-slate-400 uppercase font-bold block">Headcount</span>
                            <span className="font-black text-white">{item.financialParameters.headcountRange}</span>
                          </div>
                          <div className="p-2 rounded-xl bg-white/10 border border-white/10">
                            <span className="text-[8px] text-slate-400 uppercase font-bold block">Max Client Conc.</span>
                            <span className="font-black text-amber-300">{item.financialParameters.maxClientConcentration}</span>
                          </div>
                        </div>
                      </div>

                      {/* 5. Deal Structure */}
                      <div className="p-3 rounded-2xl bg-black/40 border border-white/12 space-y-2">
                        <div className="flex items-center gap-1.5 text-purple-300 font-bold text-[11px] font-display border-b border-white/10 pb-1">
                          <span className="w-4.5 h-4.5 rounded-md bg-purple-300/20 flex items-center justify-center text-[10px]">
                            5
                          </span>
                          <span>DEAL STRUCTURE</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                          <div>
                            <span className="text-slate-400 font-semibold">Preferred Stake: </span>
                            <span className="text-white font-medium">{item.dealStructure.preferredStake}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 font-semibold">Consideration Mix: </span>
                            <span className="text-white font-medium">{item.dealStructure.considerationMix}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 font-semibold">Ticket Size: </span>
                            <span className="text-white font-medium">{item.dealStructure.ticketSize}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 font-semibold">Funding Source: </span>
                            <span className="text-white font-medium">{item.dealStructure.fundingSource}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Sections 6, 7 & 8 (Post-Acquisition, Process & Priorities) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[10px]">
                      {/* 6. Post-Acquisition Approach */}
                      <div className="p-3 rounded-2xl bg-black/40 border border-white/12 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] font-display border-b border-white/10 pb-1">
                          <span className="w-4.5 h-4.5 rounded-md bg-emerald-400/20 flex items-center justify-center text-[10px]">
                            6
                          </span>
                          <span>POST-ACQUISITION APPROACH</span>
                        </div>
                        <p><strong className="text-slate-400">Integration:</strong> {item.postAcquisitionApproach.integration}</p>
                        <p><strong className="text-slate-400">Brand:</strong> {item.postAcquisitionApproach.brand}</p>
                        <p><strong className="text-slate-400">Management:</strong> {item.postAcquisitionApproach.managementRetention}</p>
                      </div>

                      {/* 7. Process & Next Steps */}
                      <div className="p-3 rounded-2xl bg-black/40 border border-white/12 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-sky-300 font-bold text-[11px] font-display border-b border-white/10 pb-1">
                          <span className="w-4.5 h-4.5 rounded-md bg-sky-300/20 flex items-center justify-center text-[10px]">
                            7
                          </span>
                          <span>PROCESS &amp; NEXT STEPS</span>
                        </div>
                        <ul className="space-y-1 text-slate-300">
                          {item.processSteps.map((step, stepIdx) => (
                            <li key={stepIdx} className="flex items-start gap-1">
                              <span className="w-3.5 h-3.5 rounded-full bg-[#EB6A4C] text-white text-[8px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                {stepIdx + 1}
                              </span>
                              <span className="leading-snug">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Priorities & Avoided */}
                      <div className="p-3 rounded-2xl bg-black/40 border border-white/12 space-y-2">
                        <div>
                          <span className="text-emerald-400 font-bold text-[10px] uppercase flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>ACTIVELY PRIORITISED</span>
                          </span>
                          <p className="text-slate-200 mt-1 leading-snug">{item.activelyPrioritised.join("; ")}</p>
                        </div>
                        <div>
                          <span className="text-rose-400 font-bold text-[10px] uppercase flex items-center gap-1">
                            <XCircle className="w-3 h-3" />
                            <span>TO BE AVOIDED</span>
                          </span>
                          <p className="text-slate-300 mt-1 leading-snug">{item.toBeAvoided.join("; ")}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Flyer Footer Bar */}
                  <div className="w-full pt-3 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center gap-2 shrink-0 z-10 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#EB6A4C] text-white font-black flex items-center justify-center text-xs shadow-md">
                        RG
                      </div>
                      <div>
                        <span className="font-extrabold text-white text-xs block leading-none">
                          {item.advisorName}
                        </span>
                        <span className="text-[10px] text-slate-300">
                          {item.advisorRole} | {item.advisorContact} | {item.advisorEmail}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setInterestMandate(item);
                        setFormSubmitted(false);
                      }}
                      className="px-5 py-2.5 rounded-full bg-[#EB6A4C] hover:bg-[#d8583a] text-white font-black text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 transition-all transform hover:scale-105"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>TO EXPRESS INTEREST &amp; REQUEST NDA</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Carousel Controls */}
      <footer className="relative z-30 w-full max-w-7xl px-6 sm:px-12 flex justify-between items-center mt-3">
        {/* Left Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous Mandate"
            className="w-11 h-11 rounded-full bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center shadow-md border border-neutral-200/80 transition-all duration-300 transform hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Mandate"
            className="w-11 h-11 rounded-full bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center shadow-md border border-neutral-200/80 transition-all duration-300 transform hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Center Pill Pagination Bar */}
        <div className="px-5 py-2.5 rounded-full bg-neutral-200/70 backdrop-blur-md border border-black/5 flex items-center gap-2.5 shadow-inner">
          {mandates.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to mandate ${item.code}`}
                className={`transition-all duration-300 ease-out focus:outline-none ${
                  isActive
                    ? "w-8 h-2.5 bg-neutral-900 rounded-full shadow"
                    : "w-2.5 h-2.5 bg-neutral-400/80 hover:bg-neutral-600 rounded-full"
                }`}
              />
            );
          })}
        </div>

        {/* Floating NDA Action Button */}
        <button
          onClick={() => {
            setInterestMandate(activeMandate);
            setFormSubmitted(false);
          }}
          className="px-5 py-2.5 rounded-full bg-[#EB6A4C] hover:bg-[#d8583a] text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-xl transition-all transform hover:scale-105"
        >
          <Lock className="w-4 h-4" />
          <span>REQUEST NDA</span>
        </button>
      </footer>

      {/* ========================================================= */}
      {/* NDA / EXPRESS INTEREST FORM MODAL                         */}
      {/* ========================================================= */}
      {interestMandate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#091A26] border border-white/20 rounded-3xl text-white shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] text-[11px] font-bold uppercase tracking-wider border border-[#38BDF8]/30">
                  EXPRESS INTEREST
                </span>
                <h3 className="text-2xl font-black text-white font-display mt-2">
                  {interestMandate.code}
                </h3>
                <p className="text-xs text-slate-300">
                  {interestMandate.title}
                </p>
              </div>
              <button
                onClick={() => setInterestMandate(null)}
                className="w-9 h-9 rounded-full bg-white/10 text-slate-300 hover:text-white flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white font-display">Inquiry Received</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Thank you for expressing interest in <strong>{interestMandate.code}</strong>. Exigo Consulting will review your criteria and contact you within 24 hours to issue the mutual NDA.
                </p>
                <button
                  onClick={() => setInterestMandate(null)}
                  className="px-6 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs uppercase"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Corporate Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Company / Fund Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Company or Investment Entity"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Acquisition / Investment Intent Note
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly state your strategic fit or revenue alignment..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-400 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>Strict NDA applies. Your information will never be shared without prior written consent.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#EB6A4C] hover:bg-[#d8583a] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT INTEREST &amp; REQUEST NDA</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
