"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Handshake, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import AnimatedIcon from "../motion/AnimatedIcon";
import {
  APPLE_EASE,
  DURATION,
  buttonInteraction,
  mockupRevealVariants,
} from "@/lib/motion";

export default function TransformCtaBanner() {
  return (
    <section className="py-16 sm:py-20 bg-[#08131C] relative overflow-hidden select-none">
      {/* Background — scale morph */}
      <motion.div
        initial={{ scale: 1.02, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: DURATION.background, ease: APPLE_EASE }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-[#0F6B82]/25 via-transparent to-transparent pointer-events-none"
      />

      <Container className="relative z-10">
        <motion.div
          variants={mockupRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-8 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-r from-[#0B1E2B] via-[#0E2838] to-[#0B1E2B] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[var(--shadow-elevated)] promote-layer"
          style={{ perspective: "1000px" }}
        >
          {/* Left Side */}
          <div className="flex items-center gap-6 max-w-2xl">
            <AnimatedIcon delay={0.2} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0F6B82]/20 border border-[#3A9FB7]/40 flex items-center justify-center text-[#4CC9F0] shrink-0 shadow-[0_0_25px_rgba(58,159,183,0.3)]">
              <Handshake className="w-8 h-8 sm:w-10 sm:h-10" />
            </AnimatedIcon>

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display mb-2">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Let&apos;s discuss how we can help you achieve your strategic objectives through the right M&amp;A opportunities.
              </p>
            </div>
          </div>

          {/* Right Side — CTA Button with spring physics */}
          <div className="flex flex-col items-center md:items-end shrink-0">
            <Link href="/contact">
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 12px 35px rgba(15,107,130,0.6)",
                  transition: { duration: DURATION.micro },
                }}
                whileTap={buttonInteraction.tap}
                className="px-8 py-4 rounded-full bg-[#0F6B82] hover:bg-[#155B6D] text-white font-bold text-base shadow-[var(--shadow-button)] flex items-center gap-2 group color-transition"
              >
                <span>Start a Confidential Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>
            <p className="text-xs text-slate-400 mt-2 font-medium">
              Exploratory, confidential, and partner-led
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
