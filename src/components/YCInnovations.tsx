import React, { useState } from 'react';
import { Cpu, ShieldCheck, PhoneCall, Stethoscope, FileText, CheckCircle2, ArrowRight, Zap, RefreshCw, AlertTriangle, Layers, Activity, Sparkles, Filter, Database, FileSpreadsheet, UserCheck, Radio, Award } from 'lucide-react';

export const YCInnovations: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'admin' | 'clinical' | 'regulatory' | 'voice_rcm' | 'specialty' | 'capacity'>('admin');

  // Interactive simulation state for Voice RCM
  const [rcmStatus, setRcmStatus] = useState('Payer Call Queued');
  const [rcmLoading, setRcmLoading] = useState(false);

  const triggerRcmSimulation = () => {
    setRcmLoading(true);
    setRcmStatus('AI Voice Agent Dialing Insurance Payer...');
    setTimeout(() => setRcmStatus('Navigating IVR → Agent Connected'), 1400);
    setTimeout(() => {
      setRcmStatus('Denial Code #96 Resolved · Claim ₹1,48,500 Authorized');
      setRcmLoading(false);
    }, 3200);
  };

  const categories = [
    { id: 'admin', label: '1. Administrative & Legacy Software AI', icon: <Database className="w-4 h-4 text-[#00C2B3]" /> },
    { id: 'voice_rcm', label: '2. Voice RCM & Payer Callers', icon: <PhoneCall className="w-4 h-4 text-[#0077FF]" /> },
    { id: 'clinical', label: '3. Autonomous Practice & Prescriptions', icon: <Cpu className="w-4 h-4 text-[#7C3AED]" /> },
    { id: 'specialty', label: '4. Specialty Scribing & Radiology AI', icon: <Stethoscope className="w-4 h-4 text-[#10B981]" /> },
    { id: 'regulatory', label: '5. Credentialing & Regulatory AI', icon: <ShieldCheck className="w-4 h-4 text-[#00C2B3]" /> },
    { id: 'capacity', label: '6. Post-Discharge & Remote Voice', icon: <Activity className="w-4 h-4 text-[#0077FF]" /> }
  ];

  return (
    <section id="yc-innovations" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00C2B3]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-[#00C2B3]/40 text-xs font-bold text-[#00C2B3]">
            <Zap className="w-3.5 h-3.5" /> Y COMBINATOR HEALTHCARE AI TAXONOMY & SUITE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Complete Healthcare <br />
            <span className="text-gradient">AI Automations Portfolio.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Extracted from top Y Combinator healthcare AI startups—unifying prior authorization, legacy software agents, voice RCM, specialty scribing, provider credentialing, and remote voice monitoring into ACQSA AI.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-5 py-3 rounded-2xl text-xs font-poppins font-bold transition-all whitespace-nowrap flex items-center gap-2 border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/10 scale-105'
                    : 'bg-white text-slate-700 hover:text-slate-900 border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* CATEGORY 1: Administrative & Legacy Software AI */}
        {activeCategory === 'admin' && (
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00C2B3] bg-[#00C2B3]/10 px-3 py-1 rounded-full">
                  YC BENCHMARKS: PARALLEL, LUMINAI, PLENA & ARINTRA
                </span>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                  Legacy Hospital Software & Fax AI Agents
                </h3>
              </div>
              <span className="text-xs font-bold text-[#0077FF] bg-[#0077FF]/10 px-4 py-2 rounded-xl border border-[#0077FF]/20">
                100% Elimination of Paper Fax Backlogs
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#00C2B3]/15 text-[#00C2B3] flex items-center justify-center font-bold">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">Legacy Software RPA Agents</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Autonomous browser and desktop agents that log into legacy hospital EMRs, update patient records, and sync data without requiring custom API engineering.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#0077FF]/15 text-[#0077FF] flex items-center justify-center font-bold">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">AI Chart-to-Claim Medical Coding</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Parses doctor notes and clinical charts into standardized ICD-10 & CPT billing codes, reducing claim denial rates by up to 94%.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#7C3AED]/15 text-[#7C3AED] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">Digital Fax OCR & Intake Triage</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Instantly reads incoming digital faxes, extracts lab requests or patient referrals, and automatically matches them to existing EMR patient profiles.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CATEGORY 2: Voice RCM & Payer Callers */}
        {activeCategory === 'voice_rcm' && (
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0077FF] bg-[#0077FF]/10 px-3 py-1 rounded-full">
                  YC BENCHMARKS: LUNABILL & CLICKS HEALTH
                </span>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                  Voice AI Insurance Payer Callers
                </h3>
              </div>
              <span className="text-xs font-bold text-[#10B981] bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
                80% Reduction in Billing Team Phone Hours
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4 text-xs text-slate-600 leading-relaxed">
                <p>
                  Replaces manual phone hold times for hospital billing teams. ACQSA Voice RCM agents dial insurance companies, navigate touch-tone IVRs, query claim status, resolve denial codes, and update the billing ledger automatically.
                </p>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>Live Voice Call Monitor</span>
                    <span className="text-[10px] text-[#00C2B3]">Payer Outbound Engine</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl text-white font-mono text-[11px] space-y-1">
                    <span className="text-[#00C2B3] block">&gt; {rcmStatus}</span>
                    {rcmLoading && <span className="text-slate-400 text-[10px] animate-pulse">Navigating Payer Audio IVR Menu...</span>}
                  </div>
                  <button
                    onClick={triggerRcmSimulation}
                    disabled={rcmLoading}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#00C2B3] to-[#0077FF] text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] transition-transform"
                  >
                    {rcmLoading ? 'Calling Payer...' : 'Test Payer Call Simulation'}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 space-y-3 text-xs shadow-sm">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                  Claim Denial Resolution Metric
                </h4>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <span>Claim ID: CLM-2026-9042</span>
                    <span className="text-rose-600 font-bold">Code 96: Non-Covered</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-900 font-bold border border-emerald-200 flex justify-between items-center">
                    <span>Auto-Appealed & Approved</span>
                    <span>Reimbursed: ₹1,48,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CATEGORY 3: Autonomous Practice & Prescriptions */}
        {activeCategory === 'clinical' && (
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7C3AED] bg-[#7C3AED]/10 px-3 py-1 rounded-full">
                  YC BENCHMARK: STANDARD MEDICAL
                </span>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                  Autonomous Practice OS & Prescription Renewals
                </h3>
              </div>
              <span className="text-xs font-bold text-[#7C3AED] bg-purple-50 px-4 py-2 rounded-xl border border-purple-200">
                Physician-Supervised Workflow Queue
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#7C3AED]/15 text-[#7C3AED] flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">Prescription Renewal Engine</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Automates chronic medication refill checks against patient lab safety metrics (e.g. eGFR, liver enzymes) and queues renewals for 1-click doctor approval.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#00C2B3]/15 text-[#00C2B3] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">Routine Lab Ordering Triage</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Identifies overdue routine screening labs (HbA1c, lipid profiles) for diabetic and hypertensive patients and drafts lab orders automatically.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#0077FF]/15 text-[#0077FF] flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">Vital Signs Escalation Queue</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Continuously monitors patient home vital submissions and alerts attending physicians when metrics breach safety thresholds.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CATEGORY 4: Specialty Scribing & Radiology AI */}
        {activeCategory === 'specialty' && (
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#10B981] bg-emerald-100 px-3 py-1 rounded-full text-emerald-800">
                  YC BENCHMARKS: EMBER, ANDY AI, CARESWIFT & RAD AI
                </span>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                  Specialty Scribing & Radiology Auto-Reporting
                </h3>
              </div>
              <span className="text-xs font-bold text-[#10B981] bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
                4.8 Mins Saved per Surgical Operative Note
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#10B981] flex items-center justify-center font-bold">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">Surgeon Operative Copilot</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Generates detailed surgical procedure notes, implant details, and letters of medical necessity tailored to specific surgical specialties.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-[#0077FF] flex items-center justify-center font-bold">
                  <Radio className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">Radiology Report Auto-Drafter</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Drafts preliminary diagnostic reports for X-ray, MRI, and CT imaging, reducing radiologist dictation time by up to 60%.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#7C3AED] flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">Home Health & EMS Ambulance Scribe</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Field nursing charting, OASIS assessments, and emergency ambulance patient care reports (PCR) generated on mobile devices during transport.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CATEGORY 5: Credentialing & Regulatory AI */}
        {activeCategory === 'regulatory' && (
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00C2B3] bg-[#00C2B3]/10 px-3 py-1 rounded-full">
                  YC BENCHMARKS: ARCTIC HEALTH, RITIVEL & PANACEA
                </span>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                  Provider Credentialing & Regulatory AI
                </h3>
              </div>
              <span className="text-xs font-bold text-[#00C2B3] bg-[#00C2B3]/10 px-4 py-2 rounded-xl border border-[#00C2B3]/20">
                Accelerated Payer Contract Onboarding
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#00C2B3]/15 text-[#00C2B3] flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">Provider Credentialing AI</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Automates medical license checks, NPI verification, background validation, and insurance network enrollment for new hospital doctors.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#0077FF]/15 text-[#0077FF] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">Regulatory IND & Filing Drafter</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Synthesizes clinical trial data into regulatory submission documents (INDs, BLAs) for medical device and pharma compliance.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#7C3AED]/15 text-[#7C3AED] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">Hospital NABH Audit Readiness</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Continuously audits clinical documentation compliance against NABH / JCI hospital accreditation guidelines.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CATEGORY 6: Post-Discharge & Remote Voice */}
        {activeCategory === 'capacity' && (
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0077FF] bg-[#0077FF]/10 px-3 py-1 rounded-full">
                  YC BENCHMARK: KAIGO HEALTH & CONTOUR
                </span>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                  Post-Discharge Voice AI & Patient Monitoring
                </h3>
              </div>
              <span className="text-xs font-bold text-[#0077FF] bg-sky-50 px-4 py-2 rounded-xl border border-sky-200">
                Automated Post-Operative Outreach
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#0077FF]/15 text-[#0077FF] flex items-center justify-center font-bold">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">Automated Post-Discharge Calls</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Places automated voice calls to discharged patients on Day 1, Day 3, and Day 7 to check wound recovery, pain levels, and medication adherence.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#00C2B3]/15 text-[#00C2B3] flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">Remote Symptom Escalation</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Flags red-flag post-op symptoms (fever, bleeding, severe pain) during voice conversations and routes urgent calls to hospital nursing desks.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-sm">30-Day Readmission Reduction</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Reduces hospital readmission rates by 38% through proactive symptom tracking and automated prescription refill reminders.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
