import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Home, ChevronDown, Sparkles, Target, TrendingUp, Layers, Check } from 'lucide-react';
import { SERVICES_DATA } from './ServicesSection';
import logoImg from '../assets/logo.png';

interface NavbarProps {
  onOpenBooking: (packageTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo brand lockup (Clean transparent PNG) */}
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 group shrink-0"
            aria-label="ACQSA AI Home"
          >
            <img 
              src={logoImg} 
              alt="ACQSA AI" 
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </motion.a>

          {/* Desktop Nav Links with Services Dropdown */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50/90 border border-slate-200/90 px-3 py-1.5 rounded-full shadow-2xs">
            {/* Home link */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-3 py-1.5 text-xs font-poppins font-semibold text-slate-700 hover:text-slate-950 hover:bg-white rounded-full transition-all flex items-center gap-1.5"
            >
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span>Home</span>
            </motion.a>

            {/* Services Dropdown Trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`px-3 py-1.5 text-xs font-poppins font-semibold rounded-full transition-all flex items-center gap-1.5 ${
                  servicesDropdownOpen
                    ? 'bg-white text-slate-950 shadow-2xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <Layers className="w-3.5 h-3.5 text-[#FF1B6B]" />
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-slate-900' : ''
                }`} />
              </button>

              {/* Animated Services Dropdown Menu */}
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[420px] rounded-2xl bg-white border border-slate-200 p-3 shadow-2xl ring-1 ring-black/5 z-50 text-left"
                  >
                    <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Select A Specialized Service
                      </span>
                      <a 
                        href="#services" 
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-[10px] font-mono font-bold text-[#FF1B6B] hover:underline"
                      >
                        View Full Breakdown ↓
                      </a>
                    </div>

                    <div className="py-1 space-y-1">
                      {SERVICES_DATA.map((service) => (
                        <div
                          key={service.id}
                          className="p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200/80 group"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono font-bold uppercase text-slate-400">
                                  {service.number}
                                </span>
                                <span className="text-[11px] font-mono font-bold text-slate-900 px-1.5 py-0.5 rounded bg-slate-100">
                                  {service.price}
                                </span>
                              </div>
                              <h4 className="font-poppins font-bold text-xs text-slate-900 group-hover:text-[#FF1B6B] transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-[11px] text-slate-500 line-clamp-1">
                                {service.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                            <a
                              href="#services"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="text-[10px] font-mono font-bold text-slate-600 hover:text-slate-950 flex items-center gap-1"
                            >
                              <span>Read details & before/after</span>
                              <span className="text-slate-400">→</span>
                            </a>
                            <button
                              onClick={() => {
                                setServicesDropdownOpen(false);
                                onOpenBooking(`${service.title} (${service.price})`);
                              }}
                              className="px-2.5 py-1 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-mono font-bold text-[10px] uppercase tracking-wider shadow-2xs hover:scale-105 transition-all"
                            >
                              Select & Contact
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-1 p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>Not sure which offer fits your stage?</span>
                      <button
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          onOpenBooking('Exploratory Fit Call');
                        }}
                        className="font-bold text-slate-900 underline hover:text-[#FF1B6B]"
                      >
                        Free Fit Call →
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav Links */}
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-3.5 py-1.5 text-xs font-poppins font-semibold text-slate-700 hover:text-slate-950 hover:bg-white rounded-full transition-all"
            >
              How It Works
            </motion.a>
            <motion.a
              href="#who-its-for"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-3.5 py-1.5 text-xs font-poppins font-semibold text-slate-700 hover:text-slate-950 hover:bg-white rounded-full transition-all"
            >
              Who It's For
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-3.5 py-1.5 text-xs font-poppins font-semibold text-slate-700 hover:text-slate-950 hover:bg-white rounded-full transition-all"
            >
              Pricing
            </motion.a>
          </nav>

          {/* Desktop Right Action Area: Book Strategy Call CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              href="https://calendly.com/rockyjacob-ai/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.2)' }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-sm transition-colors flex items-center gap-1.5"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF1B6B]" />
            </motion.a>
          </div>

          {/* Mobile Right Bar: Book Call CTA + Menu Toggle */}
          <div className="sm:hidden flex items-center gap-2">
            <motion.a
              href="https://calendly.com/rockyjacob-ai/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1.5 rounded-full bg-slate-950 text-white text-[11px] font-poppins font-bold uppercase tracking-wider"
            >
              Book Call
            </motion.a>
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
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <div className="px-6 py-5 space-y-4">
              <nav className="flex flex-col gap-1">
                <a 
                  href="#" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex items-center gap-2.5 text-xs font-poppins font-semibold text-slate-800 py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-100/70"
                >
                  <Home className="w-3.5 h-3.5 text-[#FF1B6B]" />
                  <span>Home</span>
                </a>

                {/* Mobile Services Accordion */}
                <div className="py-2 border-b border-slate-100 space-y-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between text-xs font-poppins font-bold text-slate-900 py-1"
                  >
                    <span className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#FF1B6B]" />
                      <span>Services & Offers (3 Packages)</span>
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="space-y-2 pl-2 pt-1">
                      {SERVICES_DATA.map((srv) => (
                        <div key={srv.id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold text-slate-400">{srv.number}</span>
                            <span className="text-[10px] font-mono font-bold text-slate-900 bg-white px-1.5 py-0.5 rounded border border-slate-200">{srv.price}</span>
                          </div>
                          <div className="font-poppins font-bold text-xs text-slate-900">{srv.title}</div>
                          <div className="flex items-center gap-2 pt-1">
                            <a
                              href="#services"
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-[10px] font-mono font-bold text-[#FF1B6B]"
                            >
                              Read Details →
                            </a>
                            <span className="text-slate-300">|</span>
                            <button
                              onClick={() => {
                                setMobileMenuOpen(false);
                                onOpenBooking(`${srv.title} (${srv.price})`);
                              }}
                              className="text-[10px] font-mono font-bold text-slate-900 underline"
                            >
                              Select & Contact
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <a 
                  href="#how-it-works" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-xs font-poppins font-semibold text-slate-800 py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-100/70"
                >
                  How It Works
                </a>
                <a 
                  href="#who-its-for" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-xs font-poppins font-semibold text-slate-800 py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-100/70"
                >
                  Who It's For
                </a>
                <a 
                  href="#pricing" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-xs font-poppins font-semibold text-slate-800 py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-100/70"
                >
                  Pricing
                </a>
              </nav>

              <div className="pt-2">
                <a
                  href="https://calendly.com/rockyjacob-ai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-slate-950 text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Book Strategy Call (Calendly) →</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
