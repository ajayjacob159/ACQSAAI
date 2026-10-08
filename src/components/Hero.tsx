import React from 'react';
import { ArrowRight, Zap, ChevronDown, CheckCircle2, Target, Users, Search, MessageSquare, PhoneCall, TrendingUp } from 'lucide-react';
import { HeroPipelineAnimation } from './HeroPipelineAnimation';

interface HeroProps {
  onOpenAudit: () => void;
  onOpenStrategyCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onOpenStrategyCall }) => {
  return (
    <section className="relative pt-32 pb-20 bg-[#080A0C] text-white overflow-hidden border-b border-[#20242A]">
      
      {/* Dark Graphite Grid Background */}
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#B8FF3D]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Eyebrow Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101318] border border-[#B8FF3D]/40 text-xs font-mono font-bold text-[#B8FF3D] tracking-wider uppercase shadow-lg">
            <Zap className="w-3.5 h-3.5 text-[#B8FF3D]" />
            LINKEDIN DEMAND GENERATION FOR B2B FOUNDERS
          </div>
        </div>

        {/* Main Headline & Supporting Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white uppercase leading-[1.05]">
            TURN LINKEDIN <br />
            INTO YOUR <br />
            <span className="text-lime-gradient">SALES PIPELINE.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#A7ADB5] max-w-3xl mx-auto font-medium leading-relaxed">
            We help founder-led B2B companies identify the right accounts, reach the right decision-makers and turn LinkedIn into a consistent source of qualified sales conversations.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#B8FF3D] text-[#080A0C] font-extrabold text-sm uppercase tracking-wider shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
            >
              GET YOUR LINKEDIN PIPELINE AUDIT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#system"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#101318] border border-[#20242A] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#1A1E26] transition-all flex items-center justify-center gap-2"
            >
              SEE HOW IT WORKS <ChevronDown className="w-4 h-4 text-[#B8FF3D]" />
            </a>
          </div>

          {/* Credibility Pipeline Sequence Strip */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-[#A7ADB5] uppercase font-bold">
            <span className="px-3 py-1 bg-[#101318] rounded-md border border-[#20242A] text-white">ICP</span>
            <span>→</span>
            <span className="px-3 py-1 bg-[#101318] rounded-md border border-[#20242A] text-white">TARGET ACCOUNTS</span>
            <span>→</span>
            <span className="px-3 py-1 bg-[#101318] rounded-md border border-[#20242A] text-white">DECISION-MAKERS</span>
            <span>→</span>
            <span className="px-3 py-1 bg-[#101318] rounded-md border border-[#20242A] text-white">CONVERSATIONS</span>
            <span>→</span>
            <span className="px-3 py-1 bg-[#101318] rounded-md border border-[#B8FF3D]/40 text-[#B8FF3D]">QUALIFIED CALLS</span>
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
