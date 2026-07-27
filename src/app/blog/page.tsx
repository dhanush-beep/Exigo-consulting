"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { blogPosts } from "@/lib/data/blogPosts";
import Blog3DCoverFlow from "@/components/sections/Blog3DCoverFlow";

export default function BlogPage() {
  return (
    <div className="bg-[#FAFBFD] min-h-screen select-none pb-24">
      {/* 1. Dark Hero Banner Matching Screenshot */}
      <section className="relative py-20 bg-[#07131D] text-white overflow-hidden">
        {/* Dark City Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 filter brightness-[0.5]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07131D] via-[#07131D]/90 to-[#07131D]/70" />

        <Container className="relative z-10 text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif tracking-tight text-white mb-4"
          >
            Blogs
          </motion.h1>

          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium"
          >
            <Link href="/" className="hover:text-[#4CC9F0] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-white font-semibold">Blogs</span>
          </motion.div>
        </Container>
      </section>

      {/* 2. Interactive 3D Perspective Cover Flow Showcase */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-6">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#0F6B82] mb-2">
              FEATURED COVER FLOW
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2730] font-display">
              Strategic M&amp;A Briefings &amp; Insights
            </h2>
          </div>

          <Blog3DCoverFlow posts={blogPosts} />
        </Container>
      </section>

      {/* 3. Main 2-Column Blog Grid Matching Provided Screenshot 1:1 */}
      <section className="pt-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.15 }}
                className="flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Photo Top Frame */}
                  <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden bg-slate-100 mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={idx < 2}
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0F6B82] text-white font-bold text-[10px] uppercase tracking-wider shadow-md">
                      {post.category}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1B2730] font-display mb-3 leading-snug group-hover:text-[#0F6B82] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6 text-left sm:text-justify line-clamp-4">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More Button matching screenshot */}
                <div>
                  <Link href={`/blog/${post.slug}`}>
                    <button className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-[#0F6B82] hover:bg-[#155B6D] text-white text-xs font-extrabold tracking-wide transition-all shadow-sm hover:scale-[1.03] group-button">
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
