"use client";

import React, { useState } from "react";
import { X, Send, User, Mail, Briefcase, ChevronRight, CheckCircle2 } from "lucide-react";

type ServiceType = "Mergers & Acquisitions" | "Fundraising" | "Business Consulting" | "Talent Acquisitions" | "Other Services";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"details" | "service" | "redirect">("details");
  const [formData, setFormData] = useState({ name: "", email: "", service: "" as ServiceType | "" });

  const services: ServiceType[] = [
    "Mergers & Acquisitions",
    "Fundraising",
    "Business Consulting",
    "Talent Acquisitions",
    "Other Services"
  ];

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setStep("service");
    }
  };

  const handleServiceSelect = (service: ServiceType) => {
    setFormData(prev => ({ ...prev, service }));
    setStep("redirect");
    
    // Construct message and redirect
    const phoneNumber = "918008922112";
    const message = `Hi Rajesh,\n\nMy name is ${formData.name}.\nMy email is ${formData.email}.\n\nI am interested in ${service}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Redirect after a short delay so they can read the success message
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setIsOpen(false);
      // Reset form after redirecting
      setTimeout(() => {
        setStep("details");
        setFormData({ name: "", email: "", service: "" });
      }, 500);
    }, 2500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {isOpen && (
        <div className="mb-4 w-[360px] sm:w-[380px] bg-white rounded-[24px] shadow-[0_16px_50px_-10px_rgba(37,211,102,0.3)] border border-[#E5EBEF] overflow-hidden animate-[fade-scale-up_0.3s_ease-out_both]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] p-5 text-white flex items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#128C7E]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-base leading-tight">Chat with Us</h4>
                <p className="text-xs text-white/80 mt-0.5">We typically reply in a few minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors relative z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 bg-[#F7F9FA]">
            {step === "details" && (
              <form onSubmit={handleDetailsSubmit} className="flex flex-col gap-4">
                <p className="text-sm text-[#1B2730] mb-2 font-medium">Please enter your details to get started.</p>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    suppressHydrationWarning
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:border-[#25D366] transition-all"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    suppressHydrationWarning
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:border-[#25D366] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#128C7E] hover:bg-[#075E54] text-white py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {step === "service" && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm text-[#1B2730] font-medium">Hi {formData.name}, what are you looking for?</p>
                </div>
                <div className="space-y-2">
                  {services.map((srv) => (
                    <button
                      key={srv}
                      onClick={() => handleServiceSelect(srv)}
                      className="w-full flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#E5EBEF] hover:border-[#128C7E] hover:bg-green-50/50 transition-all text-left group shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#128C7E]/10 text-[#128C7E] flex items-center justify-center group-hover:bg-[#128C7E] group-hover:text-white transition-colors">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-[#1B2730]">{srv}</span>
                      </div>
                      <Send className="w-4 h-4 text-gray-300 group-hover:text-[#128C7E] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setStep("details")}
                  className="mt-2 text-xs text-gray-500 hover:text-gray-800 text-center w-full underline"
                >
                  Back to Details
                </button>
              </div>
            )}

            {step === "redirect" && (
              <div className="text-center py-6 flex flex-col items-center animate-[fade-in_0.3s_ease-out]">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4 animate-[bounce_0.5s_ease-out]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg text-[#1B2730] mb-2">Rajesh will contact you!</h4>
                <p className="text-sm text-gray-500 max-w-[260px] leading-relaxed">
                  Redirecting to WhatsApp to send your request...
                </p>
                <div className="mt-6 flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-[bounce_1.4s_infinite_0ms]" />
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-[bounce_1.4s_infinite_200ms]" />
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-[bounce_1.4s_infinite_400ms]" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110 active:scale-95 z-10"
        aria-label="Open WhatsApp Chat"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-[pulse-ring_3s_ease-out_infinite] pointer-events-none" />
        
        {isOpen ? (
          <X className="w-7 h-7 relative z-10 transition-transform duration-300 rotate-90 group-hover:rotate-180" />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8 relative z-10 group-hover:rotate-12 transition-transform duration-300">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        )}
      </button>
    </div>
  );
}
