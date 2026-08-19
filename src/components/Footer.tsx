import React, { useState } from 'react';
import { Activity, Mail, Phone, MapPin, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubscribed(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 },
      colors: ['#FF1B6B', '#0077FF', '#7C3AED']
    });

    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="relative bg-[#FAFAFC] text-slate-800 text-xs border-t border-slate-200 overflow-hidden footer-atmosphere">
      
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-gradient-to-t from-[#FF1B6B]/10 via-[#0077FF]/10 to-transparent blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-12 space-y-16">
        
        {/* Top Floating Subscription & Consultation Card */}
        <div className="bg-white border-2 border-[#FF1B6B]/30 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF1B6B]/10 text-[11px] font-bold text-[#FF1B6B]">
              <Sparkles className="w-3.5 h-3.5" /> STAY AHEAD IN HEALTHCARE AI
            </div>
            <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 uppercase tracking-tight">
              Ready to transform <br />
              <span className="text-gradient">your hospital operations?</span>
            </h3>
            <p className="text-xs text-slate-700 font-inter leading-relaxed font-medium">
              Subscribe to ACQSA AI Executive Briefings or request an instant clinical automation consultation.
            </p>
          </div>

          {/* Form */}
          <div className="w-full max-w-md">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-bold flex items-center justify-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Thank you! Your briefing request has been registered.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter hospital email..."
                  className="flex-1 bg-slate-50 text-xs text-slate-900 placeholder-slate-400 px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#FF1B6B]"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF1B6B] via-[#0077FF] to-[#7C3AED] text-white font-poppins font-extrabold text-xs shadow-md hover:scale-105 transition-transform flex items-center justify-center gap-1.5"
                >
                  Subscribe <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info with Official Logo */}
          <div className="lg:col-span-2 space-y-4 pr-4">
            <a href="#" className="inline-block">
              <img 
                src="/logo.jpg" 
                alt="ACQSA AI Logo" 
                className="h-10 sm:h-12 w-auto object-contain" 
              />
            </a>

            <p className="text-xs text-slate-700 font-inter leading-relaxed max-w-sm font-medium">
              Conversational and clinical documentation intelligence for modern hospitals. Empowering patient care across voice, WhatsApp, OPD scheduling, TPA cashless claims, and EMR auto-scribing.
            </p>

            <div className="space-y-2.5 pt-2 text-slate-800 text-xs font-jura uppercase font-bold">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF1B6B]" />
                <span>contact@acqsa.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0077FF]" />
                <span>+91 80 6900 8800 (Enterprise Sales Desk)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#7C3AED]" />
                <span>ACQSA AI Labs · Bengaluru & Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core AI Products */}
          <div className="space-y-3">
            <h4 className="font-poppins font-extrabold text-xs text-slate-900 uppercase tracking-widest text-[#FF1B6B]">
              Core Products
            </h4>
            <ul className="space-y-2.5 text-slate-700 font-inter font-medium">
              <li><a href="#products" className="hover:text-[#FF1B6B] transition-colors">PatientConnect Voice AI</a></li>
              <li><a href="#whatsapp-demo" className="hover:text-[#FF1B6B] transition-colors">WhatsApp Agent Bot</a></li>
              <li><a href="#opd-journey" className="hover:text-[#FF1B6B] transition-colors">OPD Slot Automation</a></li>
              <li><a href="#tpa-workflow" className="hover:text-[#FF1B6B] transition-colors">TPA Cashless Claims</a></li>
              <li><a href="#auto-scribe" className="hover:text-[#FF1B6B] transition-colors">ClinScribe Auto-Scribe</a></li>
            </ul>
          </div>

          {/* Col 3: Automations */}
          <div className="space-y-3">
            <h4 className="font-poppins font-extrabold text-xs text-slate-900 uppercase tracking-widest text-[#0077FF]">
              Automations
            </h4>
            <ul className="space-y-2.5 text-slate-700 font-inter font-medium">
              <li><a href="#yc-innovations" className="hover:text-[#0077FF] transition-colors">Prior Auth & Referral AI</a></li>
              <li><a href="#yc-innovations" className="hover:text-[#0077FF] transition-colors">Voice RCM & Denials AI</a></li>
              <li><a href="#yc-innovations" className="hover:text-[#0077FF] transition-colors">Specialty Ambient Scribe</a></li>
              <li><a href="#yc-innovations" className="hover:text-[#0077FF] transition-colors">Autonomous Practice OS</a></li>
              <li><a href="#yc-innovations" className="hover:text-[#0077FF] transition-colors">Predictive Bed Triage</a></li>
            </ul>
          </div>

          {/* Col 4: SEO & Knowledge Hub */}
          <div className="space-y-3">
            <h4 className="font-poppins font-extrabold text-xs text-slate-900 uppercase tracking-widest text-[#7C3AED]">
              SEO Knowledge Hub
            </h4>
            <ul className="space-y-2.5 text-slate-700 font-inter font-medium">
              <li><a href="#articles" className="hover:text-[#7C3AED] transition-colors">OPD Automation Guide</a></li>
              <li><a href="#articles" className="hover:text-[#7C3AED] transition-colors">Auto-Scribing Playbook</a></li>
              <li><a href="#articles" className="hover:text-[#7C3AED] transition-colors">TPA Pre-Auth Whitepaper</a></li>
              <li><a href="#security" className="hover:text-[#7C3AED] transition-colors">Responsible AI Protocol</a></li>
              <li><a href="#integrations" className="hover:text-[#7C3AED] transition-colors">HIS & EMR API Connectors</a></li>
            </ul>
          </div>

        </div>

        {/* Giant Logo Watermark */}
        <div className="relative py-6 flex justify-center items-center pointer-events-none select-none opacity-15">
          <img 
            src="/logo.jpg" 
            alt="ACQSA AI Watermark" 
            className="h-28 sm:h-40 w-auto object-contain grayscale" 
          />
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-600 font-medium">
          <p>© {new Date().getFullYear()} ACQSA AI Inc. All rights reserved. Designed for Indian healthcare workflows.</p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-[#FF1B6B] flex items-center gap-1.5 font-bold">
              <svg className="w-4 h-4 fill-current text-[#0077FF]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              LinkedIn
            </a>
            <span>•</span>
            <span className="text-[#10B981] font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Clinical Safety & Data Security Verified
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
