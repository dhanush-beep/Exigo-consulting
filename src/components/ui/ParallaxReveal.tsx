"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  speed?: number; // 0 to 1 parallax factor
  direction?: "up" | "down" | "left" | "right";
  scaleEffect?: boolean;
}

export default function ParallaxReveal({
  children,
  className,
  delayMs = 0,
  speed = 0.12,
  direction = "up",
  scaleEffect = true,
}: ParallaxRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    let rafId: number | null = null;

    const updateParallax = () => {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Position relative to viewport center
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const diff = elementCenter - viewportCenter;

      const offsetY = diff * speed * -0.35;
      elementRef.current.style.setProperty("--parallax-y", `${offsetY.toFixed(2)}px`);
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updateParallax();
          rafId = null;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateParallax();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(50px)";
      case "down":
        return "translateY(-50px)";
      case "left":
        return "translateX(50px)";
      case "right":
        return "translateX(-50px)";
      default:
        return "translateY(50px)";
    }
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all duration-1000 cubic-bezier(0.22,1,0.36,1) will-change-transform",
        className
      )}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? `translateY(calc(var(--parallax-y, 0px))) ${scaleEffect ? "scale(1)" : ""}`
          : `${getInitialTransform()} ${scaleEffect ? "scale(0.96)" : ""}`,
        transitionDelay: `${delayMs}ms`,
        transitionProperty: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
