import React from 'react';
import { ArrowRight, Zap, PhoneCall } from 'lucide-react';

interface FinalCTAProps {
  onOpenAudit: () => void;
  onOpenStrategyCall: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAudit, onOpenStrategyCall }) => {
  return (
    <section className="py-24 bg-[#080A0C] text-white border-b border-[#20242A] relative overflow-hidden">
      
      {/* Glow Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#B8FF3D]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101318] border border-[#B8FF3D]/40 text-xs font-mono font-bold text-[#B8FF3D] uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 text-[#B8FF3D]" />
          COMMERCIAL ACTION STEP
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            READY TO BUILD <br />
            <span className="text-lime-gradient">YOUR LINKEDIN PIPELINE?</span>
          </h2>

          <p className="text-base sm:text-xl text-[#A7ADB5] max-w-2xl mx-auto font-medium">
            Let's identify where your current LinkedIn sales process is leaking—and what needs to change.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#B8FF3D] text-[#080A0C] font-extrabold text-sm uppercase tracking-wider shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
          >
            GET MY LINKEDIN PIPELINE AUDIT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenStrategyCall}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#101318] border border-[#20242A] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#1A1E26] hover:border-[#B8FF3D] transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#B8FF3D]" /> BOOK A STRATEGY CALL
          </button>
        </div>

      </div>
    </section>
  );
};
