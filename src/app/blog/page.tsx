import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import { blogPosts } from "@/lib/data/blogPosts";
import { ChevronRight, ArrowRight, BookOpen } from "lucide-react";

import Blog3DCoverFlow from "@/components/sections/Blog3DCoverFlow";

export const metadata = constructMetadata({
  title: "M&A Insights for IT Services & Staffing | Exigo Consulting",
  description: "Founder-led insights on IT services M&A, IT staffing acquisitions, fundraising, GCCs, valuation, transaction readiness and business growth."
});

export default function BlogPage() {
  const editorialPillars = [
    { title: "M&A & Exit Readiness", desc: "When to sell, how buyers think, and how to prepare." },
    { title: "Buy-Side Strategy", desc: "Acquisition theses, target screening and integration thinking." },
    { title: "IT Services & Staffing Economics", desc: "Utilization, bench, client concentration, margins and valuation drivers." },
    { title: "Fundraising", desc: "Investor readiness, capital strategy and realistic positioning." },
    { title: "GCC & Global Expansion", desc: "Talent, market entry and strategic acquisition themes." },
    { title: "The Sutradhar Notes", desc: "Founder-led observations on negotiations, relationships, timing and the human side of transactions." }
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen select-none pb-24">
      {/* 1. Hero */}
      <section className="relative py-20 bg-[#07131D] text-white overflow-hidden">
        <Container className="relative z-10 text-center flex flex-col items-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#3A9FB7] mb-3 block">
            EXIGO INSIGHTS
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white mb-4">
            From the Sutradhar’s Desk
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-6">
            Perspectives from the intersection of founders, buyers, investors and operators — grounded in real conversations around M&amp;A, capital, talent and growth.
          </p>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
            <Link href="/" className="hover:text-[#4CC9F0] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-white font-semibold">Insights</span>
          </div>
        </Container>
      </section>

      {/* 2. Interactive 3D Cover Flow Showcase */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#0F6B82] mb-2 block">
              FEATURED COVER FLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2730] font-display">
              Strategic M&amp;A Briefings &amp; Insights
            </h2>
          </div>

          <Blog3DCoverFlow posts={blogPosts} />
        </Container>
      </section>

      {/* 3. Editorial Pillars */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#0F6B82] mb-2 block">
              EDITORIAL PILLARS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2730] font-display">
              Core Themes We Explore
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {editorialPillars.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/80">
                <span className="text-xs font-bold text-[#0F6B82] block mb-1">0{idx + 1}</span>
                <h3 className="text-base font-bold text-[#1B2730] font-display mb-2">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Main Articles List */}
      <section className="pt-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-16">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden bg-slate-100 mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0F6B82] text-white font-bold text-[10px] uppercase tracking-wider shadow-md">
                      {post.category}
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1B2730] font-display mb-3 leading-snug group-hover:text-[#0F6B82] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6 text-left sm:text-justify line-clamp-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    By Rajesh Gade, Founder — Exigo Consulting
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Recommended Blog CTA */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#091A26] text-white text-center shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">
              Have a transaction or growth question?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
              Start a confidential conversation with Exigo Consulting to discuss your mandate strategy.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#091A26] font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2">
                <span>Start a Confidential Conversation</span>
                <ArrowRight className="w-4 h-4 text-[#0F6B82]" />
              </button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
