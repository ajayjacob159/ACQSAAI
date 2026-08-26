import React, { useState, useEffect, useRef } from 'react';
import { Activity, Menu, X, PhoneCall, ChevronDown, Sparkles, Zap, ShieldCheck, Stethoscope, Cpu, Database, Building2, Pill, QrCode, PieChart } from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: (type?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [autoDropdownOpen, setAutoDropdownOpen] = useState(false);
  const [divDropdownOpen, setDivDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAutoDropdownOpen(false);
      }
      if (divRef.current && !divRef.current.contains(e.target as Node)) {
        setDivDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const divisionsList = [
    { title: 'Outpatient & Polyclinic AI', desc: 'Voice OPD booking, WhatsApp bot, 50+ EMR', icon: <Stethoscope className="w-4 h-4 text-[#FF1B6B]" />, href: '#divisions' },
    { title: 'Inpatient & Ward Care AI', desc: 'ClinScribe discharge summary & nursing continuity', icon: <Building2 className="w-4 h-4 text-[#0077FF]" />, href: '#divisions' },
    { title: 'TPA Cashless & Revenue AI', desc: 'Pre-auth automation, 3C register, Payer Voice RCM', icon: <ShieldCheck className="w-4 h-4 text-[#00C2B3]" />, href: '#divisions' },
    { title: 'Pathology & Radiology AI', desc: 'Lab PDF OCR parser & radiology report copilot', icon: <Activity className="w-4 h-4 text-[#10B981]" />, href: '#divisions' },
    { title: 'Pharmacy & Prescription OS', desc: 'Refill protocol engine & drug safety alerts', icon: <Pill className="w-4 h-4 text-[#7C3AED]" />, href: '#divisions' },
    { title: 'ABDM National Health OS', desc: '14-Digit ABHA creation & M1/M2/M3 vault', icon: <QrCode className="w-4 h-4 text-[#FF1B6B]" />, href: '#divisions' },
    { title: 'Executive Leadership & MIS', desc: 'Real-time operational dashboard & ROI calculator', icon: <PieChart className="w-4 h-4 text-[#0077FF]" />, href: '#divisions' }
  ];

  const automationsList = [
    { title: 'ABDM & ABHA Health OS', desc: 'Eka Care national health OS integration', icon: <ShieldCheck className="w-4 h-4 text-[#FF1B6B]" />, href: '#eka-health-os' },
    { title: '50+ Specialty Doctor EMR', desc: 'KiviHealth clinic practice OS & 3C register', icon: <Stethoscope className="w-4 h-4 text-[#0077FF]" />, href: '#kivi-doctor-os' },
    { title: 'Prior Auth & Referral AI', desc: 'Biologic criteria matching & portal filing', icon: <ShieldCheck className="w-4 h-4 text-[#10B981]" />, href: '#yc-innovations' },
    { title: 'Voice RCM & Payer Calls', desc: 'AI voice agents calling payers for claims', icon: <PhoneCall className="w-4 h-4 text-[#7C3AED]" />, href: '#yc-innovations' },
    { title: 'Specialty Ambient Scribing', desc: 'Surgeon, home health & EMS note drafting', icon: <Stethoscope className="w-4 h-4 text-[#00C2B3]" />, href: '#yc-innovations' },
    { title: 'Remote Voice Monitoring', desc: 'Post-discharge Day 1-7 symptom calls', icon: <Activity className="w-4 h-4 text-[#FF1B6B]" />, href: '#yc-innovations' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-2.5 shadow-md shadow-slate-900/5' 
          : 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official ACQSA AI Logo Image */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src="/logo.jpg" 
              alt="ACQSA AI" 
              className="h-8 sm:h-10 w-auto object-contain hover:scale-105 transition-transform" 
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 bg-white px-6 py-2 rounded-full border border-slate-200 shadow-sm">
            
            {/* HEALTHCARE DIVISIONS DROPDOWN */}
            <div className="relative" ref={divRef}>
              <button
                onClick={() => setDivDropdownOpen(!divDropdownOpen)}
                onMouseEnter={() => setDivDropdownOpen(true)}
                className="text-xs font-poppins font-extrabold uppercase tracking-wider text-[#0077FF] hover:text-slate-900 transition-colors flex items-center gap-1.5 py-1"
              >
                <Building2 className="w-3.5 h-3.5 text-[#0077FF]" />
                Healthcare Divisions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${divDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {divDropdownOpen && (
                <div 
                  onMouseLeave={() => setDivDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-88 bg-white border border-slate-200 rounded-2xl p-3 shadow-2xl space-y-1 animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    AI & Automations Across All Divisions
                  </div>
                  {divisionsList.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setDivDropdownOpen(false)}
                      className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm border border-slate-200/60 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <strong className="block text-xs font-extrabold text-slate-900 group-hover:text-[#0077FF] transition-colors leading-tight">
                          {item.title}
                        </strong>
                        <span className="text-[10px] text-slate-500 font-inter leading-tight block">
                          {item.desc}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* AUTOMATIONS DROPDOWN MENU */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setAutoDropdownOpen(!autoDropdownOpen)}
                onMouseEnter={() => setAutoDropdownOpen(true)}
                className="text-xs font-poppins font-extrabold uppercase tracking-wider text-[#FF1B6B] hover:text-slate-900 transition-colors flex items-center gap-1.5 py-1"
              >
                <Zap className="w-3.5 h-3.5 text-[#FF1B6B]" />
                Automations
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${autoDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {autoDropdownOpen && (
                <div 
                  onMouseLeave={() => setAutoDropdownOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white border border-slate-200 rounded-2xl p-3 shadow-2xl space-y-1 animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Healthcare AI Automation Products
                  </div>
                  {automationsList.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setAutoDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm border border-slate-200/60 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <strong className="block text-xs font-bold text-slate-900 group-hover:text-[#FF1B6B] transition-colors leading-tight">
                          {item.title}
                        </strong>
                        <span className="text-[10px] text-slate-500 font-inter leading-tight block">
                          {item.desc}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#eka-health-os" className="text-xs font-poppins font-semibold uppercase tracking-wider text-slate-800 hover:text-[#FF1B6B] transition-colors">
              Health OS (ABDM)
            </a>

            <a href="#kivi-doctor-os" className="text-xs font-poppins font-semibold uppercase tracking-wider text-slate-800 hover:text-[#FF1B6B] transition-colors">
              Doctor EMR
            </a>

            <a href="#security" className="text-xs font-poppins font-semibold uppercase tracking-wider text-slate-800 hover:text-[#FF1B6B] transition-colors">
              Security
            </a>

          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenDemoModal('voice_call')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-poppins font-bold uppercase tracking-wider text-slate-800 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FF1B6B]" />
              Talk to ACQSA
            </button>

            <button
              onClick={() => onOpenDemoModal('live_demo')}
              className="relative group px-5 py-2.5 text-xs font-poppins font-extrabold uppercase tracking-wider text-white rounded-xl overflow-hidden transition-all shadow-md hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF1B6B] via-[#0077FF] to-[#7C3AED]" />
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
              className="px-3 py-1.5 text-xs font-extrabold text-white bg-gradient-to-r from-[#FF1B6B] to-[#7C3AED] rounded-lg uppercase tracking-wider shadow-sm"
            >
              Book Demo
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-slate-900"
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
            <a href="#divisions" onClick={() => setMobileMenuOpen(false)} className="text-sm font-poppins font-bold uppercase tracking-wider text-[#0077FF] py-2 border-b border-slate-100 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#0077FF]" /> Healthcare Divisions
            </a>

            <a href="#yc-innovations" onClick={() => setMobileMenuOpen(false)} className="text-sm font-poppins font-bold uppercase tracking-wider text-[#FF1B6B] py-2 border-b border-slate-100 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#FF1B6B]" /> Automations
            </a>

            <a href="#eka-health-os" onClick={() => setMobileMenuOpen(false)} className="text-sm font-poppins font-bold uppercase tracking-wider text-slate-900 py-2 border-b border-slate-100">
              ABDM Health OS
            </a>

            <a href="#kivi-doctor-os" onClick={() => setMobileMenuOpen(false)} className="text-sm font-poppins font-bold uppercase tracking-wider text-slate-900 py-2 border-b border-slate-100">
              Doctor EMR Suite
            </a>

            <a href="#security" onClick={() => setMobileMenuOpen(false)} className="text-sm font-poppins font-bold uppercase tracking-wider text-slate-900 py-2 border-b border-slate-100">
              Security & Compliance
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal('voice_call');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 font-poppins font-bold text-xs uppercase tracking-wider"
            >
              <PhoneCall className="w-4 h-4 text-[#FF1B6B]" />
              Talk to ACQSA AI
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal('live_demo');
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF1B6B] via-[#0077FF] to-[#7C3AED] text-white font-poppins font-extrabold text-xs uppercase tracking-wider shadow-md"
            >
              Book a Live Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
