import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  CheckCircle2,
  Award,
  Users,
  Target,
  Lightbulb,
  ShieldCheck,
  Headset,
  ArrowRight,
  Handshake
} from "lucide-react";

export const metadata = constructMetadata({
  title: "About Exigo",
  description: "Learn about the foundation, investment philosophy, and partner-led execution model of Exigo Consulting."
});

export default function AboutPage() {
  const ourServices = [
    {
      title: "Buy-Side Advisory",
      description: "Identify and evaluate potential acquisition targets to support your growth strategy."
    },
    {
      title: "Sell-Side Advisory",
      description: "Optimize your position as a seller, maximizing value and ensuring a smooth transition."
    },
    {
      title: "Due Diligence",
      description: "Conduct thorough analysis and assessments to mitigate risks and uncover opportunities."
    },
    {
      title: "Integration Planning",
      description: "Develop and execute comprehensive plans for post-merger integration, minimizing disruptions and maximizing synergies."
    },
    {
      title: "Strategic Consulting",
      description: "Leverage our strategic insights across fundraising, talent, and operations to achieve long-term success."
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Expertise",
      description: "With a team of seasoned professionals boasting extensive experience in M&A, we bring a wealth of knowledge to the table, tailored to your unique business goals."
    },
    {
      icon: Headset,
      title: "Comprehensive Support",
      description: "Whether you're a buyer seeking expansion or a seller looking to optimize value, we offer end-to-end support throughout the entire mandate."
    },
    {
      icon: Handshake,
      title: "Client-Centric Approach",
      description: "Your success is our priority. We build strong, collaborative relationships and tailor our strategies to align with your vision."
    },
    {
      icon: Lightbulb,
      title: "Innovation and Insight",
      description: "The world of M&A is ever-evolving. We stay ahead of the curve, incorporating innovative approaches to navigate complex transactions."
    },
    {
      icon: ShieldCheck,
      title: "Confidentiality and Integrity",
      description: "We understand the sensitivity of M&A transactions. Our commitment to confidentiality and integrity is unwavering."
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
          <Link href="/" className="hover:text-[#0F6B82] transition-colors font-medium">Home</Link>
          <span>/</span>
          <span className="text-[#1B2730] font-medium">About Exigo</span>
        </div>

        {/* Hero Banner Header */}
        <div className="max-w-4xl mb-16">
          <div className="enterprise-badge mb-4">
            <Award className="w-3.5 h-3.5 text-[#0F6B82]" />
            <span>About Exigo Consulting</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-[#1B2730] tracking-tight font-display mb-6">
            Your Trusted M&amp;A Consulting Partner
          </h1>
          <p className="text-lg text-[#6C7A86] leading-relaxed font-normal max-w-3xl">
            Welcome to Exigo Consulting, where strategic excellence meets transformative opportunities in the dynamic realm of mergers and acquisitions. We specialize in guiding both buyers and sellers through the intricate process of corporate transactions, ensuring seamless transitions and maximizing value for all stakeholders involved.
          </p>
          <span className="teal-line mt-6 mb-0"></span>
        </div>

        {/* Services + Stat Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start mb-24">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="enterprise-card p-8 text-center flex flex-col items-center">
              <div className="icon-teal mb-4">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-5xl font-extrabold font-display text-[#1B2730]">20+</p>
              <p className="text-xs text-[#0F6B82] font-semibold uppercase tracking-widest mt-2">Years of Experience</p>
            </div>

            <div className="bg-[#F7F9FA] rounded-3xl p-8 border border-[#E5EBEF]">
              <h4 className="text-xl font-bold font-display text-[#1B2730] mb-4">Our Commitment</h4>
              <ul className="space-y-4">
                {[
                  "We limit our client intake to ensure focused partner bandwidth.",
                  "We provide transparent, objective valuation feedback.",
                  "We leverage a global corporate network of buyers and private equity firms.",
                  "We maintain complete confidentiality across all market inquiries."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0F6B82] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#6C7A86] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-3xl font-bold font-display text-[#1B2730] leading-snug">
              Our Practice Mandates
            </h3>
            <p className="text-[#6C7A86] text-base sm:text-lg leading-relaxed">
              Exigo Consulting was established to address a critical flaw in the mid-market corporate advisory landscape: the lack of experienced partner-level attention during transaction execution. At Exigo, we guarantee that senior partners lead every mandate, from pitching through close.
            </p>
            <ul className="space-y-4 mt-2">
              {ourServices.map((item, index) => (
                <li key={index} className="bg-[#F7F9FA] p-5 rounded-2xl border border-[#E5EBEF] flex flex-col gap-1">
                  <span className="font-bold text-[#1B2730] text-base font-display">{item.title}</span>
                  <span className="text-sm text-[#6C7A86] leading-relaxed">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="enterprise-card p-10 sm:p-14 mb-24 bg-gradient-to-br from-[#F7F9FA] to-white border border-[#E5EBEF]">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="enterprise-badge mb-4">
              <Target className="w-3.5 h-3.5 text-[#0F6B82]" />
              <span>Our Strategic Vision</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold font-display text-[#1B2730] leading-snug mb-6">
              Strategic Partnerships That Drive Sustainable Growth
            </h3>
            <p className="text-[#6C7A86] text-base leading-relaxed mb-8">
              At Exigo Consulting, we envision a business landscape where M&amp;A activities are not just transactions but strategic partnerships that drive sustainable growth. Our mission is to empower organizations to navigate the complexities of mergers and acquisitions with confidence, leveraging our expertise to unlock unprecedented value and create synergies that endure.
            </p>
            <Link href="/contact">
              <button className="btn-primary-enterprise text-base">
                Start Consultation
                <ArrowRight className="w-4 h-4 btn-arrow" />
              </button>
            </Link>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="enterprise-badge mb-3 mx-auto">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0F6B82]" />
              <span>Core Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1B2730]">
              The Values That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="enterprise-card p-8 flex flex-col items-start">
                  <div className="icon-teal mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-[#1B2730] mb-3">{value.title}</h4>
                  <p className="text-sm text-[#6C7A86] leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Target Section */}
        <div className="mt-24 text-center max-w-2xl mx-auto bg-[#F7F9FA] p-10 rounded-3xl border border-[#E5EBEF]">
          <div className="icon-teal mx-auto mb-6">
            <Target className="w-6 h-6" />
          </div>
          <h4 className="text-2xl font-bold font-display text-[#1B2730] mb-3">Ready to discuss your mandate?</h4>
          <p className="text-sm text-[#6C7A86] leading-relaxed mb-6">
            Contact us for a confidential initial consultation with a managing partner.
          </p>
          <Link href="/contact">
            <button className="btn-primary-enterprise text-base">
              Get in Touch
              <ArrowRight className="w-4 h-4 btn-arrow" />
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
