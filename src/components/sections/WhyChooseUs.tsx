"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { UserCheck, Compass, Eye, ShieldAlert, ArrowRight, Target, Handshake } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const approaches = [
  {
    icon: Target,
    title: "Market Proven Approach",
    description: "Seasoned advisory expertise refined over 20+ years of successful enterprise transactions across multiple sectors.",
    color: "teal"
  },
  {
    icon: Handshake,
    title: "Exigo Expertise Across Sectors",
    description: "Deep cross-industry competence spanning Enterprise Tech, HealthTech, Logistics, Cleantech, and Financial Services.",
    color: "coral"
  },
  {
    icon: Eye,
    title: "Valuation & Synergy Realism",
    description: "We present raw market realities. Objective, actionable analysis — not inflated numbers to secure mandates.",
    color: "teal"
  },
  {
    icon: ShieldAlert,
    title: "Seamless and Confidential",
    description: "Operating with absolute compliance and trust. Client listings and M&A targets remain private and guarded.",
    color: "coral"
  }
];

const whyPoints = [
  {
    icon: UserCheck,
    title: "Direct Partner Involvement",
    description: "Senior partners actively lead and execute your mandate. No delegation to junior associates."
  },
  {
    icon: Compass,
    title: "Bespoke Playbooks Only",
    description: "We reject cookie-cutter templates. Every model, hiring search, or exit strategy is engineered from scratch."
  },
  {
    icon: Eye,
    title: "Valuation & Synergy Realism",
    description: "Objective, actionable analysis that withstands scrutiny of Tier-1 buyers and PE investment committees."
  },
  {
    icon: ShieldAlert,
    title: "Absolute Confidentiality",
    description: "Client listings and M&A targets remain private and guarded with full regulatory compliance."
  }
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    if (whyRef.current) observer.observe(whyRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 relative bg-[#F7F9FA]">
      <Container>
        {/* Top Approach Cards */}
        <SectionHeading
          title="Inspiring Success: A Comprehensive Approach to Mergers and Acquisitions M&A Consulting"
          subtitle="Our Approach"
          description="We align our advisory mandates directly with ownership outcomes, preserving confidentiality and maximizing equity value."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 stagger-children">
          {approaches.map((item, index) => {
            const Icon = item.icon;
            const isCoral = item.color === "coral";
            return (
              <div
                key={index}
                className="bg-white border border-[#E5EBEF] rounded-[24px] p-6 shadow-[0_2px_12px_0_rgba(15,107,130,0.06)] hover:shadow-[0_12px_40px_-8px_rgba(15,107,130,0.18)] hover:border-[#0F6B82] hover:translate-y-[-10px] transition-all duration-400 group"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                <div
                  className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: isCoral ? "rgba(222,122,102,0.1)" : "rgba(15,107,130,0.08)",
                    border: `1px solid ${isCoral ? "rgba(222,122,102,0.2)" : "rgba(15,107,130,0.15)"}`,
                    color: isCoral ? "#DE7A66" : "#0F6B82"
                  }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3
                  className="text-[16px] font-[600] text-[#1B2730] mb-3 group-hover:text-[#0F6B82] transition-colors"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#6C7A86] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Why Exigo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div ref={whyRef} className="animate-section">
            <span className="section-label">Why Choose Exigo</span>
            <h2
              className="text-4xl sm:text-5xl font-[700] text-[#1B2730] leading-[1.15] mb-6 mt-1"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Designed for Discerning Executive Leadership
            </h2>
            <p className="text-[17px] text-[#6C7A86] leading-relaxed mb-8">
              Successful transactions and transformations don&apos;t happen by chance. They result from rigorous analysis, precise deal engineering, and extensive market alignment.
            </p>
            <Link href="/about">
              <button className="btn-primary-enterprise">
                Learn More About Us
                <ArrowRight className="w-4 h-4 btn-arrow" />
              </button>
            </Link>
          </div>

          {/* Right - Why points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E5EBEF] rounded-[20px] p-5 shadow-[0_2px_8px_0_rgba(15,107,130,0.05)] hover:border-[#0F6B82] hover:shadow-[0_8px_24px_0_rgba(15,107,130,0.12)] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-[12px] bg-[#0F6B82]/8 flex items-center justify-center mb-4 group-hover:bg-[#0F6B82]/15 transition-colors">
                    <Icon className="w-5 h-5 text-[#0F6B82]" strokeWidth={1.75} />
                  </div>
                  <h4
                    className="text-[15px] font-[600] text-[#1B2730] mb-2"
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    {point.title}
                  </h4>
                  <p className="text-[13px] text-[#6C7A86] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
