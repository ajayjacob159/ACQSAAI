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
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-3 shadow-md shadow-slate-900/5' 
          : 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official ACQSA AI Brand Icon & Title */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/icon.png" 
              alt="ACQSA AI Icon" 
              className="h-9 w-9 object-contain rounded-xl shadow-md group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-poppins font-extrabold text-slate-900 tracking-tight leading-none">
                ACQSA <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#4F46E5] bg-clip-text text-transparent">AI</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-[#FF1B6B] font-bold">
                B2B Demand Gen
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 bg-white px-6 py-2 rounded-full border border-slate-200 shadow-sm">
            <a href="#how-we-help" className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-700 hover:text-[#0080FF] transition-colors">
              How We Help
            </a>
            <a href="#inbound-outbound" className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-700 hover:text-[#0080FF] transition-colors">
              5-Step System
            </a>
            <a href="#infrastructure" className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-700 hover:text-[#0080FF] transition-colors">
              Deliverability
            </a>
            <a href="#case-studies" className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-700 hover:text-[#0080FF] transition-colors">
              Case Studies
            </a>
            <a href="#results" className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-700 hover:text-[#0080FF] transition-colors">
              Results
            </a>
            <a href="#packages" className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-700 hover:text-[#0080FF] transition-colors">
              Packages
            </a>
            <a href="#faqs" className="text-xs font-poppins font-bold uppercase tracking-wider text-slate-700 hover:text-[#0080FF] transition-colors">
              FAQs
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenStrategyCall}
              className="px-4 py-2 text-xs font-poppins font-bold uppercase tracking-wider text-slate-800 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all shadow-sm"
            >
              Strategy Call
            </button>

            <button
              onClick={onOpenAudit}
              className="px-5 py-2.5 text-xs font-poppins font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#4F46E5] rounded-xl shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
            >
              Get Audit <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenAudit}
              className="px-3.5 py-1.5 text-xs font-extrabold text-white bg-gradient-to-r from-[#FF1B6B] to-[#4F46E5] rounded-lg uppercase tracking-wider shadow-sm"
            >
              Get Audit
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-[#FF1B6B]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-3">
            <a href="#how-we-help" onClick={() => setMobileMenuOpen(false)} className="text-sm font-poppins font-bold uppercase tracking-wider text-slate-900 py-2 border-b border-slate-100">
              How We Help
            </a>
            <a href="#inbound-outbound" onClick={() => setMobileMenuOpen(false)} className="text-sm font-poppins font-bold uppercase tracking-wider text-slate-900 py-2 border-b border-slate-100">
              5-Step System
            </a>
            <a href="#infrastructure" onClick={() => setMobileMenuOpen(false)} className="text-sm font-poppins font-bold uppercase tracking-wider text-slate-900 py-2 border-b border-slate-100">
              Deliverability
            </a>
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="text-sm font-poppins font-bold uppercase tracking-wider text-slate-900 py-2 border-b border-slate-100">
              Case Studies
            </a>
            <a href="#results" onClick={() => setMobileMenuOpen(false)} className="text-sm font-poppins font-bold uppercase tracking-wider text-slate-900 py-2 border-b border-slate-100">
              Results
            </a>
            <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="text-sm font-poppins font-bold uppercase tracking-wider text-slate-900 py-2 border-b border-slate-100">
              Packages
            </a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="text-sm font-poppins font-bold uppercase tracking-wider text-slate-900 py-2 border-b border-slate-100">
              FAQs
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] text-white font-poppins font-extrabold text-xs uppercase tracking-wider shadow-md"
            >
              Get Free Acquisition Audit →
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStrategyCall();
              }}
              className="w-full py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 font-poppins font-bold text-xs uppercase tracking-wider"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
