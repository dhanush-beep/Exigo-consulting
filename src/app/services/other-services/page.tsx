import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import { ArrowRight, ShieldCheck, FileText, Scale, FileCheck, Globe } from "lucide-react";

export const metadata = constructMetadata({
  title: "Transaction Support Services | Exigo Consulting",
  description: "Connected financial, legal, compliance, diligence and market-positioning support for M&A, fundraising and growth mandates in technology businesses."
});

export default function OtherServicesPage() {
  const supports = [
    {
      icon: FileText,
      num: "01",
      tag: "WORKSTREAM 01",
      title: "Financial & Accounting Due Diligence",
      desc: "Support in understanding financial quality, identifying risk areas and preparing clean, defensible information for a transaction or major strategic decision, delivered with appropriate specialist involvement."
    },
    {
      icon: Scale,
      num: "02",
      tag: "WORKSTREAM 02",
      title: "Legal & Regulatory Support",
      desc: "Access to experienced legal advisors for transaction documentation, corporate and commercial matters, employment considerations, IP, regulatory compliance and other relevant areas."
    },
    {
      icon: FileCheck,
      num: "03",
      tag: "WORKSTREAM 03",
      title: "Governance & Secretarial Support",
      desc: "Corporate governance, secretarial and transaction-related compliance support through experienced professionals in Exigo’s advisory ecosystem."
    },
    {
      icon: Globe,
      num: "04",
      tag: "WORKSTREAM 04",
      title: "Digital Positioning",
      desc: "Where relevant, we help businesses strengthen market positioning and digital visibility so their external narrative is consistent with their growth, fundraising or transaction objectives."
    }
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-[#1E293B] select-none pb-20">
      {/* 1. Hero */}
      <section className="relative bg-[#091D2C] text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Image with Gradient Overlay matching reference design */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/strategic_advisory_hero.png"
            alt="Transaction Support Background"
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
              TRANSACTION SUPPORT
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-display mb-6">
              The Supporting Threads That Keep a Transaction Together
            </h1>
            <div className="w-16 h-1 bg-[#EB6A4C] mb-6 rounded-full" />
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed mb-8">
              M&amp;A, fundraising and strategic growth depend on more than the lead advisor. Financial clarity, legal readiness, governance and market positioning can determine whether a mandate moves smoothly or stalls.
            </p>
            <Link href="/contact">
              <button className="px-7 py-3.5 bg-[#EB6A4C] hover:bg-[#d8583a] text-white text-sm sm:text-base font-semibold rounded-xl flex items-center gap-2.5 transition-all shadow-lg">
                <span>Start a Confidential Conversation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </Container>
      </section>

      {/* 2. Content Grid */}
      <Container className="py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
            TRANSACTION CAPABILITIES
          </span>
          <h2 className="text-3xl font-extrabold text-[#1B2730] font-display">
            Specialized Workstreams &amp; Support
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {supports.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(15,107,130,0.15)] hover:border-[#0F6B82]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Glowing Top Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F6B82] via-[#38BDF8] to-[#EB6A4C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F6B82]/10 text-[#0F6B82] flex items-center justify-center group-hover:bg-[#0F6B82] group-hover:text-white transition-all duration-300 shadow-sm p-3 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h2 className="text-2xl font-extrabold text-[#1B2730] font-display mb-3 group-hover:text-[#0F6B82] transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* One Sutradhar. The Right Specialists. */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#091A26] text-white border border-white/10 shadow-xl max-w-4xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#3A9FB7] mb-2 block">
            INTEGRATED EXECUTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-4">
            One Sutradhar. The Right Specialists.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            The client should not have to manage disconnected conversations across every workstream. Exigo helps connect the specialists to the mandate so commercial context is preserved across the process.
          </p>

          <Link href="/contact">
            <button className="px-6 py-3 rounded-xl bg-white text-[#091A26] font-bold text-xs sm:text-sm hover:bg-slate-100 transition-all inline-flex items-center gap-2">
              <span>Start a Confidential Conversation</span>
              <ArrowRight className="w-4 h-4 text-[#0F6B82]" />
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
