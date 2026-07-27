"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  APPLE_EASE,
  DURATION,
  BLUR,
  DISTANCE,
  staggerContainerVariants,
} from "@/lib/motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** If true, adds scroll-driven exit compression (scale down + blur + slide up) */
  exitCompression?: boolean;
  /** Custom delay before children begin animating */
  delay?: number;
  /** HTML tag to render */
  as?: "section" | "div" | "article";
}

/**
 * AnimatedSection — wraps a page section with viewport-triggered reveal.
 *
 * On enter: children stagger in using the global stagger orchestration.
 * On exit (if exitCompression): section compresses → scales to 96% → blurs → slides up.
 */
export default function AnimatedSection({
  children,
  className = "",
  exitCompression = false,
  delay = 0,
  as = "section",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll-driven exit compression
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Only apply exit transforms if exitCompression is enabled
  const exitScale = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [1, 1, exitCompression ? 0.96 : 1]
  );
  const exitOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [1, 1, exitCompression ? 0.7 : 1]
  );
  const exitY = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [0, 0, exitCompression ? -DISTANCE.sectionExit : 0]
  );
  const exitBlur = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [0, 0, exitCompression ? BLUR.sectionExit : 0]
  );

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      style={{
        scale: exitScale,
        opacity: exitOpacity,
        y: exitY,
        // @ts-expect-error -- filter as motion style
        "--exit-blur": exitBlur,
      }}
      className={className}
    >
      <motion.div
        variants={{
          ...staggerContainerVariants,
          visible: {
            transition: {
              staggerChildren: 0.04,
              delayChildren: delay,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {children}
      </motion.div>
    </MotionTag>
  );
}
