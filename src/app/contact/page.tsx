import React from "react";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = constructMetadata({
  title: "Contact Exigo Consulting | M&A Advisor Hyderabad",
  description: "Speak confidentially with Exigo Consulting about buying or selling an IT business, fundraising, business advisory or executive talent mandates."
});

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 bg-white min-h-screen relative select-none">
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
            CONTACT EXIGO CONSULTING
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B2730] font-display mb-4">
            Every Strategic Conversation Starts With Context
          </h1>
          <div className="w-16 h-1 bg-[#DE7A66] rounded-full mx-auto mb-6" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Considering an acquisition, exit, fundraise, strategic partnership or leadership mandate? Share the context. The first conversation is exploratory, confidential and focused on understanding what you are trying to achieve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Contact Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-bold font-display text-[#1B2730] mb-4">
              Talk to Exigo Consulting
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-[#0F6B82]/10 text-[#0F6B82] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-[#1B2730] text-sm">Address</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Level 1, Suite #11, Tourism Plaza, Begumpet, Hyderabad, Telangana 500016, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-[#0F6B82]/10 text-[#0F6B82] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-[#1B2730] text-sm">Phone</h3>
                  <a
                    href="tel:+918008922112"
                    className="text-xs sm:text-sm text-slate-600 hover:text-[#0F6B82] transition-colors block mt-1 font-medium"
                  >
                    +91 80089 22112
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-[#0F6B82]/10 text-[#0F6B82] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-[#1B2730] text-sm">Email</h3>
                  <a
                    href="mailto:rg@exigoconsulting.in"
                    className="text-xs sm:text-sm text-slate-600 hover:text-[#0F6B82] transition-colors block mt-1 font-medium"
                  >
                    rg@exigoconsulting.in
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-[#0F6B82]/10 text-[#0F6B82] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-[#1B2730] text-sm">Working Hours</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Monday–Friday, 10:00 AM–7:00 PM (IST)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
