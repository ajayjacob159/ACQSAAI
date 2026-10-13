import React from 'react';
import { Linkedin, Mail, ArrowRight, ShieldCheck, MapPin, Calendar } from 'lucide-react';

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

          {/* Quick links & contact details */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-mono">
            <a 
              href="mailto:ceo@acqsaai.com" 
              className="flex items-center gap-1.5 text-slate-700 hover:text-slate-950 font-bold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF1B6B]" />
              <span>ceo@acqsaai.com</span>
            </a>

            <a 
              href="mailto:ajayjacobe2@gmail.com" 
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              ajayjacobe2@gmail.com
            </a>

            <a 
              href="tel:+919966997159" 
              className="text-slate-800 hover:text-slate-950 font-bold transition-colors"
            >
              +91 9966997159
            </a>

            <a 
              href="https://www.linkedin.com/in/rockyjacob159/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#0077FF] font-bold transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0077FF]" />
              <span>LinkedIn</span>
            </a>

            <a 
              href="https://calendly.com/rockyjacob-ai/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full font-bold transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0080FF]" />
              <span>Book Call (Calendly)</span>
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
