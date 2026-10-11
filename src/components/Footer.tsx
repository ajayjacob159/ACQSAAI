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
                ACQSA AI — #1 B2B Multichannel Lead Generation Agency
              </h4>
            </div>
          </div>

          <a
            href="#audit"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] text-white font-poppins font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center gap-1.5 shrink-0"
          >
            Get Free Acquisition Audit <ArrowRight className="w-3.5 h-3.5" />
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
                  ACQSA <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">AI</span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF1B6B]">
                  B2B Multichannel Lead Generation Agency
                </span>
              </div>
            </a>
            <p className="text-xs text-slate-600 max-w-md font-medium leading-relaxed">
              We build multichannel acquisition systems that deliver consistent, high-quality leads from Cold Email, LinkedIn, social selling, and direct outbound. Grow your brand while keeping your calendar full of qualified B2B sales calls.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-poppins font-bold uppercase tracking-wider">
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
