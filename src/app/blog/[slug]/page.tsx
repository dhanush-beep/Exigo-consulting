import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/lib/data/blogPosts";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return constructMetadata({
    title: post.title,
    description: post.excerpt
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-24 bg-white min-h-screen relative">
      {/* Subtle Hero Grid & Background Glows */}
      <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(15,107,130,0.12) 0%, transparent 70%)" }}
        />
      </div>

      <Container className="max-w-3xl relative z-10">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#6C7A86] hover:text-[#0F6B82] transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Briefings</span>
        </Link>

        {/* Article Meta Header */}
        <div className="flex items-center gap-4 flex-wrap text-xs sm:text-sm text-[#6C7A86] mb-6">
          <span className="px-3 py-1 rounded-full bg-[#0F6B82]/10 border border-[#0F6B82]/20 text-[#0F6B82] font-bold uppercase tracking-wider text-xs">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-[#0F6B82]" />
            {post.publishedAt}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-[#0F6B82]" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[800] font-display text-[#1B2730] leading-tight mb-8">
          {post.title}
        </h1>

        {/* Author Bio Header */}
        <div className="flex items-center gap-3 border-y border-[#E5EBEF] py-4 mb-10">
          <div className="w-10 h-10 rounded-full bg-[#0F6B82]/10 border border-[#0F6B82]/20 flex items-center justify-center text-[#0F6B82]">
            <User className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-bold font-display text-[#1B2730]">{post.author.name}</p>
            <p className="text-xs text-[#6C7A86] font-medium">{post.author.role}</p>
          </div>
        </div>

        {/* Content Body */}
        <article className="text-[#6C7A86] leading-relaxed text-base sm:text-lg space-y-6">
          <p className="font-semibold text-[#1B2730] text-lg sm:text-xl border-l-4 border-[#0F6B82] pl-4 py-1 italic mb-8 bg-[#F7F9FA] rounded-r-lg">
            {post.excerpt}
          </p>
          <div className="whitespace-pre-line space-y-4 text-[#1B2730]">
            {post.content}
          </div>
        </article>

        {/* Call to action section */}
        <div className="enterprise-card mt-16 p-8 text-center bg-gradient-to-br from-[#F7F9FA] to-white border border-[#E5EBEF]">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1B2730] mb-3">
            Interested in discussing these trends?
          </h3>
          <p className="text-[#6C7A86] text-sm sm:text-base leading-relaxed mb-6">
            Our managing partners can consult with your board of directors on current market multiples, fundraising plans, or talent structuring benchmarks.
          </p>
          <Link href="/contact">
            <button className="btn-primary-enterprise text-base">
              Schedule a Corporate Consultation
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
