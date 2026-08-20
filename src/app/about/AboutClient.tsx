"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutClient() {
  const services = [
    {
      title: "Buy-Side M&A Advisory",
      desc: "Target identification, assessment, approach, negotiation and transaction coordination."
    },
    {
      title: "Sell-Side M&A Advisory",
      desc: "Business positioning, buyer mapping, process management, valuation discussions and closure support."
    },
    {
      title: "Fundraising Advisory",
      desc: "Capital strategy, investor readiness, positioning, valuation support and introductions."
    },
    {
      title: "Business Consulting",
      desc: "Growth, operational improvement, market entry (GTM), BOT and transaction readiness."
    },
    {
      title: "Executive Search & Talent Advisory",
      desc: "Leadership and critical hiring for technology-led organizations."
    },
    {
      title: "Specialist Support",
      desc: "Coordinated access to valuation, finance, legal, governance and compliance expertise."
    }
  ];

  const principles = [
    "Context before advice.",
    "Strategic fit before introductions.",
    "Confidentiality by default.",
    "Senior attention throughout.",
    "Commercial realism over vanity valuations.",
    "Closure matters more than activity."
  ];

  return (
    <div className="bg-white min-h-screen select-none pb-20">
      {/* 1. Hero */}
      <section className="relative py-20 sm:py-24 bg-[#07131D] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07131D] via-[#07131D]/90 to-[#07131D]/70" />
        <Container className="relative z-10 text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-extrabold uppercase tracking-widest text-[#3A9FB7] mb-3 block"
          >
            ABOUT EXIGO CONSULTING
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white mb-6 max-w-4xl"
          >
            More Than an Advisor. The Sutradhar of the Transaction.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-xl text-slate-300 font-normal max-w-3xl leading-relaxed"
          >
            Exigo Consulting works with founders, promoters, leadership teams, buyers and investors across IT Services, IT Staffing and Technology. Our role is to connect strategy with execution — and the right opportunity with the right people.
          </motion.p>
        </Container>
      </section>

      {/* 2. Who We Are */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2730] font-display mb-4">
                Built on Alignment, Timing &amp; Trust
              </h2>
              <div className="w-12 h-1 bg-[#DE7A66] rounded-full mb-6" />
            </div>

            <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed text-left sm:text-justify">
              <p>
                Exigo was built on a simple belief: transactions do not succeed because two parties were introduced. They succeed when strategic intent, valuation expectations, people, diligence, timing and trust are aligned.
              </p>
              <p className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-[#0B2530] font-medium leading-relaxed shadow-sm">
                We therefore work as a hands-on, founder-led advisory partner across M&amp;A, fundraising, business consulting and executive talent. We operate on both sides of the table — supporting buyers looking for the right acquisition and founders seeking the right partner, capital or exit.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 3. Why 'Sutradhar'? */}
      <section className="py-20 bg-[#FAFBFD] border-y border-slate-200/80">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
                NARRATIVE PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2730] font-display mb-3">
                Why &lsquo;Sutradhar&rsquo;?
              </h2>
              <div className="w-12 h-1 bg-[#0F6B82] rounded-full mx-auto" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed text-left sm:text-justify"
            >
              <p>
                In the Indian narrative tradition, the <strong>Sutradhar</strong> is the thread-holder — the person who understands the full story, connects its characters and keeps the narrative moving with context and purpose.
              </p>
              <p className="font-semibold text-[#0B2530] border-l-4 border-[#DE7A66] pl-4 italic">
                That is the role Exigo seeks to play in every mandate: quietly connecting the right threads, asking the difficult questions, keeping stakeholders aligned and helping the transaction reach its intended conclusion.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 4. Our Services Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2730] font-display mb-4">
              Integrated Mandate Capability
            </h2>
            <div className="w-12 h-1 bg-[#DE7A66] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-[#0F6B82]/50 hover:shadow-md transition-all"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#1B2730] font-display mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Our Principles */}
      <section className="py-20 bg-[#091A26] text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#3A9FB7] mb-2 block">
              OUR PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-4">
              The Rules That Guide Every Conversation
            </h2>
            <div className="w-12 h-1 bg-[#DE7A66] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {principles.map((pr, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-[#3A9FB7] shrink-0" />
                <span className="text-base font-semibold text-white font-display">
                  {pr}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/about/meet-rajesh"
              className="px-6 py-3.5 rounded-xl bg-white text-[#091A26] font-bold text-xs sm:text-sm hover:bg-slate-100 transition-all flex items-center gap-2"
            >
              <span>Meet Rajesh Gade</span>
              <ArrowRight className="w-4 h-4 text-[#0F6B82]" />
            </Link>

            <Link
              href="/about/advisors"
              className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-bold text-xs sm:text-sm hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
            >
              <span>Strategic Advisors</span>
              <ArrowRight className="w-4 h-4 text-[#3A9FB7]" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
