"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Users, Globe, Target } from "lucide-react";
import Container from "../ui/Container";
import AnimatedText from "../motion/AnimatedText";
import AnimatedCard from "../motion/AnimatedCard";
import AnimatedIcon from "../motion/AnimatedIcon";
import {
  APPLE_EASE,
  DURATION,
  mockupRevealVariants,
  cardRevealVariants,
} from "@/lib/motion";

export default function AboutExigoSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax on the image (6–12px range)
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6px", "12px"]);

  const features = [
    {
      icon: ShieldCheck,
      title: "Confidential & Secure",
      description: "We maintain complete confidentiality across all engagements.",
    },
    {
      icon: Users,
      title: "Senior Expertise",
      description: "Partner-led advisory with deep industry experience.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Access to global investors, buyers, and strategic partners.",
    },
    {
      icon: Target,
      title: "Results Oriented",
      description: "Focused on delivering maximum value and successful outcomes.",
    },
  ];

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-[#FAFBFD] relative overflow-hidden select-none">
      <Container>
        {/* Section Header — word-by-word reveals */}
        <div className="max-w-3xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.major, ease: APPLE_EASE }}
            className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#0F6B82] mb-3"
          >
            ABOUT EXIGO CONSULTING
          </motion.p>

          <AnimatedText
            as="headline"
            element="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B2730] tracking-tight font-display mb-6"
          >
            Who We Are &amp; The &lsquo;Sutradhar&rsquo; Philosophy
          </AnimatedText>

          <AnimatedText
            as="paragraph"
            element="p"
            delay={0.15}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            Exigo was built on a simple belief: transactions do not succeed because two parties were introduced. They succeed when strategic intent, valuation expectations, people, diligence, timing and trust are aligned. In the Indian narrative tradition, the Sutradhar is the thread-holder — connecting every character and keeping the mandate moving toward a meaningful conclusion.
          </AnimatedText>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left: Image Card — phone/mockup reveal pattern */}
          <motion.div
            variants={mockupRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl group border border-slate-200 promote-layer"
            style={{ perspective: "1000px" }}
          >
            <div className="relative h-[420px] sm:h-[480px] w-full overflow-hidden">
              <motion.div style={{ y: imageY }} className="absolute -top-[15%] -bottom-[15%] left-0 right-0">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')`,
                  }}
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1722]/90 via-[#0A1722]/20 to-transparent" />

              {/* Bottom badge — card reveal */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.95, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: DURATION.major, ease: APPLE_EASE }}
                className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0B1924]/90 backdrop-blur-md border border-white/15 text-white"
              >
                <p className="text-xl font-extrabold font-display tracking-tight text-[#3A9FB7] mb-1">
                  The Sutradhar Philosophy
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Connecting strategy with execution &amp; people
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: 2x2 Feature Grid — staggered AnimatedCards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedCard
                  key={idx}
                  index={idx}
                  hoverShadow="0 20px 50px -12px rgba(15,107,130,0.12), 0 8px 20px -8px rgba(0,0,0,0.04)"
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-4 group color-transition"
                >
                  <AnimatedIcon index={idx} delay={0.2} className="w-12 h-12 rounded-xl bg-[#0F6B82]/10 border border-[#0F6B82]/20 flex items-center justify-center text-[#0F6B82] shrink-0 group-hover:bg-[#0F6B82] group-hover:text-white color-transition">
                    <Icon className="w-6 h-6" />
                  </AnimatedIcon>
                  <div>
                    <h3 className="text-lg font-bold text-[#1B2730] font-display mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
