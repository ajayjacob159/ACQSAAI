import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 py-3 shadow-xs' 
          : 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo brand lockup */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img 
              src="/logo.png" 
              alt="ACQSA AI" 
              className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform" 
            />
            <div className="hidden sm:flex flex-col border-l border-slate-200 pl-2.5 text-left">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800">
                Rocky Jacob
              </span>
              <span className="text-[9px] font-mono text-slate-400">
                Solo Executive Ghostwriting
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 bg-white px-5 py-2 rounded-full border border-slate-200 shadow-xs">
            <a href="#problem" className="text-xs font-poppins font-semibold text-slate-600 hover:text-slate-900 transition-colors">
              The Problem
            </a>
            <a href="#how-it-works" className="text-xs font-poppins font-semibold text-slate-600 hover:text-slate-900 transition-colors">
              How It Works
            </a>
            <a href="#who-its-for" className="text-xs font-poppins font-semibold text-slate-600 hover:text-slate-900 transition-colors">
              Who It's For
            </a>
            <a href="#pricing" className="text-xs font-poppins font-semibold text-slate-600 hover:text-slate-900 transition-colors">
              Pricing
            </a>
            <a href="#proof" className="text-xs font-poppins font-semibold text-slate-600 hover:text-slate-900 transition-colors">
              Proof
            </a>
            <a href="#about" className="text-xs font-poppins font-semibold text-slate-600 hover:text-slate-900 transition-colors">
              About Rocky
            </a>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919966997159"
              className="text-[11px] font-mono text-slate-600 hover:text-slate-900 font-bold transition-colors hidden lg:inline"
            >
              +91 9966997159
            </a>
            <a
              href="https://calendly.com/rockyjacob-ai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF1B6B]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://calendly.com/rockyjacob-ai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-slate-950 text-white text-[11px] font-poppins font-bold uppercase tracking-wider"
            >
              Book Call
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-800 hover:text-slate-950"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 py-5 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2.5">
            <a 
              href="#problem" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-xs font-poppins font-semibold text-slate-800 py-1.5 border-b border-slate-100"
            >
              The Problem
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-xs font-poppins font-semibold text-slate-800 py-1.5 border-b border-slate-100"
            >
              How It Works (5 Steps)
            </a>
            <a 
              href="#who-its-for" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-xs font-poppins font-semibold text-slate-800 py-1.5 border-b border-slate-100"
            >
              Who It's For & Exclusion
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-xs font-poppins font-semibold text-slate-800 py-1.5 border-b border-slate-100"
            >
              Pricing ($1,500 Pilot / Retainers)
            </a>
            <a 
              href="#proof" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-xs font-poppins font-semibold text-slate-800 py-1.5 border-b border-slate-100"
            >
              Proof & Commercial Signals
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-xs font-poppins font-semibold text-slate-800 py-1.5 border-b border-slate-100"
            >
              About Rocky Jacob (India Advantage)
            </a>
          </nav>

          <a
            href="https://calendly.com/rockyjacob-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3 rounded-full bg-slate-950 text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5"
          >
            <span>Book Free 20-min Strategy Call →</span>
          </a>
        </div>
      )}
    </header>
  );
};
