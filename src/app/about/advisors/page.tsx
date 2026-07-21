import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import { Users, Award, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Strategic Advisors & Associates | Exigo Consulting",
  description: "Meet the executive advisors and specialized associates guiding mergers and acquisitions at Exigo Consulting."
});

export default function AdvisorsPage() {
  const advisors = [
    {
      name: "Aroop Cherian",
      image: "/images/advisors/aroop-cherian.png",
      bio: "Aroop M Cherian, with over 15 years of Big4 experience (KPMG and Deloitte), leads the financial valuation and business modelling services. Aroop is the founder of Cherian Advisors. Aroop has an experience of over 15 years valuing business interests and intellectual property. In India, he works closely with an array of clients ranging from startups to large listed companies."
    },
    {
      name: "Arindam Chakraborty",
      image: "/images/advisors/arindam-chakraborty.png",
      bio: "Arindam Chakraborty has 20 years of strategic leadership, creating, scaling, and exiting profitable businesses for Indian IT firms. He manages C-level relationships with Fortune 100 clients, builds business leaders achieving revenue growth beyond expectations. Arindam scales businesses, presents budgets to the Board, solves complex challenges, and excels in sports and debate."
    },
    {
      name: "Pavan Kumar Bhattiprolu",
      image: "/images/advisors/pavan-bhattiprolu.png",
      bio: "Pavan Kumar Bhattiprolu, a Fellow of the Institute of Company Secretaries of India, has 20+ years of expertise in IPOs, FPOs, M&A, and Corporate Governance. He has mentored 400 professionals and received five IIPM awards for academic contributions. Pavan is a regular speaker at professional bodies and law schools."
    },
    {
      name: "Pavan Susarla",
      image: "/images/advisors/pavan-susarla.png",
      bio: "Pavan Susarla is a seasoned business leader specializing in talent acquisition, workforce planning, and global human capital management. With over 25 years in IT, he led large teams across verticals in top consulting firms. Pavan's key achievement includes building the world's largest vetted talent community, connecting global organizations with skilled professionals globally."
    },
    {
      name: "P.V.Aruna Kumari",
      image: "/images/advisors/aruna-kumari.png",
      bio: "Aruna, with nearly 25 years of legal expertise in Real Estate, Litigation, Corporate and Commercial laws, and more, is renowned for consultative services to MNCs and IT giants. She excels in corporate transactions, including mergers, acquisitions, and regulatory compliance, and is a respected authority on workplace sexual harassment and mediation."
    }
  ];

  return (
    <div className="py-16 sm:py-24 relative bg-white min-h-screen">
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
        {/* Navigation Breadcrumb */}
        <div className="text-xs sm:text-sm text-[#6C7A86] mb-8 flex items-center gap-2">
          <Link href="/about" className="hover:text-[#0F6B82] transition-colors font-medium">About</Link>
          <span>/</span>
          <span className="text-[#1B2730] font-medium">Strategic Advisors</span>
        </div>

        {/* Hero Header Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="enterprise-badge mb-4 mx-auto">
            <Users className="w-3.5 h-3.5 text-[#0F6B82]" />
            <span>Senior Leadership &amp; Domain Specialists</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-[#1B2730] tracking-tight font-display mb-4">
            Strategic Advisors / Associates
          </h1>
          <span className="teal-line mx-auto mb-8"></span>
        </div>

        {/* Journey of Distinction Card */}
        <div className="bg-[#F7F9FA] border border-[#E5EBEF] rounded-3xl p-8 sm:p-12 mb-20 max-w-4xl mx-auto text-center shadow-card relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#0F6B82]"></div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F6B82] mb-4">
            Join Us on a Journey of Distinction:
          </h2>
          <p className="text-base sm:text-lg text-[#6C7A86] leading-relaxed max-w-3xl mx-auto">
            Discover the unparalleled expertise and commitment to excellence that define Exigo Consulting. Under the strong leadership of Rajesh Gade and our dedicated team, your M&amp;A objectives are not just met but exceeded. Experience the difference in mergers and acquisitions with Exigo Consulting for a transformative partnership.
          </p>
        </div>

        {/* Advisors Grid - Row 1 (3 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advisors.slice(0, 3).map((advisor, index) => (
            <div key={index} className="enterprise-card flex flex-col h-full overflow-hidden group">
              {/* Photo Box */}
              <div className="relative aspect-[4/3] w-full bg-[#F7F9FA] overflow-hidden">
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Name Banner */}
              <div className="bg-[#0F6B82] text-white p-4 text-center font-bold font-display text-lg tracking-wide shadow-sm">
                {advisor.name}
              </div>

              {/* Bio Content */}
              <div className="p-6 flex-grow flex flex-col bg-white">
                <p className="text-sm text-[#6C7A86] leading-relaxed text-justify">
                  {advisor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisors Grid - Row 2 (2 items, centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {advisors.slice(3, 5).map((advisor, index) => (
            <div key={index} className="enterprise-card flex flex-col h-full overflow-hidden group">
              {/* Photo Box */}
              <div className="relative aspect-[4/3] w-full bg-[#F7F9FA] overflow-hidden">
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Name Banner */}
              <div className="bg-[#0F6B82] text-white p-4 text-center font-bold font-display text-lg tracking-wide shadow-sm">
                {advisor.name}
              </div>

              {/* Bio Content */}
              <div className="p-6 flex-grow flex flex-col bg-white">
                <p className="text-sm text-[#6C7A86] leading-relaxed text-justify">
                  {advisor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Box */}
        <div className="text-center pt-8 border-t border-[#E5EBEF]">
          <h3 className="text-2xl font-bold font-display text-[#1B2730] mb-3">
            Partner with Our Strategic Advisory Squad
          </h3>
          <p className="text-sm text-[#6C7A86] max-w-xl mx-auto mb-6">
            Leverage our combined deep domain expertise across financial valuations, M&amp;A structuring, corporate law, and workforce planning.
          </p>
          <Link href="/contact">
            <button className="btn-primary-enterprise text-base">
              Initiate Private Consultation
              <ArrowRight className="w-4 h-4 btn-arrow" />
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

