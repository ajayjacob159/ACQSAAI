import React, { useState } from 'react';
import { XCircle, CheckCircle2, Sliders, ArrowRight } from 'lucide-react';

export const FounderPositioning: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section className="py-24 bg-[#101318] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3 py-1 rounded-full bg-[#080A0C] border border-[#20242A]">
            PROFILE POSITIONING SYSTEM
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            YOUR LINKEDIN PROFILE <br />
            <span className="text-lime-gradient">SHOULD SELL YOUR CREDIBILITY BEFORE YOU SELL YOUR SERVICE.</span>
          </h2>
        </div>

        {/* Interactive Before vs After Profile Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* BEFORE CARD */}
          <div className="bg-[#080A0C] border border-rose-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#20242A] pb-4">
              <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-3 py-1 rounded border border-rose-500/30">
                BEFORE ACQSA AI
              </span>
              <XCircle className="w-5 h-5 text-rose-500" />
            </div>

            <div className="space-y-3 bg-[#101318] p-5 rounded-xl border border-[#20242A]">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-400">
                JD
              </div>
              <h3 className="text-base font-extrabold text-white">John Doe</h3>
              <p className="text-xs font-mono text-rose-300 font-bold leading-relaxed">
                “CEO | Entrepreneur | Business Growth | Innovation | Helping Businesses Scale”
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono text-rose-400 uppercase font-bold">Why This Fails:</h4>
              <ul className="space-y-2 text-xs text-[#A7ADB5]">
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Unclear ICP — vague target audience</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Unclear problem — no specific pain solved</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Unclear outcome — generic growth promises</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Weak differentiation & zero reason to connect</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AFTER CARD */}
          <div className="bg-[#080A0C] border border-[#B8FF3D]/60 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden ring-1 ring-[#B8FF3D]/20">
            <div className="flex items-center justify-between border-b border-[#20242A] pb-4">
              <span className="text-xs font-mono font-bold text-[#B8FF3D] bg-[#B8FF3D]/10 px-3 py-1 rounded border border-[#B8FF3D]/30">
                AFTER ACQSA AI RE-POSITIONING
              </span>
              <CheckCircle2 className="w-5 h-5 text-[#B8FF3D]" />
            </div>

            <div className="space-y-3 bg-[#101318] p-5 rounded-xl border border-[#B8FF3D]/40 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#B8FF3D] text-[#080A0C] flex items-center justify-center font-extrabold text-sm">
                JD
              </div>
              <h3 className="text-base font-extrabold text-white">John Doe</h3>
              <p className="text-xs font-mono text-[#B8FF3D] font-extrabold leading-relaxed">
                “Founder @ Enterprise SaaS | Helping B2B Founders Turn LinkedIn Into Qualified Sales Conversations”
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono text-[#B8FF3D] uppercase font-bold">Why This Converts:</h4>
              <ul className="space-y-2 text-xs text-white font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8FF3D] shrink-0" />
                  <span>Clear Audience: Founder-Led B2B Companies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8FF3D] shrink-0" />
                  <span>Clear Problem: Unpredictable B2B Sales Pipeline</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8FF3D] shrink-0" />
                  <span>Clear Mechanism: 12-Step Demand System</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8FF3D] shrink-0" />
                  <span>Clear Commercial Outcome: Qualified Sales Conversations</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
