import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import LinkedinIcon from "../ui/LinkedinIcon";
import { siteConfig } from "@/lib/metadata";
import Container from "../ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: "Mergers & Acquisitions", href: "/services/mergers-acquisitions" },
    { label: "Fundraising", href: "/services/fundraising" },
    { label: "Business Consulting", href: "/services/business-consulting" },
    { label: "Talent Acquisition", href: "/services/talent-acquisition" },
    { label: "Other Advisory", href: "/services/other-services" }
  ];

  const companyLinks = [
    { label: "About Overview", href: "/about" },
    { label: "Meet Rajesh", href: "/about/meet-rajesh" },
    { label: "Strategic Advisors", href: "/about/advisors" },
    { label: "Current Opportunities", href: "/current-opportunities" },
    { label: "Latest Briefings", href: "/blog" }
  ];

  return (
    <footer className="bg-[#F7F9FA] border-t border-[#E5EBEF] pt-16 pb-8 text-sm">
      <Container>
        {/* Top CTA Banner */}
        <div className="bg-[#0F6B82] rounded-[24px] p-8 sm:p-10 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3
              className="text-2xl sm:text-3xl font-[700] text-white mb-2"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-white/80 text-[15px]">
              Schedule a confidential advisory consultation with our senior partners.
            </p>
          </div>
          <Link href="/contact" className="shrink-0">
            <button className="btn-coral whitespace-nowrap">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-[10px] bg-[#0F6B82] flex items-center justify-center font-bold text-white text-lg shadow-[0_4px_12px_0_rgba(15,107,130,0.35)]">
                E
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[18px] text-[#1B2730] tracking-tight" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
                  EXIGO
                </span>
                <span className="text-[10px] font-medium tracking-[0.18em] text-[#0F6B82] uppercase">
                  CONSULTING
                </span>
              </div>
            </Link>
            <p className="text-[#6C7A86] leading-relaxed text-[14px]">
              High-caliber corporate advisory, M&amp;A oversight, institutional fundraising, and executive recruiting for enterprises poised for market leadership.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0F6B82]/10 border border-[#0F6B82]/20 flex items-center justify-center hover:bg-[#0F6B82] hover:text-white text-[#0F6B82] transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-[700] tracking-[0.12em] text-[#1B2730] uppercase mb-6">
              Advisory Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#6C7A86] hover:text-[#0F6B82] text-[14px] flex items-center gap-1 hover:gap-2 transition-all duration-200"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-[700] tracking-[0.12em] text-[#1B2730] uppercase mb-6">
              Exigo Consulting
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#6C7A86] hover:text-[#0F6B82] text-[14px] flex items-center gap-1 hover:gap-2 transition-all duration-200"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-[700] tracking-[0.12em] text-[#1B2730] uppercase mb-2">
              Headquarters
            </h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#0F6B82] shrink-0 mt-0.5" strokeWidth={1.75} />
              <span className="text-[14px] text-[#6C7A86] leading-relaxed">{siteConfig.contact.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#0F6B82] shrink-0" strokeWidth={1.75} />
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                className="text-[14px] text-[#6C7A86] hover:text-[#0F6B82] transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#0F6B82] shrink-0" strokeWidth={1.75} />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[14px] text-[#6C7A86] hover:text-[#0F6B82] transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E5EBEF] pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[13px] text-[#6C7A86]">
              © {currentYear} Exigo Consulting. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-[13px] text-[#6C7A86] hover:text-[#0F6B82] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[13px] text-[#6C7A86] hover:text-[#0F6B82] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
