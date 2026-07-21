import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/metadata";
import Container from "../ui/Container";

export default function TopBar() {
  return (
    <div className="bg-[#F7F9FA] border-b border-[#E5EBEF] py-2.5 text-xs sm:text-sm text-[#6C7A86]">
      <Container className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-1.5 hover:text-[#0F6B82] transition-colors font-medium"
          >
            <Mail className="w-3.5 h-3.5 text-[#0F6B82]" />
            <span>{siteConfig.contact.email}</span>
          </a>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 hover:text-[#0F6B82] transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-[#0F6B82]" />
            <span>{siteConfig.contact.phone}</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-center justify-center font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#0F6B82]" />
          <span>{siteConfig.contact.address}</span>
        </div>
      </Container>
    </div>
  );
}
