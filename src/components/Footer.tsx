import React from 'react';
import { Linkedin, ArrowRight, Sparkles, TrendingUp, Flame, Zap, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700 pt-16 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        
        {/* Trending Now Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-50 via-purple-50 to-indigo-50 border-2 border-purple-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF1B6B] via-[#9333EA] to-[#0080FF] text-white flex items-center justify-center font-bold shadow-md shrink-0">
              <Flame className="w-6 h-6 animate-pulse" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#FF1B6B] bg-rose-100/90 px-3 py-0.5 rounded-full border border-rose-200">
                  🔥 TRENDING NOW
                </span>
                <span className="text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Live
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-poppins font-extrabold text-slate-900 tracking-tight">
                ACQSA AI — #1 B2B Multichannel Lead Generation Agency
              </h4>
            </div>
          </div>

          <a
            href="#audit"
            className="w-full md:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] text-white font-poppins font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <span>Get Free Acquisition Audit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Main Navigation & Info Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border-b border-slate-200 pb-12">
          
          <div className="space-y-3 max-w-md">
            <a href="#" className="flex items-center gap-3">
              <img 
                src="/icon.png" 
                alt="ACQSA AI Brand Icon" 
                className="h-10 w-10 object-contain rounded-xl shadow-md" 
              />
              <div>
                <span className="text-2xl font-poppins font-black text-slate-900 tracking-tight block">
                  ACQSA <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">AI</span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF1B6B]">
                  B2B Multichannel Lead Generation Agency
                </span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              We build multichannel acquisition systems that deliver consistent, high-quality leads from Cold Email, LinkedIn, social selling, and direct outbound. Grow your brand while keeping your calendar full of qualified B2B sales calls.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-poppins font-bold uppercase tracking-wider">
            <a href="#how-we-help" className="text-slate-700 hover:text-[#0080FF] transition-colors">How We Help</a>
            <a href="#inbound-outbound" className="text-slate-700 hover:text-[#0080FF] transition-colors">5-Step System</a>
            <a href="#infrastructure" className="text-slate-700 hover:text-[#0080FF] transition-colors">Deliverability</a>
            <a href="#case-studies" className="text-slate-700 hover:text-[#0080FF] transition-colors">Case Studies</a>
            <a href="#results" className="text-slate-700 hover:text-[#0080FF] transition-colors">Results</a>
            <a href="#packages" className="text-slate-700 hover:text-[#0080FF] transition-colors">Packages</a>
            <a href="#faqs" className="text-slate-700 hover:text-[#0080FF] transition-colors">FAQs</a>
            <a 
              href="https://linkedin.com/company/acqsa-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-xl bg-sky-50 border border-sky-200 text-[#0077FF] hover:bg-[#0077FF] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>

        </div>

        {/* Massive Signature "ACQSA AI" Watermark Typography */}
        <div className="pt-4 pb-2 text-center select-none overflow-hidden border-b border-slate-100">
          <span className="font-poppins font-black text-6xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[180px] tracking-tighter leading-none bg-gradient-to-b from-slate-900/[0.12] via-slate-900/[0.04] to-transparent bg-clip-text text-transparent block hover:from-[#FF1B6B]/25 hover:via-[#9333EA]/20 hover:to-[#0080FF]/25 transition-all duration-700">
            ACQSA AI
          </span>
        </div>

        {/* Bottom Legal & Status Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 pt-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <p>© 2026 ACQSA AI. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-slate-400 hidden md:inline">
              Deliverability SLA: 99.8% Inboxing
            </span>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
