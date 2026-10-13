import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, Target, ShieldCheck } from 'lucide-react';

export const WhoItsForSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const whoItIsFor = [
    "US and UK growth-stage B2B SaaS founders (Series A–B).",
    "Founders with high ACV ($15k–$100k+) where executive trust and category thought leadership drive enterprise purchasing decisions.",
    "Founders who have authentic opinions, customer war stories, and tactical perspectives, but lack the 10+ weekly hours to draft consistently.",
    "Leaders who want commercial pipeline, qualified inbound prospect DMs, and category authority — not vanity follower numbers.",
    "Founders who appreciate the cost advantage of a high-touch, India-based executive ghostwriter with deep SaaS fluency."
  ];

  const whoItIsNotFor = [
    "Pre-seed or idea-stage founders without a clear ICP or product-market fit.",
    "B2C creators, drop-shippers, crypto influencers, or lifestyle coaches looking for viral entertainment videos.",
    "Founders who want to delegate 100% of their voice without giving a single 45-minute strategic interview.",
    "Teams demanding guaranteed pipeline numbers or meetings in month one (authentic authority compounds over 60–90 days).",
    "Founders obsessed with vanity engagement metrics (likes/viral impressions) over qualified commercial buyer conversations."
  ];

  return (
    <section id="who-its-for" className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">
            <Target className="w-3.5 h-3.5 text-[#0080FF]" />
            <span>QUALIFICATION & FIT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold tracking-tight text-slate-900 leading-tight">
            Built specifically for growth-stage <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FF1B6B] to-[#0080FF] bg-clip-text text-transparent">
              Series A–B B2B SaaS founders
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            We work with a strictly capped roster of founders to maintain bespoke voice fidelity and high commercial quality.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Who It Is For Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFC] border-2 border-emerald-500/40 hover:border-emerald-500 transition-all flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/70 border border-emerald-300 text-emerald-800 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-widest block">
                    PERFECT FIT
                  </span>
                  <h3 className="text-xl font-poppins font-bold text-slate-900">
                    Who This Service Is For
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5">
                {whoItIsFor.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80">
              <span className="text-xs font-mono text-emerald-700 font-medium">
                ✓ High strategic alignment & maximum ROI on founder time
              </span>
            </div>
          </div>

          {/* Who It Is NOT For Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFC] border-2 border-rose-300 hover:border-rose-400 transition-all flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100/70 border border-rose-300 text-rose-800 flex items-center justify-center font-bold">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-rose-700 uppercase tracking-widest block">
                    CLEAR EXCLUSION
                  </span>
                  <h3 className="text-xl font-poppins font-bold text-slate-900">
                    Who This Is NOT For
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5">
                {whoItIsNotFor.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    <XCircle className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80">
              <span className="text-xs font-mono text-rose-700 font-medium">
                ✕ We politely decline engagements outside our sweet spot
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
