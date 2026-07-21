import React from "react";
import Hero from "@/components/sections/Hero";
import StatsCounter from "@/components/sections/StatsCounter";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AboutSummary from "@/components/sections/AboutSummary";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import SkillsAccordion from "@/components/sections/SkillsAccordion";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <ServicesGrid />
      <AboutSummary />
      <WhyChooseUs />
      <SkillsAccordion />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
