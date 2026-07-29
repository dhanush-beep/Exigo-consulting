"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  ChevronRight,
  Target,
  Settings,
  TrendingUp,
  Building2,
  Users,
  ShieldCheck,
  FileText,
  User,
  Check,
  Send,
  Compass
} from "lucide-react";

export default function BusinessConsultingPage() {
  const featureRows = [
    {
      title: "Our Approach",
      description:
        "At the heart of our approach lies our expertise in Build Operate Transfer (BOT) solutions. BOT methodologies provide a strategic framework for companies to efficiently manage their operations, from initial setup to eventual transfer of ownership. By adopting a BOT approach, businesses can navigate complexities with ease while maintaining focus on their core competencies.",
      icon: Target
    },
    {
      title: "Optimizing Company Operations",
      description:
        "Efficiency is the cornerstone of success in today's fast-paced business landscape. Our team of seasoned professionals works closely with your organization to identify areas for improvement, streamline processes, and implement innovative solutions that drive tangible results. Whether it's enhancing supply chain management, improving customer service, or optimizing production workflows, we're here to help you maximize efficiency and minimize costs.",
      icon: Settings
    },
    {
      title: "Leveraging Industry Insights",
      description:
        "In a rapidly evolving marketplace, staying ahead of the competition requires more than just keeping up with the latest trends—it requires a deep understanding of the industry landscape. With our finger on the pulse of emerging technologies, market dynamics, and regulatory changes, we provide the strategic guidance and actionable insights you need to stay ahead of the curve.",
      icon: TrendingUp
    },
    {
      title: "Specializing in Build Operate Transfer (BOT) Solutions",
      description:
        "With expertise in the field of BOT solutions, we offer a proven methodology for achieving sustainable growth and profitability. Whether you're looking to expand into new markets, launch a new product line, or optimize existing operations, our BOT solutions provide a seamless transition that minimizes risk and maximizes returns.",
      icon: Building2
    },
    {
      title: "Discover the Exigo Advantage",
      description:
        "Unlock the full potential of your business with Exigo Consulting. With our unrivaled expertise, personalized approach, and commitment to excellence, we're here to help you achieve your goals and surpass your expectations. Explore our website to learn more about our services, meet our team of experts, and discover how we can help your business thrive in today's competitive marketplace.",
      icon: Users
    }
  ];

  const relatedServices = [
    { label: "Mergers & Acquisitions", href: "/services/mergers-acquisitions" },
    { label: "Fundraising Services", href: "/services/fundraising" },
    { label: "Talent Acquisition Services", href: "/services/talent-acquisition" },
    { label: "Other Services", href: "/services/other-services" }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#1E293B]">
      {/* 1. HERO SECTION matching screenshot exactly */}
      <section className="relative bg-[#091D2C] text-white min-h-[420px] lg:min-h-[460px] flex items-center overflow-hidden w-full">
        {/* Right-side hero background image with gradient fade to left */}
        <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
          <div className="w-full lg:w-[58%] h-full relative">
            <img
              src="/images/business_consulting_hero.png"
              alt="Business Consulting Strategy"
              className="w-full h-full object-cover object-center"
            />
            {/* Smooth dark navy gradient overlay blending image into background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#091D2C] via-[#091D2C]/85 to-transparent lg:via-[#091D2C]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091D2C] via-transparent to-transparent lg:hidden" />
          </div>
        </div>

        {/* Hero Content */}
        <Container className="w-full relative z-10 py-16 sm:py-20">
          <div className="max-w-xl lg:max-w-xl flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-display">
              Business Consulting
            </h1>
            {/* Orange Accent Underline */}
            <div className="w-16 h-[3.5px] bg-[#EB6A4C] mt-3 mb-5 rounded-full" />
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-md">
              Strategic insights. Smarter operations.<br />
              Sustainable growth.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. MAIN CONTENT CONTAINER (TWO COLUMNS) */}
      <Container className="py-12 sm:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* ================= LEFT MAIN CONTENT (8 COLS) ================= */}
          <div className="lg:col-span-8 space-y-10">
            {/* Main Heading & Intro */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2530] font-display leading-snug mb-4">
                Your Premier Partner in Mergers and Acquisitions Business Consulting
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At Exigo Consulting, we&apos;re dedicated to revolutionizing the way businesses operate. With a focus on optimizing company operations and leveraging industry insights, we offer a comprehensive suite of services designed to propel your organization to new heights of competitiveness and success.
              </p>
            </div>

            {/* 5 Feature Rows */}
            <div className="space-y-6">
              {featureRows.map((row, idx) => {
                const Icon = row.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 sm:p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#EBF6F9] text-[#0F6B82] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0B2530] text-base mb-2">
                        {row.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {row.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Callout Banner */}
            <div className="bg-[#EBF6F9] border border-[#0F6B82]/20 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F6B82] text-white flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B2530]">
                    Ready to take your business to the next level?
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600">
                    Click here to learn more about our services and how we can help you achieve your goals.
                  </p>
                </div>
              </div>
              <Link href="/contact" className="shrink-0">
                <button className="bg-[#EB6A4C] hover:bg-[#d8583a] text-white px-5 py-2.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm">
                  Explore Services <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR (4 COLS) ================= */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 h-fit">
            {/* SIDEBAR CARD 1: Exigo Consulting Dark Teal Card */}
            <div className="bg-[#0B343D] text-white p-6 rounded-2xl shadow-md border border-teal-800/40">
              <h3 className="font-bold text-xl text-white mb-3 font-display">
                Exigo Consulting
              </h3>
              <p className="text-xs text-slate-200 mb-6 leading-relaxed">
                At Exigo Consulting, we provide cutting-edge consulting services to clients across diverse industry sectors. Our expertise lies in assisting you in team building, refining sales strategies, and optimizing financial operations.
              </p>

              {/* 3 Highlights */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white">Strategic Guidance</h4>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      Tailored strategies that drive measurable business impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white">Proven Expertise</h4>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      Deep industry knowledge and years of hands-on experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white">End-to-End Support</h4>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      From planning to execution, we&apos;re with you every step of the way.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="block w-full">
                <button className="w-full bg-[#EB6A4C] hover:bg-[#d8583a] text-white py-3 px-4 rounded-md font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm">
                  Start Consultation <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* SIDEBAR CARD 2: Download Brochure */}
            <div className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EBF6F9] text-[#0F6B82] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#0B2530]">Download Brochure</h4>
                  <p className="text-[11px] text-slate-500">
                    Get a detailed overview of our services and approach.
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#0F6B82] shrink-0" />
            </div>

            {/* SIDEBAR CARD 3: Talk to Our Expert */}
            <div className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EBF6F9] text-[#0F6B82] flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#0B2530]">Talk to Our Expert</h4>
                  <p className="text-[11px] text-slate-500">
                    Connect with our consultants for personalized guidance.
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#0F6B82] shrink-0" />
            </div>

            {/* SIDEBAR CARD 4: Related Services */}
            <div className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <h4 className="font-bold text-xs text-[#0B2530]">
                  Related Services
                </h4>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
              <ul className="space-y-2.5">
                {relatedServices.map((rel, idx) => (
                  <li key={idx}>
                    <Link
                      href={rel.href}
                      className="flex items-center gap-2 text-xs text-slate-700 font-medium hover:text-[#0F6B82] transition-colors py-0.5"
                    >
                      <Check className="w-3.5 h-3.5 text-[#0F6B82] shrink-0" />
                      <span>{rel.label}</span>
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
