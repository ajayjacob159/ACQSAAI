import React, { useState } from 'react';
import { PhoneCall, MessageCircle, FileText, CheckCircle, ArrowRight, Sparkles, User, Mic, Clock, Download, ChevronRight, Stethoscope } from 'lucide-react';

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
    <section id="products" className="py-24 relative bg-[#FAFAFC] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#00C2B3]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-[#00C2B3]/40 text-xs font-semibold text-[#00C2B3]">
            <Sparkles className="w-3.5 h-3.5" /> Core AI Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Two intelligent systems. <br />
            <span className="text-gradient">One connected patient journey.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From front-office patient engagement to deep clinical documentation, ACQSA AI unifies every step of hospital administration.
          </p>
        </div>

        {/* Product Selector Toggle Bar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white border border-slate-200 rounded-2xl shadow-md">
            <button
              onClick={() => setActivePanelTab('patient_connect')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-poppins font-bold text-xs uppercase tracking-wider transition-all ${
                activePanelTab === 'patient_connect'
                  ? 'bg-gradient-to-r from-[#00C2B3] to-[#0077FF] text-white shadow-md shadow-[#00C2B3]/20'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              1. ACQSA PatientConnect AI
            </button>

            <button
              onClick={() => setActivePanelTab('clin_scribe')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-poppins font-bold text-xs uppercase tracking-wider transition-all ${
                activePanelTab === 'clin_scribe'
                  ? 'bg-gradient-to-r from-[#00C2B3] to-[#0077FF] text-white shadow-md shadow-[#00C2B3]/20'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              2. ACQSA ClinScribe AI
            </button>
          </div>
        </div>

        {/* Panel 1: PatientConnect AI */}
        {activePanelTab === 'patient_connect' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl animate-in fade-in duration-300">
            
            {/* Left Column: Product Details & Features */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00C2B3]/15 text-xs font-bold text-[#00C2B3]">
                PRODUCT 01
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900">
                  ACQSA PatientConnect AI
                </h3>
                <p className="text-sm font-semibold text-[#0077FF] mt-1">
                  Vernacular Voice AI & WhatsApp Agent
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                A 24×7 conversational AI agent that handles patient inquiries, books OPD appointments, conducts incoming and outgoing calls, and seamlessly continues the journey through WhatsApp.
              </p>

              {/* Function Checklist Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Core Operational Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {panel1Functions.map((fn, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00C2B3] shrink-0" />
                      <span>{fn}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onOpenDemoModal('voice_agent')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00C2B3] to-[#0077FF] text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#00C2B3]/20 hover:scale-[1.02] transition-transform"
                >
                  Test PatientConnect AI
                </button>
                <a
                  href="#whatsapp-demo"
                  className="text-xs font-bold text-[#0077FF] hover:underline flex items-center gap-1"
                >
                  View WhatsApp Flow <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Phone + WhatsApp Interface */}
            <div className="lg:col-span-6 relative flex flex-col sm:flex-row gap-4 items-center justify-center pt-6 lg:pt-0">
              
              {/* Phone Voice Call Mockup */}
              <div className="w-full max-w-[260px] bg-slate-900 text-white rounded-3xl border-2 border-[#00C2B3]/40 p-4 shadow-2xl flex flex-col gap-4">
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                  <span className="flex items-center gap-1 text-[#00C2B3]"><PhoneCall className="w-3 h-3" /> Voice Agent</span>
                  <span className="text-[#10B981]">01:42</span>
                </div>
                <div className="text-center py-2 space-y-1">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#00C2B3]/20 border border-[#00C2B3] flex items-center justify-center text-[#00C2B3]">
                    <User className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-white">Anand Kumar</h4>
                  <p className="text-[10px] text-slate-400">Cardiology Query · Tamil</p>
                </div>
                <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-[11px] text-slate-200">
                  <p className="text-[#00C2B3] font-semibold text-[10px] mb-1">AI Transcript:</p>
                  "வணக்கம், உங்கள் அపாயிண்ட்மென்ட் நாளை மாலை 4:00 மணிக்கு உறுதி செய்யப்பட்டது."
                </div>
                <div className="flex items-center justify-center gap-2 pt-1 text-[10px] text-[#10B981]">
                  <CheckCircle className="w-3 h-3" /> Redirecting to WhatsApp...
                </div>
              </div>

              {/* Connected Arrow */}
              <div className="hidden sm:flex text-[#00C2B3] items-center justify-center">
                <ArrowRight className="w-6 h-6 animate-pulse" />
              </div>

              {/* WhatsApp Chat Card */}
              <div className="w-full max-w-[260px] bg-white rounded-3xl border-2 border-[#25D366]/40 p-4 shadow-2xl flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 border-b border-slate-100 pb-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Business</span>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-slate-800">
                    <p className="font-semibold text-[#25D366] text-[10px] mb-0.5">ACQSA Hospital Bot:</p>
                    Hello Anand, your Cardiology appointment with Dr. Rao is confirmed for 4:00 PM tomorrow.
                  </div>
                  <div className="bg-[#128C7E]/10 p-2.5 rounded-xl border border-[#128C7E]/30 text-slate-800 text-right ml-4">
                    Send hospital location map
                  </div>
                  <div className="bg-emerald-50 p-2 rounded-lg text-[10px] text-[#25D366] font-bold flex items-center gap-1 border border-emerald-200">
                    <CheckCircle className="w-3 h-3" /> Directions & QR pass sent
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Panel 2: ClinScribe AI */}
        {activePanelTab === 'clin_scribe' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl animate-in fade-in duration-300">
            
            {/* Left Column: Product Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0077FF]/15 text-xs font-bold text-[#0077FF]">
                PRODUCT 02
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900">
                  ACQSA ClinScribe AI
                </h3>
                <p className="text-sm font-semibold text-[#00C2B3] mt-1">
                  TPA & Discharge Summary Auto-Scribe
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                An AI documentation assistant that converts clinical conversations, ambient doctor consultations, and hospital records into structured, review-ready summaries and TPA documentation.
              </p>

              {/* Generated Sections Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Extracted Clinical Fields & Checklists
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {panel2Sections.map((sec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                      <FileText className="w-3.5 h-3.5 text-[#0077FF] shrink-0" />
                      <span className="truncate">{sec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow Steps */}
              <div className="pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Clinical Note Workflow
                </h4>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold">
                  {panel2Workflow.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="bg-slate-100 px-2.5 py-1 rounded text-[#00C2B3] border border-slate-200">
                        {step}
                      </span>
                      {idx < panel2Workflow.length - 1 && <span className="text-slate-400">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onOpenDemoModal('auto_scribe')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00C2B3] to-[#0077FF] text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#00C2B3]/20 hover:scale-[1.02] transition-transform"
                >
                  Try Auto-Scribe Demo
                </button>
                <a
                  href="#auto-scribe"
                  className="text-xs font-bold text-[#0077FF] hover:underline flex items-center gap-1"
                >
                  Live Clinical Transcript <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Consultation to Discharge Summary Mockup */}
            <div className="lg:col-span-6 bg-[#FAFAFC] rounded-3xl border border-slate-200 p-5 shadow-xl space-y-4">
              
              {/* Doctor Conversation */}
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold border-b border-slate-100 pb-1">
                  <span className="flex items-center gap-1.5 text-[#0077FF]"><Mic className="w-3.5 h-3.5" /> Doctor Ambient Audio Feed</span>
                  <span className="text-[#10B981]">Real-time Transcription</span>
                </div>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Doctor:</strong> "Patient was admitted with acute viral fever, mild dehydration, and generalized weakness. Platelets dropped to 95k initially."
                </p>
              </div>

              {/* Structured Summary Generation */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs space-y-2 shadow-sm">
                <div className="flex items-center justify-between font-bold text-slate-900 border-b border-slate-100 pb-2">
                  <span className="flex items-center gap-2 text-[#00C2B3]">
                    <FileText className="w-4 h-4" /> DISCHARGE SUMMARY DRAFT
                  </span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold border border-emerald-200">Auto-Structured</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Diagnosis</span>
                    <strong className="text-slate-900">Acute Viral Fever with Dehydration</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Platelet Count</span>
                    <strong className="text-slate-900">95,000 / μL (Recovering)</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Treatment</span>
                    <strong className="text-slate-900">IV Fluids, Paracetamol 650mg</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">TPA Status</span>
                    <strong className="text-[#0077FF]">Pre-Auth Verified</strong>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500">
                  <span>HIS Integration: Ready for Doctor Sign-off</span>
                  <button className="flex items-center gap-1 text-[#00C2B3] font-bold hover:underline">
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
