import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  FileText,
  User,
  Handshake,
  ShieldCheck,
  Target
} from "lucide-react";

export const metadata = constructMetadata({
  title: "M&A Advisory for IT Services & Staffing | Exigo Consulting",
  description: "Buy-side and sell-side M&A advisory for IT services, IT staffing and technology companies, from target search and valuation to diligence, negotiation and closure."
});

export default function MergersAcquisitionsPage() {
  const sellSideBullets = [
    "Business and transaction readiness review",
    "Positioning and confidential teaser support",
    "Buyer mapping and curated outreach",
    "Valuation discussion and offer evaluation",
    "Negotiation and diligence coordination",
    "Transaction momentum through signing and closure"
  ];

  const buySideBullets = [
    "Acquisition thesis and target criteria",
    "Target identification and discreet approach",
    "Strategic and commercial fit assessment",
    "Indicative valuation and transaction discussion",
    "Diligence coordination with specialists",
    "Negotiation and closure support"
  ];

  const relatedServices = [
    { label: "Fundraising Advisory", href: "/services/fundraising" },
    { label: "Business Consulting", href: "/services/business-consulting" },
    { label: "Executive Search & Talent", href: "/services/talent-acquisition" },
    { label: "Transaction Support", href: "/services/other-services" }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#1E293B] select-none pb-20">
      {/* 1. Hero */}
      <section className="relative bg-[#091D2C] text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Image with Gradient Overlay matching reference design */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ma_hero_handshake.png"
            alt="M&A Advisory Background"
            fill
            className="object-cover object-right lg:object-[center_right] opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#091D2C_0%,#091D2C_38%,rgba(9,29,44,0.85)_52%,rgba(9,29,44,0.3)_70%,transparent_88%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091D2C]/60 via-transparent to-[#091D2C]/40" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#38BDF8] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              SERVICES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-display mb-6">
              M&amp;A Advisory for IT Services, IT Staffing &amp; Technology
            </h1>
            <div className="w-16 h-1 bg-[#EB6A4C] mb-6 rounded-full" />
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed mb-8">
              The right deal is not simply found. It is understood, positioned, negotiated and carried through. Exigo acts as the Sutradhar across the transaction — connecting strategic intent with the right counterparty and keeping every critical thread aligned through closure.
            </p>
            <Link href="/contact">
              <button className="px-7 py-3.5 bg-[#EB6A4C] hover:bg-[#d8583a] text-white text-sm sm:text-base font-semibold rounded-xl flex items-center gap-2.5 transition-all shadow-lg hover:shadow-orange-500/20">
                <span>Discuss an Acquisition or Exit</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </Container>
      </section>

      {/* 2. Main Content Grid */}
      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Sell-Side Advisory */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-8 shadow-sm">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
                SELL-SIDE MANDATES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2730] font-display mb-4">
                Sell-Side Advisory
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                For founders considering a strategic sale, partial exit or partnership, we help articulate the business story, assess readiness, identify relevant buyers and manage conversations with discretion.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {sellSideBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-[#0F6B82] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buy-Side Advisory */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-8 shadow-sm">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
                BUY-SIDE MANDATES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2730] font-display mb-4">
                Buy-Side Advisory
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                For strategic and financial buyers, we translate acquisition strategy into a focused target universe and help evaluate opportunities beyond headline revenue.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {buySideBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-[#0F6B82] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Look Beyond */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-8 shadow-sm">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
                SECTOR VALUATION DRIVERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2730] font-display mb-4">
                What We Look Beyond
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                In IT Services and Staffing, value is shaped by more than topline growth. We consider client concentration, billable headcount, utilization, delivery capability, technology practices, geography, leadership dependence, margins, customer quality, recurring relationships and scalability — the elements that determine whether a deal makes strategic sense.
              </p>
            </div>

            {/* The Sutradhar Through the Deal */}
            <div className="p-8 rounded-2xl bg-[#091A26] text-white border border-white/10 shadow-md">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#3A9FB7] mb-2 block">
                NARRATIVE ALIGNMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-4">
                The Sutradhar Through the Deal
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Introductions create meetings. Alignment creates transactions. Exigo stays engaged across both — helping founders and buyers maintain context, resolve gaps and keep the deal moving without losing sight of the original strategic rationale.
              </p>
            </div>

          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 h-fit">
            <div className="bg-[#0B343D] text-white p-6 rounded-2xl shadow-md border border-teal-800/40">
              <h3 className="font-bold text-lg text-white mb-2 font-display">
                Start a Conversation
              </h3>
              <p className="text-xs text-slate-200 mb-6 leading-relaxed">
                Discuss an acquisition, sale, or partnership mandate in strict confidence.
              </p>
              <Link href="/contact" className="block w-full">
                <button className="w-full bg-[#EB6A4C] hover:bg-[#d8583a] text-white py-3 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all">
                  <span>Start a Confidential Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <div className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#0B2530] mb-3 pb-2 border-b border-slate-100">
                Related Services
              </h4>
              <ul className="space-y-2.5">
                {relatedServices.map((rel, idx) => (
                  <li key={idx}>
                    <Link
                      href={rel.href}
                      className="flex items-center justify-between text-xs text-slate-700 font-medium hover:text-[#0F6B82] transition-colors group py-1"
                    >
                      <span>{rel.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0F6B82] group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
