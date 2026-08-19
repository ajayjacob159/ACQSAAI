import React, { useState, useEffect, useRef } from 'react';
import { Mic, FileText, CheckCircle2, Play, Sparkles, Languages, Plus, Calendar, Clock } from 'lucide-react';

export const ScrollRevealSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      if (totalHeight <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine active card based on scroll progress
  let activeIndex = 0;
  if (scrollProgress > 0.66) {
    activeIndex = 2;
  } else if (scrollProgress > 0.33) {
    activeIndex = 1;
  }

  // Cards metadata
  const cardsMeta = [
    {
      title: 'Conversational Voice & WhatsApp AI',
      subtitle: 'Engage patients with natural, human-like voice conversations and instant WhatsApp OPD appointment confirmations.'
    },
    {
      title: 'Smart OPD Slot Booking & Confirmation Engine',
      subtitle: 'Real-time HIS schedule querying, slot locking, and automated multi-lingual patient engagement.'
    },
    {
      title: 'ClinScribe Ambient AI & TPA Documentation',
      subtitle: 'Convert doctor-patient dialogues into structured, review-ready discharge notes and ICD-10 insurance packages.'
    }
  ];

  return (
    <div ref={sectionRef} className="relative bg-[#FAFAFC] border-t border-slate-200" style={{ height: '300vh' }}>
      
      {/* Sticky Full Viewport Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center bg-[#FAFAFC] select-none">
        
        {/* Background Ambient Radial Glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,194,179,0.12),transparent_55%),radial-gradient(circle_at_20%_70%,rgba(0,119,255,0.08),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(124,58,237,0.08),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#FAFAFC] to-transparent" />

        {/* Giant Outlined Stroke Background Text Marquee */}
        <div 
          className="pointer-events-none select-none absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-25"
          style={{ transform: `translateX(${-scrollProgress * 200}px)` }}
        >
          <div 
            className="font-poppins font-black block whitespace-nowrap" 
            style={{ 
              fontSize: 'clamp(72px, 16vw, 240px)', 
              lineHeight: 0.9, 
              color: 'transparent', 
              WebkitTextStroke: '1.5px rgba(0, 194, 179, 0.35)' 
            }}
          >
            ACQSA HEALTHCARE AI ✦ OPD AUTOMATION ✦ CLINSCRIBE AUTO-SCRIBE ✦ TPA WORKFLOWS
          </div>
          <div 
            className="font-poppins font-black block whitespace-nowrap" 
            style={{ 
              fontSize: 'clamp(72px, 16vw, 240px)', 
              lineHeight: 0.9, 
              color: 'transparent', 
              WebkitTextStroke: '1.5px rgba(0, 119, 255, 0.35)' 
            }}
          >
            VERNACULAR VOICE AI ✦ WHATSAPP AGENT ✦ HIS INTEGRATION ✦ RESPONSIBLE AI
          </div>
        </div>

        {/* 3D Morphing Card Container */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 h-[560px] flex items-center justify-center">
          
          {/* CARD 1: Conversational Voice AI */}
          <div 
            className="absolute inset-0 transition-all duration-700 ease-out"
            style={{
              opacity: activeIndex === 0 ? 1 : 0,
              transform: activeIndex === 0 
                ? 'translateX(0px) translateY(0px) rotate(0deg) scale(1)' 
                : 'translateX(-300px) translateY(100px) rotate(-15deg) scale(0.85)',
              pointerEvents: activeIndex === 0 ? 'auto' : 'none'
            }}
          >
            <div 
              className="relative w-full h-full rounded-[28px] overflow-hidden p-6 sm:p-8 flex flex-col justify-between border border-slate-200 shadow-2xl"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                boxShadow: '0 25px 70px -15px rgba(0, 194, 179, 0.18)'
              }}
            >
              {/* Card Header Tag */}
              <div className="flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#00C2B3]/10 text-[#00C2B3] border border-[#00C2B3]/30 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> FEATURE 01 · CONVERSATIONAL VOICE AI
                </span>
                
                <a
                  href="#whatsapp-demo"
                  className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#00C2B3] text-white flex items-center gap-1 hover:scale-105 transition-transform shadow-md shadow-[#00C2B3]/20"
                >
                  <Play className="w-3 h-3 fill-current" /> Watch Demo
                </a>
              </div>

              {/* Chat Simulation Area */}
              <div className="space-y-4 my-auto z-10">
                
                {/* Assistant Message Bubble */}
                <div className="flex items-end gap-3 max-w-[88%]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00C2B3] to-[#0077FF] flex items-center justify-center text-white font-bold text-xs shadow-md">
                    AC
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 shadow-md space-y-1">
                    <span className="text-[10px] text-[#0077FF] font-bold block">ACQSA Voice & WhatsApp Assistant</span>
                    <p className="leading-relaxed font-medium">
                      “Namaste Anand! Your OPD appointment with Dr. Ananya Rao (Cardiology) is confirmed for tomorrow at 11:30 AM. Would you like hospital directions sent to your WhatsApp?”
                    </p>
                  </div>
                </div>

                {/* Animated Typing Indicator */}
                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-slate-100 border border-slate-200 ml-11">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C2B3] animate-ping" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0077FF] animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-[10px] text-slate-500 font-mono ml-1">Voice synthesis active</span>
                </div>

                {/* Quick Action Chips Bar */}
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center gap-2">
                  <button className="px-3 py-1.5 rounded-full bg-white text-[11px] font-semibold text-slate-700 border border-slate-200 shadow-sm flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#00C2B3]" /> Book Appointment
                  </button>
                  <button className="px-3 py-1.5 rounded-full bg-white text-[11px] font-semibold text-slate-700 border border-slate-200 shadow-sm flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#0077FF]" /> Reschedule Slot
                  </button>
                  <button className="px-3 py-1.5 rounded-full bg-white text-[11px] font-semibold text-slate-700 border border-slate-200 shadow-sm flex items-center gap-1.5">
                    <Languages className="w-3.5 h-3.5 text-[#10B981]" /> Switch Language
                  </button>
                </div>

              </div>

              {/* Composer Bar */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200 flex items-center justify-between z-10 text-xs shadow-sm">
                <div className="flex items-center gap-2 flex-1">
                  <button className="p-1.5 rounded-full text-slate-400 hover:text-slate-700">
                    <Plus className="w-4 h-4" />
                  </button>
                  <span className="text-slate-400">Ask ACQSA Voice AI anything...</span>
                </div>

                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00C2B3] to-[#0077FF] text-white flex items-center justify-center font-bold shadow-md hover:scale-105 transition-transform">
                    <Mic className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* CARD 2: Smart Slot Booking & Confirmation Engine */}
          <div 
            className="absolute inset-0 transition-all duration-700 ease-out"
            style={{
              opacity: activeIndex === 1 ? 1 : 0,
              transform: activeIndex === 1 
                ? 'translateX(0px) translateY(0px) rotate(0deg) scale(1)' 
                : activeIndex < 1 
                ? 'translateX(300px) translateY(-100px) rotate(15deg) scale(0.85)' 
                : 'translateX(-300px) translateY(100px) rotate(-15deg) scale(0.85)',
              pointerEvents: activeIndex === 1 ? 'auto' : 'none'
            }}
          >
            <div 
              className="relative w-full h-full rounded-[28px] overflow-hidden p-6 sm:p-8 flex flex-col justify-between border border-slate-200 shadow-2xl"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                boxShadow: '0 25px 70px -15px rgba(0, 119, 255, 0.18)'
              }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0077FF]/10 text-[#0077FF] border border-[#0077FF]/30 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> FEATURE 02 · REAL-TIME HIS SLOT LOCKING
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/40">
                  Sub-second Latency
                </span>
              </div>

              {/* Progress Steps Visualizer */}
              <div className="space-y-6 my-auto z-10">
                
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Automated Booking Verification Pathway
                  </h4>

                  <div className="grid grid-cols-4 gap-2 items-center text-center">
                    
                    <div className="space-y-1">
                      <div className="w-7 h-7 mx-auto rounded-full bg-[#10B981] text-white flex items-center justify-center font-bold text-xs shadow-md">
                        ✓
                      </div>
                      <span className="text-[10px] text-slate-800 font-medium block">Intent Parsed</span>
                    </div>

                    <div className="space-y-1">
                      <div className="w-7 h-7 mx-auto rounded-full bg-[#10B981] text-white flex items-center justify-center font-bold text-xs shadow-md">
                        ✓
                      </div>
                      <span className="text-[10px] text-slate-800 font-medium block">Doctor Found</span>
                    </div>

                    <div className="space-y-1">
                      <div className="w-7 h-7 mx-auto rounded-full bg-[#10B981] text-white flex items-center justify-center font-bold text-xs shadow-md">
                        ✓
                      </div>
                      <span className="text-[10px] text-slate-800 font-medium block">HIS Slot Locked</span>
                    </div>

                    <div className="space-y-1">
                      <div className="w-7 h-7 mx-auto rounded-full bg-[#00C2B3] text-white flex items-center justify-center font-bold text-xs shadow-md animate-bounce">
                        ✓
                      </div>
                      <span className="text-[10px] text-[#00C2B3] font-bold block">WhatsApp Sent</span>
                    </div>

                  </div>
                </div>

                {/* Confirmed Ticket Card */}
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs shadow-sm">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-800 uppercase block">Appointment Status</span>
                    <strong className="text-slate-900 text-sm">Dr. Ananya Rao · Cardiology</strong>
                    <p className="text-slate-600 text-[11px]">Tuesday, 12 August · 11:30 AM · Ref: ACQ-CARD-8902</p>
                  </div>
                  <span className="px-3 py-1.5 rounded-xl bg-[#10B981] text-white font-bold text-xs shadow-md">
                    Confirmed
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* CARD 3: ClinScribe AI & TPA Automation */}
          <div 
            className="absolute inset-0 transition-all duration-700 ease-out"
            style={{
              opacity: activeIndex === 2 ? 1 : 0,
              transform: activeIndex === 2 
                ? 'translateX(0px) translateY(0px) rotate(0deg) scale(1)' 
                : 'translateX(300px) translateY(-100px) rotate(15deg) scale(0.85)',
              pointerEvents: activeIndex === 2 ? 'auto' : 'none'
            }}
          >
            <div 
              className="relative w-full h-full rounded-[28px] overflow-hidden p-6 sm:p-8 flex flex-col justify-between border border-slate-200 shadow-2xl"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                boxShadow: '0 25px 70px -15px rgba(124, 58, 237, 0.18)'
              }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/30 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> FEATURE 03 · CLINSCRIBE & TPA AUTO-SCRIBE
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-[#7C3AED]/15 text-[#7C3AED] border border-[#7C3AED]/40">
                  Doctor Sign-off Ready
                </span>
              </div>

              {/* Clinical Note Visualizer */}
              <div className="space-y-4 my-auto z-10 text-xs">
                
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-[#7C3AED] font-bold border-b border-slate-100 pb-1.5">
                    <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> Generated Discharge Note</span>
                    <span className="text-[10px] text-[#10B981]">ICD-10 Mapped</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div>
                      <span className="text-slate-400 text-[10px] block">Diagnosis</span>
                      <strong className="text-slate-900">Dengue Fever (NS1 Ag Positive)</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Platelet Count</span>
                      <strong className="text-[#10B981]">95,000 / μL (Recovering)</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">Treatment</span>
                      <strong className="text-slate-900">IV Normal Saline, Paracetamol 650mg</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">TPA Pre-Auth</span>
                      <strong className="text-[#0077FF]">Verified & Attached</strong>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-[#7C3AED] font-semibold flex items-center justify-between">
                  <span>Clinical Safety Protocol: AI draft requires doctor approval</span>
                  <button className="px-3 py-1 rounded-lg bg-[#7C3AED] text-white font-bold text-xs shadow-md">
                    Approve Draft
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Dynamic Card Meta Text at Bottom */}
        <div className="relative z-30 text-center max-w-xl mx-auto mt-6 space-y-2">
          <h3 className="font-poppins font-bold text-xl sm:text-2xl text-slate-900 tracking-tight">
            {cardsMeta[activeIndex].title}
          </h3>
          <p className="font-inter text-xs sm:text-sm text-slate-600 leading-relaxed">
            {cardsMeta[activeIndex].subtitle}
          </p>
        </div>

      </div>

    </div>
  );
};
