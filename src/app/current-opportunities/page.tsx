"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronUp,
  ChevronDown,
  Building2,
  Users,
  ShieldCheck,
  Monitor,
  UserSearch,
  Lock,
  FileText,
  Send,
  CheckCircle2,
} from "lucide-react";
import Container from "@/components/ui/Container";

export default function CurrentOpportunitiesPage() {
  // Allow multiple items to be toggled, all items open by default matching the screenshot
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1, 2, 3, 4, 5, 6]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    companyName: "",
    companyWebsite: "",
    message: "",
  });

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        companyName: "",
        companyWebsite: "",
        message: "",
      });
    }, 4000);
  };

  const opportunities = [
    {
      id: 1,
      title: "Hyderabad-based IT Services Firm",
      icon: Building2,
      description:
        "Innovative IT services provider with 90+ tech resources, strategically partnered with industry giants like IBM, Akamai, and RedHat. Projected to reach INR 31 Cr by March 2025, the firm specializes in delivering cutting-edge technology solutions to drive digital transformation.",
    },
    {
      id: 2,
      title: "Hyderabad-based Non-IT Staffing Firm",
      icon: Users,
      description:
        "A prominent non-IT staffing firm with over 1250 billable resources, offering end-to-end workforce solutions across various sectors. Renowned for its efficient recruitment strategies and exceptional talent pool.",
    },
    {
      id: 3,
      title: "Bengaluru-based IT Staffing Firm",
      icon: Users,
      description:
        "Leading IT staffing solutions provider with 500+ billable resources, catering to diverse client needs. Projected to reach a remarkable revenue of INR 60 Cr by March 2025, driving growth and innovation in the tech industry.",
    },
    {
      id: 4,
      title: "Bengaluru-based IT Managed Services Company (NOC/SOC)",
      icon: ShieldCheck,
      description:
        "Expert IT Managed Services provider specializing in Network Operations Center (NOC) and Security Operations Center (SOC) support. With 400 tech resources, this company is projected to reach INR 35 Cr by March 2025, ensuring robust infrastructure and cybersecurity solutions.",
    },
    {
      id: 5,
      title: "Chennai-based IT Services Firm",
      icon: Monitor,
      description:
        "Specialized IT services provider with 150+ tech resources, excelling in Salesforce (SFDC) and Mulesoft solutions. Committed to delivering transformative digital experiences and streamlined integration services for enterprises.",
    },
    {
      id: 6,
      title: "Chennai-based IT Staffing Firm",
      icon: UserSearch,
      description:
        "Dynamic IT staffing firm with 450+ billable resources, delivering specialized talent to accelerate business success. Expected to achieve INR 40 Cr in revenue by March 2025, reflecting strong industry demand and operational excellence.",
    },
    {
      id: 7,
      title: "US-based Cybersecurity Firm",
      icon: Lock,
      description:
        "Leading cybersecurity firm based in the US, generating approximately USD $3.5 million in revenue. Trusted by marquee clients like Accenture and Tech Mahindra, the firm provides advanced security solutions to safeguard digital assets and ensure robust cyber resilience.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 select-none">
      {/* Hero Header matching exact image mockup overlay */}
      <div className="relative h-[220px] sm:h-[260px] w-full bg-[#0A1722] flex items-center justify-center overflow-hidden">
        {/* Dark Blue Business Image Background */}
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-[0.5] contrast-[1.2]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111A]/90 via-[#0B2535]/80 to-[#07111A]/90" />

        {/* Header Text */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight drop-shadow-md mb-2">
            Current M&amp;A Opportunities with EXIGO
          </h1>
          <p className="text-sm sm:text-base text-slate-200 font-normal opacity-90">
            Explore strategic opportunities to grow, invest and lead.
          </p>
        </div>
      </div>

      {/* Main Content Split Grid */}
      <Container className="pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Opportunities Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {opportunities.map((item, index) => {
              const isOpen = openIndexes.includes(index);
              const IconComp = item.icon;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-300 bg-white overflow-hidden ${
                    isOpen
                      ? "border-[#0F6B82]/40 shadow-md ring-1 ring-[#0F6B82]/20"
                      : "border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {/* Accordion Header Bar */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Round Toggle Chevron Button */}
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                          isOpen
                            ? "bg-[#0F6B82] text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                        }`}
                      >
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-sm sm:text-base font-bold font-display transition-colors ${
                          isOpen ? "text-[#0F6B82]" : "text-[#1B2730]"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Right Side Icon Container */}
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#0F6B82] shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Expanded Body Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 sm:pl-[68px]">
                          {item.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Express Your Interest Form Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
              {/* Form Card Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#0F6B82]/10 border border-[#0F6B82]/20 flex items-center justify-center text-[#0F6B82] shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1B2730] font-display">
                    Express Your Interest
                  </h2>
                  <div className="h-0.5 w-12 bg-[#DE7A66] my-1 rounded-full" />
                  <p className="text-xs text-slate-500 font-normal">
                    Fill out the form and our team will connect with you shortly.
                  </p>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center text-[#0F6B82] my-8"
                >
                  <CheckCircle2 className="w-12 h-12 text-[#0F6B82] mx-auto mb-3" />
                  <h3 className="text-lg font-bold font-display">Thank You!</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Your enquiry has been received. Our M&amp;A advisory team will reach out to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0F6B82] focus:ring-1 focus:ring-[#0F6B82] transition-all bg-slate-50/50 focus:bg-white"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0F6B82] focus:ring-1 focus:ring-[#0F6B82] transition-all bg-slate-50/50 focus:bg-white"
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="Enter your mobile number"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0F6B82] focus:ring-1 focus:ring-[#0F6B82] transition-all bg-slate-50/50 focus:bg-white"
                    />
                  </div>

                  {/* Inline Company Name & Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Enter company name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0F6B82] focus:ring-1 focus:ring-[#0F6B82] transition-all bg-slate-50/50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company Website
                      </label>
                      <input
                        type="text"
                        value={formData.companyWebsite}
                        onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                        placeholder="Enter website"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0F6B82] focus:ring-1 focus:ring-[#0F6B82] transition-all bg-slate-50/50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your requirements..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0F6B82] focus:ring-1 focus:ring-[#0F6B82] transition-all bg-slate-50/50 focus:bg-white resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0F6B82] hover:bg-[#155B6D] text-white font-bold text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer group mt-2"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
