"use client";

import React from "react";
import { motion } from "framer-motion";
import { iconRevealVariants, SPRING_CONFIG, STAGGER } from "@/lib/motion";

interface AnimatedIconProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger index */
  index?: number;
  /** Custom delay */
  delay?: number;
}

/**
 * AnimatedIcon — Spring-physics icon reveal.
 *
 * Entry: scale(0.7), rotate(-15°), opacity(0)
 *      → scale(1), rotate(0°), opacity(1)
 *
 * Uses spring physics for natural overshoot (2–3%).
 */
export default function AnimatedIcon({
  children,
  className = "",
  index = 0,
  delay = 0,
}: AnimatedIconProps) {
  return (
    <motion.div
      variants={iconRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        type: "spring",
        ...SPRING_CONFIG,
        delay: delay + index * STAGGER.default,
      }}
      className={className}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}
