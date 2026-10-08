import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export const CustomerImpactSection: React.FC = () => {
  const beforeItems = [
    'Inconsistent pipeline & unpredictable sales months',
    'Random prospecting without account research',
    'Weak LinkedIn positioning selling services instead of credibility',
    'Low response quality & ghosting on opening notes',
    'Poor follow-up system with warm leads falling through cracks',
    'Founder dependent, un-scalable sales activity'
  ];

  const afterItems = [
    'Defined ICP & continuous target account pipeline',
    'Focused account lists prioritized by buying triggers',
    'Clear founder positioning as an authoritative industry peer',
    'Relevant, research-backed prospect conversations',
    'Structured multi-touch follow-up cadences',
    'Repeatable reporting & predictable qualified sales calls'
  ];

  return (
    <section className="py-24 bg-[#101318] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3 py-1 rounded-full bg-[#080A0C] border border-[#20242A]">
            CUSTOMER OUTCOME FRAMEWORK
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            THE CLIENT DOESN'T NEED <br />
            <span className="text-lime-gradient">MORE LINKEDIN ACTIVITY.</span>
          </h2>

          <p className="text-base sm:text-xl text-[#B8FF3D] font-mono font-bold">
            They need more of the right conversations.
          </p>
        </div>

        {/* Transformation Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* BEFORE CARD */}
          <div className="bg-[#080A0C] border border-rose-500/40 rounded-2xl p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#20242A] pb-4">
              <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-3 py-1 rounded border border-rose-500/30">
                BEFORE ACQSA AI SYSTEM
              </span>
              <XCircle className="w-5 h-5 text-rose-500" />
            </div>

            <ul className="space-y-4">
              {beforeItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-[#A7ADB5] font-medium">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AFTER CARD */}
          <div className="bg-[#080A0C] border border-[#B8FF3D] rounded-2xl p-8 space-y-6 shadow-2xl ring-1 ring-[#B8FF3D]/20">
            <div className="flex items-center justify-between border-b border-[#20242A] pb-4">
              <span className="text-xs font-mono font-bold text-[#B8FF3D] bg-[#B8FF3D]/10 px-3 py-1 rounded border border-[#B8FF3D]/30">
                AFTER ACQSA AI SYSTEM
              </span>
              <CheckCircle2 className="w-5 h-5 text-[#B8FF3D]" />
            </div>

            <ul className="space-y-4">
              {afterItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-white font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#B8FF3D] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
