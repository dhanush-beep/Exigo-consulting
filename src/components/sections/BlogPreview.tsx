"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data/blogPosts";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function BlogPreview() {
  const featuredPosts = blogPosts.slice(0, 3);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 sm:py-32 relative bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-14">
          <SectionHeading
            title="Strategic Insights & Briefings"
            subtitle="Our Thoughts"
            description="Analysis of market trends, executive hiring landscapes, and fundraising strategies."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Link href="/blog" className="shrink-0">
            <button className="btn-secondary-enterprise">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
          {featuredPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="enterprise-card h-full flex flex-col group cursor-pointer overflow-hidden">
                {/* Color accent top bar */}
                <div className={`h-1 w-full ${index === 1 ? "bg-[#DE7A66]" : "bg-[#0F6B82]"} flex-shrink-0`} />

                <div className="p-6 flex flex-col flex-grow">
                  {/* Category & Read time */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[11px] font-[600] tracking-[0.1em] uppercase px-3 py-1 rounded-full"
                      style={{
                        background: index === 1 ? "rgba(222,122,102,0.1)" : "rgba(15,107,130,0.08)",
                        color: index === 1 ? "#DE7A66" : "#0F6B82"
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[12px] text-[#6C7A86]">
                      <Clock className="w-3.5 h-3.5" strokeWidth={1.75} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[18px] font-[600] text-[#1B2730] leading-snug mb-3 group-hover:text-[#0F6B82] transition-colors line-clamp-2 flex-grow"
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[14px] text-[#6C7A86] leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#E5EBEF] mt-auto">
                    <span className="text-[12px] text-[#6C7A86]">
                      {post.publishedAt}
                    </span>
                    <div className="arrow-link text-[13px] font-[500]">
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
