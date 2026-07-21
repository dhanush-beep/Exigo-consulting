import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Advisory Services",
  description: "Explore the primary business advisory focus areas of Exigo Consulting, including M&A, private equity, and executive search."
});

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24 relative">
      {/* Subtle Hero Grid & Background Glows */}
      <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(15,107,130,0.12) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10">
        <ServicesGrid />
      </div>

      {/* CTA section */}
      <section className="py-20 border-t border-[#E5EBEF] bg-[#F7F9FA] relative overflow-hidden mt-16">
        <Container className="relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1B2730] mb-4">
            Ready to Structure Your Next Corporate Phase?
          </h2>
          <p className="text-[#6C7A86] leading-relaxed mb-8 text-base sm:text-lg">
            Consult with a senior partner to discuss valuations, private capital rounds, organizational scaling, or M&amp;A buy-side searches in complete confidentiality.
          </p>
          <Link href="/contact">
            <button className="btn-primary-enterprise text-base">
              Request Private Briefing
              <ArrowRight className="w-4 h-4 btn-arrow" />
            </button>
          </Link>
        </Container>
      </section>
    </div>
  );
}
