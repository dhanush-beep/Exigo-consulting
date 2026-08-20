"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Globe, TrendingUp, Sparkles, Layers, BarChart3, Briefcase } from "lucide-react";
import Container from "../ui/Container";
import ParallaxReveal from "../ui/ParallaxReveal";
import DissolveEffect from "../ui/DissolveEffect";
import TiltCard from "../ui/TiltCard";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Clean Ambient Background */}

      {/* Interactive Particle Dissolve Effect Background */}
      <DissolveEffect />

      {/* Radial background glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(15,107,130,0.18) 0%, transparent 70%)",
            animation: "pulse-slow 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-5%] left-[-8%] w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(222,122,102,0.15) 0%, transparent 70%)",
            animation: "pulse-slow 10s ease-in-out infinite 2s",
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
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

      <Container className="relative z-10 text-center flex flex-col items-center py-16 sm:py-20">
        {/* Main Heading with Page Load Sweep Animations */}
        <h1
          className="text-4xl sm:text-6xl lg:text-[76px] font-[800] tracking-tight max-w-5xl leading-[1.08] mb-7 select-none"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          <div className="relative inline-block">
            <span
              className="inline-block animate-title-stroke"
              style={{
                WebkitTextStroke: "1.5px #1B2730",
                color: "transparent",
              }}
            >
              The Sutradhar Behind
            </span>
            <span
              className="absolute inset-0 inline-block animate-title-fill opacity-0"
              style={{
                color: "#1B2730",
                animationDelay: "600ms",
              }}
            >
              The Sutradhar Behind
            </span>
          </div>

          <br />

          <div className="relative inline-block mt-1">
            <span
              className="inline-block animate-title-stroke opacity-0"
              style={{
                WebkitTextStroke: "1.5px #0F6B82",
                color: "transparent",
                animationDelay: "200ms",
              }}
            >
              M&amp;A, Strategic Growth &amp; Capital.
            </span>
            <span
              className="absolute inset-0 inline-block animate-title-fill opacity-0 text-[#0F6B82]"
              style={{
                animationDelay: "800ms",
              }}
            >
              M&amp;A, Strategic Growth &amp; Capital.
            </span>
          </div>
        </h1>

        <p className="text-lg sm:text-xl text-[#4A5568] max-w-3xl font-medium leading-relaxed mb-4">
          Exigo Consulting is a founder-led advisory firm for IT Services, IT Staffing and Technology businesses. We connect the right people, opportunities, capital and expertise — and stay with the story from the first conversation to the final handshake.
        </p>

        <p className="text-sm sm:text-base text-slate-500 max-w-2xl font-normal leading-relaxed mb-8">
          Whether you are acquiring, selling, raising capital, strengthening operations or building leadership, Exigo brings sector understanding, senior attention and execution discipline to every mandate.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0F6B82] hover:bg-[#155B6D] text-white font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <span>Start a Confidential Conversation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Highlight Badges */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 w-full max-w-5xl border-t border-[#E5EBEF] pt-8">
          {[
            { icon: Briefcase, label: "M&A Advisory" },
            { icon: TrendingUp, label: "Fundraising Advisory" },
            { icon: Layers, label: "Business Consulting" },
            { icon: ShieldCheck, label: "Executive Search" },
            { icon: Award, label: "Transaction Support" },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-[#1B2730] font-medium text-xs sm:text-sm hover:text-[#0F6B82] transition-colors">
              <item.icon className="w-4 h-4 text-[#0F6B82] shrink-0" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
