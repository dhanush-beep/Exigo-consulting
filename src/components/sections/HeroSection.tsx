"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Globe,
  CheckCircle,
} from "lucide-react";
import Container from "../ui/Container";
import AnimatedText from "../motion/AnimatedText";
import AnimatedCard from "../motion/AnimatedCard";
import AnimatedIcon from "../motion/AnimatedIcon";
import {
  APPLE_EASE,
  SPRING_CONFIG,
  DURATION,
  buttonInteraction,
  cardRevealVariants,
  mockupRevealVariants,
} from "@/lib/motion";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll — background moves slower, foreground faster
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothY = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const bgY = useTransform(smoothY, [0, 1], ["0%", "18%"]);
  const cardsY = useTransform(smoothY, [0, 1], ["0%", "-12%"]);
  const contentY = useTransform(smoothY, [0, 1], ["0px", "-8px"]);
  const opacityFade = useTransform(smoothY, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A1722] text-white pt-12 pb-20 select-none"
    >
      {/* Background with Parallax (moves SLOWER — depth layer) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 opacity-40 pointer-events-none promote-layer"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-[0.6] contrast-[1.2]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111A] via-[#0A1722]/90 to-[#07111A]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07111A]/60 via-transparent to-[#0A1722]" />
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-0" />

      {/* Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#0F6B82]/30 blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#DE7A66]/20 blur-[140px]"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column — Text & CTA */}
          <motion.div
            style={{ opacity: opacityFade, y: contentY }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Tagline — fade + blur + slide */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: DURATION.major, ease: APPLE_EASE, delay: 0.3 }}
              className="inline-flex items-center gap-2"
            >
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-[#3A9FB7]">
                FOUNDER-LED • SECTOR FOCUSED • SUTRADHAR
              </span>
            </motion.div>

            {/* Headline — word-by-word mask reveal */}
            <AnimatedText
              as="headline"
              element="h1"
              delay={0.4}
              className="text-4xl sm:text-5xl lg:text-6xl font-[800] tracking-tight leading-[1.1] text-white font-display"
            >
              More Than an Advisor. The Sutradhar of the Transaction.
            </AnimatedText>

            {/* Paragraph — block reveal */}
            <AnimatedText
              as="paragraph"
              element="p"
              delay={0.6}
              className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              Exigo Consulting works with founders, promoters, leadership teams, buyers and investors across IT Services, IT Staffing and Technology. Our role is to connect strategy with execution — and the right opportunity with the right people.
            </AnimatedText>

            {/* CTA Buttons — card reveal pattern */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: DURATION.major, ease: APPLE_EASE, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={buttonInteraction.hover}
                  whileTap={buttonInteraction.tap}
                  className="px-7 py-3.5 rounded-full bg-[#0F6B82] hover:bg-[#155B6D] text-white font-semibold text-base shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-button-hover)] flex items-center gap-2 group color-transition"
                >
                  <span>Start a Confidential Conversation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Quick Stats — staggered card reveal */}
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: DURATION.section, ease: APPLE_EASE, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/10"
            >
              {[
                { number: "20+", label: "Years Experience", icon: Award },
                { number: "£500M+", label: "Transactions Facilitated", icon: TrendingUp },
                { number: "300+", label: "Clients Served", icon: Users },
                { number: "98%", label: "Success Rate", icon: CheckCircle },
              ].map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: DURATION.standard,
                      ease: APPLE_EASE,
                      delay: 0.9 + idx * 0.04,
                    }}
                    className="flex items-center gap-3 group"
                  >
                    <AnimatedIcon index={idx} delay={1.0} className="w-10 h-10 rounded-xl bg-[#0F6B82]/20 border border-[#0F6B82]/40 flex items-center justify-center text-[#3A9FB7] shrink-0 group-hover:bg-[#0F6B82] group-hover:text-white color-transition">
                      <IconComp className="w-5 h-5" />
                    </AnimatedIcon>
                    <div>
                      <p className="text-xl sm:text-2xl font-extrabold text-white font-display tracking-tight">
                        {stat.number}
                      </p>
                      <p className="text-xs text-slate-400 font-medium leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column — Floating Glass Cards (Parallax — moves FASTER) */}
          <motion.div
            style={{ y: cardsY }}
            className="lg:col-span-5 relative flex flex-col gap-5"
          >
            {/* Card 1: Deal Value */}
            <motion.div
              variants={mockupRevealVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: DURATION.section, ease: APPLE_EASE, delay: 0.5 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 24px 60px rgba(15,107,130,0.2)" }}
              className="glass-card-dark p-6 rounded-3xl border border-white/15 relative overflow-hidden promote-layer"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Deal Value</p>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-0.5">£500M+</h4>
                  <p className="text-xs text-slate-400">Total Transactions</p>
                </div>
                <AnimatedIcon delay={0.7} className="w-9 h-9 rounded-full bg-[#0F6B82]/30 border border-[#0F6B82]/50 flex items-center justify-center text-[#4CC9F0]">
                  <TrendingUp className="w-4 h-4" />
                </AnimatedIcon>
              </div>

              <div className="h-16 w-full pt-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 60" fill="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3A9FB7" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3A9FB7" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 50 Q 50 45, 100 30 T 200 25 T 300 5 L 300 60 L 0 60 Z" fill="url(#chartGradient)" />
                  <path d="M 0 50 Q 50 45, 100 30 T 200 25 T 300 5" stroke="#4CC9F0" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="300" cy="5" r="4" fill="#4CC9F0" className="animate-ping" />
                  <circle cx="300" cy="5" r="4" fill="#ffffff" />
                </svg>
              </div>
            </motion.div>

            {/* Card 2: Success Rate */}
            <motion.div
              variants={mockupRevealVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: DURATION.section, ease: APPLE_EASE, delay: 0.7 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 24px 60px rgba(15,107,130,0.2)" }}
              className="glass-card-dark p-6 rounded-3xl border border-white/15 flex items-center justify-between promote-layer"
            >
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Success Rate</p>
                <h4 className="text-3xl font-extrabold text-white font-display mt-0.5">98%</h4>
                <p className="text-xs text-slate-400">Completed Successfully</p>
              </div>

              <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/10"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className="text-[#4CC9F0]"
                    strokeDasharray="98, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    initial={{ strokeDasharray: "0, 100" }}
                    animate={{ strokeDasharray: "98, 100" }}
                    transition={{ duration: 1.8, delay: 1.0, ease: "easeOut" }}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#4CC9F0]" />
                </div>
              </div>
            </motion.div>

            {/* Card 3: Global Reach */}
            <motion.div
              variants={mockupRevealVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: DURATION.section, ease: APPLE_EASE, delay: 0.9 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 24px 60px rgba(15,107,130,0.2)" }}
              className="glass-card-dark p-6 rounded-3xl border border-white/15 relative overflow-hidden promote-layer"
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Global Reach</p>
                  <h4 className="text-2xl font-extrabold text-white font-display mt-0.5">15+</h4>
                  <p className="text-xs text-slate-400">Countries</p>
                </div>
                <AnimatedIcon delay={1.1} className="w-9 h-9 rounded-full bg-[#0F6B82]/30 border border-[#0F6B82]/50 flex items-center justify-center text-[#4CC9F0]">
                  <Globe className="w-4 h-4" />
                </AnimatedIcon>
              </div>

              <div className="h-16 w-full rounded-xl bg-white/5 border border-white/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4CC9F0_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className="absolute left-[25%] top-[40%] w-2 h-2 rounded-full bg-[#4CC9F0] animate-ping" />
                <div className="absolute left-[25%] top-[40%] w-2 h-2 rounded-full bg-[#4CC9F0]" />
                <div className="absolute left-[50%] top-[30%] w-2 h-2 rounded-full bg-[#DE7A66] animate-ping" />
                <div className="absolute left-[50%] top-[30%] w-2 h-2 rounded-full bg-[#DE7A66]" />
                <div className="absolute left-[75%] top-[60%] w-2 h-2 rounded-full bg-[#4CC9F0] animate-ping" />
                <div className="absolute left-[75%] top-[60%] w-2 h-2 rounded-full bg-[#4CC9F0]" />
                <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-300 z-10">
                  Global M&amp;A Network
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}
