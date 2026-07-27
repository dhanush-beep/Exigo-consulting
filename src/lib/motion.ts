/**
 * motion.ts — Centralized Motion Configuration
 * Apple WWDC / Linear.app / Framer-grade animation system.
 * Single source of truth for all easing, spring, duration, and variant constants.
 */

import type { Transition, Variants } from "framer-motion";

// ─────────────────────────────────────────────
// EASING CURVES
// ─────────────────────────────────────────────

/** Signature Apple-style ease — slow start, elegant deceleration */
export const APPLE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Micro-interaction ease — snappy for hovers/clicks */
export const MICRO_EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/** Spring-like CSS cubic-bezier for non-framer contexts */
export const SPRING_EASE: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

// ─────────────────────────────────────────────
// SPRING PHYSICS
// ─────────────────────────────────────────────

export const SPRING_CONFIG = {
  stiffness: 160,
  damping: 20,
  mass: 1,
} as const;

export const SPRING_SNAPPY = {
  stiffness: 300,
  damping: 25,
  mass: 0.8,
} as const;

export const SPRING_GENTLE = {
  stiffness: 120,
  damping: 18,
  mass: 1.2,
} as const;

// ─────────────────────────────────────────────
// DURATIONS
// ─────────────────────────────────────────────

export const DURATION = {
  /** Major transitions — section reveals, page changes */
  major: 0.7,
  /** Standard element animations */
  standard: 0.6,
  /** Micro-interactions — hover, click, icon pops */
  micro: 0.2,
  /** Section-level reveals */
  section: 0.8,
  /** Background color morphs */
  background: 0.7,
  /** Color interpolation */
  color: 0.6,
  /** Page transition overlap */
  pageOverlap: 0.22,
} as const;

// ─────────────────────────────────────────────
// STAGGER
// ─────────────────────────────────────────────

export const STAGGER = {
  /** Default child stagger delay (40ms) */
  default: 0.04,
  /** Fast stagger for dense grids */
  fast: 0.03,
  /** Slow stagger for hero elements */
  slow: 0.06,
} as const;

// ─────────────────────────────────────────────
// DISTANCES
// ─────────────────────────────────────────────

export const DISTANCE = {
  /** Headline word reveal */
  word: 28,
  /** Paragraph reveal */
  paragraph: 20,
  /** Card reveal */
  card: 24,
  /** Section exit slide-up */
  sectionExit: 30,
  /** Parallax range */
  parallaxMin: 6,
  parallaxMax: 12,
} as const;

// ─────────────────────────────────────────────
// BLUR VALUES
// ─────────────────────────────────────────────

export const BLUR = {
  /** Element entering */
  entering: 10,
  /** Paragraph entering */
  paragraph: 8,
  /** Section exiting */
  sectionExit: 8,
  /** Fully resolved */
  none: 0,
} as const;

// ─────────────────────────────────────────────
// TRANSITIONS
// ─────────────────────────────────────────────

/** Standard viewport-reveal transition */
export const REVEAL_TRANSITION: Transition = {
  duration: DURATION.major,
  ease: APPLE_EASE,
};

/** Spring-physics transition */
export const SPRING_TRANSITION: Transition = {
  type: "spring",
  ...SPRING_CONFIG,
};

/** Micro-interaction transition (hover/click) */
export const MICRO_TRANSITION: Transition = {
  duration: DURATION.micro,
  ease: MICRO_EASE,
};

// ─────────────────────────────────────────────
// VARIANT FACTORIES
// ─────────────────────────────────────────────

/**
 * Card reveal variants
 * Start: scale 0.95, opacity 0, blur 10px, translateY 24px
 * End: scale 1, opacity 1, blur 0, translateY 0
 */
export const cardRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: DISTANCE.card,
    scale: 0.95,
    filter: `blur(${BLUR.entering}px)`,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: `blur(${BLUR.none}px)`,
    transition: {
      duration: DURATION.major,
      ease: APPLE_EASE,
    },
  },
};

/**
 * Word-by-word headline reveal (mask reveal, bottom to top)
 */
export const wordRevealVariants: Variants = {
  hidden: {
    y: DISTANCE.word,
    opacity: 0,
    filter: `blur(${BLUR.entering}px)`,
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: `blur(${BLUR.none}px)`,
    transition: {
      duration: DURATION.standard,
      ease: APPLE_EASE,
    },
  },
};

/**
 * Paragraph reveal (entire block upward)
 */
export const paragraphRevealVariants: Variants = {
  hidden: {
    y: DISTANCE.paragraph,
    opacity: 0,
    filter: `blur(${BLUR.paragraph}px)`,
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: `blur(${BLUR.none}px)`,
    transition: {
      duration: DURATION.major,
      ease: APPLE_EASE,
    },
  },
};

/**
 * Icon spring reveal
 * Start: scale 0.7, rotate -15°, opacity 0
 * End: scale 1, rotate 0°, opacity 1
 */
export const iconRevealVariants: Variants = {
  hidden: {
    scale: 0.7,
    rotate: -15,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      ...SPRING_CONFIG,
    },
  },
};

/**
 * Section exit compression (for scroll-triggered section transitions)
 */
export const sectionExitVariants: Variants = {
  active: {
    scale: 1,
    opacity: 1,
    y: 0,
    filter: `blur(${BLUR.none}px)`,
  },
  exiting: {
    scale: 0.96,
    opacity: 0.7,
    y: -DISTANCE.sectionExit,
    filter: `blur(${BLUR.sectionExit}px)`,
  },
};

/**
 * Phone/mockup image reveal
 * Scale 0.92 → 1, rotateX 8° → 0°, shadow grows
 */
export const mockupRevealVariants: Variants = {
  hidden: {
    scale: 0.92,
    rotateX: 8,
    opacity: 0,
    filter: `blur(${BLUR.entering}px)`,
  },
  visible: {
    scale: 1,
    rotateX: 0,
    opacity: 1,
    filter: `blur(${BLUR.none}px)`,
    transition: {
      duration: DURATION.section,
      ease: APPLE_EASE,
    },
  },
};

/**
 * Page transition: outgoing page
 */
export const pageExitVariants: Variants = {
  initial: {
    scale: 1,
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: {
    scale: 0.97,
    opacity: 0.8,
    y: -20,
    filter: "blur(8px)",
    transition: {
      duration: 0.35,
      ease: APPLE_EASE,
    },
  },
};

/**
 * Page transition: incoming page
 */
export const pageEnterVariants: Variants = {
  initial: {
    scale: 1.03,
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: APPLE_EASE,
    },
  },
};

/**
 * Stagger container variant — orchestrates children
 */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.default,
      delayChildren: 0.1,
    },
  },
};

/**
 * Button hover/click interaction values (to be used inline)
 */
export const buttonInteraction = {
  hover: { scale: 1.03 },
  tap: { scale: 0.97 },
  transition: MICRO_TRANSITION,
} as const;
