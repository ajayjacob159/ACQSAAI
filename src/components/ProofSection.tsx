import React from 'react';
import { TrendingUp, MessageSquare, Eye, Award, CheckCircle2, Star, Quote, ArrowRight, UserCheck } from 'lucide-react';

export const ProofSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const commercialSignals = [
    {
      metric: "+340%",
      label: "TARGET ACCOUNT PROFILE VIEWS",
      detail: "Seniority breakdown: 68% VP / Director / C-Suite from verified ICP tech accounts"
    },
    {
      metric: "18 Inbound DMs",
      label: "QUALIFIED COMMERCIAL CONVERSATIONS",
      detail: "Prospective buyers initiating discussions directly from specific category teardown posts"
    },
    {
      metric: "$420k+",
      label: "PIPELINE INFLUENCED",
      detail: "Enterprise sales deals where prospects cited founder's LinkedIn point-of-view in sales cycle"
    },
    {
      metric: "0 Vanity Bots",
      label: "100% ORGANIC REASONING",
      detail: "Zero engagement pods, zero follow-unfollow gimmicks, zero hollow AI regurgitation"
    }
  ];

  const caseStudies = [
    {
      tag: "SERIES A B2B CYBERSECURITY SAAS (US)",
      title: "From 0 Organic Inbound to 4 Enterprise Pilot DMs in 60 Days",
      placeholderId: "[CASE STUDY 1]",
      problem: "Founder had deep technical expertise on zero-trust architectures, but spent zero time writing. Prior posts were dry company PR announcements that received under 15 reactions.",
      strategy: "Conducted 45-min voice capture on enterprise compliance friction. Ghostwrote bi-weekly teardowns challenging legacy firewall vendors with sharp, relatable founder war stories.",
      outcome: "Target CISO profile views grew 4x. Generated 4 direct enterprise pilot requests in DMs without outbound spam. 1 closed within 9 weeks at $45k ACV.",
      quote: "“The voice was so accurate my own investors thought I spent my entire weekend writing it.”"
    },
    {
      tag: "SERIES B REVTECH SAAS (UK)",
      title: "Establishing Category Authority Against Legacy Competitors",
      placeholderId: "[CASE STUDY 2]",
      problem: "Operating in a crowded sales tech landscape. Competing against $100M-funded incumbents with massive marketing budgets.",
      strategy: "Repositioned the CEO as the outspoken champion for lean, high-velocity sales teams. Published weekly breakdown playbooks showing exact workflow scripts.",
      outcome: "Consistent 25,000+ targeted impressions per week. Influenced 3 Tier-1 UK partner integrations and steady weekly inbound demo conversations.",
      quote: "“We stopped chasing viral impressions and started having real conversations with CROs who actually sign checks.”"
    }
  ];

  const testimonials = [
    {
      quote: "“Rocky Jacob and the ACQSA AI team solved the biggest bottleneck in my schedule. I give 40 minutes every two weeks, and they turn it into posts that sound more like me than I do. Best ROI on marketing spend we've made this year.”",
      name: "[FOUNDER NAME PLACEHOLDER]",
      title: "CEO & Co-Founder",
      company: "[SERIES A B2B SAAS CO, SAN FRANCISCO]",
      rating: 5
    },
    {
      quote: "“Most agencies send generic fluff. These guys actually understand enterprise software, sales objections, and buyer psychology. The inbound conversations in my LinkedIn inbox have been remarkably qualified.”",
      name: "[FOUNDER NAME PLACEHOLDER]",
      title: "Founder & CEO",
      company: "[SERIES B DEVELOPER TOOLING, LONDON]",
      rating: 5
    }
  ];

  return (
    <section id="proof" className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-700">
            <Award className="w-3.5 h-3.5" />
            <span>COMMERCIAL SIGNALS OVER VANITY METRICS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold tracking-tight text-slate-900 leading-tight">
            Proof of pipeline impact & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-[#0080FF] bg-clip-text text-transparent">
              category buyer engagement
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            We measure success by who is reading and reaching out — not by algorithm tricks or viral memes.
          </p>
        </div>

        {/* 4 Commercial Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {commercialSignals.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#FAFAFC] border-2 border-slate-200 shadow-xs space-y-2 text-center sm:text-left"
            >
              <div className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 tracking-tight">
                {item.metric}
              </div>
              <div className="text-[11px] font-mono font-bold text-[#FF1B6B] uppercase tracking-wider">
                {item.label}
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed pt-1">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Case Studies Container */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-lg font-poppins font-bold text-slate-900">
              Selected Founder Case Teardowns
            </h3>
            <span className="text-xs font-mono text-slate-400">
              REAL COMMERCIAL SCENARIOS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#FAFAFC] border-2 border-slate-200 hover:border-slate-300 transition-all space-y-6 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#9333EA] bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                      {cs.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-bold">
                      {cs.placeholderId}
                    </span>
                  </div>

                  <h4 className="text-xl font-poppins font-bold text-slate-900 leading-snug">
                    {cs.title}
                  </h4>

                  <div className="space-y-3 text-xs text-slate-600 font-normal leading-relaxed pt-2">
                    <div>
                      <strong className="text-slate-900 font-mono text-[11px] uppercase block mb-0.5">Problem:</strong>
                      {cs.problem}
                    </div>
                    <div>
                      <strong className="text-slate-900 font-mono text-[11px] uppercase block mb-0.5">Execution:</strong>
                      {cs.strategy}
                    </div>
                    <div>
                      <strong className="text-emerald-700 font-mono text-[11px] uppercase block mb-0.5">Outcome:</strong>
                      {cs.outcome}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs font-mono italic text-slate-700">
                  {cs.quote}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="pt-4 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              WHAT SAAS FOUNDERS SAY
            </span>
            <h3 className="text-2xl font-poppins font-bold text-slate-900">
              Executive Peer Feedback
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-sm space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
                    {t.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-poppins font-bold text-xs flex items-center justify-center">
                    CEO
                  </div>
                  <div>
                    <h5 className="font-poppins font-bold text-slate-900 text-xs sm:text-sm">
                      {t.name}
                    </h5>
                    <p className="text-[11px] text-slate-500 font-mono">
                      {t.title} • {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Callout for custom audits */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-xs font-poppins font-bold uppercase tracking-wider text-slate-900 hover:text-[#0080FF] transition-colors"
          >
            <span>Discuss your specific category positioning on a strategy call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
