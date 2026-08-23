import React, { useState } from 'react';
import { ShieldCheck, Cpu, QrCode, FileText, Smartphone, Activity, CheckCircle2, ArrowRight, Sparkles, HelpCircle, Zap, TrendingUp, Layers, Database, Lock, UserCheck, Stethoscope } from 'lucide-react';

export const EkaHealthOS: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'abha' | 'emr' | 'queue' | 'vault' | 'api'>('abha');

  // Interactive ABHA Creation Simulation
  const [abhaMobile, setAbhaMobile] = useState('');
  const [abhaGenerated, setAbhaGenerated] = useState(false);

  const handleAbhaSim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!abhaMobile) return;
    setAbhaGenerated(true);
  };

  const pillars = [
    {
      id: 'abha',
      title: '1. ABDM & ABHA Health Account',
      tag: 'ABDM M1, M2, M3 CERTIFIED',
      icon: <ShieldCheck className="w-4 h-4 text-[#FF1B6B]" />,
      whyNeeded: 'India’s National Health Authority mandates ABDM compliance. Hospitals without ABHA integration face friction in health record exchange, Government health schemes, and insurance claims.',
      howItHelps: 'ACQSA AI enables 1-click 14-digit ABHA creation via Aadhaar/Mobile OTP, auto-links health records to the ABDM network, and manages consent-based patient data sharing.',
      benefits: ['Instant 14-digit ABHA ID creation in sub-30 seconds', 'Seamless ABDM M1, M2 & M3 workflow compliance', 'Instant patient consent-based record sharing']
    },
    {
      id: 'emr',
      title: '2. AI Voice-to-Rx & Specialty EMR',
      tag: '12+ LANGUAGES · 25+ SPECIALTIES',
      icon: <Stethoscope className="w-4 h-4 text-[#0077FF]" />,
      whyNeeded: 'Doctors spend up to 40% of consultation time typing prescriptions on EMR screens instead of looking at the patient.',
      howItHelps: 'AI Voice-to-Rx listens to spoken doctor dictations in regional dialects, formats structured electronic prescriptions, checks drug interactions, and dispatches Rx to WhatsApp.',
      benefits: ['70% reduction in doctor EMR typing time', 'Automated drug interaction & allergy safety checks', 'Instant WhatsApp digital prescription delivered to patient']
    },
    {
      id: 'queue',
      title: '3. Smart OPD Queue & Lobby QMS',
      tag: 'DIGITAL TOKEN BOARDS · QR KIOSK',
      icon: <QrCode className="w-4 h-4 text-[#10B981]" />,
      whyNeeded: 'Crowded hospital lobbies and unorganized OPD lines lead to patient dissatisfaction, long wait times, and chaotic doctor consultation rooms.',
      howItHelps: 'Powers real-time digital token display boards in waiting lobbies, self-service QR check-in kiosks, and automated patient call-outs via lobby speakers.',
      benefits: ['50% reduction in lobby waiting area congestion', 'Self-service 10-second QR OPD check-in', 'Real-time doctor room token synchronization']
    },
    {
      id: 'vault',
      title: '4. AI Lab Report OCR & Health Vault',
      tag: 'AI PARAMETER PARSER · WHATSAPP VAULT',
      icon: <FileText className="w-4 h-4 text-[#7C3AED]" />,
      whyNeeded: 'Patients lose paper lab reports and diagnostic PDFs, forcing doctors to re-order expensive lab tests during follow-up visits.',
      howItHelps: 'AI vision OCR extracts blood test markers (HbA1c, Lipid Profile, eGFR, Thyroid) from PDF/image reports, flags abnormal values in color, and stores them in a WhatsApp Health Vault.',
      benefits: ['Instant AI extraction of lab markers from report PDFs', 'Color-coded health risk trends for doctors & patients', 'Permanent WhatsApp Health Vault access']
    },
    {
      id: 'api',
      title: '5. FHIR & ABDM Developer APIs',
      tag: 'UNIVERSAL REST & HL7 CONNECTORS',
      icon: <Database className="w-4 h-4 text-[#00C2B3]" />,
      whyNeeded: 'Legacy hospital software suites are siloed, preventing seamless data flow between pathology labs (LIS), radiology (RIS), and billing modules.',
      howItHelps: 'Provides open HL7 / FHIR compliant developer REST APIs, allowing hospital IT teams to connect any HIS, LIS, RIS, or CRM software into ACQSA AI.',
      benefits: ['Universal HL7 & FHIR standard compliance', 'Connects legacy HIS, LIS, RIS & pharmacy software', 'Developer sandbox & automated webhook dispatch']
    }
  ];

  return (
    <section id="eka-health-os" className="py-24 relative bg-[#FAFAFC] border-t border-slate-200 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF1B6B]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-[#FF1B6B]/40 text-xs font-bold text-[#FF1B6B]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF1B6B]" /> AI-NATIVE HEALTH OS & ABDM SUITE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            ABDM-Compliant Health OS <br />
            <span className="text-gradient">EMR, ABHA Vault & Lobby QMS.</span>
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-medium">
            Empowering Indian healthcare with national ABDM M1/M2/M3 compliance, AI voice-to-Rx dictation, smart OPD queue management, and lab report OCR parsing.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {pillars.map((p) => {
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id as any)}
                className={`px-5 py-3 rounded-2xl text-xs font-poppins font-extrabold transition-all whitespace-nowrap flex items-center gap-2 border-2 ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-105'
                    : 'bg-white text-slate-900 hover:text-slate-900 border-slate-200 shadow-md'
                }`}
              >
                {p.icon}
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card */}
        {pillars.map((p) => {
          if (p.id !== activeTab) return null;
          return (
            <div key={p.id} className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-10 animate-in fade-in duration-300">
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF1B6B] bg-[#FF1B6B]/10 px-3 py-1 rounded-full border border-[#FF1B6B]/20">
                    {p.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                    {p.title}
                  </h3>
                </div>
                <span className="text-xs font-extrabold text-[#0077FF] bg-sky-50 px-4 py-2 rounded-xl border border-sky-200">
                  National ABDM & Healthcare OS Standard
                </span>
              </div>

              {/* 3 Columns: Why Needed, How It Helps, Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-[#FAFAFC] p-6 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h4 className="font-poppins font-extrabold text-slate-900 text-base">Why It Is Needed</h4>
                  <p className="text-slate-800 text-xs font-semibold leading-relaxed">
                    {p.whyNeeded}
                  </p>
                </div>

                <div className="bg-[#FAFAFC] p-6 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#0077FF] flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="font-poppins font-extrabold text-slate-900 text-base">How It Helps (Workflow)</h4>
                  <p className="text-slate-800 text-xs font-semibold leading-relaxed">
                    {p.howItHelps}
                  </p>
                </div>

                <div className="bg-[#FAFAFC] p-6 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-[#10B981] flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="font-poppins font-extrabold text-slate-900 text-base">Hospital & Patient Benefits</h4>
                  <ul className="space-y-2 text-xs text-slate-900 font-extrabold">
                    {p.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* SIMULATOR FOR ABHA CREATION */}
              {p.id === 'abha' && (
                <div className="p-6 bg-[#FAFAFC] border-2 border-slate-200 rounded-2xl space-y-4 shadow-inner">
                  <div className="flex items-center justify-between">
                    <h4 className="font-poppins font-extrabold text-sm text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#FF1B6B]" /> Interactive ABHA 14-Digit Generation Simulator
                    </h4>
                    <span className="text-[10px] font-bold text-[#10B981] bg-emerald-100 px-2 py-0.5 rounded">ABDM M1 Ready</span>
                  </div>

                  {abhaGenerated ? (
                    <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl space-y-2 text-xs text-emerald-950 animate-in fade-in">
                      <div className="flex items-center gap-2 font-extrabold text-sm text-emerald-900">
                        <CheckCircle2 className="w-5 h-5 text-[#10B981]" /> ABHA Account Generated Successfully!
                      </div>
                      <p className="font-mono font-bold">ABHA Number: 91-8472-9012-4410 | ABHA Address: patient@abdm</p>
                      <span className="text-[10px] text-emerald-800 font-bold block">✓ Linked to National Health Authority (NHA) ABDM Health Records Vault</span>
                    </div>
                  ) : (
                    <form onSubmit={handleAbhaSim} className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="tel"
                        required
                        value={abhaMobile}
                        onChange={(e) => setAbhaMobile(e.target.value)}
                        placeholder="Enter 10-digit Aadhaar-linked mobile number..."
                        className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 font-bold focus:outline-none focus:border-[#FF1B6B]"
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF1B6B] to-[#0077FF] text-white font-poppins font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
                      >
                        Generate ABHA ID
                      </button>
                    </form>
                  )}
                </div>
              )}

            </div>
          );
        })}

      </div>
    </section>
  );
};
