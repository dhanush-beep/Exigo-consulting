"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Trophy,
  UserCheck,
  Building2,
  Briefcase,
  ChevronRight,
  Quote
} from "lucide-react";
import Container from "@/components/ui/Container";

export default function MeetRajeshClient() {
  const statsBar = [
    {
      icon: Award,
      number: "38+ Years",
      label: "Across IT, Telecom & Healthcare",
    },
    {
      icon: Trophy,
      number: "CEO & Founder",
      label: "Operating & Entrepreneurial Lens",
    },
    {
      icon: Building2,
      number: "IT & Staffing",
      label: "Core Sector Focus",
    },
    {
      icon: Briefcase,
      number: "Sutradhar",
      label: "Founder-to-Founder Advisory",
    },
  ];

  return (
    <div className="bg-white min-h-screen select-none pb-20">
      {/* 1. Dark Hero Banner */}
      <section className="relative py-20 bg-[#07131D] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07131D] via-[#07131D]/90 to-[#07131D]/70" />

        <Container className="relative z-10 text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-extrabold uppercase tracking-widest text-[#3A9FB7] mb-3 block"
          >
            FOUNDER PROFILE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white mb-4"
          >
            Rajesh Gade (RG) — Founder, Advisor &amp; Sutradhar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm sm:text-base text-[#3A9FB7] font-semibold max-w-3xl mb-6"
          >
            38+ years across IT, Communications and Healthcare | Business Leadership | Entrepreneurship | M&amp;A Advisory
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium"
          >
            <Link href="/" className="hover:text-[#4CC9F0] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/about" className="hover:text-[#4CC9F0] transition-colors">
              About Us
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-white font-semibold">Rajesh Gade</span>
          </motion.div>
        </Container>
      </section>

      {/* 2. Profile Details & Bio */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Photo Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 w-full"
            >
              <div className="rounded-3xl bg-[#091823] border border-slate-800 shadow-2xl overflow-hidden group">
                <div className="relative h-[400px] sm:h-[460px] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src="/images/rajesh-gade.png"
                    alt="Rajesh Gade - Founder, Exigo Consulting"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091823] via-transparent to-transparent opacity-90" />
                </div>

                <div className="p-6 sm:p-8 bg-[#091823] border-t border-slate-800 text-white relative">
                  <h3 className="text-3xl sm:text-4xl font-serif italic text-white mb-1 tracking-wide">
                    Rajesh Gade (RG)
                  </h3>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-[#3A9FB7]">
                    Founder, Advisor &amp; Sutradhar
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Master Copy Sections */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-10"
            >
              
              {/* Section 1: The Practitioner Behind the Advisory */}
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
                  BACKGROUND &amp; EXPERIENCE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2730] font-display mb-4">
                  The Practitioner Behind the Advisory
                </h2>
                <div className="w-12 h-1 bg-[#0F6B82] rounded-full mb-6" />
                
                <div className="space-y-4 text-base text-slate-600 leading-relaxed text-left sm:text-justify">
                  <p>
                    Rajesh Gade founded Exigo Consulting after decades spent building, leading and navigating businesses from the inside. His career spans IT infrastructure, communications and healthcare, including Business Head and CEO responsibilities across multiple ventures.
                  </p>
                  <p>
                    Having personally experienced entrepreneurship, business transitions and exits, Rajesh approaches M&amp;A not as a theoretical exercise but as a founder-to-founder conversation. He understands that behind every valuation is a business built over years — and behind every transaction are people, expectations, risks and emotions that need to be managed with care.
                  </p>
                </div>
              </div>

              {/* Section 2: The Sutradhar Approach */}
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
                  ADVISORY METHODOLOGY
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2730] font-display mb-4">
                  The Sutradhar Approach
                </h2>
                <div className="w-12 h-1 bg-[#DE7A66] rounded-full mb-6" />
                
                <div className="space-y-4 text-base text-slate-600 leading-relaxed text-left sm:text-justify">
                  <p>
                    Rajesh describes his role as that of a <strong>Sutradhar</strong>: the thread that connects founders, buyers, investors, advisors and specialists while keeping sight of the larger strategic story.
                  </p>
                  <p>
                    He remains closely involved in mandates — understanding the business, shaping the proposition, opening relevant conversations, navigating negotiations and helping stakeholders maintain momentum through diligence and closure.
                  </p>
                </div>
              </div>

              {/* Section 3: Sector Lens */}
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
                  OPERATING DOMAIN
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2730] font-display mb-4">
                  Sector Lens
                </h2>
                <div className="w-12 h-1 bg-[#0F6B82] rounded-full mb-6" />
                
                <div className="space-y-4 text-base text-slate-600 leading-relaxed text-left sm:text-justify">
                  <p>
                    His experience gives Exigo a practical lens on IT Services and IT Staffing economics: delivery capability, utilization, client concentration, leadership depth, recurring relationships, margins, bench strength, technology practices and the factors that influence strategic value.
                  </p>
                  <p>
                    This operating perspective is complemented by Exigo’s strategic advisors across valuation, law, governance, finance and talent.
                  </p>
                </div>
              </div>

              {/* Section 4: Founder's Note */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FAFBFD] border-l-4 border-[#0F6B82] border-y border-r border-slate-200 relative">
                <Quote className="w-8 h-8 text-[#0F6B82]/20 absolute top-6 right-6" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-3 block">
                  FOUNDER&apos;S NOTE
                </span>
                <p className="text-base sm:text-lg text-[#0B2530] italic font-serif leading-relaxed mb-4">
                  &ldquo;A good transaction is not about bringing two names to the table. It is about understanding why they should be at the same table, creating the right context for the conversation, and staying with them until the story reaches a meaningful conclusion. That, to me, is the role of the Sutradhar.&rdquo;
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-[#DE7A66]">
                  — Rajesh Gade (RG), Founder &amp; Advisory Lead
                </p>
              </div>

            </motion.div>

          </div>
        </Container>
      </section>

      {/* 3. Leadership Highlights */}
      <section className="pb-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-3xl bg-[#091A26] text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {statsBar.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-white/10 last:border-0 pb-6 sm:pb-0 pr-0 sm:pr-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-[#3A9FB7] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white font-display">
                      {item.number}
                    </p>
                    <p className="text-xs text-slate-300 font-medium mt-0.5">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
