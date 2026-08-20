import React from "react";
import { constructMetadata } from "@/lib/metadata";
import HeroSection from "@/components/sections/HeroSection";
import IndustryLeaders from "@/components/sections/IndustryLeaders";
import AboutExigoSection from "@/components/sections/AboutExigoSection";
import ServicesAdvisoryGrid from "@/components/sections/ServicesAdvisoryGrid";
import ProcessTimelineSection from "@/components/sections/ProcessTimelineSection";
import ResultsAndTestimonialSection from "@/components/sections/ResultsAndTestimonialSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import TransformCtaBanner from "@/components/sections/TransformCtaBanner";

export const metadata = constructMetadata({
  title: "About Exigo Consulting | Founder-Led M&A Advisory",
  description: "Learn about Exigo Consulting, a Hyderabad-based founder-led advisory firm focused on M&A, fundraising, business consulting and talent for IT services and staffing companies."
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white select-none">
      <HeroSection />
      <IndustryLeaders />
      <AboutExigoSection />
      <ServicesAdvisoryGrid />
      <ProcessTimelineSection />
      <ResultsAndTestimonialSection />
      <LeadershipSection />
      <TransformCtaBanner />
    </main>
  );
}
