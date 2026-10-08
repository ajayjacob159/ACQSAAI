import React from 'react';
import { ArrowRight, Zap, ChevronDown, CheckCircle2, Play, Sparkles, ShieldCheck } from 'lucide-react';
import { HeroPipelineAnimation } from './HeroPipelineAnimation';

interface HeroProps {
  onOpenAudit: () => void;
  onOpenStrategyCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onOpenStrategyCall }) => {
  return (
    <section className="relative pt-32 pb-24 bg-[#FAFAFC] text-slate-900 overflow-hidden border-b border-slate-200">
      
      {/* Skylead Style Soft Radiant Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-rose-100/40 via-purple-100/30 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Eyebrow Pill Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-purple-200 text-xs font-poppins font-extrabold text-[#0080FF] shadow-sm hover:border-purple-300 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-[#FF1B6B] animate-pulse" />
            <span>✨ #1 LinkedIn Demand Generation System for B2B Founders</span>
          </div>
        </div>

        {/* Skylead Style Human Headline & Supporting Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-poppins font-extrabold tracking-tight text-slate-900 leading-[1.08]">
            Turn LinkedIn into your <br />
            <span className="relative inline-block mt-1">
              <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
                predictable sales pipeline.
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF1B6B]/30" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 9C50 3 150 3 298 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
            We help founder-led B2B companies identify the right accounts, reach the right decision-makers, and generate a consistent flow of qualified sales conversations.
          </p>

          {/* Skylead Style Human Buttons with Icon Circle */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Primary Skylead Fancy Button */}
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-between gap-4 pl-7 pr-3 py-3.5 rounded-full bg-[#0080FF] hover:bg-[#0070E0] text-white font-poppins font-extrabold text-sm tracking-wide shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02] transition-all group"
            >
              <span>Get Your Free Pipeline Audit</span>
              <div className="w-9 h-9 rounded-full bg-white text-[#0080FF] flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-md">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            {/* Secondary Skylead Button */}
            <a
              href="#system"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border-2 border-slate-200 text-slate-800 font-poppins font-bold text-sm tracking-wide hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm"
            >
              <span>See How It Works</span>
              <ChevronDown className="w-4 h-4 text-[#0080FF]" />
            </a>

          </div>

          {/* Human Trust Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Zero Automated Spam
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Verified ICP Decision-Makers
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> 100% Account Safety Guaranteed
            </span>
          </div>

        </div>

        {/* Skylead Style Interactive Campaign Visualizer */}
        <div className="pt-4">
          <HeroPipelineAnimation />
        </div>

      </div>
    </section>
  );
};
