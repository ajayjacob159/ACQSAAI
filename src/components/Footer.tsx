import React, { useState } from 'react';
import { Activity, Mail, Phone, MapPin, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
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
      colors: ['#F13DE8', '#00F0FF', '#6dffb6']
    });

    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="relative bg-[#020103] text-slate-300 text-xs border-t border-[#00F0FF]/20 overflow-hidden footer-atmosphere">
      
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-gradient-to-t from-[#F13DE8]/20 via-[#00F0FF]/15 to-transparent blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-12 space-y-16">
        
        {/* Top Floating High-Impact Subscription & Demo Card */}
        <div className="bg-[#09242A]/90 border-2 border-[#00F0FF]/40 rounded-3xl p-8 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F13DE8]/20 border border-[#F13DE8]/40 text-[11px] font-bold text-[#F13DE8]">
              <Sparkles className="w-3.5 h-3.5" /> STAY AHEAD IN HEALTHCARE AI
            </div>
            <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-white uppercase tracking-tight">
              Ready to transform <br />
              <span className="text-gradient">your hospital operations?</span>
            </h3>
            <p className="text-xs text-slate-300 font-inter leading-relaxed">
              Subscribe to ACQSA AI Executive Briefings or request an instant clinical automation consultation.
            </p>
          </div>

          {/* Form */}
          <div className="w-full max-w-md">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-[#6dffb6]/20 border border-[#6dffb6]/40 text-xs text-[#6dffb6] font-bold flex items-center justify-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" /> Thank you! Your briefing request has been registered.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter hospital email..."
                  className="flex-1 bg-[#040810] text-xs text-white placeholder-slate-500 px-4 py-3.5 rounded-xl border border-white/20 focus:outline-none focus:border-[#F13DE8]"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F13DE8] via-[#00F0FF] to-[#6dffb6] text-[#091B22] font-poppins font-extrabold text-xs shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-1.5"
                >
                  Subscribe <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4 pr-4">
            <a href="#" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F13DE8] via-[#00F0FF] to-[#6dffb6] p-[1.5px] shadow-lg shadow-[#F13DE8]/30">
                <div className="w-full h-full bg-[#040810] rounded-[10px] flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#00F0FF]" />
                </div>
              </div>
              <span className="font-poppins font-extrabold text-2xl text-white tracking-tight uppercase">
                ACQSA <span className="text-gradient">AI</span>
              </span>
            </a>

            <p className="text-xs text-slate-300 font-inter leading-relaxed max-w-sm">
              Conversational and clinical documentation intelligence for modern hospitals. Empowering patient care across voice, WhatsApp, OPD scheduling, TPA cashless claims, and EMR auto-scribing.
            </p>

            <div className="space-y-2.5 pt-2 text-slate-200 text-xs font-jura uppercase">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F13DE8]" />
                <span>contact@acqsa.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00F0FF]" />
                <span>+91 80 6900 8800 (Enterprise Sales Desk)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#6dffb6]" />
                <span>ACQSA AI Labs · Bengaluru & Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core AI Products */}
          <div className="space-y-3">
            <h4 className="font-poppins font-extrabold text-xs text-white uppercase tracking-widest text-[#00F0FF]">
              Core Products
            </h4>
            <ul className="space-y-2.5 text-slate-300 font-inter">
              <li><a href="#products" className="hover:text-[#00F0FF] transition-colors">PatientConnect Voice AI</a></li>
              <li><a href="#whatsapp-demo" className="hover:text-[#00F0FF] transition-colors">WhatsApp Agent Bot</a></li>
              <li><a href="#opd-journey" className="hover:text-[#00F0FF] transition-colors">OPD Slot Automation</a></li>
              <li><a href="#tpa-workflow" className="hover:text-[#00F0FF] transition-colors">TPA Cashless Claims</a></li>
              <li><a href="#auto-scribe" className="hover:text-[#00F0FF] transition-colors">ClinScribe Auto-Scribe</a></li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <h4 className="font-poppins font-extrabold text-xs text-white uppercase tracking-widest text-[#F13DE8]">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-slate-300 font-inter">
              <li><a href="#solutions" className="hover:text-[#F13DE8] transition-colors">Hospital Chains & Networks</a></li>
              <li><a href="#solutions" className="hover:text-[#F13DE8] transition-colors">Specialty OPD Clinics</a></li>
              <li><a href="#solutions" className="hover:text-[#F13DE8] transition-colors">TPA Billing Desks</a></li>
              <li><a href="#solutions" className="hover:text-[#F13DE8] transition-colors">Nursing & Inpatient Wards</a></li>
              <li><a href="#solutions" className="hover:text-[#F13DE8] transition-colors">Medical Records (MRD)</a></li>
            </ul>
          </div>

          {/* Col 4: Resources & Security */}
          <div className="space-y-3">
            <h4 className="font-poppins font-extrabold text-xs text-white uppercase tracking-widest text-[#6dffb6]">
              Trust & Security
            </h4>
            <ul className="space-y-2.5 text-slate-300 font-inter">
              <li><a href="#use-cases" className="hover:text-[#6dffb6] transition-colors">12 Hospital Use Cases</a></li>
              <li><a href="#faqs" className="hover:text-[#6dffb6] transition-colors">Hospital FAQs</a></li>
              <li><a href="#security" className="hover:text-[#6dffb6] transition-colors">Responsible AI Protocol</a></li>
              <li><a href="#integrations" className="hover:text-[#6dffb6] transition-colors">HIS & EMR Connectors</a></li>
              <li><a href="#" className="hover:text-[#6dffb6] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Giant Outlined Watermark Logo Mark (LIA-inspired) */}
        <div className="relative py-8 flex justify-center items-center pointer-events-none select-none opacity-20">
          <span 
            className="font-poppins font-black text-center uppercase tracking-widest"
            style={{
              fontSize: 'clamp(60px, 15vw, 220px)',
              lineHeight: 0.8,
              color: 'transparent',
              WebkitTextStroke: '2px rgba(0, 240, 255, 0.4)'
            }}
          >
            ACQSA AI
          </span>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} ACQSA AI Inc. All rights reserved. Designed for Indian healthcare workflows.</p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-[#00F0FF] flex items-center gap-1.5 font-semibold">
              <svg className="w-4 h-4 fill-current text-[#00F0FF]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              LinkedIn
            </a>
            <span>•</span>
            <span className="text-[#6dffb6] font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Clinical Safety & Data Security Verified
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
