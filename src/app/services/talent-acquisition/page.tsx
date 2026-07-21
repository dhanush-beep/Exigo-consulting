import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import { Users, CheckCircle2, ArrowRight, Shield } from "lucide-react";

export const metadata = constructMetadata({
  title: "Talent Acquisition & Executive Search",
  description: "High-touch C-suite recruitment, board placements, and organizational compensation structuring."
});

export default function TalentAcquisitionPage() {
  const service = services.find((s) => s.slug === "talent-acquisition")!;

  return (
    <div className="py-16 sm:py-24 bg-white min-h-screen relative">
      {/* Subtle Hero Grid & Background Glows */}
      <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(15,107,130,0.12) 0%, transparent 70%)" }}
        />
      </div>

      <Container className="relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="text-xs sm:text-sm text-[#6C7A86] mb-8 flex items-center gap-2">
          <Link href="/services" className="hover:text-[#0F6B82] transition-colors font-medium">Services</Link>
          <span>/</span>
          <span className="text-[#1B2730] font-medium">Talent Acquisition</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center mb-20">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="enterprise-badge mb-2">
              <Users className="w-3.5 h-3.5 text-[#0F6B82]" />
              <span>Practice Area</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-[800] font-display text-[#1B2730] leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-[#6C7A86] leading-relaxed">
              {service.detailedDescription}
            </p>
            <div className="flex gap-4 items-center">
              <Shield className="w-5 h-5 text-[#0F6B82] shrink-0" />
              <p className="text-xs text-[#0F6B82] uppercase tracking-wider font-semibold">
                Rigorous Screening, Vetting, and Compensation Structuring
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 w-full aspect-video sm:aspect-square rounded-3xl bg-[#F7F9FA] border border-[#E5EBEF] flex items-center justify-center relative overflow-hidden shadow-card">
            <div className="icon-teal w-20 h-20">
              <Users className="w-10 h-10 text-[#0F6B82]" />
            </div>
          </div>
        </div>

        {/* Features & Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Features card */}
          <div className="enterprise-card p-8">
            <h3 className="text-xl font-bold font-display text-[#1B2730] mb-6">Our Mandate Focus</h3>
            <ul className="space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0F6B82] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#6C7A86] leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits card */}
          <div className="enterprise-card p-8 bg-[#F7F9FA]">
            <h3 className="text-xl font-bold font-display text-[#1B2730] mb-6">Client Outcomes</h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#0F6B82] shrink-0 mt-2.5"></span>
                  <span className="text-sm sm:text-base text-[#6C7A86] leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Card */}
        <div className="enterprise-card p-8 sm:p-12 text-center max-w-3xl mx-auto bg-gradient-to-br from-[#F7F9FA] to-white border border-[#E5EBEF]">
          <h3 className="text-2xl font-bold font-display text-[#1B2730] mb-3">Initiate an Executive Search</h3>
          <p className="text-[#6C7A86] text-sm sm:text-base leading-relaxed mb-6">
            Review your candidate requirements, benchmark comps, or succession timelines with our talent practice leaders.
          </p>
          <Link href="/contact">
            <button className="btn-primary-enterprise text-base">
              Initiate Private Consultation
              <ArrowRight className="w-4 h-4 btn-arrow" />
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
