"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight, MapPin, Phone } from "lucide-react";
import LinkedinIcon from "../ui/LinkedinIcon";
import { cn } from "@/lib/utils";
import Container from "../ui/Container";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      dropdown: [
        { label: "About Exigo", href: "/about" },
        { label: "Meet Rajesh", href: "/about/meet-rajesh" },
        { label: "Strategic Advisors", href: "/about/advisors" }
      ]
    },
    {
      label: "Services",
      href: "/services",
      dropdown: [
        { label: "All Services", href: "/services" },
        { label: "Mergers & Acquisitions", href: "/services/mergers-acquisitions" },
        { label: "Fundraising", href: "/services/fundraising" },
        { label: "Business Consulting", href: "/services/business-consulting" },
        { label: "Talent Acquisition", href: "/services/talent-acquisition" },
        { label: "Other Services", href: "/services/other-services" }
      ]
    },
    { label: "Opportunities", href: "/current-opportunities" },
    { label: "Blog", href: "/blog" }
  ];

  return (
    <div className="w-full z-50 sticky top-0 select-none">
      {/* Black Top Header Bar matching Screenshot */}
      <div className="bg-black text-white text-[12px] py-2 border-b border-white/10 font-sans">
        <Container className="flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Address & Phone */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-neutral-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#DE7A66] shrink-0" />
              <span>
                Level 1, Suite # 11, Tourism Plaza, Begumpet, Greenland&apos;s-Hyderabad. Telangana-India-500016.
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#0F6B82] shrink-0" />
              <a
                href="tel:+918008922112"
                className="hover:text-white transition-colors font-medium"
              >
                +91 80089 22112
              </a>
            </div>
          </div>

          {/* Social Follow Links */}
          <div className="flex items-center gap-3 text-neutral-300 shrink-0">
            <span className="text-neutral-400 font-medium">Follow Us :</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-[#0F6B82] transition-colors p-1"
              aria-label="Facebook Profile"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-[#0F6B82] transition-colors p-1 flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E5EBEF]/80 shadow-[0_4px_20px_0_rgba(15,107,130,0.08)] py-3"
            : "bg-white border-b border-[#E5EBEF]/60 py-4"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/logo.png"
              alt="Exigo Consulting Logo"
              width={180}
              height={64}
              priority
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 text-[14px] font-medium transition-colors hover:text-[#0F6B82] py-2 px-3 rounded-lg hover:bg-[#F7F9FA]",
                      pathname.startsWith(link.href) ? "text-[#0F6B82]" : "text-[#1B2730]"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", activeDropdown === link.label && "rotate-180")} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[14px] font-medium transition-colors hover:text-[#0F6B82] py-2 px-3 rounded-lg hover:bg-[#F7F9FA]",
                      pathname === link.href ? "text-[#0F6B82]" : "text-[#1B2730]"
                    )}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 w-60 z-50 animate-fade-scale">
                    <div className="bg-white/95 backdrop-blur-md rounded-[18px] shadow-[0_12px_40px_0_rgba(15,107,130,0.15)] py-2 border border-[#E5EBEF]">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={cn(
                            "block px-5 py-3 text-sm text-[#1B2730] hover:text-[#0F6B82] hover:bg-[#F7F9FA] transition-all duration-200 mx-2 rounded-xl",
                            pathname === subItem.href && "text-[#0F6B82] bg-[#F7F9FA]"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0F6B82] text-white text-sm font-medium rounded-full shadow-[0_4px_14px_0_rgba(15,107,130,0.3)] hover:bg-[#155B6D] hover:scale-[1.03] transition-all duration-300 group">
                Get Consultation
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#1B2730] hover:text-[#0F6B82] transition-colors p-1.5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </Container>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 top-[110px] z-40 bg-white lg:hidden border-t border-[#E5EBEF] shadow-xl overflow-y-auto">
            <Container className="py-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-[#E5EBEF] pb-4 last:border-0">
                  {link.dropdown ? (
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-semibold tracking-widest text-[#6C7A86] uppercase px-2 py-2">
                        {link.label}
                      </span>
                      <div className="flex flex-col gap-1 pl-3">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                              "text-[15px] font-medium text-[#1B2730] hover:text-[#0F6B82] transition-colors px-3 py-2 rounded-xl hover:bg-[#F7F9FA]",
                              pathname === subItem.href && "text-[#0F6B82] bg-[#F7F9FA]"
                            )}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "text-lg font-medium text-[#1B2730] hover:text-[#0F6B82] transition-colors block px-2 py-2",
                        pathname === link.href && "text-[#0F6B82]"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/contact" className="mt-6">
                <button className="w-full justify-center inline-flex items-center gap-2 px-7 py-4 bg-[#0F6B82] text-white text-base font-medium rounded-full shadow-[0_4px_14px_0_rgba(15,107,130,0.3)] hover:bg-[#155B6D] transition-all">
                  Get Consultation
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </Container>
          </div>
        )}
      </header>
    </div>
  );
}
