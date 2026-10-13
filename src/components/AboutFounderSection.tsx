import React from 'react';
import { Linkedin, Globe, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutFounderSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAFC] text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-[#0080FF]" />
            <span>BEHIND ACQSA AI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold tracking-tight text-slate-900">
            Built by Rocky Jacob. <br />
            <span className="bg-gradient-to-r from-[#FF1B6B] to-[#9333EA] bg-clip-text text-transparent">
              Dedicated to B2B SaaS Founders.
            </span>
          </h2>
        </div>

        {/* Founder Bio Card */}
        <div className="bg-white rounded-3xl border-2 border-slate-200/90 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Photo / Visual Placeholder */}
            <div className="md:col-span-5 flex flex-col items-center text-center space-y-4">
              <div className="relative group w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-tr from-slate-100 via-slate-200 to-slate-100 border-2 border-slate-200 flex items-center justify-center overflow-hidden shadow-inner">
                {/* Dedicated Photo Placeholder */}
                <div className="p-6 text-center space-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white font-poppins font-bold text-xl flex items-center justify-center mx-auto shadow-md">
                    RJ
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                    [YOUR PHOTO]
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono block">
                    Rocky Jacob / Founder
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-poppins font-bold text-lg text-slate-900">
                  Rocky Jacob
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Founder & Executive Ghostwriter @ ACQSA AI
                </p>
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-mono pt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>India-based • Global US/UK SaaS Focus</span>
                </div>
                <a
                  href="tel:+919966997159"
                  className="text-xs font-mono font-bold text-slate-800 hover:text-slate-950 transition-colors block pt-0.5"
                >
                  Contact: +91 9966997159
                </a>
              </div>

              <div className="flex flex-col gap-2 w-full pt-1">
                <a
                  href="https://www.linkedin.com/in/rockyjacob159/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-sky-50 text-[#0077FF] border border-sky-200 text-xs font-mono font-bold hover:bg-[#0077FF] hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>linkedin.com/in/rockyjacob159</span>
                </a>
                
                <a
                  href="mailto:ceo@acqsaai.com"
                  className="text-[11px] font-mono text-slate-500 hover:text-slate-900 transition-colors"
                >
                  ceo@acqsaai.com • ajayjacobe2@gmail.com
                </a>
              </div>
            </div>

            {/* Right Bio Narrative */}
            <div className="md:col-span-7 space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                I help US and UK growth-stage B2B SaaS founders turn their hard-earned operational insights into high-authority LinkedIn positioning that attracts enterprise decision-makers and qualified commercial inbound.
              </p>

              <p>
                Over the past several years, I've seen firsthand how the personal branding industry fragmented into two broken extremes: expensive US/UK agencies charging $6k–$10k/month while dumping junior writers on your account, or lazy AI generators outputting robotic broetry that burns your credibility.
              </p>

              {/* The India-based cost leverage callout */}
              <div className="p-4 rounded-2xl bg-[#FAFAFC] border border-slate-200 space-y-2 text-xs sm:text-sm">
                <div className="font-poppins font-bold text-slate-900 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#0080FF]" />
                  <span>The India-Based Advantage for SaaS Founders</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Operating out of India provides extreme economic leverage without sacrificing English writing fluency, technical SaaS depth, or executive attention. You work directly with me — no account managers, no junior churn, and no $8,000 agency overhead.
                </p>
              </div>

              <div className="space-y-2 pt-1 text-xs sm:text-sm font-medium text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Deep familiarity with B2B SaaS GTM: ARR, CAC, PLG, and outbound mechanics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Capped roster: I personally oversee every single draft and strategic cadence</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-xs font-poppins font-bold uppercase tracking-wider text-slate-900 hover:text-[#FF1B6B] transition-colors"
                >
                  <span>Book a 20-min intro call with Rocky →</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
