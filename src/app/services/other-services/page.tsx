"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  ArrowDown,
  Globe,
  ShieldCheck,
  Building2,
  SlidersHorizontal,
  Lightbulb,
  BarChart3,
  Network,
  UserCheck,
  Award,
  Trophy,
  Coins,
  Users,
  Target,
  FileText,
  User,
  Plus,
  Minus,
  Handshake,
  Phone
} from "lucide-react";

export default function OtherServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const servicesList = [
    {
      title: "Family Office & Wealth Strategy",
      description:
        "Structuring multi-generational wealth preservation, capital allocation, and family office governance.",
      icon: Building2
    },
    {
      title: "Joint Ventures & Partnerships",
      description:
        "Cross-border joint venture structuring, strategic alliance negotiations, and consortium building.",
      icon: Globe
    },
    {
      title: "Turnaround & Restructuring",
      description:
        "Crisis management, debt workouts, operational turnaround, and liquidity optimization.",
      icon: SlidersHorizontal
    },
    {
      title: "Corporate Governance Advisory",
      description:
        "Designing ESG frameworks, independent board oversight, and fiduciary compliance structures.",
      icon: ShieldCheck
    }
  ];

  const processSteps = [
    { number: "01", title: "Mandate Brief", icon: Lightbulb },
    { number: "02", title: "Diagnosis", icon: BarChart3 },
    { number: "03", title: "Architecture", icon: Network },
    { number: "04", title: "Partner Match", icon: UserCheck },
    { number: "05", title: "Structuring", icon: ShieldCheck },
    { number: "06", title: "Execution", icon: Award },
    { number: "07", title: "Governance", icon: Handshake }
  ];

  const stats = [
    {
      icon: Trophy,
      value: "100+",
      label: "Bespoke Mandates",
      sublabel: "Specialized strategic advisory"
    },
    {
      icon: Coins,
      value: "₹250Cr+",
      label: "Asset Structuring",
      sublabel: "Family office & JV assets"
    },
    {
      icon: Users,
      value: "18+",
      label: "Years Experience",
      sublabel: "In bespoke consulting"
    },
    {
      icon: Target,
      value: "100%",
      label: "Fiduciary Discretion",
      sublabel: "Strict confidentiality"
    }
  ];

  const testimonials = [
    {
      quote:
        "Exigo structured our family office allocation and cross-border joint venture with remarkable precision.",
      author: "Aditya Birla",
      role: "Director, Apex Holdings",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote:
        "Their turnaround squad restored our operational liquidity within 90 days during a critical restructuring phase.",
      author: "Sunita Roy",
      role: "Chairperson, Veda Enterprises",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote:
        "Exceptional governance framework and strategic advisory for unique corporate expansion challenges.",
      author: "Harish Vardhan",
      role: "Managing Partner, Vardhan Capital",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ];

  const faqs = [
    {
      question: "What types of custom mandates do you handle?",
      answer:
        "We handle family office structuring, cross-border joint ventures, crisis turnarounds, ESG setups, and strategic consortiums."
    },
    {
      question: "How do you assemble the advisory team?",
      answer:
        "We assemble bespoke advisory squads comprising senior partners, industry domain specialists, and legal/tax advisors tailored to your mandate."
    },
    {
      question: "Is confidentiality guaranteed for family offices?",
      answer:
        "Yes, all family office and bespoke corporate mandates operate under strict non-disclosure fiduciary standards."
    },
    {
      question: "Can you assist with international joint ventures?",
      answer:
        "Yes, we have deep experience structuring cross-border alliances and international consortium agreements."
    }
  ];

  const relatedServices = [
    { label: "Mergers & Acquisitions", href: "/services/mergers-acquisitions" },
    { label: "Fundraising Services", href: "/services/fundraising" },
    { label: "Business Consulting", href: "/services/business-consulting" },
    { label: "Talent Acquisition", href: "/services/talent-acquisition" }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#1E293B]">
      {/* 1. HERO SECTION matching exact template */}
      <section className="relative bg-[#091D2C] text-white min-h-[500px] lg:min-h-[540px] flex items-center overflow-hidden w-full">
        {/* Right-side hero background image with gradient fade to left */}
        <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
          <div className="w-full lg:w-[58%] h-full relative">
            <img
              src="/images/strategic_advisory_hero.png"
              alt="Bespoke Strategic Advisory"
              className="w-full h-full object-cover object-center"
            />
            {/* Smooth dark navy gradient overlay blending image into background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#091D2C] via-[#091D2C]/85 to-transparent lg:via-[#091D2C]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091D2C] via-transparent to-transparent lg:hidden" />
          </div>
        </div>

        {/* Hero Content */}
        <Container className="w-full relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-xl lg:max-w-xl flex flex-col items-start text-left">
            <span className="text-[#38BDF8] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3">
              EXPERTS IN
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] font-display">
              Bespoke Strategic &amp;<br />
              Custom Advisory
            </h1>
            {/* Orange Accent Underline */}
            <div className="w-16 h-[3.5px] bg-[#EB6A4C] mt-4 mb-6 rounded-full" />
            <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed max-w-md">
              Specialized advisory for joint ventures,<br className="hidden sm:inline" />
              family offices and turnaround mandates.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <button className="px-7 py-3.5 bg-[#EB6A4C] hover:bg-[#d8583a] text-white text-sm sm:text-base font-semibold rounded-md flex items-center gap-2.5 transition-all shadow-lg hover:shadow-orange-500/20">
                  Book Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </Link>
              <a href="#process">
                <button className="px-6 py-3.5 bg-[#091D2C]/80 border border-white/40 hover:bg-white/10 text-white text-sm sm:text-base font-semibold rounded-md flex items-center gap-2.5 transition-all backdrop-blur-sm">
                  Our Process <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. TRUSTED BY LEADING COMPANIES LOGO BAR */}
      <section className="bg-white border-b border-slate-200 py-8">
        <Container>
          <p className="text-center text-xs font-bold text-slate-400 tracking-widest uppercase mb-6">
            TRUSTED BY LEADING COMPANIES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Microsoft */}
            <div className="flex items-center gap-2 font-bold text-slate-700 text-lg">
              <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                <span className="bg-[#F25022] rounded-[1px]" />
                <span className="bg-[#7FBA00] rounded-[1px]" />
                <span className="bg-[#00A4EF] rounded-[1px]" />
                <span className="bg-[#FFB900] rounded-[1px]" />
              </div>
              <span className="font-semibold text-slate-800 text-base tracking-tight">Microsoft</span>
            </div>

            {/* Amazon */}
            <div className="flex items-center font-bold text-slate-800 text-lg tracking-tight">
              amazon
            </div>

            {/* Oracle */}
            <div className="flex items-center font-black text-[#C7254E] tracking-widest text-base">
              ORACLE
            </div>

            {/* TCS */}
            <div className="flex items-center gap-1 font-bold text-slate-800 text-sm">
              <span className="bg-slate-800 text-white px-1.5 py-0.5 rounded text-xs">tcs</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-tighter hidden sm:inline">Tata Consultancy Services</span>
            </div>

            {/* Infosys */}
            <div className="flex items-center font-bold text-[#007CC3] text-base tracking-tight">
              Infosys
            </div>

            {/* Adobe */}
            <div className="flex items-center gap-1 font-bold text-slate-800 text-base">
              <span className="text-[#FF0000] font-black text-xl">A</span>
              <span className="text-slate-800">Adobe</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. MAIN CONTENT CONTAINER (TWO COLUMNS) */}
      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* ================= LEFT MAIN CONTENT (8 COLS) ================= */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* SECTION 1: OUR SERVICES */}
            <div>
              <h2 className="text-center text-xs font-extrabold uppercase tracking-widest text-[#0B2530] mb-8">
                OUR SERVICES
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {servicesList.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-full bg-[#EBF6F9] text-[#0F6B82] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-[#0B2530] text-base mb-2">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="mt-5 flex justify-end">
                        <span className="w-8 h-8 rounded-full bg-slate-50 text-[#EB6A4C] flex items-center justify-center group-hover:bg-[#EB6A4C] group-hover:text-white transition-all">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SECTION 2: OUR ADVISORY PROCESS */}
            <div id="process" className="pt-4">
              <h2 className="text-center text-xs font-extrabold uppercase tracking-widest text-[#0B2530] mb-10">
                OUR ADVISORY PROCESS
              </h2>

              {/* Connected Steps Grid */}
              <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden sm:block absolute top-[28px] left-[6%] right-[6%] h-[2px] border-t-2 border-dashed border-slate-300 z-0" />

                <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 relative z-10">
                  {processSteps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center text-center group"
                      >
                        {/* Step Number Circle */}
                        <div className="w-12 h-12 rounded-full bg-[#0B2530] text-white font-bold text-xs flex items-center justify-center shadow-md mb-3 border-2 border-white group-hover:scale-110 group-hover:bg-[#0F6B82] transition-all">
                          {step.number}
                        </div>
                        {/* Icon Container */}
                        <div className="w-10 h-10 rounded-full bg-[#EBF6F9] text-[#0F6B82] flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5" />
                        </div>
                        {/* Label */}
                        <span className="text-[11px] font-semibold text-[#0B2530] leading-tight max-w-[90px]">
                          {step.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SECTION 3: STATS GRID */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/90 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center"
                    >
                      <div className="w-10 h-10 rounded-full bg-orange-50 text-[#EB6A4C] flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#0B2530]">
                        {stat.value}
                      </span>
                      <span className="font-bold text-xs text-[#0B2530] mt-1">
                        {stat.label}
                      </span>
                      <span className="text-[11px] text-slate-500 mt-0.5">
                        {stat.sublabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SECTION 4: ABOUT EXIGO CONSULTING */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Text */}
                <div className="md:col-span-7 flex flex-col items-start">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B2530] mb-3">
                    ABOUT EXIGO CONSULTING
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Exigo Consulting designs tailored advisory mandates for complex corporate, family office, cross-border joint venture, and organizational restructuring challenges.
                  </p>
                  
                  {/* Badges */}
                  <div className="grid grid-cols-3 gap-3 w-full border-t border-slate-100 pt-5">
                    <div className="flex flex-col items-center text-center p-2 rounded-lg bg-slate-50">
                      <div className="w-7 h-7 rounded-full bg-[#EBF6F9] text-[#0F6B82] flex items-center justify-center mb-1">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-xs text-[#0B2530]">18+ Years</span>
                      <span className="text-[10px] text-slate-500">Industry Experience</span>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 rounded-lg bg-slate-50">
                      <div className="w-7 h-7 rounded-full bg-[#EBF6F9] text-[#0F6B82] flex items-center justify-center mb-1">
                        <UserCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-xs text-[#0B2530]">Expert Team</span>
                      <span className="text-[10px] text-slate-500">Domain Specialists</span>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 rounded-lg bg-slate-50">
                      <div className="w-7 h-7 rounded-full bg-[#EBF6F9] text-[#0F6B82] flex items-center justify-center mb-1">
                        <Handshake className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-xs text-[#0B2530]">End-to-End</span>
                      <span className="text-[10px] text-slate-500">Support</span>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="md:col-span-5 relative rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                    alt="Exigo Consulting Headquarters"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  {/* Overlaid Badge */}
                  <div className="absolute inset-x-3 bottom-3 bg-[#0B343D]/95 text-white p-3.5 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg">
                    <p className="text-[11px] font-medium leading-snug">
                      Our mission is to solve complex strategic challenges with absolute discretion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 5: WHAT OUR CLIENTS SAY */}
            <div>
              <h2 className="text-center text-xs font-extrabold uppercase tracking-widest text-[#0B2530] mb-8">
                WHAT OUR CLIENTS SAY
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
                  >
                    <div>
                      {/* 5 Stars */}
                      <div className="flex gap-1 text-amber-500 mb-3 text-sm">
                        {"★".repeat(5)}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed italic mb-4">
                        &quot;{t.quote}&quot;
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className="w-9 h-9 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <h4 className="font-bold text-xs text-[#0B2530]">
                          {t.author}
                        </h4>
                        <p className="text-[10px] text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Dots Indicator */}
              <div className="flex justify-center items-center gap-2 mt-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0B2530]" />
                <span className="w-2 h-2 rounded-full bg-slate-300" />
                <span className="w-2 h-2 rounded-full bg-slate-300" />
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDEBAR (4 COLS) ================= */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 h-fit">
            
            {/* SIDEBAR CARD 1: Start a Conversation */}
            <div className="bg-[#0B343D] text-white p-6 rounded-xl shadow-md border border-teal-800/40">
              <h3 className="font-bold text-lg text-white mb-2 font-display">
                Start a Conversation
              </h3>
              <p className="text-xs text-slate-200 mb-6 leading-relaxed">
                Let&apos;s discuss how we can help you achieve your growth goals.
              </p>
              <Link href="/contact" className="block w-full">
                <button className="w-full bg-[#EB6A4C] hover:bg-[#d8583a] text-white py-3 px-4 rounded-md font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-sm">
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* SIDEBAR CARD 2: Download Brochure */}
            <div className="bg-white border border-slate-200/90 p-5 rounded-xl shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#EBF6F9] text-[#0F6B82] flex items-center justify-center mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#0B2530]">Download Brochure</h4>
              <p className="text-xs text-slate-500 mt-1 mb-3">
                Get detailed insights into our services and approach.
              </p>
              <a
                href="/contact"
                className="text-xs font-bold text-[#0F6B82] flex items-center gap-1 hover:underline"
              >
                Download Now <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* SIDEBAR CARD 3: Contact an Expert */}
            <div className="bg-white border border-slate-200/90 p-5 rounded-xl shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#EBF6F9] text-[#0F6B82] flex items-center justify-center mb-3">
                <User className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#0B2530]">Contact an Expert</h4>
              <p className="text-xs text-slate-500 mt-1 mb-2">
                Speak with one of our specialists today.
              </p>
              <a
                href="tel:+918008922112"
                className="text-sm font-extrabold text-[#0F6B82] hover:underline flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                +91 80089 22112
              </a>
            </div>

            {/* SIDEBAR CARD 4: Our Related Services */}
            <div className="bg-white border border-slate-200/90 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#0B2530] mb-3 pb-2 border-b border-slate-100">
                Our Related Services
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

            {/* SIDEBAR CARD 5: FREQUENTLY ASKED QUESTIONS */}
            <div className="bg-white border border-slate-200/90 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#0B2530] mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h4>
              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-100 rounded-lg overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-3 text-xs font-semibold text-[#0B2530] flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5 text-[#0F6B82] shrink-0" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-3 pb-3 text-[11px] text-slate-500 leading-relaxed border-t border-slate-100 pt-2 bg-slate-50/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* 4. BOTTOM FULL-WIDTH CTA BANNER */}
        <div className="bg-[#0B2530] text-white py-10 px-6 sm:px-10 rounded-2xl shadow-xl mt-16 flex flex-col md:flex-row justify-between items-center gap-6 border border-white/10">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Ready to structure your strategic mandate?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Let&apos;s discuss your next move and build the future together.
            </p>
          </div>
          <Link href="/contact" className="shrink-0">
            <button className="bg-[#EB6A4C] hover:bg-[#d8583a] text-white px-7 py-3.5 rounded-md font-semibold text-sm flex items-center gap-2 transition-all shadow-lg hover:shadow-orange-500/20">
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
