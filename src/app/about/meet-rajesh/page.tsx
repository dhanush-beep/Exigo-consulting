"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Globe,
  Trophy,
  UserCheck,
  HeartHandshake,
  BarChart3,
  ChevronRight
} from "lucide-react";
import Container from "@/components/ui/Container";

export default function MeetRajeshPage() {
  const statsBar = [
    {
      icon: Award,
      number: "35+",
      label: "Years of Experience",
    },
    {
      icon: Users,
      number: "500+",
      label: "Deals Closed",
    },
    {
      icon: Globe,
      number: "20+",
      label: "Industries Served",
    },
    {
      icon: Trophy,
      number: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <div className="bg-white min-h-screen select-none pb-20">
      {/* 1. Dark Hero Banner Matching Screenshot */}
      <section className="relative py-20 bg-[#07131D] text-white overflow-hidden">
        {/* Background Image Overlay with Dark Gradient */}
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
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif tracking-tight text-white mb-4"
          >
            Meet Rajesh
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
            <span className="text-white font-semibold">Meet Our CEO</span>
          </motion.div>
        </Container>
      </section>

      {/* 2. Main Profile Card Left + Biography Content Right */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Executive Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 w-full"
            >
              <div className="rounded-3xl bg-[#091823] border border-slate-800 shadow-2xl overflow-hidden group">
                {/* Photo */}
                <div className="relative h-[400px] sm:h-[460px] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src="/images/rajesh-gade.png"
                    alt="Rajesh Gade - Chief Executive Officer"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091823] via-transparent to-transparent opacity-90" />
                </div>

                {/* Dark Card Footer Overlay */}
                <div className="p-6 sm:p-8 bg-[#091823] border-t border-slate-800 text-white relative">
                  <h3 className="text-3xl sm:text-4xl font-serif italic text-white mb-1 tracking-wide">
                    Rajesh Gade
                  </h3>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-[#3A9FB7] mb-6">
                    Chief Executive Officer
                  </p>

                  {/* 3 Quick Stats Row */}
                  <div className="grid grid-cols-3 gap-3 border-t border-slate-800 pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-8 h-8 rounded-full bg-[#0F6B82]/20 border border-[#3A9FB7]/40 flex items-center justify-center text-[#4CC9F0] mb-2">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <p className="text-base sm:text-lg font-bold text-white font-display leading-none">
                        35+ Years
                      </p>
                      <p className="text-[10px] text-slate-400 font-medium mt-1">
                        Experience
                      </p>
                    </div>

                    <div className="flex flex-col items-center text-center border-x border-slate-800 px-1">
                      <div className="w-8 h-8 rounded-full bg-[#0F6B82]/20 border border-[#3A9FB7]/40 flex items-center justify-center text-[#4CC9F0] mb-2">
                        <HeartHandshake className="w-4 h-4" />
                      </div>
                      <p className="text-base sm:text-lg font-bold text-white font-display leading-none">
                        500+
                      </p>
                      <p className="text-[10px] text-slate-400 font-medium mt-1">
                        Deals Closed
                      </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-8 h-8 rounded-full bg-[#0F6B82]/20 border border-[#3A9FB7]/40 flex items-center justify-center text-[#4CC9F0] mb-2">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <p className="text-base sm:text-lg font-bold text-white font-display leading-none">
                        20+
                      </p>
                      <p className="text-[10px] text-slate-400 font-medium mt-1">
                        Industries Served
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Biography Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Meet our CEO */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2730] font-display mb-3">
                  Meet our CEO
                </h2>
                <div className="w-12 h-1 bg-[#0F6B82] rounded-full mb-6" />
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Welcome to Exigo Consulting, where we redefine mergers and acquisitions under the visionary leadership of our CEO, Rajesh Gade. Rajesh, while a driving force, leads with the support of a strategic advisory team, ensuring holistic and innovative solutions for our clients.
                </p>
              </div>

              {/* About Our CEO */}
              <div>
                <h3 className="text-xl font-bold text-[#1B2730] font-display mb-2">
                  About Our CEO:
                </h3>
                <div className="w-10 h-0.5 bg-[#DE7A66] rounded-full mb-4" />
                <p className="text-base text-slate-600 leading-relaxed">
                  Rajesh Gade is a trailblazer in mergers and acquisitions with extensive experience and a proven track record. He has guided numerous clients through the complexities of buying and selling businesses, delivering exceptional results across the IT industry. Rajesh&apos;s strategic insights and deep market understanding set him apart, ensuring optimal outcomes for his clients.
                </p>
              </div>

              {/* Our Strategic Advisory Team */}
              <div>
                <h3 className="text-xl font-bold text-[#1B2730] font-display mb-2">
                  Our Strategic Advisory Team:
                </h3>
                <div className="w-10 h-0.5 bg-[#0F6B82] rounded-full mb-4" />
                <div className="space-y-4">
                  <p className="text-base text-slate-600 leading-relaxed">
                    While Rajesh is at the helm, he is supported by a talented and experienced strategic advisory team. This team brings diverse expertise and perspectives, enhancing our ability to navigate complex M&amp;A processes. Together, they ensure that every client receives personalized and highly effective strategies tailored to their specific needs.
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed">
                    At Exigo Consulting, we combine Rajesh&apos;s visionary leadership with the collective wisdom of our advisory team, positioning us as a leader in M&amp;A known for integrity, success, and transformative growth. Our collaborative approach ensures we deliver unparalleled value and strategic advantages to our clients.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 3. Full Width Stats Counter Bar Matching Screenshot */}
      <section className="pb-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {statsBar.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-slate-100 last:border-0 pb-6 sm:pb-0 pr-0 sm:pr-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#091823] text-[#3A9FB7] flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#1B2730] font-display">
                      {item.number}
                    </p>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">
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
