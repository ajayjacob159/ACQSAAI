import React from 'react';
import { ArrowRight, Zap, ChevronDown, CheckCircle2, Target, Users, Search, MessageSquare, PhoneCall, TrendingUp } from 'lucide-react';
import { HeroPipelineAnimation } from './HeroPipelineAnimation';

interface HeroProps {
  onOpenAudit: () => void;
  onOpenStrategyCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onOpenStrategyCall }) => {
  return (
    <section className="relative pt-32 pb-20 bg-[#FAFAFC] text-slate-900 overflow-hidden border-b border-slate-200">
      
      {/* Light Grid Background */}
      <div className="absolute inset-0 bg-light-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#FF1B6B]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Eyebrow Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-[#FF1B6B]/30 text-xs font-mono font-extrabold text-[#FF1B6B] tracking-wider uppercase shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#FF1B6B]" />
            LINKEDIN DEMAND GENERATION FOR B2B FOUNDERS
          </div>
        </div>

        {/* Main Headline & Supporting Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-poppins font-extrabold tracking-tight text-slate-900 uppercase leading-[1.05]">
            TURN LINKEDIN <br />
            INTO YOUR <br />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#4F46E5] bg-clip-text text-transparent">
              SALES PIPELINE.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
            We help founder-led B2B companies identify the right accounts, reach the right decision-makers and turn LinkedIn into a consistent source of qualified sales conversations.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#4F46E5] text-white font-poppins font-extrabold text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
            >
              GET YOUR LINKEDIN PIPELINE AUDIT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#system"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-900 font-poppins font-bold text-sm uppercase tracking-wider hover:border-[#FF1B6B] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              SEE HOW IT WORKS <ChevronDown className="w-4 h-4 text-[#FF1B6B]" />
            </a>
          </div>

          {/* Credibility Pipeline Sequence Strip */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-slate-600 uppercase font-bold">
            <span className="px-3 py-1 bg-white rounded-md border border-slate-200 text-slate-900 shadow-sm">ICP</span>
            <span>→</span>
            <span className="px-3 py-1 bg-white rounded-md border border-slate-200 text-slate-900 shadow-sm">TARGET ACCOUNTS</span>
            <span>→</span>
            <span className="px-3 py-1 bg-white rounded-md border border-slate-200 text-slate-900 shadow-sm">DECISION-MAKERS</span>
            <span>→</span>
            <span className="px-3 py-1 bg-white rounded-md border border-slate-200 text-slate-900 shadow-sm">CONVERSATIONS</span>
            <span>→</span>
            <span className="px-3 py-1 bg-rose-50 rounded-md border border-rose-300 text-[#FF1B6B] font-extrabold shadow-sm">QUALIFIED CALLS</span>
          </div>
        </div>

        {/* Section 6: Animated Pipeline Engine Visualizer */}
        <div className="pt-4">
          <HeroPipelineAnimation />
        </div>

      </div>
    </section>
  );
};
