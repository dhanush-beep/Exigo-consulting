import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight, Award, ShieldCheck, Users } from "lucide-react";
import LinkedinIcon from "@/components/ui/LinkedinIcon";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";

export const metadata = constructMetadata({
  title: "Meet Rajesh Gade | CEO & Leadership - Exigo Consulting",
  description: "Learn about Rajesh Gade, CEO of Exigo Consulting, his visionary leadership in M&A, and our strategic advisory team."
});

export default function MeetRajeshPage() {
  const highlights = [
    {
      icon: Award,
      title: "Proven M&A Leadership",
      description: "Extensive track record guiding clients through buying & selling complex IT businesses."
    },
    {
      icon: Users,
      title: "Strategic Advisory Team",
      description: "Supported by a talented team bringing diverse domain expertise to every mandate."
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Transformative Growth",
      description: "Unlocking unparalleled value and sustainable advantages for every client."
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
          <span className="text-[#1B2730] font-medium">Meet Rajesh Gade</span>
        </div>

        {/* Hero Header Badge & Title */}
        <div className="mb-12">
          <div className="enterprise-badge mb-4">
            <Award className="w-3.5 h-3.5 text-[#0F6B82]" />
            <span>Leadership &amp; Executive Profile</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-[#1B2730] tracking-tight font-display">
            Meet Rajesh Gade
          </h1>
          <span className="teal-line mt-4 mb-0"></span>
        </div>

        {/* Executive Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start mb-20">
          {/* Executive Photo Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="enterprise-card p-4 w-full max-w-md">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#F7F9FA]">
                <Image
                  src="/images/rajesh-gade.png"
                  alt="Rajesh Gade - CEO of Exigo Consulting"
                  fill
                  className="object-cover object-top hover:scale-103 transition-transform duration-500"
                  priority
                />
              </div>

              <div className="pt-5 pb-2 px-2 text-center">
                <h3 className="text-2xl font-bold font-display text-[#1B2730]">Rajesh Gade</h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#0F6B82] mt-1">
                  Chief Executive Officer
                </p>
                <p className="text-xs text-[#6C7A86] mt-1">Exigo Consulting</p>
              </div>
            </div>

            {/* Social & Contact Buttons */}
            <div className="flex gap-4 mt-6 w-full max-w-md">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-enterprise flex-1 justify-center text-sm py-3 px-4"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0F6B82]" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="mailto:rg@exigoconsulting.in"
                className="btn-secondary-enterprise p-3 justify-center text-sm"
                aria-label="Email Rajesh Gade"
              >
                <Mail className="w-4 h-4 text-[#0F6B82]" />
              </a>
            </div>
          </div>

          {/* Biography Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1B2730] mb-4">
                Meet our CEO
              </h2>
              <p className="text-lg text-[#1B2730] leading-relaxed font-normal">
                Welcome to Exigo Consulting, where we redefine mergers and acquisitions under the visionary leadership of our CEO, Rajesh Gade. Rajesh, while a driving force, leads with the support of a strategic advisory team, ensuring holistic and innovative solutions for our clients.
              </p>
            </div>

            <div className="space-y-8 mt-2">
              {/* About Our CEO */}
              <div className="bg-[#F7F9FA] p-6 rounded-2xl border border-[#E5EBEF]">
                <h3 className="text-xl font-bold font-display text-[#0F6B82] mb-3">
                  About Our CEO:
                </h3>
                <p className="text-base text-[#6C7A86] leading-relaxed">
                  Rajesh Gade is a trailblazer in mergers and acquisitions with extensive experience and a proven track record. He has guided numerous clients through the complexities of buying and selling businesses, delivering exceptional results across the IT industry. Rajesh’s strategic insights and deep market understanding set him apart, ensuring optimal outcomes for his clients.
                </p>
              </div>

              {/* Our Strategic Advisory Team */}
              <div className="bg-[#F7F9FA] p-6 rounded-2xl border border-[#E5EBEF]">
                <h3 className="text-xl font-bold font-display text-[#0F6B82] mb-3">
                  Our Strategic Advisory Team:
                </h3>
                <div className="space-y-4">
                  <p className="text-base text-[#6C7A86] leading-relaxed">
                    While Rajesh is at the helm, he is supported by a talented and experienced strategic advisory team. This team brings diverse expertise and perspectives, enhancing our ability to navigate complex M&amp;A processes. Together, they ensure that every client receives personalized and highly effective strategies tailored to their specific needs.
                  </p>
                  <p className="text-base text-[#6C7A86] leading-relaxed">
                    At Exigo Consulting, we combine Rajesh’s visionary leadership with the collective wisdom of our advisory team, positioning us as a leader in M&amp;A known for integrity, success, and transformative growth. Our collaborative approach ensures we deliver unparalleled value and strategic advantages to our clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/contact">
                <button className="btn-primary-enterprise text-base">
                  Book a Consultation with Rajesh Gade
                  <ArrowRight className="w-4 h-4 btn-arrow" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Highlights Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#E5EBEF] pt-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="enterprise-card p-8 flex flex-col items-start">
                <div className="icon-teal mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#1B2730] mb-3">{item.title}</h3>
                <p className="text-sm text-[#6C7A86] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}


