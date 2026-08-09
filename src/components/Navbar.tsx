import React, { useState, useEffect } from 'react';
import { Activity, Menu, X, PhoneCall, ChevronRight, Sparkles } from 'lucide-react';

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
          ? 'bg-[#020103]/90 backdrop-blur-xl border-b border-[#00F0FF]/20 py-3 shadow-2xl shadow-black/80' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F13DE8] via-[#00F0FF] to-[#6dffb6] p-[1.5px] shadow-lg shadow-[#F13DE8]/30 group-hover:shadow-[#00F0FF]/50 transition-all">
              <div className="w-full h-full bg-[#020103] rounded-[10px] flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#00F0FF] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5 uppercase">
                ACQSA <span className="text-gradient">AI</span>
              </span>
              <span className="text-[9px] tracking-widest uppercase font-jura text-[#00F0FF] font-bold">Healthcare Intelligence</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 bg-[#09242A]/80 px-7 py-2.5 rounded-full border border-[#00F0FF]/25 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-poppins font-semibold uppercase tracking-wider text-slate-200 hover:text-[#00F0FF] transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#F13DE8] via-[#00F0FF] to-[#6dffb6] group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenDemoModal('voice_call')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-poppins font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-[#09242A] hover:bg-[#0d323a] border border-[#00F0FF]/30 hover:border-[#00F0FF]/60 rounded-xl transition-all shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#00F0FF]" />
              Talk to ACQSA
            </button>

            <button
              onClick={() => onOpenDemoModal('live_demo')}
              className="relative group px-5 py-2.5 text-xs font-poppins font-extrabold uppercase tracking-wider text-[#091B22] rounded-xl overflow-hidden transition-all glow-button-pulse"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F13DE8] via-[#00F0FF] to-[#6dffb6] transition-all" />
              <div className="relative flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#091B22]" />
                Book Demo
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => onOpenDemoModal('live_demo')}
              className="px-3 py-1.5 text-xs font-extrabold text-[#091B22] bg-gradient-to-r from-[#F13DE8] to-[#00F0FF] rounded-lg uppercase tracking-wider"
            >
              Book Demo
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#09242A] border border-[#00F0FF]/30 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#020103]/98 backdrop-blur-2xl border-b border-[#00F0FF]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-poppins font-bold uppercase tracking-wider text-slate-200 hover:text-[#00F0FF] py-2 border-b border-white/10 flex items-center justify-between"
              >
                {link.name}
                <ChevronRight className="w-4 h-4 text-[#00F0FF]" />
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal('voice_call');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#09242A] border border-[#00F0FF]/40 text-white font-poppins font-bold text-xs uppercase tracking-wider"
            >
              <PhoneCall className="w-4 h-4 text-[#00F0FF]" />
              Talk to ACQSA AI
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal('live_demo');
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F13DE8] via-[#00F0FF] to-[#6dffb6] text-[#091B22] font-poppins font-extrabold text-xs uppercase tracking-wider"
            >
              Book a Live Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
