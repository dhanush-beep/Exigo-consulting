"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageEnterVariants } from "@/lib/motion";

/**
 * PageTransitionWrapper — Wraps page content with scale/blur/opacity transitions.
 *
 * Incoming page: scale(1.03 → 1), blur(8 → 0), opacity(0 → 1), Y(20 → 0)
 * Uses AnimatePresence with pathname key for route-change detection.
 */
export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageEnterVariants}
        initial="initial"
        animate="animate"
        style={{
          willChange: "transform, opacity, filter",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
