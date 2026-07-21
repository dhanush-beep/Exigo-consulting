import React from "react";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import Card from "@/components/ui/Card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Contact Advisory Team",
  description: "Reach out to Exigo Consulting for confidential M&A, fundraising, organizational strategy, or executive recruitment services."
});

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 bg-white min-h-screen relative">
      {/* Subtle Hero Grid & Radial Background Glows */}
      <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(15,107,130,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(222,122,102,0.1) 0%, transparent 70%)" }}
        />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          title="Connect with Our Partners"
          subtitle="Contact Us"
          description="Initiate a private dialog to discuss your corporate strategy or transaction needs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold font-display text-[#1B2730] mb-4">Office Headquarters</h3>
            <p className="text-[#6C7A86] leading-relaxed mb-8 text-sm sm:text-base">
              Our Bangalore office houses our core advisory squads, due diligence managers, and search recruiters. We consult internationally by appointment.
            </p>

            <div className="space-y-4">
              <div className="enterprise-card flex gap-4 p-5">
                <div className="icon-teal shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-display text-[#1B2730] text-sm">Address</h4>
                  <p className="text-xs sm:text-sm text-[#6C7A86] mt-1 leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="enterprise-card flex gap-4 p-5">
                <div className="icon-teal shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-display text-[#1B2730] text-sm">Advisory Desk</h4>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="text-xs sm:text-sm text-[#6C7A86] hover:text-[#0F6B82] transition-colors block mt-1 font-medium"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="enterprise-card flex gap-4 p-5">
                <div className="icon-teal shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-display text-[#1B2730] text-sm">Email</h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-xs sm:text-sm text-[#6C7A86] hover:text-[#0F6B82] transition-colors block mt-1 font-medium"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="enterprise-card flex gap-4 p-5">
                <div className="icon-teal shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-display text-[#1B2730] text-sm">Availability</h4>
                  <p className="text-xs sm:text-sm text-[#6C7A86] mt-1 leading-relaxed">
                    Monday – Friday: 9:00 AM – 6:00 PM (IST)<br />
                    Secure messages monitored 24/7.
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
