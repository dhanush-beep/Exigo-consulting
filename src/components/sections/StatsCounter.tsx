"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";

const stats = [
  { value: 250, suffix: "M+", prefix: "$", label: "M&A Deals Structured", description: "Buy-side and sell-side advisory execution" },
  { value: 50, suffix: "+", prefix: "", label: "Corporate Clients", description: "From high-growth startups to mid-market" },
  { value: 120, suffix: "+", prefix: "", label: "Executive Placements", description: "C-suite, board & strategic leadership hires" },
  { value: 98, suffix: "%", prefix: "", label: "Client Retention Rate", description: "Sustained trust through proven results" }
];

function useCountUp(target: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, shouldStart]);

  return count;
}

function StatCard({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const count = useCountUp(stat.value, 2200, isVisible);

  return (
    <div className="stat-card group">
      {/* Colored top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#0F6B82] rounded-t-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <p className="text-4xl sm:text-5xl font-[800] text-[#0F6B82] mb-2" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
        {stat.prefix}{isVisible ? count : 0}{stat.suffix}
      </p>
      <h4 className="text-base font-[600] text-[#1B2730] mb-1.5" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
        {stat.label}
      </h4>
      <p className="text-xs text-[#6C7A86] leading-snug">
        {stat.description}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative bg-white border-y border-[#E5EBEF]">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </Container>
    </section>
  );
}
