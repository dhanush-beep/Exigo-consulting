"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Globe, TrendingUp } from "lucide-react";
import Container from "../ui/Container";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.classList.add("is-visible");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle Hero Grid */}
      <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />

      {/* Radial background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(15,107,130,0.15) 0%, transparent 70%)", animation: "pulse-slow 8s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[-5%] left-[-8%] w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(222,122,102,0.12) 0%, transparent 70%)", animation: "pulse-slow 10s ease-in-out infinite 2s" }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Teal shapes */}
        <div
          className="geo-shape w-12 h-12 border-2 border-[#0F6B82]/20 rounded-full"
          style={{ top: "15%", left: "8%", animationDelay: "0s" }}
        />
        <div
          className="geo-shape w-7 h-7 bg-[#0F6B82]/10 rounded-lg"
          style={{ top: "65%", left: "5%", animationDelay: "1.5s", animationDuration: "7s" }}
        />
        <div
          className="geo-shape w-20 h-20 border border-[#0F6B82]/10 rounded-[20px]"
          style={{ top: "30%", right: "6%", animationDelay: "0.8s", animationDuration: "8s" }}
        />
        {/* Coral shapes */}
        <div
          className="geo-shape w-8 h-8 bg-[#DE7A66]/15 rounded-full"
          style={{ top: "20%", right: "18%", animationDelay: "2s", animationDuration: "6.5s" }}
        />
        <div
          className="geo-shape w-5 h-5 bg-[#DE7A66]/20 rounded-md"
          style={{ bottom: "25%", right: "8%", animationDelay: "3s", animationDuration: "7.5s" }}
        />
        <div
          className="geo-shape w-14 h-14 border-2 border-[#DE7A66]/15 rounded-full"
          style={{ bottom: "15%", left: "14%", animationDelay: "1s", animationDuration: "9s" }}
        />
      </div>

      <Container className="relative z-10 text-center flex flex-col items-center py-20">
        {/* Badge */}
        <div
          className="enterprise-badge mb-8"
          style={{ animation: "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
        >
          <Award className="w-3.5 h-3.5" />
          <span>Premier Enterprise Advisory · 20+ Years of Proven Results</span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-[800] text-[#1B2730] tracking-tight max-w-5xl leading-[1.08] mb-7"
          style={{ fontFamily: "var(--font-outfit), sans-serif", animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
        >
          Strategic M&amp;A Solutions
          <br />
          <span className="text-[#0F6B82]">for Growth</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-[#6C7A86] max-w-2xl leading-relaxed mb-11"
          style={{ animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s both" }}
        >
          Exigo Consulting provides high-caliber strategic oversight, M&A guidance, private equity sourcing, and executive recruitment for growing mid-market corporations.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
          style={{ animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
        >
          <Link href="/contact">
            <button className="btn-primary-enterprise text-base">
              Request Consultation
              <ArrowRight className="w-4 h-4 btn-arrow" />
            </button>
          </Link>
          <Link href="/services">
            <button className="btn-secondary-enterprise text-base">
              Our Advisory Services
            </button>
          </Link>
        </div>

        {/* Trust Badges */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 border-t border-[#E5EBEF] pt-10 w-full max-w-4xl"
          style={{ animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 0.65s both" }}
        >
          {[
            { icon: ShieldCheck, label: "Fiduciary Integrity" },
            { icon: Globe, label: "Global Institutional Network" },
            { icon: Award, label: "Partner-Led Advisory" },
            { icon: TrendingUp, label: "$250M+ Deals Structured" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-[#0F6B82]/8 flex items-center justify-center group-hover:bg-[#0F6B82]/15 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-[#0F6B82]" />
              </div>
              <span className="text-xs sm:text-sm text-[#6C7A86] font-medium text-center leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
