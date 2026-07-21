import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card, { CardHeader, CardBody, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { MapPin, Briefcase, Calendar } from "lucide-react";

export const metadata = constructMetadata({
  title: "Current Opportunities",
  description: "Explore open career tracks and executive search opportunities with Exigo Consulting."
});

export default function CurrentOpportunitiesPage() {
  const roles = [
    {
      title: "Director, Tech M&A Practice",
      location: "Bangalore, India",
      type: "Full-Time",
      description: "We are seeking a senior transactional professional with 8+ years of M&A execution experience. You will lead deal structuring, model validation, and client relations for mid-market enterprise software mandates.",
      posted: "July 10, 2026"
    },
    {
      title: "Associate Partner, Organizational Strategy",
      location: "Bangalore, India (Hybrid)",
      type: "Full-Time",
      description: "Lead consulting mandates for scaling companies. Experience designing GTM org charts, compensation benchmarking, and executing executive hiring plans is required.",
      posted: "June 25, 2026"
    },
    {
      title: "VP, Life Sciences Investment Advisory",
      location: "Bangalore, India",
      type: "Full-Time / Partner-Track",
      description: "Direct valuations and corporate finance mandates for biotech, diagnostics, and pharmaceutical scale-ups. Academic background in biochemistry or medicine alongside financial pedigree is highly preferred.",
      posted: "June 18, 2026"
    }
  ];

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
          title="Current Opportunities"
          subtitle="Careers"
          description="Join our elite team of transaction advisors, compensation specialists, and industry consultants."
        />

        {/* Narrative */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#6C7A86] leading-relaxed text-sm sm:text-base">
            At Exigo, we reject administrative layers. Our team members work directly with client founders and corporate boards on defining mandates. If you value analytical rigor, transparent advisor-client relationships, and hands-on deal execution, review our open tracks below.
          </p>
        </div>

        {/* Roles List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {roles.map((role, index) => (
            <div key={index} className="enterprise-card p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1B2730]">
                    {role.title}
                  </h3>
                  <div className="flex gap-4 items-center text-xs text-[#6C7A86] mt-2 flex-wrap font-medium">
                    <span className="flex items-center gap-1 text-[#0F6B82]">
                      <MapPin className="w-3.5 h-3.5" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1 text-[#0F6B82]">
                      <Briefcase className="w-3.5 h-3.5" />
                      {role.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Posted {role.posted}
                    </span>
                  </div>
                </div>
                <a href="mailto:careers@exigo-consulting.com?subject=Application%20for%20Role">
                  <button className="btn-primary-enterprise text-sm py-2 px-5">
                    Apply Now
                  </button>
                </a>
              </div>
              <p className="text-[#6C7A86] text-sm sm:text-base leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        {/* Speculative Application */}
        <div className="enterprise-card max-w-3xl mx-auto mt-16 p-8 text-center bg-[#F7F9FA]">
          <h3 className="text-lg font-bold font-display text-[#1B2730] mb-3">Speculative Inquiries</h3>
          <p className="text-[#6C7A86] text-sm leading-relaxed mb-6">
            If you are an experienced investment banker, strategy consultant, or executive search director and don't see a current opening, we would still like to hear from you.
          </p>
          <a href="mailto:careers@exigo-consulting.com">
            <button className="btn-secondary-enterprise">Send Speculative CV</button>
          </a>
        </div>
      </Container>
    </div>
  );
}
