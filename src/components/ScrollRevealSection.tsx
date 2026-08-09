import React, { useState, useEffect, useRef } from 'react';
import { Mic, FileText, CheckCircle2, Play, Sparkles, Image as ImageIcon, Languages, Plus, ShieldCheck, Calendar, Clock, UserCheck, ChevronRight } from 'lucide-react';

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
    <div ref={sectionRef} className="relative bg-[#020103] border-t border-[#20D6C7]/15" style={{ height: '300vh' }}>
      
      {/* Sticky Full Viewport Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center bg-[#020103] select-none">
        
        {/* Background Ambient Radial Glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(32,214,199,0.14),transparent_55%),radial-gradient(circle_at_20%_70%,rgba(83,207,255,0.08),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(139,124,255,0.08),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#020103] to-transparent" />

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
              WebkitTextStroke: '1.5px rgba(32, 214, 199, 0.4)' 
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
              WebkitTextStroke: '1.5px rgba(83, 207, 255, 0.4)' 
            }}
          >
            VERNACULAR VOICE AI ✦ WHATSAPP AGENT ✦ HIS INTEGRATION ✦ RESPONSIBLE AI
          </div>
        </div>

        {/* 3D Morphing Card Container */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 h-[580px] flex items-center justify-center">
          
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
              className="relative w-full h-full rounded-[28px] overflow-hidden p-6 sm:p-8 flex flex-col justify-between"
              style={{
                background: 'radial-gradient(120% 90% at 92% -8%, rgba(32, 214, 199, 0.45) 0%, transparent 52%), radial-gradient(90% 70% at 8% 4%, rgba(83, 207, 255, 0.35) 0%, transparent 58%), linear-gradient(180deg, #09242A 0%, #071621 55%, #040810 100%)',
                boxShadow: '0 30px 80px -20px rgba(32, 214, 199, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Card Header Tag */}
              <div className="flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-[#20D6C7] backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> FEATURE 01 · CONVERSATIONAL VOICE AI
                </span>
                
                <a
                  href="#whatsapp-demo"
                  className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#20D6C7] text-[#091B22] flex items-center gap-1 hover:scale-105 transition-transform"
                >
                  <Play className="w-3 h-3 fill-current" /> Watch Demo
                </a>
              </div>

              {/* Chat Simulation Area */}
              <div className="space-y-4 my-auto z-10">
                
                {/* Assistant Message Bubble */}
                <div className="flex items-end gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#20D6C7] to-[#53CFFF] flex items-center justify-center text-[#091B22] font-bold text-xs shadow-lg">
                    AC
                  </div>
                  <div className="p-4 rounded-2xl bg-[#071621]/90 border border-white/10 text-xs text-white shadow-xl space-y-1">
                    <span className="text-[10px] text-[#53CFFF] font-bold block">ACQSA Voice & WhatsApp Assistant</span>
                    <p className="leading-relaxed">
                      “Namaste Anand! Your OPD appointment with Dr. Ananya Rao (Cardiology) is confirmed for tomorrow at 11:30 AM. Would you like hospital directions sent to your WhatsApp?”
                    </p>
                  </div>
                </div>

                {/* Animated Typing Indicator */}
                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-[#071621]/70 border border-white/10 ml-11">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#20D6C7] animate-ping" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#53CFFF] animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6BE7B7] animate-pulse" />
                  <span className="text-[10px] text-slate-400 font-mono ml-1">Voice synthesis active</span>
                </div>

                {/* Quick Action Chips Bar */}
                <div className="p-3 rounded-2xl bg-[#040810]/80 border border-white/10 flex flex-wrap items-center gap-2">
                  <button className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[11px] text-slate-200 border border-white/10 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#20D6C7]" /> Book Appointment
                  </button>
                  <button className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[11px] text-slate-200 border border-white/10 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#53CFFF]" /> Reschedule Slot
                  </button>
                  <button className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[11px] text-slate-200 border border-white/10 flex items-center gap-1.5">
                    <Languages className="w-3.5 h-3.5 text-[#6BE7B7]" /> Switch Language
                  </button>
                </div>

              </div>

              {/* Composer Bar */}
              <div className="p-3 rounded-2xl bg-[#071621]/90 border border-white/10 flex items-center justify-between z-10 text-xs">
                <div className="flex items-center gap-2 flex-1">
                  <button className="p-1.5 rounded-full text-slate-400 hover:text-white">
                    <Plus className="w-4 h-4" />
                  </button>
                  <span className="text-slate-400">Ask ACQSA Voice AI anything...</span>
                </div>

                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full bg-gradient-to-r from-[#20D6C7] to-[#53CFFF] text-[#091B22] flex items-center justify-center font-bold shadow-md hover:scale-105 transition-transform">
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
              className="relative w-full h-full rounded-[28px] overflow-hidden p-6 sm:p-8 flex flex-col justify-between"
              style={{
                background: 'radial-gradient(110% 80% at 86% 8%, rgba(83, 207, 255, 0.45) 0%, transparent 55%), radial-gradient(80% 60% at 12% 108%, rgba(139, 124, 255, 0.35) 5%, transparent 60%), linear-gradient(160deg, #09242A 0%, #071621 55%, #040810 100%)',
                boxShadow: '0 30px 80px -20px rgba(83, 207, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-[#53CFFF] backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> FEATURE 02 · REAL-TIME HIS SLOT LOCKING
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-[#6BE7B7]/20 text-[#6BE7B7] border border-[#6BE7B7]/40">
                  Sub-second Latency
                </span>
              </div>

              {/* Progress Steps Visualizer */}
              <div className="space-y-6 my-auto z-10">
                
                <div className="p-5 rounded-2xl bg-[#071621]/90 border border-white/10 space-y-4">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Automated Booking Verification Pathway
                  </h4>

                  <div className="grid grid-cols-4 gap-2 items-center text-center">
                    
                    <div className="space-y-1">
                      <div className="w-7 h-7 mx-auto rounded-full bg-[#6BE7B7] text-[#091B22] flex items-center justify-center font-bold text-xs shadow-md">
                        ✓
                      </div>
                      <span className="text-[10px] text-white font-medium block">Intent Parsed</span>
                    </div>

                    <div className="space-y-1">
                      <div className="w-7 h-7 mx-auto rounded-full bg-[#6BE7B7] text-[#091B22] flex items-center justify-center font-bold text-xs shadow-md">
                        ✓
                      </div>
                      <span className="text-[10px] text-white font-medium block">Doctor Found</span>
                    </div>

                    <div className="space-y-1">
                      <div className="w-7 h-7 mx-auto rounded-full bg-[#6BE7B7] text-[#091B22] flex items-center justify-center font-bold text-xs shadow-md">
                        ✓
                      </div>
                      <span className="text-[10px] text-white font-medium block">HIS Slot Locked</span>
                    </div>

                    <div className="space-y-1">
                      <div className="w-7 h-7 mx-auto rounded-full bg-[#20D6C7] text-[#091B22] flex items-center justify-center font-bold text-xs shadow-md animate-bounce">
                        ✓
                      </div>
                      <span className="text-[10px] text-[#20D6C7] font-bold block">WhatsApp Sent</span>
                    </div>

                  </div>
                </div>

                {/* Confirmed Ticket Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#20D6C7]/20 to-[#53CFFF]/20 border border-[#20D6C7]/50 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-[#20D6C7] uppercase block">Appointment Status</span>
                    <strong className="text-white text-sm">Dr. Ananya Rao · Cardiology</strong>
                    <p className="text-slate-300 text-[11px]">Tuesday, 12 August · 11:30 AM · Ref: ACQ-CARD-8902</p>
                  </div>
                  <span className="px-3 py-1.5 rounded-xl bg-[#20D6C7] text-[#091B22] font-bold text-xs shadow-lg">
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
              className="relative w-full h-full rounded-[28px] overflow-hidden p-6 sm:p-8 flex flex-col justify-between"
              style={{
                background: 'radial-gradient(110% 80% at 86% 8%, rgba(139, 124, 255, 0.45) 0%, transparent 55%), radial-gradient(80% 60% at 12% 108%, rgba(32, 214, 199, 0.35) 5%, transparent 60%), linear-gradient(160deg, #09242A 0%, #071621 55%, #040810 100%)',
                boxShadow: '0 30px 80px -20px rgba(139, 124, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-[#8B7CFF] backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> FEATURE 03 · CLINSCRIBE & TPA AUTO-SCRIBE
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-[#8B7CFF]/20 text-[#8B7CFF] border border-[#8B7CFF]/40">
                  Doctor Sign-off Ready
                </span>
              </div>

              {/* Clinical Note Visualizer */}
              <div className="space-y-4 my-auto z-10 text-xs">
                
                <div className="p-4 rounded-2xl bg-[#071621]/90 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-[#8B7CFF] font-bold border-b border-white/10 pb-1.5">
                    <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> Generated Discharge Note</span>
                    <span className="text-[10px] text-[#6BE7B7]">ICD-10 Mapped</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Diagnosis</span>
                      <strong className="text-white">Dengue Fever (NS1 Ag Positive)</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Platelet Count</span>
                      <strong className="text-[#6BE7B7]">95,000 / μL (Recovering)</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Treatment</span>
                      <strong className="text-white">IV Normal Saline, Paracetamol 650mg</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">TPA Pre-Auth</span>
                      <strong className="text-[#53CFFF]">Verified & Attached</strong>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#8B7CFF]/20 border border-[#8B7CFF]/40 text-[#8B7CFF] font-semibold flex items-center justify-between">
                  <span>Clinical Safety Protocol: AI draft requires doctor approval</span>
                  <button className="px-3 py-1 rounded-lg bg-[#8B7CFF] text-[#091B22] font-bold text-xs">
                    Approve Draft
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Dynamic Card Meta Text at Bottom */}
        <div className="relative z-30 text-center max-w-xl mx-auto mt-6 space-y-2">
          <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white tracking-tight">
            {cardsMeta[activeIndex].title}
          </h3>
          <p className="font-inter text-xs sm:text-sm text-slate-400 leading-relaxed">
            {cardsMeta[activeIndex].subtitle}
          </p>
        </div>

      </div>

    </div>
  );
};
