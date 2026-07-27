"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  ShieldCheck,
  Puzzle,
  Compass,
  ArrowRight,
} from "lucide-react";
import Container from "../ui/Container";
import AnimatedText from "../motion/AnimatedText";
import AnimatedCard from "../motion/AnimatedCard";
import AnimatedIcon from "../motion/AnimatedIcon";
import { buttonInteraction, APPLE_EASE, DURATION } from "@/lib/motion";

export default function ServicesAdvisoryGrid() {
  const services = [
    {
      icon: TrendingUp,
      title: "Buy-Side Advisory",
      description: "Identify and evaluate acquisition opportunities that align with your growth strategy.",
      href: "/services/mergers-acquisitions",
    },
    {
      icon: DollarSign,
      title: "Sell-Side Advisory",
      description: "Maximize your business value and achieve optimal outcomes in your sale process.",
      href: "/services/mergers-acquisitions",
    },
    {
      icon: ShieldCheck,
      title: "Due Diligence",
      description: "Comprehensive risk assessment and financial, legal, and operational due diligence.",
      href: "/services/business-consulting",
    },
    {
      icon: Puzzle,
      title: "Integration Planning",
      description: "Seamless post-merger integration to unlock synergies and drive growth.",
      href: "/services/business-consulting",
    },
    {
      icon: Compass,
      title: "Strategic Consulting",
      description: "Strategic insights and advisory to drive long-term business transformation.",
      href: "/services/business-consulting",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden select-none">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.major, ease: APPLE_EASE }}
            className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#0F6B82] mb-3"
          >
            OUR SERVICES
          </motion.p>

          <AnimatedText
            as="headline"
            element="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B2730] tracking-tight font-display"
          >
            Comprehensive M&amp;A Advisory Solutions
          </AnimatedText>
        </div>

        {/* 5 Cards Grid — staggered AnimatedCards with AnimatedIcons */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <AnimatedCard
                key={idx}
                index={idx}
                hoverShadow="0 20px 50px -12px rgba(15,107,130,0.14), 0 8px 20px -8px rgba(0,0,0,0.04)"
                className="p-6 rounded-3xl bg-white border border-slate-200/90 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon — spring reveal */}
                  <AnimatedIcon index={idx} delay={0.15} className="w-12 h-12 rounded-2xl bg-[#0F6B82]/10 border border-[#0F6B82]/20 flex items-center justify-center text-[#0F6B82] mb-6 group-hover:bg-[#0F6B82] group-hover:text-white color-transition">
                    <Icon className="w-6 h-6" />
                  </AnimatedIcon>

                  <h3 className="text-lg font-bold text-[#1B2730] font-display mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F6B82] group-hover:text-[#155B6D] color-transition"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </AnimatedCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
