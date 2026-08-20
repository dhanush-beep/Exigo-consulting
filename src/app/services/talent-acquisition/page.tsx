import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import { ArrowRight, CheckCircle2, Users, Target, ShieldCheck } from "lucide-react";

export const metadata = constructMetadata({
  title: "Executive Search & IT Talent Acquisition | Exigo Consulting",
  description: "Founder-led executive search and talent acquisition for IT services, staffing, SaaS, GCC and technology companies across India and partner markets."
});

export default function TalentAcquisitionPage() {
  const whyExigo = [
    { title: "Domain Depth", desc: "Cloud, Cybersecurity, AI/ML, Data, CRM, ERP, Infrastructure, QA, Product, PMO and adjacent technology functions." },
    { title: "Speed with Relevance", desc: "Curated shortlists targeted to the success profile rather than high-volume CV forwarding." },
    { title: "Bench + Passive Networks", desc: "Access to ready-to-deploy and passive talent communities through sector relationships." },
    { title: "Founder-Led Attention", desc: "Senior involvement for strategic and leadership mandates." },
    { title: "Transparent Process", desc: "Pipeline visibility, agreed SLAs and measurable progress." }
  ];

  const whatWeDo = [
    { title: "Permanent / FTE Hiring", desc: "Core technology, delivery, product, data, cloud, security, enterprise applications, PM/BA, presales and supporting leadership roles." },
    { title: "Contract-to-Hire", desc: "Flexible talent deployment for project ramps, utilization spikes and rapid client onboarding, with conversion pathways where appropriate." },
    { title: "Executive Search", desc: "Discreet, research-led search for Practice Heads, BU and Delivery Leaders, Country Heads, CXOs, Sales Leaders and other high-impact positions." }
  ];

  const processSteps = [
    "1. Intake & success profile",
    "2. Market mapping & sourcing",
    "3. Assessment",
    "4. Curated shortlist",
    "5. Interview orchestration",
    "6. Offer & closure",
    "7. Post-joining follow-through"
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-[#1E293B] select-none pb-20">
      {/* 1. Hero */}
      <section className="relative bg-[#091D2C] text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Image with Gradient Overlay matching reference design */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/talent_acquisition_hero.png"
            alt="Talent Acquisition Background"
            fill
            className="object-cover object-right lg:object-[center_right] opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#091D2C_0%,#091D2C_38%,rgba(9,29,44,0.85)_52%,rgba(9,29,44,0.3)_70%,transparent_88%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091D2C]/60 via-transparent to-[#091D2C]/40" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#38BDF8] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              TALENT ADVISORY
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-display mb-6">
              The Right People Are Part of the Growth Story
            </h1>
            <div className="w-16 h-1 bg-[#EB6A4C] mb-6 rounded-full" />
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed mb-8">
              Exigo is the Sutradhar connecting business strategy with the people who can execute it. Our talent advisory combines sector understanding, curated networks and senior attention for critical technology and leadership hiring.
            </p>
            <Link href="/contact">
              <button className="px-7 py-3.5 bg-[#EB6A4C] hover:bg-[#d8583a] text-white text-sm sm:text-base font-semibold rounded-xl flex items-center gap-2.5 transition-all shadow-lg">
                <span>Discuss a Critical Hire</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-16 space-y-16">
        {/* 2. Why Exigo */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
              WHY EXIGO TALENT ADVISORY
            </span>
            <h2 className="text-3xl font-extrabold text-[#1B2730] font-display mb-3">
              Sector Understanding &amp; Senior Attention
            </h2>
            <div className="w-12 h-1 bg-[#0F6B82] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyExigo.map((w, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <h3 className="text-lg font-bold text-[#1B2730] font-display mb-2">{w.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. What We Do */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0F6B82] mb-2 block">
              WHAT WE DO
            </span>
            <h2 className="text-3xl font-extrabold text-[#1B2730] font-display mb-3">
              Flexible Engagement Models
            </h2>
            <div className="w-12 h-1 bg-[#DE7A66] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatWeDo.map((w, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#1B2730] font-display mb-3">{w.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Our Process */}
        <div className="p-8 rounded-3xl bg-[#091A26] text-white">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#3A9FB7] mb-2 block">
              OUR PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
              7-Step Execution Methodology
            </h2>
            <div className="w-12 h-1 bg-[#DE7A66] rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-bold text-white font-display">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Coverage */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-base font-bold text-[#1B2730] font-display mb-3 text-[#0F6B82]">Functions</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Engineering, Data/AI/ML, Cloud/DevOps/SRE, Cybersecurity, QA/SDET, ERP/CRM, Product, PM/BA, Presales, Delivery, Revenue/GTM and Corporate functions.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-[#1B2730] font-display mb-3 text-[#0F6B82]">Industries</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              IT Services &amp; Staffing, SaaS/Product, GCCs/Captives, BFSI Technology, Healthcare IT, Retail/E-commerce and Manufacturing Technology.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-[#1B2730] font-display mb-3 text-[#0F6B82]">Geography</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              India, with international coverage through relevant partner networks.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
