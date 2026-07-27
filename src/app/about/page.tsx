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
  title: "About Exigo - Corporate M&A Advisory",
  description: "Learn about Exigo Consulting, our practice mandates, senior-led execution model, and transformative M&A advisory services."
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
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
