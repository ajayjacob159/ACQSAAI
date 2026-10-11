import React from 'react';
import { ArrowRight, Sparkles, Calendar, PhoneCall, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenAudit: () => void;
  onOpenStrategyCall: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAudit, onOpenStrategyCall }) => {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* Skylead Style Soft Radiant Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-rose-100/50 via-purple-100/40 to-blue-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-200 text-xs font-poppins font-extrabold text-[#9333EA] shadow-sm">
          <Sparkles className="w-4 h-4 text-[#FF1B6B]" />
          TAKE THE NEXT STEP — YOUR SUCCESS STORY STARTS HERE!
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Schedule Your Free <br />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
              Strategy Call!
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Let’s chat about how to attract high-quality leads while enhancing your social media impact.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] text-white font-poppins font-extrabold text-sm tracking-wide shadow-xl shadow-purple-500/25 hover:scale-105 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Get Your Free Acquisition Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenStrategyCall}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border-2 border-slate-200 text-slate-800 font-poppins font-bold text-sm tracking-wide hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#0080FF]" />
            <span>Book A Strategy Session</span>
          </button>
        </div>

        {/* Reassurance points */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Free Strategy Session
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Complete GTM Bottleneck Teardown
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Zero Pushy Sales Pitch
          </span>
        </div>

      </div>
    </section>
  );
};
