import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import {
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Shield,
  Award,
  Target,
  Users,
  Headset,
  Handshake,
  Lightbulb,
  ShieldCheck
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Mergers & Acquisitions Advisory",
  description: "Elite buy-side and sell-side advisory, corporate valuations, and post-merger integration services."
});

export default function MergersAcquisitionsPage() {
  const service = services.find((s) => s.slug === "mergers-acquisitions")!;

  const values = [
    {
      icon: Users,
      title: "Expertise",
      description: "With a team of seasoned professionals boasting extensive experience in M&A, we bring a wealth of knowledge to the table, tailored to your unique business goals."
    },
    {
      icon: Headset,
      title: "Comprehensive Support",
      description: "Whether you're a buyer seeking expansion or a seller looking to optimize value, we offer end-to-end support throughout the entire mandate."
    },
    {
      icon: Handshake,
      title: "Client-Centric Approach",
      description: "Your success is our priority. We build strong, collaborative relationships and tailor our strategies to align with your vision."
    },
    {
      icon: Lightbulb,
      title: "Innovation and Insight",
      description: "The world of M&A is ever-evolving. We stay ahead of the curve, incorporating innovative approaches to navigate complex transactions."
    },
    {
      icon: ShieldCheck,
      title: "Confidentiality and Integrity",
      description: "We understand the sensitivity of M&A transactions. Our commitment to confidentiality and integrity is unwavering."
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-white min-h-screen relative">
      {/* Subtle Hero Grid & Radial Background Glows */}
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
          <span className="text-[#1B2730] font-medium">Mergers &amp; Acquisitions</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center mb-20">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="enterprise-badge mb-2">
              <Briefcase className="w-3.5 h-3.5 text-[#0F6B82]" />
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
                Strict Fiduciary Confidentiality Standards Enforced
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 w-full rounded-3xl bg-[#F7F9FA] border border-[#E5EBEF] relative overflow-hidden shadow-card p-6 sm:p-7">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6C7A86]">Transaction Stage</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#1BA672]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1BA672]" />
                Diligence in progress
              </span>
            </div>

            {/* Deal stage track */}
            <div className="flex items-center mb-2">
              {["Origination", "Diligence", "Structuring", "Close"].map((stage, idx) => (
                <React.Fragment key={stage}>
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div
                      className={`w-3 h-3 rounded-full border-2 ${
                        idx <= 1 ? "bg-[#0F6B82] border-[#0F6B82]" : "bg-white border-[#C5D5DC]"
                      }`}
                    />
                  </div>
                  {idx < 3 && (
                    <div className={`flex-1 h-[2px] mx-1 ${idx < 1 ? "bg-[#0F6B82]" : "bg-[#E5EBEF]"}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex justify-between mb-6">
              {["Origination", "Diligence", "Structuring", "Close"].map((stage) => (
                <span key={stage} className="text-[10px] sm:text-[11px] text-[#6C7A86] font-medium w-1/4 text-center first:text-left last:text-right">
                  {stage}
                </span>
              ))}
            </div>

            {/* Active mandates */}
            <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6C7A86] mb-3">
              Active Mandates
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between bg-white border border-[#E5EBEF] rounded-xl px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[#1B2730]">Sell-side · Mid-market SaaS</p>
                  <p className="text-xs text-[#6C7A86]">Fairness opinion drafted</p>
                </div>
                <span className="text-[10px] font-semibold text-[#0F6B82] bg-[rgba(15,107,130,0.08)] rounded-full px-2.5 py-1">Q3</span>
              </div>
              <div className="flex items-center justify-between bg-white border border-[#E5EBEF] rounded-xl px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[#1B2730]">Buy-side · Logistics platform</p>
                  <p className="text-xs text-[#6C7A86]">Target shortlist finalized</p>
                </div>
                <span className="text-[10px] font-semibold text-[#0F6B82] bg-[rgba(15,107,130,0.08)] rounded-full px-2.5 py-1">Q3</span>
              </div>
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

        {/* Stat + Commitment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4 enterprise-card p-8 text-center flex flex-col items-center justify-center">
            <div className="icon-teal mb-4">
              <Award className="w-6 h-6" />
            </div>
            <p className="text-5xl font-extrabold font-display text-[#1B2730]">20+</p>
            <p className="text-xs text-[#0F6B82] font-semibold uppercase tracking-widest mt-2">Years of Experience</p>
          </div>

          <div className="lg:col-span-8 bg-[#F7F9FA] rounded-3xl p-8 border border-[#E5EBEF]">
            <h4 className="text-xl font-bold font-display text-[#1B2730] mb-4">Our Commitment</h4>
            <ul className="space-y-4">
              {[
                "We limit our client intake to ensure focused partner bandwidth.",
                "We provide transparent, objective valuation feedback.",
                "We leverage a global corporate network of buyers and private equity firms.",
                "We maintain complete confidentiality across all market inquiries."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0F6B82] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#6C7A86] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="enterprise-badge mb-3 mx-auto">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0F6B82]" />
              <span>Core Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1B2730]">
              The Values That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="enterprise-card p-8 flex flex-col items-start">
                  <div className="icon-teal mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-[#1B2730] mb-3">{value.title}</h4>
                  <p className="text-sm text-[#6C7A86] leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="enterprise-card p-10 sm:p-14 mb-20 bg-gradient-to-br from-[#F7F9FA] to-white border border-[#E5EBEF]">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="enterprise-badge mb-4">
              <Target className="w-3.5 h-3.5 text-[#0F6B82]" />
              <span>Our Strategic Vision</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold font-display text-[#1B2730] leading-snug mb-6">
              Strategic Partnerships That Drive Sustainable Growth
            </h3>
            <p className="text-[#6C7A86] text-base leading-relaxed mb-8">
              We envision a business landscape where M&amp;A activities are not just transactions but strategic partnerships that drive sustainable growth. Our mission is to empower organizations to navigate the complexities of mergers and acquisitions with confidence, leveraging our expertise to unlock unprecedented value and create synergies that endure.
            </p>
            <Link href="/contact">
              <button className="btn-primary-enterprise text-base">
                Start Consultation
                <ArrowRight className="w-4 h-4 btn-arrow" />
              </button>
            </Link>
          </div>
        </div>

        {/* CTA Card */}
        <div className="enterprise-card p-8 sm:p-12 text-center max-w-3xl mx-auto bg-gradient-to-br from-[#F7F9FA] to-white border border-[#E5EBEF]">
          <h3 className="text-2xl font-bold font-display text-[#1B2730] mb-3">Discuss a Transaction Mandate</h3>
          <p className="text-[#6C7A86] text-sm sm:text-base leading-relaxed mb-6">
            Contact us for a confidential initial consultation with a managing partner. We can review valuations, buy-side targets, or sell-side preparation timelines.
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
