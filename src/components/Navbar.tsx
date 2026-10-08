import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap, Target, CheckSquare } from 'lucide-react';

interface NavbarProps {
  onOpenAudit: () => void;
  onOpenStrategyCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit, onOpenStrategyCall }) => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#080A0C]/95 backdrop-blur-xl border-b border-[#20242A] py-3 shadow-2xl' 
          : 'bg-[#080A0C]/80 backdrop-blur-md py-4 border-b border-[#20242A]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official ACQSA AI Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/logo.jpg" 
              alt="ACQSA AI Logo" 
              className="h-8 sm:h-9 w-auto object-contain hover:scale-105 transition-transform" 
            />
            <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-[#A7ADB5] border-l border-[#20242A] pl-3">
              B2B Demand Gen
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 bg-[#101318] px-6 py-2 rounded-full border border-[#20242A]">
            <a href="#system" className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB5] hover:text-[#FFFFFF] transition-colors">
              How It Works
            </a>
            <a href="#pipeline-engine" className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB5] hover:text-[#FFFFFF] transition-colors">
              The System
            </a>
            <a href="#audit" className="text-xs font-extrabold uppercase tracking-wider text-[#B8FF3D] hover:text-white transition-colors flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#B8FF3D]" />
              Pipeline Audit
            </a>
            <a href="#who-for" className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB5] hover:text-[#FFFFFF] transition-colors">
              Who It's For
            </a>
            <a href="#proof" className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB5] hover:text-[#FFFFFF] transition-colors">
              Proof
            </a>
            <a href="#about" className="text-xs font-semibold uppercase tracking-wider text-[#A7ADB5] hover:text-[#FFFFFF] transition-colors">
              About
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenStrategyCall}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#A7ADB5] hover:text-white bg-[#101318] hover:bg-[#1A1E26] border border-[#20242A] rounded-xl transition-all"
            >
              Strategy Call
            </button>

            <button
              onClick={onOpenAudit}
              className="px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#080A0C] bg-[#B8FF3D] rounded-xl shadow-lg hover:scale-105 transition-all flex items-center gap-1.5"
            >
              Get Audit <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenAudit}
              className="px-3.5 py-1.5 text-xs font-extrabold text-[#080A0C] bg-[#B8FF3D] rounded-lg uppercase tracking-wider shadow-sm"
            >
              Get Audit
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#101318] border border-[#20242A] text-white hover:text-[#B8FF3D]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080A0C]/98 backdrop-blur-2xl border-b border-[#20242A] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-3">
            <a href="#system" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-white py-2 border-b border-[#20242A]/60">
              How It Works
            </a>
            <a href="#pipeline-engine" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-white py-2 border-b border-[#20242A]/60">
              The System
            </a>
            <a href="#audit" onClick={() => setMobileMenuOpen(false)} className="text-sm font-extrabold uppercase tracking-wider text-[#B8FF3D] py-2 border-b border-[#20242A]/60 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#B8FF3D]" /> Pipeline Audit
            </a>
            <a href="#who-for" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-white py-2 border-b border-[#20242A]/60">
              Who It's For
            </a>
            <a href="#proof" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-white py-2 border-b border-[#20242A]/60">
              Proof & Wins
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-wider text-white py-2 border-b border-[#20242A]/60">
              About Founder
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-3 rounded-xl bg-[#B8FF3D] text-[#080A0C] font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
            >
              Get Your LinkedIn Pipeline Audit →
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStrategyCall();
              }}
              className="w-full py-3 rounded-xl bg-[#101318] border border-[#20242A] text-white font-bold text-xs uppercase tracking-wider"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
