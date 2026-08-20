"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  TrendingUp,
  Layers,
  Users,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import Container from "../ui/Container";

export function PositioningStrip() {
  return (
    <div className="bg-[#091A26] text-white py-6 border-y border-white/10 select-none">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#3A9FB7] uppercase">
          M&amp;A Advisory <span className="mx-2 text-slate-600">|</span> Fundraising{" "}
          <span className="mx-2 text-slate-600">|</span> Business Consulting{" "}
          <span className="mx-2 text-slate-600">|</span> Executive Search{" "}
          <span className="mx-2 text-slate-600">|</span> Transaction Support
        </div>
        <div className="text-xs sm:text-sm font-medium text-slate-300">
          India-led. Globally connected. Sector focused.
        </div>
      </Container>
    </div>
  );
}

export function SutradharPhilosophy() {
  return (
    <section className="py-20 bg-white select-none relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F8FA]/50 to-transparent pointer-events-none" />
      <Container className="relative z-10 max-w-4xl text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-3 block">
          THE SUTRADHAR PHILOSOPHY
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B2730] font-display mb-6">
          The Thread That Connects Every Transaction
        </h2>
        <div className="w-16 h-1 bg-[#DE7A66] rounded-full mx-auto mb-8" />

        <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed text-center sm:text-justify">
          <p className="p-6 rounded-2xl bg-[#F0F8FA] border border-[#0F6B82]/20 text-[#0B2530] font-medium leading-relaxed shadow-sm">
            Every business transaction has many characters: founders, buyers, investors, lawyers, valuers, finance teams, employees and advisors. A successful outcome depends on how well these threads come together.
          </p>
          <p>
            That is where Exigo plays the <strong>Sutradhar</strong> — not merely making an introduction, but helping shape the narrative, align interests, anticipate friction and keep the mandate moving toward a meaningful outcome.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function HowWeHelp() {
  const services = [
    {
      title: "Mergers & Acquisitions",
      desc: "End-to-end buy-side and sell-side M&A advisory for IT Services, IT Staffing and Technology companies — from opportunity identification, positioning and valuation through negotiations, diligence, structuring and closure.",
      href: "/services/mergers-acquisitions",
      icon: Briefcase
    },
    {
      title: "Fundraising Advisory",
      desc: "Capital strategy, investor positioning, valuation support and curated introductions to investors who understand technology, services and staffing business models.",
      href: "/services/fundraising",
      icon: TrendingUp
    },
    {
      title: "Business Consulting",
      desc: "Practical growth and operational advisory, including Build-Operate-Transfer models, market entry (GTM) , business readiness and value-creation initiatives that strengthen the company before a transaction — or simply make it better.",
      href: "/services/business-consulting",
      icon: Layers
    },
    {
      title: "Executive Search & Talent Advisory",
      desc: "Leadership and specialist hiring for technology businesses, including Practice Heads, Delivery Leaders, Country Heads, Revenue Leaders and CXOs, supported by deep sector networks.",
      href: "/services/talent-acquisition",
      icon: Users
    },
    {
      title: "Transaction & Specialist Support",
      desc: "Access to valuation, financial diligence, legal, governance, compliance and market-positioning expertise through Exigo’s strategic advisor ecosystem.",
      href: "/services/other-services",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-[#FAFBFD] select-none border-t border-slate-200/60">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
            HOW WE HELP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2730] font-display mb-4">
            Comprehensive Advisory Services
          </h2>
          <div className="w-12 h-1 bg-[#0F6B82] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EBF6F9] text-[#0F6B82] flex items-center justify-center mb-6 group-hover:bg-[#0F6B82] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1B2730] font-display mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={srv.href}
                    className="text-xs font-bold text-[#0F6B82] flex items-center gap-1.5 group-hover:text-[#DE7A66] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function WhyExigo() {
  const points = [
    {
      title: "Sector Focus",
      desc: "Deep orientation toward IT Services, IT Staffing and Technology businesses."
    },
    {
      title: "Founder-Led",
      desc: "Senior involvement from mandate definition through execution and closure."
    },
    {
      title: "Connected Thinking",
      desc: "M&A, capital, operations and talent are treated as interconnected business decisions."
    },
    {
      title: "Curated, Not Crowded",
      desc: "We focus on relevant counterparties and strategic fit rather than indiscriminate outreach."
    },
    {
      title: "Confidential & Outcome-Oriented",
      desc: "Sensitive conversations are handled with discretion, clarity and commercial discipline."
    }
  ];

  return (
    <section className="py-20 bg-white select-none">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
              WHY EXIGO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2730] font-display mb-6">
              Senior Attention. Commercial Discipline.
            </h2>
            <div className="w-12 h-1 bg-[#DE7A66] rounded-full mb-6" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              Transactions succeed when strategic intent, valuation expectations, execution discipline and trust align. Here is why technology leaders trust Exigo as their Sutradhar.
            </p>

            <Link href="/contact">
              <button className="px-6 py-3.5 bg-[#091A26] hover:bg-[#0F6B82] text-white rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-md flex items-center gap-2">
                <span>Start a Confidential Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {points.map((pt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 flex items-start gap-4 hover:border-[#0F6B82]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#0F6B82]/10 text-[#0F6B82] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1B2730] font-display mb-1">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function OurApproach() {
  const steps = [
    {
      number: "01",
      title: "Understand the Story",
      desc: "We begin with the business behind the numbers — its capabilities, clients, delivery model, people, growth drivers, risks and founder objectives."
    },
    {
      number: "02",
      title: "Shape the Narrative",
      desc: "We translate that business into a clear strategic proposition for the right audience: buyer, seller, investor or leadership candidate."
    },
    {
      number: "03",
      title: "Connect the Right Threads",
      desc: "We identify and engage relevant counterparties and specialists, using sector context and relationship-led outreach."
    },
    {
      number: "04",
      title: "Stay Through the Journey",
      desc: "We remain involved through discussions, valuation, diligence, negotiations, documentation coordination and closure. The Sutradhar does not leave midway through the story."
    }
  ];

  return (
    <section className="py-20 bg-[#091A26] text-white select-none">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#3A9FB7] mb-2 block">
            OUR APPROACH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-4">
            How The Sutradhar Operates
          </h2>
          <div className="w-12 h-1 bg-[#DE7A66] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#3A9FB7]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold font-display text-[#3A9FB7] mb-4 block">
                  {st.number}
                </span>
                <h3 className="text-lg font-bold text-white font-display mb-3">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {st.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function InsightsSummary() {
  return (
    <section className="py-20 bg-white select-none">
      <Container>
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
              INSIGHTS FROM THE EXIGO DESK
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B2730] font-display mb-3">
              Practical Perspectives on M&amp;A, Capital &amp; Talent
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Practical perspectives on M&amp;A, fundraising, IT Services, IT Staffing, GCCs, valuation, transaction readiness and the realities founders face before and after a deal.
            </p>
          </div>

          <div className="shrink-0">
            <Link href="/blog">
              <button className="px-7 py-3.5 rounded-xl bg-[#0F6B82] hover:bg-[#155B6D] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-md flex items-center gap-2 group">
                <span>Explore Insights</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
