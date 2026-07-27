"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  wordRevealVariants,
  paragraphRevealVariants,
  STAGGER,
  APPLE_EASE,
  DURATION,
} from "@/lib/motion";

interface AnimatedTextProps {
  children: string;
  /** "headline" = word-by-word mask reveal, "paragraph" = full block reveal */
  as?: "headline" | "paragraph";
  /** HTML element tag */
  element?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  /** Stagger delay per word (headline mode only) */
  staggerDelay?: number;
  /** Additional delay before animation starts */
  delay?: number;
}

/**
 * AnimatedText — Premium text reveal animation.
 *
 * Headlines: Each word reveals separately via bottom-to-top mask reveal
 *   (28px distance, 10px blur, 40ms stagger per word).
 *
 * Paragraphs: Entire paragraph reveals upward
 *   (20px distance, 8px blur).
 *
 * No typing effects — mask reveal only.
 */
export default function AnimatedText({
  children,
  as = "headline",
  element = "h2",
  className = "",
  staggerDelay = STAGGER.default,
  delay = 0,
}: AnimatedTextProps) {
  if (as === "paragraph") {
    const MotionTag = motion[element] as typeof motion.p;
    return (
      <MotionTag
        variants={paragraphRevealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: DURATION.major,
          ease: APPLE_EASE,
          delay,
        }}
        className={className}
      >
        {children}
      </MotionTag>
    );
  }

  // Headline mode — word-by-word mask reveal
  const words = children.split(" ");
  const MotionTag = motion[element] as typeof motion.h2;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        staggerChildren: staggerDelay,
        delayChildren: delay,
      }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={wordRevealVariants}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
