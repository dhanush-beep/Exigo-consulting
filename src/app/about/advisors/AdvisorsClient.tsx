"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Handshake, ArrowRight, User } from "lucide-react";
import Container from "@/components/ui/Container";

export default function AdvisorsClient() {
  const advisors = [
    {
      name: "Aroop M. Cherian",
      role: "Valuation & Business Modelling",
      image: "/images/advisors/aroop-cherian.jpg",
      bio: "Brings 15+ years of Big Four experience with KPMG and Deloitte. Through Cherian Advisors, he has worked on valuation of business interests and intellectual property for organizations ranging from early-stage ventures to listed companies across India.",
    },
    {
      name: "Arindam Chakraborty",
      role: "Strategy & Business Leadership",
      image: "/images/advisors/arindam-chakraborty.jpg",
      bio: "Brings 35 years of strategic leadership experience in building, scaling and exiting IT businesses in India, including C-level relationships with Fortune 100 clients, growth leadership and board-level strategy exposure.",
    },
    {
      name: "Pavan Kumar Bhattiprolu",
      role: "Corporate Governance & Secretarial",
      image: "/images/advisors/pavan-bhattiprolu.jpg",
      bio: "A Fellow of the Institute of Company Secretaries of India with 20+ years across IPOs, FPOs, M&A and corporate governance. He also brings extensive mentoring, academic and professional-body engagement.",
    },
    {
      name: "Pavan Susarla",
      role: "Talent & Human Capital",
      image: "/images/advisors/pavan-susarla.jpg",
      bio: "Brings 25+ years in talent acquisition, workforce planning and global human capital management across IT verticals, including experience building large vetted talent communities and leading talent teams.",
    },
    {
      name: "P. V. Aruna Kumari",
      role: "Legal & Regulatory",
      image: "/images/advisors/aruna-kumari.jpg",
      bio: "Brings nearly 25 years of legal experience across real estate, litigation, corporate and commercial law, with advisory exposure to MNCs and IT companies on M&A and regulatory matters. Her work also includes workplace-harassment law and mediation.",
    },
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen select-none pb-20">
      {/* 1. Hero */}
      <section className="relative py-20 bg-[#07131D] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07131D] via-[#07131D]/90 to-[#07131D]/70" />

        <Container className="relative z-10 text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-extrabold uppercase tracking-widest text-[#3A9FB7] mb-3 block"
          >
            STRATEGIC ADVISORS &amp; ASSOCIATES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white mb-4 max-w-4xl"
          >
            Specialist Expertise, Connected by One Strategic Thread
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-6"
          >
            No serious transaction is completed by one discipline alone. Exigo brings together experienced specialists across valuation, law, governance, talent and business leadership — with the Sutradhar ensuring every perspective supports the same outcome.
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
            <span className="text-white font-semibold">Strategic Advisors</span>
          </motion.div>
        </Container>
      </section>

      {/* 2. Advisors Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {advisors.slice(0, 3).map((advisor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15,107,130,0.12)" }}
                className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-sm"
              >
                <div>
                  <div className="relative h-64 w-full bg-[#DDE3EA] overflow-hidden flex items-center justify-center">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-[#0F6B82] text-white flex items-center justify-center shadow-md border-4 border-white">
                      <User className="w-5 h-5 fill-current" />
                    </div>
                  </div>

                  <div className="p-6 pt-9 text-center">
                    <h3 className="text-xl font-bold text-[#1B2730] font-display mb-1">
                      {advisor.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0F6B82] mb-3">
                      {advisor.role}
                    </p>
                    <div className="w-8 h-0.5 bg-[#DE7A66] mx-auto mb-4" />
                    <p className="text-xs text-slate-600 leading-relaxed text-left sm:text-justify font-normal">
                      {advisor.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.slice(3, 5).map((advisor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.12 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15,107,130,0.12)" }}
                className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-sm"
              >
                <div>
                  <div className="relative h-64 w-full bg-[#DDE3EA] overflow-hidden flex items-center justify-center">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-[#0F6B82] text-white flex items-center justify-center shadow-md border-4 border-white">
                      <User className="w-5 h-5 fill-current" />
                    </div>
                  </div>

                  <div className="p-6 pt-9 text-center">
                    <h3 className="text-xl font-bold text-[#1B2730] font-display mb-1">
                      {advisor.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0F6B82] mb-3">
                      {advisor.role}
                    </p>
                    <div className="w-8 h-0.5 bg-[#DE7A66] mx-auto mb-4" />
                    <p className="text-xs text-slate-600 leading-relaxed text-left sm:text-justify font-normal">
                      {advisor.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. CTA Banner */}
      <section className="pt-4 pb-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#091A26] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
          >
            <div className="flex items-center gap-6 max-w-2xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0F6B82]/20 border border-[#3A9FB7]/40 flex items-center justify-center text-[#4CC9F0] shrink-0 shadow-lg">
                <Handshake className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-1">
                  Partner with Experts.{" "}
                  <span className="text-[#DE7A66]">Achieve Extraordinary Results.</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Connect with our team today and take the first step towards strategic growth.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <Link href="/contact">
                <button className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#091A26] font-bold text-sm transition-all duration-300 shadow-lg hover:scale-[1.04] flex items-center gap-2 group">
                  <span>Start a Confidential Conversation</span>
                  <ArrowRight className="w-4 h-4 text-[#0F6B82] group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
