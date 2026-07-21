import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card, { CardHeader, CardBody, CardFooter } from "@/components/ui/Card";
import { blogPosts } from "@/lib/data/blogPosts";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Strategic Briefings & Market Insights",
  description: "Read the latest briefings on technology M&A trends, executive comp planning, and structured growth financing."
});

export default function BlogPage() {
  return (
    <div className="py-16 sm:py-24 bg-white min-h-screen relative">
      {/* Subtle Hero Grid & Radial Background Glows */}
      <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(15,107,130,0.12) 0%, transparent 70%)" }}
        />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          title="Strategic Briefings"
          subtitle="Insights"
          description="High-level briefings detailing transaction strategy, organizational structure scaling, and capital allocation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="enterprise-card p-6 flex flex-col h-full group">
              <div className="flex justify-between items-center gap-2 mb-4">
                <span className="text-xs font-bold tracking-wider text-[#0F6B82] uppercase">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#6C7A86]">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold font-display text-[#1B2730] group-hover:text-[#0F6B82] transition-colors line-clamp-2 mb-3">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-[#6C7A86] text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs pt-4 border-t border-[#E5EBEF] mt-auto">
                <span className="flex items-center gap-1 text-[#6C7A86]">
                  <Calendar className="w-3.5 h-3.5 text-[#0F6B82]" />
                  {post.publishedAt}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="arrow-link"
                >
                  <span>Read Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
