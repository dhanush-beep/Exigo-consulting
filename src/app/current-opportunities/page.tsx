import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import Opportunities3DCarousel from "@/components/sections/Opportunities3DCarousel";
import { ArrowRight, Lock, FileCheck } from "lucide-react";

export const metadata = constructMetadata({
  title: "Current M&A Opportunities in IT Services & Staffing | Exigo",
  description:
    "Explore confidential acquisition and investment opportunities across IT services, IT staffing, managed services and cybersecurity represented or introduced by Exigo Consulting."
});

export default function CurrentOpportunitiesPage() {
  const opportunityTemplateFields = [
    "Opportunity Code / Mandate Title",
    "Acquirer & Target Snapshot (Geography & Sector)",
    "Strategic Rationale & Transaction Intent",
    "Financial Parameters (Revenue Band, EBITDA Target, Headcount & Concentration)",
    "Deal Structure (Stake, Ticket Size & Funding Source)",
    "Post-Acquisition Approach & Retention Blueprint",
    "Process & Confidential NDA Disclosure Workflow",
    "Priority Criteria (Actively Prioritised vs To Be Avoided)"
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-[#1E293B] select-none pb-20">
      {/* 1. Interactive 3D Opportunity Cards Stack Carousel */}
      <Opportunities3DCarousel />

      {/* 2. Confidentiality & Recommended Standard Teaser Breakdown */}
      <Container className="py-16">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 text-slate-800 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0F6B82]/10 text-[#0F6B82] flex items-center justify-center border border-[#0F6B82]/20">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1B2730] font-display">
                  Confidential Mandate Disclosures &amp; Prospectus Standard
                </h2>
                <p className="text-xs text-slate-500">
                  Strict confidentiality governs all live transaction teasers represented by Exigo Consulting.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              All live mandates represented by Exigo Consulting are subject to non-disclosure agreements (NDAs) and principal approval before detailed financial models, customer names, or commercial profiles are released.
            </p>

            <div className="p-6 rounded-2xl bg-[#F0F8FA] border border-[#0F6B82]/20 space-y-4">
              <div className="flex items-center justify-between border-b border-[#0F6B82]/15 pb-3">
                <h3 className="text-sm font-black text-[#0B2530] font-display uppercase tracking-wider flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#0F6B82]" />
                  <span>Standard 8-Point Anonymous Teaser Architecture</span>
                </h3>
                <span className="text-[10px] bg-[#0F6B82]/15 text-[#0F6B82] font-bold px-2.5 py-1 rounded-full border border-[#0F6B82]/30">
                  EXIGO CERTIFIED
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
                {opportunityTemplateFields.map((field, index) => (
                  <li key={index} className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <span className="w-5 h-5 rounded-full bg-[#EB6A4C] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="line-clamp-1">{field}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-slate-500 italic">
              Note: Mandate scale, headcount, valuation ranges, and deal terms are updated continuously. Contact Exigo Consulting to request confidential teasers or submit counterparty mandates.
            </p>
          </div>

          {/* Call-to-Action Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#091A26] text-white text-center shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-white/15 text-xs font-bold uppercase tracking-widest text-[#38BDF8] border border-white/20 inline-block">
                PARTNER WITH EXIGO
              </span>
              <h3 className="text-3xl sm:text-4xl font-black font-display text-white">
                Explore Active Mandate Alignment
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect with Exigo Consulting to execute an NDA, request complete Information Memorandums (IMs), or discuss your custom M&amp;A buy-side thesis.
              </p>
              <div className="pt-2">
                <Link href="/contact">
                  <button className="px-8 py-4 rounded-xl bg-[#EB6A4C] hover:bg-[#d8583a] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-xl hover:scale-105">
                    <span>Contact Advisor &amp; Execute NDA</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
