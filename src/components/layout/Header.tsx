"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
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
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 w-full",
        scrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-[#E5EBEF] shadow-[0_2px_16px_0_rgba(15,107,130,0.08)] py-3"
          : "bg-white py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-[10px] bg-[#0F6B82] flex items-center justify-center font-bold text-white text-lg shadow-[0_4px_12px_0_rgba(15,107,130,0.35)] group-hover:scale-105 transition-transform duration-300">
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
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === link.label && "rotate-180")} />
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
                <div className="absolute top-full left-0 pt-2 w-60 z-50 animate-[fade-in_0.2s_ease-out]">
                  <div className="bg-white rounded-[18px] shadow-[0_8px_32px_0_rgba(15,107,130,0.15)] py-2 border border-[#E5EBEF]">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={cn(
                          "block px-5 py-3 text-sm text-[#1B2730] hover:text-[#0F6B82] hover:bg-[#F7F9FA] transition-colors mx-2 rounded-xl",
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
        <div className="fixed inset-0 top-[62px] z-40 bg-white lg:hidden border-t border-[#E5EBEF] shadow-xl overflow-y-auto">
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
  );
}
