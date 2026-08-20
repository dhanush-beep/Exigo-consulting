"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LinkedinIcon from "../ui/LinkedinIcon";
import Container from "../ui/Container";
import AnimatedText from "../motion/AnimatedText";
import AnimatedCard from "../motion/AnimatedCard";
import {
  APPLE_EASE,
  DURATION,
  mockupRevealVariants,
  buttonInteraction,
} from "@/lib/motion";

export default function LeadershipSection() {
  const leaders = [
    {
      name: "Rajesh Gade (RG)",
      role: "Founder, Advisor & Sutradhar",
      bio: "38+ years across IT, Communications and Healthcare. Business Leadership, Entrepreneurship and M&A Advisory.",
      image: "/images/rajesh-gade.png",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Aroop M. Cherian",
      role: "Valuation & Business Modelling",
      bio: "15+ years Big Four experience (KPMG & Deloitte) valuing business interests and intellectual property.",
      image: "/images/advisors/aroop-cherian.jpg",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Arindam Chakraborty",
      role: "Strategy & Business Leadership",
      bio: "35 years of strategic leadership scaling and exiting IT businesses with Fortune 100 client relationships.",
      image: "/images/advisors/arindam-chakraborty.jpg",
      linkedin: "https://linkedin.com",
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
            OUR LEADERSHIP
          </motion.p>

          <AnimatedText
            as="headline"
            element="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B2730] tracking-tight font-display"
          >
            Experienced Partners, Proven Track Record
          </AnimatedText>
        </div>

        {/* Team Cards — photo mockup reveal pattern */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <AnimatedCard
              key={idx}
              index={idx}
              hoverShadow="0 24px 60px -16px rgba(15,107,130,0.15), 0 12px 28px -8px rgba(0,0,0,0.05)"
              className="rounded-3xl bg-[#FAFBFD] border border-slate-200 overflow-hidden flex flex-col justify-between group"
            >
              {/* Photo — phone mockup reveal (scale + rotateX + shadow) */}
              <motion.div
                variants={mockupRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: DURATION.section,
                  ease: APPLE_EASE,
                  delay: idx * 0.08,
                }}
                className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 promote-layer"
                style={{ perspective: "800px" }}
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Bio Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-[#1B2730] font-display">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0F6B82] mt-0.5 mb-3">
                    {leader.role}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/80 flex items-center justify-start">
                  <motion.a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={buttonInteraction.hover}
                    whileTap={buttonInteraction.tap}
                    className="w-8 h-8 rounded-lg bg-[#0F6B82]/10 text-[#0F6B82] flex items-center justify-center hover:bg-[#0F6B82] hover:text-white color-transition"
                    aria-label={`${leader.name}'s LinkedIn`}
                  >
                    <LinkedinIcon className="w-4 h-4 fill-current" />
                  </motion.a>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
