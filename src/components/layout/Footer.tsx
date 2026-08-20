"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ChevronRight, ArrowRight } from "lucide-react";
import LinkedinIcon from "../ui/LinkedinIcon";
import Container from "../ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks = [
    { label: "Mergers & Acquisitions", href: "/services/mergers-acquisitions" },
    { label: "Fundraising Advisory", href: "/services/fundraising" },
    { label: "Business Consulting", href: "/services/business-consulting" },
    { label: "Executive Search & Talent", href: "/services/talent-acquisition" },
    { label: "Transaction Support", href: "/services/other-services" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Meet Rajesh Gade", href: "/about/meet-rajesh" },
    { label: "Strategic Advisors", href: "/about/advisors" },
    { label: "Current Opportunities", href: "/current-opportunities" },
    { label: "Insights", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#091A26] text-white border-t border-white/10 pt-16 pb-8 text-sm select-none">
      <Container>
        {/* Main 4-Column Footer Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          
          {/* Column 1: Brand & Headquarters Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="inline-block group transition-transform duration-300 hover:scale-[1.02] mb-2">
              <Image
                src="/logo.png"
                alt="Exigo Consulting Logo"
                width={180}
                height={64}
                className="h-10 w-auto object-contain filter brightness-[1.2]"
              />
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Exigo Consulting — The Sutradhar behind M&amp;A, capital, business growth and leadership for IT Services, IT Staffing and Technology companies.
            </p>

            <div className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed mt-1">
              <MapPin className="w-4 h-4 text-[#DE7A66] shrink-0 mt-0.5" />
              <span>
                Level 1, Suite #11, Tourism Plaza, Begumpet, Hyderabad, Telangana 500016, India
              </span>
            </div>

            <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
              <Mail className="w-4 h-4 text-[#3A9FB7] shrink-0" />
              <a
                href="mailto:rg@exigoconsulting.in"
                className="hover:text-[#4CC9F0] transition-colors"
              >
                rg@exigoconsulting.in
              </a>
            </div>

            <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-[#3A9FB7] shrink-0" />
              <a
                href="tel:+918008922112"
                className="hover:text-[#4CC9F0] transition-colors"
              >
                +91 80089 22112
              </a>
            </div>

            {/* Social Icons matching screenshot */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0F6B82] text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="Facebook Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0077B5] text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-white font-display mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#4CC9F0] text-xs sm:text-sm flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#3A9FB7] group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-white font-display mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-[#4CC9F0] text-xs sm:text-sm flex items-center gap-1.5 transition-colors group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Form */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-base font-bold text-white font-display mb-1">
              The Sutradhar Brief
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              M&amp;A, capital and growth insights for technology business leaders.
            </p>

            <form onSubmit={handleSubscribe} className="relative flex items-center w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-white text-slate-900 placeholder:text-slate-400 rounded-xl py-3 pl-4 pr-12 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3A9FB7]"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-[#0F6B82] hover:bg-[#155B6D] text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Subscribe to Newsletter"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {subscribed ? (
              <p className="text-xs text-[#4CC9F0] font-medium">Thank you for subscribing to The Sutradhar Brief!</p>
            ) : (
              <p className="text-[11px] text-slate-400">
                We respect your privacy. <span className="underline cursor-pointer">Unsubscribe</span> at any time.
              </p>
            )}
          </div>

        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="border-t border-white/10 pt-8 mt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© {currentYear} Exigo Consulting. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
