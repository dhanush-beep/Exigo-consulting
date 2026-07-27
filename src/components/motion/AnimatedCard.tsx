"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  cardRevealVariants,
  APPLE_EASE,
  DURATION,
  STAGGER,
  buttonInteraction,
} from "@/lib/motion";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger index for delay calculation */
  index?: number;
  /** Enable hover scale + shadow interaction */
  hover?: boolean;
  /** Custom hover shadow */
  hoverShadow?: string;
  /** onClick handler */
  onClick?: () => void;
  /** Override delay per card */
  staggerDelay?: number;
}

/**
 * AnimatedCard — Premium card reveal with Apple-grade transitions.
 *
 * Entry: scale(0.95), opacity(0), blur(10px), translateY(24px)
 *      → scale(1), opacity(1), blur(0), translateY(0)
 *
 * Hover: scale(1.03), shadow grows, 180ms
 * Click: scale(1 → 0.97 → 1) spring
 *
 * Shadows are soft Apple-style and animate with the object.
 */
export default function AnimatedCard({
  children,
  className = "",
  index = 0,
  hover = true,
  hoverShadow = "0 20px 50px -12px rgba(15, 107, 130, 0.15), 0 8px 20px -8px rgba(0, 0, 0, 0.06)",
  onClick,
  staggerDelay = STAGGER.default,
}: AnimatedCardProps) {
  return (
    <motion.div
      variants={cardRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: DURATION.major,
        ease: APPLE_EASE,
        delay: index * staggerDelay,
      }}
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.03,
              boxShadow: hoverShadow,
              transition: {
                duration: DURATION.micro,
                ease: APPLE_EASE,
              },
            }
          : undefined
      }
      whileTap={hover ? buttonInteraction.tap : undefined}
      onClick={onClick}
      className={className}
      style={{
        willChange: "transform, opacity, filter",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
}
