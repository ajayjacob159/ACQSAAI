import React from 'react';
import { ArrowRight, CheckCircle2, Calendar, Sparkles, TrendingUp, Users, ShieldAlert, ArrowUpRight } from 'lucide-react';

import { useCountry } from '../context/CountryContext';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { selectedCountry } = useCountry();
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#FAFAFC] text-slate-900 border-b border-slate-200 overflow-hidden">
      {/* Subtle modern SaaS ambient grid + glow (Linear / Stripe inspired) */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-tr from-rose-100/60 via-purple-100/50 to-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-[11px] sm:text-xs font-mono font-semibold text-slate-700 shadow-sm hover:border-slate-300 transition-colors">
          <span className="w-2 h-2 rounded-full bg-[#FF1B6B]" />
          <span>SOLO FOUNDER BRANDING & EXECUTIVE GHOSTWRITING</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500 hidden sm:inline">FOR US & UK B2B SAAS (SERIES A–B)</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-poppins font-extrabold tracking-tight text-slate-900 leading-[1.08]">
            LinkedIn that drives pipeline, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
              not just likes.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Turn founder category authority into qualified inbound sales conversations. 
            We combine deep voice extraction, AI-accelerated market research, and rigorous human ghostwriting — delivered with India-based cost leverage.
          </p>
        </div>

        {/* CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-sm tracking-wide shadow-lg shadow-slate-950/15 hover:scale-[1.02] active:scale-[0.98] transition-all group"
          >
            <span>Book a free 20-min strategy call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#FF1B6B]" />
          </button>

          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-300 text-slate-700 font-poppins font-semibold text-sm hover:border-slate-400 hover:bg-slate-50 transition-all shadow-sm"
          >
            <span>See how it works</span>
            <span className="text-slate-400 font-mono">↓</span>
          </a>
        </div>

        {/* Key value propositions strip */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Paid pilot from {selectedCountry.pilotPrice}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Direct 1:1 founder collaboration</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Zero generic AI spam or broetry</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Month-to-month after pilot</span>
          </div>
        </div>

        {/* Trust pill: No fake claims statement */}
        <div className="pt-2 text-[11px] font-mono text-slate-500 max-w-xl mx-auto">
          <span className="font-semibold text-slate-700">Commercial positioning note:</span> We build qualified inbound conversations and category authority. No manufactured meeting guarantees or inflated engagement pods.
        </div>

      </div>
    </section>
  );
};
