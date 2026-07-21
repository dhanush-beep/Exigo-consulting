"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Layers, Workflow, Zap, Cloud, Brain, Settings, Shield, BarChart3, ArrowRight
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const enterpriseServices = [
  {
    icon: Layers,
    title: "Enterprise Integration",
    description: "Seamlessly connect your enterprise systems and data sources with robust middleware and API-first architecture.",
    href: "/services/business-consulting",
    color: "#0F6B82"
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Transform manual business processes into intelligent, scalable automated workflows that drive operational efficiency.",
    href: "/services/business-consulting",
    color: "#0F6B82"
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Comprehensive digital strategy and execution to modernize your operations and accelerate competitive advantage.",
    href: "/services/mergers-acquisitions",
    color: "#DE7A66"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Enterprise-grade cloud migration, infrastructure design, and optimization across AWS, Azure, and GCP ecosystems.",
    href: "/services/fundraising",
    color: "#0F6B82"
  },
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Strategic AI adoption roadmaps, model selection, and implementation for measurable business outcomes.",
    href: "/services/business-consulting",
    color: "#DE7A66"
  },
  {
    icon: Settings,
    title: "Managed Services",
    description: "24/7 enterprise technology management, monitoring, and proactive optimization from certified specialists.",
    href: "/services/other-services",
    color: "#0F6B82"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security frameworks, risk assessments, and compliance programs protecting your critical assets.",
    href: "/services/other-services",
    color: "#DE7A66"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Turn raw data into executive-level intelligence with advanced analytics, BI dashboards, and predictive modeling.",
    href: "/services/fundraising",
    color: "#0F6B82"
  }
];

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (gridRef.current) observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 relative bg-[#F7F9FA] animate-section">
      <Container>
        <SectionHeading
          title="Our Specialized Advisory Services"
          subtitle="What We Do"
          description="We deliver partner-led advisory services tailored to our clients' long-term commercial and technological goals."
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {enterpriseServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link href={service.href} key={index}>
                <div className="enterprise-card p-6 h-full flex flex-col gap-4 cursor-pointer group">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-[14px] flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: service.color === "#DE7A66"
                        ? "rgba(222,122,102,0.1)"
                        : "rgba(15,107,130,0.08)",
                      border: `1px solid ${service.color === "#DE7A66" ? "rgba(222,122,102,0.2)" : "rgba(15,107,130,0.15)"}`,
                      color: service.color
                    }}
                  >
                    <IconComponent className="w-5 h-5" strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[17px] font-[600] text-[#1B2730] leading-snug group-hover:text-[#0F6B82] transition-colors"
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] text-[#6C7A86] leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Animated Arrow Link */}
                  <div className="arrow-link pt-2 border-t border-[#E5EBEF]">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Below Grid */}
        <div className="text-center mt-14">
          <Link href="/services">
            <button className="btn-secondary-enterprise">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
