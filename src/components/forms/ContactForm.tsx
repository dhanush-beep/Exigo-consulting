"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    service: "mergers-acquisitions",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        service: "mergers-acquisitions",
        message: ""
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="enterprise-card p-8 sm:p-10 max-w-xl mx-auto bg-white border border-[#E5EBEF]">
      {status === "success" ? (
        <div className="text-center py-8 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-[#0F6B82]/10 border border-[#0F6B82]/20 text-[#0F6B82] flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold font-display text-[#1B2730] mb-2">Message Sent</h3>
          <p className="text-[#6C7A86]">
            Thank you for reaching out. A senior partner will contact you within one business day.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="btn-secondary-enterprise mt-8"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-sm text-[#1B2730] placeholder-[#6C7A86] focus:outline-none focus:border-[#0F6B82] focus:ring-1 focus:ring-[#0F6B82] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-2">
                Work Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-sm text-[#1B2730] placeholder-[#6C7A86] focus:outline-none focus:border-[#0F6B82] focus:ring-1 focus:ring-[#0F6B82] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-sm text-[#1B2730] placeholder-[#6C7A86] focus:outline-none focus:border-[#0F6B82] focus:ring-1 focus:ring-[#0F6B82] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Corp"
                className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-sm text-[#1B2730] placeholder-[#6C7A86] focus:outline-none focus:border-[#0F6B82] focus:ring-1 focus:ring-[#0F6B82] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="country" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-2">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="India / United States"
                className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-sm text-[#1B2730] placeholder-[#6C7A86] focus:outline-none focus:border-[#0F6B82] focus:ring-1 focus:ring-[#0F6B82] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-2">
                Service of Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-sm text-[#1B2730] focus:outline-none focus:border-[#0F6B82] focus:ring-1 focus:ring-[#0F6B82] transition-colors"
              >
                <option value="mergers-acquisitions">Mergers &amp; Acquisitions</option>
                <option value="fundraising">Fundraising &amp; Capital Scale</option>
                <option value="business-consulting">Business Strategy</option>
                <option value="talent-acquisition">Talent Acquisition</option>
                <option value="other-services">Strategic Advisory</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-2">
              Message / Consultation Brief
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your current strategic goals or advisory requirements..."
              className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-sm text-[#1B2730] placeholder-[#6C7A86] focus:outline-none focus:border-[#0F6B82] focus:ring-1 focus:ring-[#0F6B82] transition-colors resize-none"
            ></textarea>
          </div>

          {status === "error" && (
            <p className="text-red-500 text-sm">An error occurred. Please try again.</p>
          )}

          <button
            type="submit"
            className="btn-primary-enterprise w-full justify-center text-base font-medium py-3.5"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending Request..." : "Request Private Consultation"}
          </button>
        </form>
      )}
    </div>
  );
}
