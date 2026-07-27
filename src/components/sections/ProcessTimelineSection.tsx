"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, BarChart3, ShieldCheck, Handshake, CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";
import AnimatedText from "../motion/AnimatedText";
import AnimatedIcon from "../motion/AnimatedIcon";
import {
  APPLE_EASE,
  DURATION,
  STAGGER,
  cardRevealVariants,
} from "@/lib/motion";

export default function ProcessTimelineSection() {
  const steps = [
    { num: "01", title: "Discovery", description: "Understanding your goals and objectives", icon: Search },
    { num: "02", title: "Evaluation", description: "Market analysis and opportunity assessment", icon: BarChart3 },
    { num: "03", title: "Due Diligence", description: "In-depth analysis and risk assessment", icon: ShieldCheck },
    { num: "04", title: "Negotiation", description: "Structuring and deal negotiation", icon: Handshake },
    { num: "05", title: "Closing", description: "Successful closing and value realization", icon: CheckCircle2 },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#091520] text-white relative overflow-hidden select-none">
      {/* Background — scale 102% morph instead of fade */}
      <motion.div
        initial={{ scale: 1.02 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: DURATION.background, ease: APPLE_EASE }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0F6B82]/20 via-transparent to-transparent pointer-events-none"
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.major, ease: APPLE_EASE }}
            className="text-xs font-extrabold tracking-[0.25em] uppercase text-[#3A9FB7] mb-3"
          >
            OUR M&amp;A PROCESS
          </motion.p>

          <AnimatedText
            as="headline"
            element="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display"
          >
            A Proven Approach to Success
          </AnimatedText>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: APPLE_EASE, delay: 0.2 }}
            className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#0F6B82]/40 via-[#3A9FB7] to-[#0F6B82]/40 z-0 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardRevealVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: DURATION.major,
                    ease: APPLE_EASE,
                    delay: idx * STAGGER.slow,
                  }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon node — spring reveal */}
                  <AnimatedIcon
                    index={idx}
                    delay={0.15}
                    className="w-14 h-14 rounded-2xl bg-[#0B1E2B] border-2 border-[#3A9FB7] flex items-center justify-center text-[#4CC9F0] shadow-[0_0_20px_rgba(58,159,183,0.3)] group-hover:bg-[#3A9FB7] group-hover:text-white color-transition mb-4 cursor-pointer"
                  >
                    <Icon className="w-6 h-6" />
                  </AnimatedIcon>

                  <span className="text-xs font-bold text-[#3A9FB7] uppercase tracking-widest mb-1">
                    {step.num}
                  </span>

                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
