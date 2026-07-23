import React from "react";
import Hero from "@/components/sections/Hero";
import Portfolio3DCarousel from "@/components/sections/Portfolio3DCarousel";
import AboutSummary from "@/components/sections/AboutSummary";
import NavigatingSuccess from "@/components/sections/NavigatingSuccess";
import CompanyProgress from "@/components/sections/CompanyProgress";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio3DCarousel />
      <AboutSummary />
      <NavigatingSuccess />
      <CompanyProgress />
      <Testimonials />
    </>
  );
}
