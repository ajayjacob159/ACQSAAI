import React from 'react';
import { Linkedin, ArrowRight, Sparkles, TrendingUp, Flame, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Trending Now Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-50 via-purple-50 to-indigo-50 border-2 border-purple-200 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF1B6B] via-[#9333EA] to-[#4F46E5] text-white flex items-center justify-center font-bold shadow-md">
              <Flame className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#FF1B6B] bg-rose-100/80 px-2.5 py-0.5 rounded border border-rose-200">
                TRENDING NOW
              </span>
              <h4 className="text-base font-poppins font-extrabold text-slate-900 mt-0.5">
                ACQSA AI — #1 Founder-Led B2B Demand Generation System
              </h4>
            </div>
          </div>

          <a
            href="#audit"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#4F46E5] text-white font-poppins font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center gap-1.5 shrink-0"
          >
            Get Free Pipeline Audit <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-slate-200 pb-12">
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-3">
              <img 
                src="/icon.png" 
                alt="ACQSA AI Logo Icon" 
                className="h-10 w-10 object-contain rounded-xl shadow-md" 
              />
              <div>
                <span className="text-xl font-poppins font-extrabold text-slate-900 tracking-tight block">
                  ACQSA <span className="text-gradient-logo">AI</span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF1B6B]">
                  B2B Demand Generation System
                </span>
              </div>
            </a>
            <p className="text-xs text-slate-600 max-w-md font-medium leading-relaxed">
              LinkedIn Growth for B2B Founders. Turn LinkedIn into a predictable source of qualified sales conversations through ICP targeting, decision-maker research, and structured follow-up.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-poppins font-bold uppercase tracking-wider">
            <a href="#system" className="text-slate-700 hover:text-[#FF1B6B] transition-colors">How It Works</a>
            <a href="#audit" className="text-[#FF1B6B] hover:text-[#7C3AED] transition-colors font-extrabold">Pipeline Audit</a>
            <a href="#about" className="text-slate-700 hover:text-[#FF1B6B] transition-colors">About Founder</a>
            <a href="#who-for" className="text-slate-700 hover:text-[#FF1B6B] transition-colors">Who It's For</a>
            <a 
              href="https://linkedin.com/company/acqsa-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-1.5 rounded-lg bg-sky-50 border border-sky-200 text-[#0077FF] hover:bg-[#0077FF] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 ACQSA AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
