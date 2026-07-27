"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  ChevronRight,
  Handshake,
  ArrowRight,
  User
} from "lucide-react";
import LinkedinIcon from "@/components/ui/LinkedinIcon";
import Container from "@/components/ui/Container";

export default function AdvisorsPage() {
  const advisors = [
    {
      name: "Aroop Cherian",
      image: "/images/advisors/aroop-cherian.jpg",
      bio: "Aroop M Cherian, with over 15 years of Big4 experience (KPMG and Deloitte), leads the financial valuation and business modelling services. Aroop is the founder of Cherian Advisors. Aroop has an experience of over 15 years valuing business interests and intellectual property. In India, he works closely with an array of clients ranging from startups to large listed companies.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Arindam Chakraborty",
      image: "/images/advisors/arindam-chakraborty.jpg",
      bio: "Arindam Chakraborty has 35 years of strategic leadership, creating, scaling, and exiting profitable businesses for Indian IT firms. He manages C-level relationships with Fortune 100 clients, builds business leaders achieving revenue growth beyond expectations. Arindam scales businesses, presents budgets to the Board, solves complex challenges, and excels in sports and debate.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Pavan Kumar Bhattiprolu",
      image: "/images/advisors/pavan-bhattiprolu.jpg",
      bio: "Pavan Kumar Bhattiprolu, a Fellow of the Institute of Company Secretaries of India, has 20+ years of expertise in IPOs, FPOs, M&A, and Corporate Governance. He has mentored 400 professionals and received five IIPM awards for academic contributions. Pavan is a regular speaker at professional bodies and law schools.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Pavan Susarla",
      image: "/images/advisors/pavan-susarla.jpg",
      bio: "Pavan Susarla is a seasoned business leader specializing in talent acquisition, workforce planning, and global human capital management. With over 25 years in IT, he led large teams across verticals in top consulting firms. Pavan's key achievement includes building the world's largest vetted talent community, connecting global organizations with skilled professionals globally.",
      linkedin: "https://linkedin.com",
    },
    {
      name: "P.V.Aruna Kumari",
      image: "/images/advisors/aruna-kumari.jpg",
      bio: "Aruna, with nearly 25 years of legal expertise in Real Estate, Litigation, Corporate and Commercial laws, and more, is renowned for consultative services to MNCs and IT giants. She excels in corporate transactions, including mergers, acquisitions, and regulatory compliance, and is a respected authority on workplace sexual harassment and mediation.",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen select-none pb-20">
      {/* 1. Dark Executive Hero Banner */}
      <section className="relative py-20 bg-[#07131D] text-white overflow-hidden">
        {/* Dark City Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 filter brightness-[0.5]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07131D] via-[#07131D]/90 to-[#07131D]/70" />

        <Container className="relative z-10 text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white mb-4"
          >
            Strategic Advisors / Associates
          </motion.h1>

          {/* Breadcrumb Navigation */}
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
            <span className="text-white font-semibold">Our Team</span>
          </motion.div>
        </Container>
      </section>

      {/* 2. Intro Section "Join Us on a Journey of Distinction" */}
      <section className="py-14 text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            {/* Top Icon Badge */}
            <div className="w-12 h-12 rounded-full bg-[#0F6B82]/10 border border-[#0F6B82]/20 flex items-center justify-center text-[#0F6B82] mb-4">
              <Users className="w-6 h-6" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2730] font-display mb-3">
              Join Us on a Journey of Distinction
            </h2>

            <div className="w-12 h-0.5 bg-[#DE7A66] rounded-full mb-5" />

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl">
              Discover the unparalleled expertise and commitment to excellence that define Exigo Consulting.
              Under the strong leadership of Rajesh Gade and our dedicated team, your M&amp;A objectives are not just met but exceeded.
              Experience the difference in mergers and acquisitions with Exigo Consulting for a transformative partnership.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 3. Strategic Advisors Cards Grid (Pixel-Perfect Match to Screenshot) */}
      <section className="pb-20">
        <Container>
          {/* Top Row: 3 Cards */}
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
                  {/* Gray Photo Container Header Frame */}
                  <div className="relative h-64 w-full bg-[#DDE3EA] overflow-hidden flex items-center justify-center">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    
                    {/* Left Circular Teal User Icon Badge overlapping bottom line */}
                    <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-[#0F6B82] text-white flex items-center justify-center shadow-md border-4 border-white">
                      <User className="w-5 h-5 fill-current" />
                    </div>

                    {/* Right Circular LinkedIn Badge overlapping bottom line */}
                    <a
                      href={advisor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -bottom-4 right-6 w-8 h-8 rounded-full bg-[#0077B5] text-white flex items-center justify-center shadow-md border-2 border-white hover:scale-110 transition-transform"
                      aria-label={`${advisor.name}'s LinkedIn`}
                    >
                      <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
                    </a>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 pt-9 text-center">
                    <h3 className="text-xl font-bold text-[#1B2730] font-display mb-1">
                      {advisor.name}
                    </h3>
                    <div className="w-8 h-0.5 bg-[#DE7A66] mx-auto mb-4" />
                    <p className="text-xs text-slate-500 leading-relaxed font-normal text-left sm:text-justify">
                      {advisor.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: 2 Cards Centered */}
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
                  {/* Gray Photo Container Header Frame */}
                  <div className="relative h-64 w-full bg-[#DDE3EA] overflow-hidden flex items-center justify-center">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    
                    {/* Left Circular Teal User Icon Badge overlapping bottom line */}
                    <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-full bg-[#0F6B82] text-white flex items-center justify-center shadow-md border-4 border-white">
                      <User className="w-5 h-5 fill-current" />
                    </div>

                    {/* Right Circular LinkedIn Badge overlapping bottom line */}
                    <a
                      href={advisor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -bottom-4 right-6 w-8 h-8 rounded-full bg-[#0077B5] text-white flex items-center justify-center shadow-md border-2 border-white hover:scale-110 transition-transform"
                      aria-label={`${advisor.name}'s LinkedIn`}
                    >
                      <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
                    </a>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 pt-9 text-center">
                    <h3 className="text-xl font-bold text-[#1B2730] font-display mb-1">
                      {advisor.name}
                    </h3>
                    <div className="w-8 h-0.5 bg-[#DE7A66] mx-auto mb-4" />
                    <p className="text-xs text-slate-500 leading-relaxed font-normal text-left sm:text-justify">
                      {advisor.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Partner with Experts CTA Banner (Dark Navy Theme Matching Screenshot 1:1) */}
      <section className="pt-4 pb-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#091A26] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
          >
            {/* Left Column: Handshake Circle + Text */}
            <div className="flex items-center gap-6 max-w-2xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0F6B82]/20 border border-[#3A9FB7]/40 flex items-center justify-center text-[#4CC9F0] shrink-0 shadow-[0_0_25px_rgba(58,159,183,0.3)]">
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

            {/* Right Column: White Pill Button */}
            <div className="shrink-0">
              <Link href="/contact">
                <button className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#091A26] font-bold text-sm transition-all duration-300 shadow-lg hover:scale-[1.04] flex items-center gap-2 group">
                  <span>Connect with Us</span>
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
