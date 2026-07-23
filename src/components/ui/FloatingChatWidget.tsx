"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send, PhoneCall, Calendar, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"menu" | "form" | "success">("menu");
  const [formData, setFormData] = useState({ name: "", email: "", topic: "M&A Advisory" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Interactive Modal / Popup */}
      {isOpen && (
        <div className="mb-4 w-[360px] sm:w-[400px] bg-white rounded-[24px] shadow-[0_16px_50px_-10px_rgba(15,107,130,0.25)] border border-[#E5EBEF] overflow-hidden animate-[fade-scale-up_0.35s_cubic-bezier(0.34,1.56,0.64,1)_both]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#102A35] via-[#153A47] to-[#0F6B82] p-5 text-white flex items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white relative">
                <Sparkles className="w-5 h-5 text-[#FBBF24]" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#102A35] rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-base leading-tight">Exigo Advisory Desk</h4>
                <p className="text-xs text-white/70 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Senior Partners Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors relative z-10"
              aria-label="Close Chat Desk"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="p-5 bg-[#F7F9FA]">
            {step === "menu" && (
              <div className="flex flex-col gap-3">
                <p className="text-sm text-[#1B2730] font-medium mb-1">
                  How can our executive team assist your enterprise today?
                </p>
                <button
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, topic: "M&A Advisory" }));
                    setStep("form");
                  }}
                  className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#E5EBEF] hover:border-[#0F6B82] hover:bg-teal-50/50 transition-all duration-300 text-left group shadow-xs spring-hover"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0F6B82]/10 text-[#0F6B82] flex items-center justify-center group-hover:bg-[#0F6B82] group-hover:text-white transition-colors">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1B2730]">Schedule M&amp;A Briefing</div>
                      <div className="text-[11px] text-[#6C7A86]">30-min confidential partner call</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#6C7A86] group-hover:text-[#0F6B82] group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, topic: "Capital Raise & Sourcing" }));
                    setStep("form");
                  }}
                  className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#E5EBEF] hover:border-[#0F6B82] hover:bg-teal-50/50 transition-all duration-300 text-left group shadow-xs spring-hover"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#DE7A66]/10 text-[#DE7A66] flex items-center justify-center group-hover:bg-[#DE7A66] group-hover:text-white transition-colors">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1B2730]">Fundraising &amp; Growth Capital</div>
                      <div className="text-[11px] text-[#6C7A86]">Connect with institutional network</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#6C7A86] group-hover:text-[#DE7A66] group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, topic: "Executive Leadership Search" }));
                    setStep("form");
                  }}
                  className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#E5EBEF] hover:border-[#0F6B82] hover:bg-teal-50/50 transition-all duration-300 text-left group shadow-xs spring-hover"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center group-hover:bg-[#F59E0B] group-hover:text-white transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1B2730]">Executive Talent Search</div>
                      <div className="text-[11px] text-[#6C7A86]">Hire C-Suite &amp; Board Directors</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#6C7A86] group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            )}

            {step === "form" && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0F6B82] uppercase tracking-wider">
                    {formData.topic}
                  </span>
                  <button
                    type="button"
                    onClick={() => setStep("menu")}
                    className="text-xs text-[#6C7A86] hover:text-[#1B2730] underline"
                  >
                    Back
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="enterprise-input text-xs py-2.5"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Corporate Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="enterprise-input text-xs py-2.5"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-yellow-cta justify-center py-2.5 text-xs font-bold shadow-md"
                >
                  Request Executive Callback
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {step === "success" && (
              <div className="text-center py-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 animate-[bounce_0.6s_ease-out]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-base text-[#1B2730] mb-1">Request Confirmed!</h4>
                <p className="text-xs text-[#6C7A86] max-w-[260px] leading-relaxed mb-4">
                  Thank you, {formData.name}. Our senior partner will contact you shortly via {formData.email}.
                </p>
                <button
                  onClick={() => {
                    setStep("menu");
                    setIsOpen(false);
                  }}
                  className="btn-primary-enterprise text-xs py-2 px-5"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-3 bg-[#102A35] hover:bg-[#153A47] text-white p-3.5 pl-4 rounded-full shadow-[0_8px_30px_rgba(15,107,130,0.35)] border border-[#0F6B82]/30 cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 active:scale-95"
        aria-label="Open Executive Consultation Chat Desk"
      >
        {/* Pulse ring animation around button */}
        <span className="absolute inset-0 rounded-full bg-[#0F6B82] opacity-40 animate-[pulse-ring_3s_ease-out_infinite] pointer-events-none" />

        <div className="relative z-10 flex items-center gap-2.5">
          <div className="relative flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-[#FBBF24] transition-transform duration-300 group-hover:rotate-12" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#102A35] rounded-full" />
          </div>
          <span className="text-xs font-semibold tracking-wide pr-1 hidden sm:inline-block text-white/95">
            Advisory Desk
          </span>
        </div>
      </button>
    </div>
  );
}
