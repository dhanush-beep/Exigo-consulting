import React from "react";
import { constructMetadata } from "@/lib/metadata";
import MeetRajeshClient from "./MeetRajeshClient";

export const metadata = constructMetadata({
  title: "Rajesh Gade (RG) | Founder, Exigo Consulting",
  description: "Meet Rajesh Gade, founder of Exigo Consulting, with 38+ years across IT, communications and healthcare and hands-on experience in entrepreneurship, business leadership and M&A advisory."
});

export default function MeetRajeshPage() {
  return <MeetRajeshClient />;
}
