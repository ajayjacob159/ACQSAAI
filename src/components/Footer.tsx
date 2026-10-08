import React from 'react';
import { Linkedin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080A0C] border-t border-[#20242A] text-[#A7ADB5] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-[#20242A] pb-12">
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="ACQSA AI Logo" 
                className="h-8 sm:h-9 w-auto object-contain" 
              />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B8FF3D]">
                B2B DEMAND GEN
              </span>
            </a>
            <p className="text-xs text-[#A7ADB5] max-w-md font-medium">
              LinkedIn Growth for B2B Founders. Turn LinkedIn into a predictable source of qualified sales conversations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a href="#system" className="hover:text-white transition-colors">How It Works</a>
            <a href="#audit" className="hover:text-[#B8FF3D] transition-colors font-bold">Pipeline Audit</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#who-for" className="hover:text-white transition-colors">Who It's For</a>
            <a href="https://linkedin.com/company/acqsa-ai" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8FF3D] flex items-center gap-1">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 ACQSA AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#A7ADB5]">Privacy Policy</a>
            <a href="#" className="hover:text-[#A7ADB5]">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
