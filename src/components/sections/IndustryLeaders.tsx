"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import AnimatedCard from "../motion/AnimatedCard";
import { APPLE_EASE, DURATION, STAGGER } from "@/lib/motion";

export default function IndustryLeaders() {
  const logos = [
    { name: "Deloitte.", font: "font-serif font-black tracking-tight text-xl" },
    { name: "EY", font: "font-sans font-black text-2xl tracking-widest" },
    { name: "pwc", font: "font-serif font-extrabold text-2xl lowercase tracking-wider" },
    { name: "KPMG", font: "font-sans font-black text-2xl tracking-widest" },
    { name: "J.P.Morgan", font: "font-serif font-bold text-xl tracking-tight" },
    { name: "Morgan Stanley", font: "font-serif font-semibold text-lg tracking-tight" },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100 select-none">
      <Container>
        {/* Section label — paragraph reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.major, ease: APPLE_EASE }}
          className="text-center mb-8"
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-slate-400">
            TRUSTED BY INDUSTRY LEADERS
          </p>
        </motion.div>

        {/* Logos — staggered card reveal with smooth color interpolation on hover */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: STAGGER.default, delayChildren: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 md:gap-20"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 24,
                  scale: 0.95,
                  filter: "blur(10px)",
                },
                visible: {
                  opacity: 0.8,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: {
                    duration: DURATION.major,
                    ease: APPLE_EASE,
                  },
                },
              }}
              whileHover={{
                scale: 1.08,
                opacity: 1,
                color: "#0F6B82",
                transition: { duration: DURATION.micro },
              }}
              className={`text-slate-700 cursor-pointer color-transition ${logo.font}`}
            >
              {logo.name}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
