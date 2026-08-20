"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    mobile: "",
    website: "",
    discussionTopic: "Buy-Side M&A",
    context: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        role: "",
        email: "",
        mobile: "",
        website: "",
        discussionTopic: "Buy-Side M&A",
        context: ""
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-3xl p-8 sm:p-10 max-w-xl mx-auto bg-white border border-[#E5EBEF] shadow-sm">
      {status === "success" ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-[#0F6B82]/10 border border-[#0F6B82]/20 text-[#0F6B82] flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold font-display text-[#1B2730] mb-2">Conversation Initiated</h3>
          <p className="text-slate-600 text-sm">
            Thank you for sharing your context. Exigo will respond to discuss your mandate confidentially.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 px-6 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-[#0F6B82] hover:bg-slate-50 transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-1.5">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Rajesh Gade"
                className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1B2730] placeholder-slate-400 focus:outline-none focus:border-[#0F6B82] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-1.5">
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1B2730] placeholder-slate-400 focus:outline-none focus:border-[#0F6B82] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="role" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-1.5">
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Founder / CEO / Director"
                className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1B2730] placeholder-slate-400 focus:outline-none focus:border-[#0F6B82] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-1.5">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1B2730] placeholder-slate-400 focus:outline-none focus:border-[#0F6B82] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="mobile" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-1.5">
                Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+91 80089 22112"
                className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1B2730] placeholder-slate-400 focus:outline-none focus:border-[#0F6B82] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-1.5">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://company.com"
                className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1B2730] placeholder-slate-400 focus:outline-none focus:border-[#0F6B82] transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="discussionTopic" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-1.5">
              I want to discuss *
            </label>
            <select
              id="discussionTopic"
              name="discussionTopic"
              value={formData.discussionTopic}
              onChange={handleChange}
              className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1B2730] focus:outline-none focus:border-[#0F6B82] transition-colors"
            >
              <option value="Buy-Side M&A">Buy-Side M&amp;A</option>
              <option value="Sell-Side M&A">Sell-Side M&amp;A</option>
              <option value="Fundraising">Fundraising</option>
              <option value="Business Consulting">Business Consulting</option>
              <option value="Talent">Talent</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="context" className="block text-xs font-bold uppercase text-[#1B2730] tracking-wider mb-1.5">
              Brief Context
            </label>
            <textarea
              id="context"
              name="context"
              rows={4}
              value={formData.context}
              onChange={handleChange}
              placeholder="Share brief background on your objectives, timing, or transaction scope..."
              className="w-full bg-[#F7F9FA] border border-[#E5EBEF] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#1B2730] placeholder-slate-400 focus:outline-none focus:border-[#0F6B82] transition-colors resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-red-500 text-xs">An error occurred. Please try again.</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#0F6B82] hover:bg-[#155B6D] text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-md"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Start a Confidential Conversation"}
          </button>
        </form>
      )}
    </div>
  );
}
