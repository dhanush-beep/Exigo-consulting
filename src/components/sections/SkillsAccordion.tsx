"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "../ui/Container";

const skills = [
  {
    title: "Valuation Modeling & Analysis",
    content: "We build institutional-grade Discounted Cash Flow (DCF), Leveraged Buyout (LBO), and public/transaction comparable models. Our work establishes defensible, clean valuation frameworks that withstand the scrutiny of Tier-1 buyers and private equity investment committees."
  },
  {
    title: "Transaction Structuring & Negotiation",
    content: "Getting the right price is only half the battle. We specialize in structuring deals to optimize tax treatment, manage risk, and align buyer/seller incentives — including earn-out provisions, debt instruments, and working capital peg definitions."
  },
  {
    title: "Buy-Side and Sell-Side Due Diligence Support",
    content: "We establish virtual clean-rooms, pre-vet transaction data, and manage the flow of information between legal counsel, accounting firms, and counterparts to prevent deal fatigue and broken auctions."
  },
  {
    title: "Executive Competency Mapping & Search",
    content: "Our recruitment practice uses structured behavioral assessments, industry mapping, and direct outreach. We evaluate leaders on strategic foresight, operational track record, and cultural compatibility to guarantee successful integrations."
  },
  {
    title: "Market Entry & GTM Strategic Planning",
    content: "We conduct primary market research and build comprehensive market entry, sizing, and pricing models. We map competitive landscapes and construct go-to-market strategies with clear milestones and resource allocation plans."
  }
];

function AccordionItem({ title, content, isOpen, onToggle }: {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="enterprise-accordion-item">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-2 text-left group"
      >
        <span
          className={`text-[16px] font-[500] transition-colors duration-200 ${isOpen ? "text-[#0F6B82]" : "text-[#1B2730] group-hover:text-[#0F6B82]"}`}
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          {title}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${isOpen ? "bg-[#0F6B82] text-white rotate-180" : "bg-[#F7F9FA] text-[#6C7A86] group-hover:bg-[#0F6B82]/10 group-hover:text-[#0F6B82]"}`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      >
        <p className="px-2 text-[15px] text-[#6C7A86] leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}

export default function SkillsAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Text column */}
        <div ref={leftRef} className="lg:col-span-5 flex flex-col gap-5 animate-section">
          <span className="section-label">Competencies</span>
          <h2
            className="text-4xl sm:text-[42px] font-[700] text-[#1B2730] leading-[1.15]"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            The Right Skill to Guide Your Corporate Mandate
          </h2>
          <p className="text-[17px] text-[#6C7A86] leading-relaxed">
            Successful transactions and transformations don&apos;t happen by chance. They are the result of rigorous analysis, precise deal engineering, and extensive market alignment.
          </p>
          <p className="text-[15px] text-[#6C7A86] leading-relaxed">
            Explore our core competencies to see how Exigo brings specialized expertise to your board&apos;s most important decisions.
          </p>

          {/* Visual stat */}
          <div className="mt-4 bg-[#F7F9FA] border border-[#E5EBEF] rounded-[20px] p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[14px] bg-[#0F6B82] flex items-center justify-center shrink-0">
                <span className="text-white font-[700] text-lg" style={{ fontFamily: "var(--font-outfit)" }}>E</span>
              </div>
              <div>
                <p className="text-[15px] font-[600] text-[#1B2730]">Expert-Led Advisory</p>
                <p className="text-[13px] text-[#6C7A86]">Every mandate receives partner-level attention</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion column */}
        <div ref={rightRef} className="lg:col-span-7 animate-section" style={{ transitionDelay: "150ms" }}>
          <div className="bg-white border border-[#E5EBEF] rounded-[24px] p-6 sm:p-8 shadow-[0_2px_12px_0_rgba(15,107,130,0.06)]">
            {skills.map((skill, index) => (
              <AccordionItem
                key={index}
                title={skill.title}
                content={skill.content}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
