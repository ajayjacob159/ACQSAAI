import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Home, Sparkles } from 'lucide-react';
import { CountrySelector } from './CountrySelector';

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

  const navLinks = [
    { label: 'Home', href: '#', icon: true },
    { label: 'How It Works', href: '#how-it-works', icon: false },
    { label: 'Who It\'s For', href: '#who-its-for', icon: false },
    { label: 'Pricing', href: '#pricing', icon: false },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 py-2.5 shadow-sm' 
          : 'bg-white/80 backdrop-blur-md py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Logo brand lockup (Rocky Jacob text removed) */}
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 group shrink-0"
            aria-label="ACQSA AI Home"
          >
            <img 
              src="/logo.png" 
              alt="ACQSA AI" 
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:brightness-105" 
            />
          </motion.a>

          {/* Desktop Nav Links (The Problem, Proof, and About Founder removed; Home added) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50/90 border border-slate-200/90 px-3 py-1.5 rounded-full shadow-2xs">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-3.5 py-1.5 text-xs font-poppins font-semibold text-slate-700 hover:text-slate-950 hover:bg-white rounded-full transition-all flex items-center gap-1.5"
              >
                {link.icon && <Home className="w-3.5 h-3.5 text-slate-400" />}
                <span>{link.label}</span>
              </motion.a>
            ))}
          </nav>

          {/* Desktop Right Action Area: Country Selector + Book Strategy Call CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Country & Currency Selector with live price switching */}
            <CountrySelector />

            {/* Direct Calendly Strategy Call Button with Motion Effects */}
            <motion.a
              href="https://calendly.com/rockyjacob-ai/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.2)' }}
              whileTap={{ scale: 0.96 }}
              className="px-4.5 py-2 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-sm transition-colors flex items-center gap-1.5"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF1B6B]" />
            </motion.a>
          </div>

          {/* Mobile Right Bar: Country Selector + Menu Toggle */}
          <div className="sm:hidden flex items-center gap-2">
            <CountrySelector compact />
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-800 hover:text-slate-950 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with Framer Motion slide & fade */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-xl"
          >
            <div className="px-6 py-5 space-y-4">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <motion.a 
                    key={link.label}
                    href={link.href} 
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setMobileMenuOpen(false)} 
                    className="flex items-center gap-2.5 text-xs font-poppins font-semibold text-slate-800 py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-100/70"
                  >
                    {link.icon && <Home className="w-3.5 h-3.5 text-[#FF1B6B]" />}
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </nav>

              <div className="pt-2 space-y-2">
                <motion.a
                  href="https://calendly.com/rockyjacob-ai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-slate-950 text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Book Strategy Call (Calendly) →</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
