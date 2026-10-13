import React from 'react';
import { Linkedin, Mail, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAFAFC] border-t border-slate-200 text-slate-600 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-200 pb-10">
          
          <div className="space-y-2 max-w-sm">
            <a href="#" className="flex items-center gap-2.5">
              <img 
                src="/logo.png" 
                alt="ACQSA AI" 
                className="h-8 w-auto object-contain" 
              />
            </a>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              LinkedIn that drives pipeline, not just likes. Solo executive ghostwriting & category positioning for US/UK Series A–B SaaS founders.
            </p>
          </div>

          {/* Quick links & placeholders */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a 
              href="mailto:[CONTACT EMAIL PLACEHOLDER]" 
              className="flex items-center gap-1.5 text-slate-700 hover:text-slate-950 font-bold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF1B6B]" />
              <span>[CONTACT EMAIL PLACEHOLDER]</span>
            </a>

            <a 
              href="[LINKEDIN URL PLACEHOLDER]" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#0077FF] font-bold transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0077FF]" />
              <span>[LINKEDIN PROFILE PLACEHOLDER]</span>
            </a>

            <a 
              href="[CALENDLY LINK PLACEHOLDER]" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-slate-700 hover:text-slate-950 font-bold transition-colors"
            >
              <span>[CALENDLY LINK PLACEHOLDER]</span>
            </a>
          </div>

        </div>

        {/* Massive Signature ACQSA AI Watermark Logo */}
        <div className="pt-4 pb-2 text-center select-none overflow-hidden border-b border-slate-100 flex flex-col items-center justify-center">
          <img 
            src="/logo.png" 
            alt="ACQSA AI" 
            className="w-full max-w-lg sm:max-w-xl md:max-w-2xl h-auto object-contain opacity-85 hover:opacity-100 transition-opacity duration-300" 
          />
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2026 Rocky Jacob / ACQSA AI. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Solo Ghostwriting Architecture</span>
            <span>•</span>
            <span>US & UK B2B SaaS Focus</span>
            <span>•</span>
            <span>India Cost Leverage</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
