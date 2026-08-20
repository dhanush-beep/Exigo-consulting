import React from "react";
import { constructMetadata } from "@/lib/metadata";
import AdvisorsClient from "./AdvisorsClient";

export const metadata = constructMetadata({
  title: "Strategic Advisors | Exigo Consulting",
  description: "Meet Exigo Consulting’s strategic advisor network across valuation, corporate law, governance, talent and business leadership supporting M&A and growth mandates."
});

export default function AdvisorsPage() {
  return <AdvisorsClient />;
}
