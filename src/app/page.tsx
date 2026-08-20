import React from "react";
import { constructMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import {
  PositioningStrip,
  SutradharPhilosophy,
  HowWeHelp,
  WhyExigo,
  OurApproach,
  InsightsSummary
} from "@/components/sections/HomeMasterSections";

import Portfolio3DCarousel from "@/components/sections/Portfolio3DCarousel";

export const metadata = constructMetadata({
  title: "Exigo Consulting | M&A Advisory for IT Services & Staffing",
  description: "Founder-led M&A, fundraising, business consulting and executive talent advisory for IT services, IT staffing and technology companies in India and global markets."
});

export default function Home() {
  return (
    <>
      <Hero />
      <PositioningStrip />
      <Portfolio3DCarousel />
      <SutradharPhilosophy />
      <HowWeHelp />
      <WhyExigo />
      <OurApproach />
      <InsightsSummary />
    </>
  );
}
