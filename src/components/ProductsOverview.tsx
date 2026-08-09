import React, { useState } from 'react';
import { PhoneCall, MessageCircle, FileText, CheckCircle, ArrowRight, ShieldCheck, Sparkles, User, Mic, Clock, Download, ChevronRight, Stethoscope } from 'lucide-react';

interface ProductsOverviewProps {
  onOpenDemoModal: (type?: string) => void;
}

export const ProductsOverview: React.FC<ProductsOverviewProps> = ({ onOpenDemoModal }) => {
  const [activePanelTab, setActivePanelTab] = useState<'patient_connect' | 'clin_scribe'>('patient_connect');

  const panel1Functions = [
    'Inbound call handling',
    'Outbound patient calls',
    'OPD booking',
    'Appointment reminders',
    'Rescheduling and cancellation',
    'Doctor and department discovery',
    'Pre-visit instructions',
    'Follow-up communication',
    'Human handover'
  ];

  const panel2Sections = [
    'Patient details',
    'Chief complaints',
    'Clinical findings',
    'Diagnosis',
    'Investigations',
    'Procedures',
    'Treatment provided',
    'Medicines at discharge',
    'Follow-up advice',
    'TPA documentation checklist'
  ];

  const panel2Workflow = ['Listen', 'Understand', 'Structure', 'Verify', 'Approve', 'Export'];

  return (
    <section id="products" className="py-24 relative bg-[#071621] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#20D6C7]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#8B7CFF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09242A] border border-[#20D6C7]/30 text-xs font-semibold text-[#20D6C7]">
            <Sparkles className="w-3.5 h-3.5" /> Core AI Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Two intelligent systems. <br />
            <span className="text-gradient">One connected patient journey.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From front-office patient engagement to deep clinical documentation, ACQSA AI unifies every step of hospital administration.
          </p>
        </div>

        {/* Product Selector Toggle Bar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-[#09242A] border border-[#20D6C7]/20 rounded-2xl backdrop-blur-md shadow-lg">
            <button
              onClick={() => setActivePanelTab('patient_connect')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-heading font-bold text-sm transition-all ${
                activePanelTab === 'patient_connect'
                  ? 'bg-gradient-to-r from-[#20D6C7] to-[#53CFFF] text-[#091B22] shadow-md shadow-[#20D6C7]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              1. ACQSA PatientConnect AI
            </button>

            <button
              onClick={() => setActivePanelTab('clin_scribe')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-heading font-bold text-sm transition-all ${
                activePanelTab === 'clin_scribe'
                  ? 'bg-gradient-to-r from-[#20D6C7] to-[#53CFFF] text-[#091B22] shadow-md shadow-[#20D6C7]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              2. ACQSA ClinScribe AI
            </button>
          </div>
        </div>

        {/* Panel 1: PatientConnect AI */}
        {activePanelTab === 'patient_connect' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#09242A]/60 border border-[#20D6C7]/20 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl animate-in fade-in duration-500">
            
            {/* Left Column: Product Details & Features */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#20D6C7]/15 border border-[#20D6C7]/30 text-xs font-bold text-[#20D6C7]">
                PRODUCT 01
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                  ACQSA PatientConnect AI
                </h3>
                <p className="text-sm font-semibold text-[#53CFFF] mt-1">
                  Vernacular Voice AI & WhatsApp Agent
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                A 24×7 conversational AI agent that handles patient inquiries, books OPD appointments, conducts incoming and outgoing calls, and seamlessly continues the journey through WhatsApp.
              </p>

              {/* Function Checklist Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Core Operational Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {panel1Functions.map((fn, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-[#071621]/80 px-3 py-2 rounded-lg border border-white/5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#20D6C7] shrink-0" />
                      <span>{fn}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onOpenDemoModal('voice_agent')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#20D6C7] to-[#53CFFF] text-[#091B22] font-heading font-bold text-sm shadow-lg shadow-[#20D6C7]/20 hover:scale-[1.02] transition-transform"
                >
                  Test PatientConnect AI
                </button>
                <a
                  href="#whatsapp-demo"
                  className="text-xs font-semibold text-[#53CFFF] hover:underline flex items-center gap-1"
                >
                  View WhatsApp Flow <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Phone + WhatsApp Interface */}
            <div className="lg:col-span-6 relative flex flex-col sm:flex-row gap-4 items-center justify-center pt-6 lg:pt-0">
              
              {/* Phone Voice Call Mockup */}
              <div className="w-full max-w-[260px] bg-[#071621] rounded-3xl border-2 border-[#20D6C7]/40 p-4 shadow-2xl flex flex-col gap-4">
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1 text-[#20D6C7]"><PhoneCall className="w-3 h-3" /> Voice Agent</span>
                  <span className="text-[#6BE7B7]">01:42</span>
                </div>
                <div className="text-center py-2 space-y-1">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#20D6C7]/20 border border-[#20D6C7] flex items-center justify-center text-[#20D6C7]">
                    <User className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-white">Anand Kumar</h4>
                  <p className="text-[10px] text-slate-400">Cardiology Query · Tamil</p>
                </div>
                <div className="bg-[#09242A] p-3 rounded-xl border border-[#20D6C7]/20 text-[11px] text-slate-300">
                  <p className="text-[#20D6C7] font-semibold text-[10px] mb-1">AI Transcript:</p>
                  "வணக்கம், உங்கள் அపாயிண்ட்மென்ட் நாளை மாலை 4:00 மணிக்கு உறுதி செய்யப்பட்டது."
                </div>
                <div className="flex items-center justify-center gap-2 pt-1 text-[10px] text-[#6BE7B7]">
                  <CheckCircle className="w-3 h-3" /> Redirecting to WhatsApp...
                </div>
              </div>

              {/* Connected Arrow */}
              <div className="hidden sm:flex text-[#20D6C7] items-center justify-center">
                <ArrowRight className="w-6 h-6 animate-pulse" />
              </div>

              {/* WhatsApp Chat Card */}
              <div className="w-full max-w-[260px] bg-[#071621] rounded-3xl border-2 border-[#25D366]/40 p-4 shadow-2xl flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-white border-b border-white/10 pb-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Business</span>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="bg-[#09242A] p-2.5 rounded-xl border border-white/5 text-slate-200">
                    <p className="font-semibold text-[#25D366] text-[10px] mb-0.5">ACQSA Hospital Bot:</p>
                    Hello Anand, your Cardiology appointment with Dr. Rao is confirmed for 4:00 PM tomorrow.
                  </div>
                  <div className="bg-[#128C7E]/20 p-2.5 rounded-xl border border-[#128C7E]/40 text-slate-200 text-right ml-4">
                    Send hospital location map
                  </div>
                  <div className="bg-[#09242A] p-2 rounded-lg text-[10px] text-[#25D366] font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Directions & QR pass sent
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Panel 2: ClinScribe AI */}
        {activePanelTab === 'clin_scribe' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#09242A]/60 border border-[#20D6C7]/20 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl animate-in fade-in duration-500">
            
            {/* Left Column: Product Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#53CFFF]/15 border border-[#53CFFF]/30 text-xs font-bold text-[#53CFFF]">
                PRODUCT 02
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                  ACQSA ClinScribe AI
                </h3>
                <p className="text-sm font-semibold text-[#20D6C7] mt-1">
                  TPA & Discharge Summary Auto-Scribe
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                An AI documentation assistant that converts clinical conversations, ambient doctor consultations, and hospital records into structured, review-ready summaries and TPA documentation.
              </p>

              {/* Generated Sections Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Extracted Clinical Fields & Checklists
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {panel2Sections.map((sec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-200 bg-[#071621]/80 px-3 py-1.5 rounded-lg border border-white/5">
                      <FileText className="w-3.5 h-3.5 text-[#53CFFF] shrink-0" />
                      <span className="truncate">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow Steps */}
              <div className="pt-2 border-t border-white/10">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Clinical Note Workflow
                </h4>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold">
                  {panel2Workflow.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="bg-[#071621] px-2.5 py-1 rounded text-[#20D6C7] border border-[#20D6C7]/30">
                        {step}
                      </span>
                      {idx < panel2Workflow.length - 1 && <span className="text-slate-600">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onOpenDemoModal('auto_scribe')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#20D6C7] to-[#53CFFF] text-[#091B22] font-heading font-bold text-sm shadow-lg shadow-[#20D6C7]/20 hover:scale-[1.02] transition-transform"
                >
                  Try Auto-Scribe Demo
                </button>
                <a
                  href="#auto-scribe"
                  className="text-xs font-semibold text-[#53CFFF] hover:underline flex items-center gap-1"
                >
                  Live Clinical Transcript <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Consultation to Discharge Summary Mockup */}
            <div className="lg:col-span-6 bg-[#071621] rounded-3xl border border-[#20D6C7]/30 p-5 shadow-2xl space-y-4">
              
              {/* Doctor Conversation */}
              <div className="p-3 bg-[#09242A] rounded-xl border border-white/5 text-xs space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold border-b border-white/10 pb-1">
                  <span className="flex items-center gap-1.5 text-[#53CFFF]"><Mic className="w-3.5 h-3.5" /> Doctor Ambient Audio Feed</span>
                  <span className="text-[#6BE7B7]">Real-time Transcription</span>
                </div>
                <p className="text-slate-300">
                  <strong className="text-white">Doctor:</strong> "Patient was admitted with acute viral fever, mild dehydration, and generalized weakness. Platelets dropped to 95k initially."
                </p>
              </div>

              {/* Structured Summary Generation */}
              <div className="p-4 bg-[#09242A]/80 rounded-xl border border-[#20D6C7]/30 text-xs space-y-2">
                <div className="flex items-center justify-between font-bold text-white border-b border-white/10 pb-2">
                  <span className="flex items-center gap-2 text-[#20D6C7]">
                    <FileText className="w-4 h-4" /> DISCHARGE SUMMARY DRAFT
                  </span>
                  <span className="text-[10px] bg-[#6BE7B7]/20 text-[#6BE7B7] px-2 py-0.5 rounded border border-[#6BE7B7]/30">Auto-Structured</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Diagnosis</span>
                    <strong className="text-slate-100">Acute Viral Fever with Dehydration</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Platelet Count</span>
                    <strong className="text-slate-100">95,000 / μL (Recovering)</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Treatment</span>
                    <strong className="text-slate-100">IV Fluids, Paracetamol 650mg</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">TPA Status</span>
                    <strong className="text-[#53CFFF]">Pre-Auth Verified</strong>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400">
                  <span>HIS Integration: Ready for Doctor Sign-off</span>
                  <button className="flex items-center gap-1 text-[#20D6C7] font-bold hover:underline">
                    <Download className="w-3 h-3" /> Export Summary PDF
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
