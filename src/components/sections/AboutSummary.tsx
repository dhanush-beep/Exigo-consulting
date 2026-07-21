"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, Award, Globe, TrendingUp } from "lucide-react";
import Container from "../ui/Container";

export default function AboutSummary() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    "Partner-level commitment on every advisory mandate",
    "Tailored execution strategy with clear milestone alignment",
    "Confidential, institutional networks across Europe, Americas, and APAC",
    "Cross-sector competence in Enterprise Tech, Health-Tech, and Cleantech"
  ];

  const achievements = [
    { icon: Users, label: "50+ Corporate Clients" },
    { icon: Award, label: "20+ Years of Experience" },
    { icon: Globe, label: "Global Network" },
    { icon: TrendingUp, label: "$250M+ Deals Closed" }
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden bg-white">
      {/* Subtle background tint right side */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F7F9FA] pointer-events-none" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left text column */}
        <div ref={leftRef} className="flex flex-col gap-6 animate-section">
          <div>
            <span className="section-label">About EXIGO</span>
            <h2
              className="text-4xl sm:text-5xl font-[700] text-[#1B2730] leading-[1.15] mt-1"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              About EXIGO
              <br />
              <span className="text-[#0F6B82]">Mergers &amp; Acquisitions M&amp;A</span>
            </h2>
          </div>

          <p className="text-[17px] text-[#6C7A86] leading-relaxed">
            Exigo Consulting is a boutique advisory firm serving scaling tech companies and established mid-market enterprises. We bridge the gap between high-level management strategy and precise financial execution.
          </p>
          <p className="text-[15px] text-[#6C7A86] leading-relaxed">
            Founded by Rajesh K. Sen, our firm operates on a simple principle: corporate growth requires partner-led execution. Unlike traditional consultancies, Exigo guarantees experienced advisory attention on every transaction, hire, and restructuring roadmap.
          </p>

          {/* Checklist */}
          <ul className="space-y-3 mt-2">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0F6B82] shrink-0 mt-0.5" strokeWidth={1.75} />
                <span className="text-[15px] text-[#1B2730] leading-snug">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/about">
              <button className="btn-primary-enterprise">
                Our Firm & Values
                <ArrowRight className="w-4 h-4 btn-arrow" />
              </button>
            </Link>
            <Link href="/about/meet-rajesh">
              <button className="btn-secondary-enterprise">
                Meet Rajesh Sen
              </button>
            </Link>
          </div>
        </div>

        {/* Right - Stats and visual */}
        <div ref={rightRef} className="animate-section" style={{ transitionDelay: "150ms" }}>
          {/* Achievement badges grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#E5EBEF] rounded-[20px] p-5 flex items-center gap-3 shadow-[0_2px_12px_0_rgba(15,107,130,0.06)] hover:border-[#0F6B82] hover:shadow-[0_8px_24px_0_rgba(15,107,130,0.12)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-[12px] bg-[#0F6B82]/8 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#0F6B82]" strokeWidth={1.75} />
                </div>
                <span className="text-[14px] font-[600] text-[#1B2730] leading-tight">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Main stat card */}
          <div className="bg-[#0F6B82] rounded-[24px] p-8 text-white relative overflow-hidden">
            {/* Subtle bg pattern */}
            <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-sm font-medium text-white/70 mb-6 uppercase tracking-widest">The Exigo Advantage</p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "20+", label: "Years Experience" },
                  { value: "$250M+", label: "Deals Structured" },
                  { value: "98%", label: "Client Retention" }
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-[800] text-white mb-1" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>{s.value}</p>
                    <p className="text-xs text-white/60 uppercase tracking-widest leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
