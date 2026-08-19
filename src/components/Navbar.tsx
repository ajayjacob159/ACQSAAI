import React, { useState, useEffect } from 'react';
import { Activity, Menu, X, PhoneCall, ChevronRight, Sparkles, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: (type?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'YC AI Innovations', href: '#yc-innovations', highlight: true },
    { name: 'Solutions', href: '#solutions' },
    { name: 'How It Works', href: '#opd-journey' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Security', href: '#security' },
    { name: 'Resources', href: '#faqs' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-3 shadow-md shadow-slate-900/5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C2B3] via-[#0077FF] to-[#7C3AED] p-[1.5px] shadow-lg shadow-[#00C2B3]/20 group-hover:shadow-[#00C2B3]/40 transition-all">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#00C2B3] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-extrabold text-xl tracking-tight text-slate-900 flex items-center gap-1.5 uppercase">
                ACQSA <span className="text-gradient">AI</span>
              </span>
              <span className="text-[9px] tracking-widest uppercase font-jura text-[#00C2B3] font-bold">Healthcare Intelligence</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 bg-white/80 px-6 py-2 rounded-full border border-slate-200 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-poppins font-semibold uppercase tracking-wider transition-colors relative group py-1 flex items-center gap-1 ${
                  link.highlight
                    ? 'text-[#00C2B3] font-bold'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {link.highlight && <Zap className="w-3 h-3 text-[#00C2B3]" />}
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00C2B3] via-[#0077FF] to-[#7C3AED] group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenDemoModal('voice_call')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-poppins font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#00C2B3]" />
              Talk to ACQSA
            </button>

            <button
              onClick={() => onOpenDemoModal('live_demo')}
              className="relative group px-5 py-2.5 text-xs font-poppins font-extrabold uppercase tracking-wider text-white rounded-xl overflow-hidden transition-all glow-button-pulse"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00C2B3] via-[#0077FF] to-[#7C3AED] transition-all" />
              <div className="relative flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white" />
                Book Demo
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-3">
            <button
              onClick={() => onOpenDemoModal('live_demo')}
              className="px-3 py-1.5 text-xs font-extrabold text-white bg-gradient-to-r from-[#00C2B3] to-[#0077FF] rounded-lg uppercase tracking-wider shadow-sm"
            >
              Book Demo
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-poppins font-bold uppercase tracking-wider py-2 border-b border-slate-100 flex items-center justify-between ${
                  link.highlight ? 'text-[#00C2B3]' : 'text-slate-800 hover:text-slate-900'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {link.highlight && <Zap className="w-4 h-4 text-[#00C2B3]" />}
                  {link.name}
                </span>
                <ChevronRight className="w-4 h-4 text-[#00C2B3]" />
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal('voice_call');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-poppins font-bold text-xs uppercase tracking-wider"
            >
              <PhoneCall className="w-4 h-4 text-[#00C2B3]" />
              Talk to ACQSA AI
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal('live_demo');
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00C2B3] via-[#0077FF] to-[#7C3AED] text-white font-poppins font-extrabold text-xs uppercase tracking-wider shadow-md"
            >
              Book a Live Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
