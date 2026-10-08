import React from 'react';
import { MessageSquare, ShieldCheck, AlertCircle, FileText } from 'lucide-react';

export const TestimonialsCaseStudies: React.FC = () => {
  const testimonials = [
    {
      quote: "[REAL CLIENT TESTIMONIAL]",
      author: "[CLIENT NAME] — [ROLE], [COMPANY]",
      result: "[VERIFIED RESULT]"
    },
    {
      quote: "[REAL CLIENT TESTIMONIAL]",
      author: "[CLIENT NAME] — [ROLE], [COMPANY]",
      result: "[VERIFIED RESULT]"
    }
  ];

  const caseStudies = [
    {
      client: "[B2B SAAS CLIENT]",
      problem: "[PREVIOUS PIPELINE PROBLEM]",
      approach: "Executed 12-Step Founder Demand System",
      strategy: "Targeted 300 VP & CRO Accounts",
      outreach: "Personalized peer-to-peer sequence",
      conversations: "38 Active executive dialogues",
      qualified: "14 Sales-ready opportunities",
      result: "[INSERT VERIFIED RESULT]"
    },
    {
      client: "[IT SERVICES CLIENT]",
      problem: "[PREVIOUS PIPELINE PROBLEM]",
      approach: "CTO Account Research & Founder Positioning",
      strategy: "Targeted enterprise tech decision-makers",
      outreach: "Trigger-based engineering outbound",
      conversations: "26 Executive dialogues",
      qualified: "9 Qualified RFP meetings",
      result: "[INSERT VERIFIED RESULT]"
    },
    {
      client: "[CONSULTING FIRM CLIENT]",
      problem: "[PREVIOUS PIPELINE PROBLEM]",
      approach: "Positioning overhaul & high-ticket outreach",
      strategy: "Managing Director & CEO targeting",
      outreach: "Benchmark & advisory insights",
      conversations: "19 Managing partner responses",
      qualified: "6 Qualified consulting retainers",
      result: "[INSERT VERIFIED RESULT]"
    }
  ];

  return (
    <section className="py-24 bg-[#080A0C] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3 py-1 rounded-full bg-[#101318] border border-[#20242A]">
            CLIENT TESTIMONIALS & CASE TEARDOWNS
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            PROOF & CASE STUDIES
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#101318] p-8 rounded-2xl border border-[#20242A] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#B8FF3D]">
                <span>VERIFIED TESTIMONIAL 0{idx + 1}</span>
                <ShieldCheck className="w-4 h-4" />
              </div>
              <p className="text-sm font-mono text-[#A7ADB5] italic bg-[#080A0C] p-4 rounded-xl border border-[#20242A]">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-[#A7ADB5] pt-2">
                <span>{t.author}</span>
                <span className="text-[#B8FF3D] font-bold">{t.result}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="space-y-8 pt-8 border-t border-[#20242A]">
          <h3 className="text-2xl font-heading font-extrabold text-white uppercase text-center">
            FEATURED CASE TEARDOWNS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-[#101318] p-6 rounded-2xl border border-[#20242A] space-y-4 b2b-card-hover">
                <div className="flex items-center justify-between border-b border-[#20242A] pb-3 text-xs font-mono">
                  <span className="text-[#B8FF3D] font-bold">CASE STUDY 0{idx + 1}</span>
                  <FileText className="w-4 h-4 text-[#A7ADB5]" />
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-[#A7ADB5] uppercase block">CLIENT:</span>
                    <strong className="text-white font-heading font-bold">{cs.client}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A7ADB5] uppercase block">PROBLEM:</span>
                    <span className="text-[#A7ADB5] font-mono">{cs.problem}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A7ADB5] uppercase block">APPROACH:</span>
                    <span className="text-white">{cs.approach}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A7ADB5] uppercase block">STRATEGY:</span>
                    <span className="text-[#A7ADB5]">{cs.strategy}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A7ADB5] uppercase block">RESULT:</span>
                    <strong className="text-[#B8FF3D] font-mono font-bold block">{cs.result}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
