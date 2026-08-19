import React, { useState } from 'react';
import { Cpu, ShieldCheck, PhoneCall, Stethoscope, FileText, CheckCircle2, ArrowRight, Zap, RefreshCw, AlertTriangle, Layers, Activity, Sparkles, Filter, Database, FileSpreadsheet, UserCheck, Radio, Award, HelpCircle, TrendingUp, Check } from 'lucide-react';

export const YCInnovations: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'admin' | 'voice_rcm' | 'clinical' | 'specialty' | 'regulatory' | 'capacity'>('admin');

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
    { id: 'admin', label: '1. Administrative & Legacy Software AI', icon: <Database className="w-4 h-4 text-[#FF1B6B]" /> },
    { id: 'voice_rcm', label: '2. Voice RCM & Payer Callers', icon: <PhoneCall className="w-4 h-4 text-[#0077FF]" /> },
    { id: 'clinical', label: '3. Autonomous Practice & Prescriptions', icon: <Cpu className="w-4 h-4 text-[#7C3AED]" /> },
    { id: 'specialty', label: '4. Specialty Scribing & Radiology AI', icon: <Stethoscope className="w-4 h-4 text-[#10B981]" /> },
    { id: 'regulatory', label: '5. Credentialing & Regulatory AI', icon: <ShieldCheck className="w-4 h-4 text-[#00C2B3]" /> },
    { id: 'capacity', label: '6. Post-Discharge & Remote Voice', icon: <Activity className="w-4 h-4 text-[#FF1B6B]" /> }
  ];

  return (
    <section id="yc-innovations" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF1B6B]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-[#FF1B6B]/40 text-xs font-bold text-[#FF1B6B]">
            <Zap className="w-3.5 h-3.5 text-[#FF1B6B]" /> HEALTHCARE AI AUTOMATION SUITE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Comprehensive Healthcare <br />
            <span className="text-gradient">AI Automations Portfolio.</span>
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-medium">
            Explore how each specialized automation solves critical operational bottlenecks, how it works step-by-step, and the exact financial and clinical benefits for your hospital.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-5 py-3 rounded-2xl text-xs font-poppins font-bold transition-all whitespace-nowrap flex items-center gap-2 border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/10 scale-105'
                    : 'bg-white text-slate-800 hover:text-slate-900 border-slate-200 hover:border-slate-300 shadow-sm'
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
          <div className="bg-[#FAFAFC] border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-10 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF1B6B] bg-[#FF1B6B]/10 px-3 py-1 rounded-full border border-[#FF1B6B]/20">
                  AUTOMATION SUITE 01 · LEGACY EMR & FAX AI AGENTS
                </span>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                  Legacy Hospital Software & Digital Fax Automation
                </h3>
              </div>
              <span className="text-xs font-bold text-[#0077FF] bg-sky-50 px-4 py-2 rounded-xl border border-sky-200">
                100% Elimination of Manual Data Entry Backlogs
              </span>
            </div>

            {/* Why Needed, How It Helps, How Hospitals Benefit Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* WHY IT IS NEEDED */}
              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">Why It Is Needed</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  Hospitals operate on legacy desktop software and paper fax streams. Staff spend 4+ hours daily manually re-keying patient details from faxes, referrals, and lab PDFs into disparate EMR systems, creating massive operational backlogs and costly data entry errors.
                </p>
              </div>

              {/* HOW IT HELPS */}
              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#0077FF] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">How It Helps (Workflow)</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  Autonomous RPA and vision AI agents log directly into legacy EMR desktop interfaces, scan incoming digital faxes using medical OCR, parse patient referral data, and populate health charts automatically without breaking institutional IT security rules.
                </p>
              </div>

              {/* HOW HOSPITALS BENEFIT */}
              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-[#10B981] flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">How Hospitals Benefit</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  - **Zero Data Backlog**: Referral faxes processed in sub-2 minutes.<br />
                  - **94% Reduction in Medical Coding Errors**: Automatic ICD-10 & CPT mapping.<br />
                  - **Zero API Engineering**: Works over existing EMR user interfaces.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* CATEGORY 2: Voice RCM & Payer Callers */}
        {activeCategory === 'voice_rcm' && (
          <div className="bg-[#FAFAFC] border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-10 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0077FF] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  AUTOMATION SUITE 02 · VOICE RCM & PAYER CALL AGENTS
                </span>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                  Voice AI Insurance Claim Follow-up & Denial Resolution
                </h3>
              </div>
              <span className="text-xs font-bold text-[#10B981] bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
                80% Reduction in Billing Team Phone Call Hours
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">Why It Is Needed</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  Hospital billing staff spend up to 80% of their day sitting on hold with insurance companies, waiting for representatives to check claim status or resolve minor denial hold codes. Unresolved claims lock up millions in hospital revenue.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#0077FF] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">How It Helps (Workflow)</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  ACQSA Voice RCM agents dial insurance payers automatically, navigate touch-tone IVR phone trees, converse with insurance agents, query claim hold reasons (e.g. Denial Code #96), submit missing document evidence, and update the billing ledger.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-[#10B981] flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">How Hospitals Benefit</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  - **Accelerated Cash Flow**: Claim resolution cycle reduced from 21 days to 3 days.<br />
                  - **80% Staff Phone Time Saved**: Billing teams focus on complex appeals.<br />
                  - **Automated Ledger Sync**: Payment approval notices updated in real time.
                </p>
              </div>

            </div>

            {/* Interactive Simulation Bar */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <div className="flex items-center justify-between font-bold text-slate-900 text-xs">
                <span>Interactive Payer Call Simulator</span>
                <span className="text-[10px] text-[#00C2B3]">Live Outbound Engine</span>
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
        )}

        {/* CATEGORY 3: Autonomous Practice & Prescriptions */}
        {activeCategory === 'clinical' && (
          <div className="bg-[#FAFAFC] border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-10 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7C3AED] bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                  AUTOMATION SUITE 03 · AUTONOMOUS PRACTICE & PRESCRIPTIONS
                </span>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                  Prescription Refill Protocols & Routine Lab Ordering
                </h3>
              </div>
              <span className="text-xs font-bold text-[#7C3AED] bg-purple-50 px-4 py-2 rounded-xl border border-purple-200">
                Physician-Supervised 1-Tap Sign-off Queue
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">Why It Is Needed</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  Physicians spend hours reviewing routine prescription refill requests for chronic hypertension and diabetes patients. Manually opening charts, checking kidney/liver lab markers, and re-typing prescriptions diverts time from high-acuity patient consultations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#0077FF] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">How It Helps (Workflow)</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  ACQSA AI cross-checks incoming refill requests against the patient's latest EMR lab results (eGFR, ALT/AST), verifies clinical safety guidelines, drafts the exact prescription renewal, and queues it for doctor 1-tap approval.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-[#10B981] flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">How Hospitals Benefit</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  - **75% Faster Refill Approvals**: Doctors approve queued renewals in batches.<br />
                  - **Enhanced Medication Safety**: Automated lab safety threshold checks.<br />
                  - **Increased Physician Capacity**: Frees up 1.5 hours/day for in-person care.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* CATEGORY 4: Specialty Scribing & Radiology AI */}
        {activeCategory === 'specialty' && (
          <div className="bg-[#FAFAFC] border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-10 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#10B981] bg-emerald-100 px-3 py-1 rounded-full text-emerald-800 border border-emerald-200">
                  AUTOMATION SUITE 04 · SPECIALTY SCRIBING & RADIOLOGY AI
                </span>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                  Surgical Operative Copilot & Radiology Auto-Reporting
                </h3>
              </div>
              <span className="text-xs font-bold text-[#10B981] bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
                4.8 Mins Saved per Surgical Note
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">Why It Is Needed</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  Generic AI scribes fail in complex surgical, home health, EMS trauma, and radiology settings. Surgeons and radiologists spend hours post-procedure dictating technical implant details, surgical incision metrics, and imaging findings.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#0077FF] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-bold text-slate-900 text-base">How It Helps (Workflow)</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  Captures ambient intra-operative verbal summaries, field nursing assessments, or X-ray/MRI image metadata to draft specialized operative reports, letters of medical necessity, and preliminary radiology findings automatically.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-[#10B981] flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">How Hospitals Benefit</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  - **4.8 Mins Saved per Surgical Report**: Immediate post-op note completion.<br />
                  - **60% Faster Radiology Turnaround**: Preliminary drafts ready for sign-off.<br />
                  - **Accurate Surgical Billing**: Precise implant & CPT procedure capture.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* CATEGORY 5: Credentialing & Regulatory AI */}
        {activeCategory === 'regulatory' && (
          <div className="bg-[#FAFAFC] border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-10 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00C2B3] bg-[#00C2B3]/10 px-3 py-1 rounded-full border border-[#00C2B3]/20">
                  AUTOMATION SUITE 05 · PROVIDER CREDENTIALING & REGULATORY
                </span>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                  Doctor License Validation & Regulatory Filing AI
                </h3>
              </div>
              <span className="text-xs font-bold text-[#00C2B3] bg-teal-50 px-4 py-2 rounded-xl border border-teal-200">
                Accelerated Provider Onboarding
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">Why It Is Needed</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  Onboarding a new hospital doctor or specialist takes 60 to 90 days of paperwork—checking state medical council licenses, NPI numbers, malpractice history, and insurance network contracts. Delays stall revenue generation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#0077FF] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">How It Helps (Workflow)</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  Automates medical council registry lookups, verifies NPI credentials, fills out payer network contracting packets, and monitors hospital NABH compliance audit checklists continuously.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-[#10B981] flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">How Hospitals Benefit</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  - **Provider Onboarding Cut from 90 Days to 7 Days**<br />
                  - **Continuous License Verification**: Auto-alerts before expiration.<br />
                  - **NABH & JCI Audit Readiness**: Instant compliance reporting.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* CATEGORY 6: Post-Discharge & Remote Voice */}
        {activeCategory === 'capacity' && (
          <div className="bg-[#FAFAFC] border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-10 animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF1B6B] bg-[#FF1B6B]/10 px-3 py-1 rounded-full border border-[#FF1B6B]/20">
                  AUTOMATION SUITE 06 · POST-DISCHARGE VOICE MONITORING
                </span>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                  Automated Post-Operative Voice Outreach & Readmission Guard
                </h3>
              </div>
              <span className="text-xs font-bold text-[#FF1B6B] bg-rose-50 px-4 py-2 rounded-xl border border-rose-200">
                38% Reduction in 30-Day Readmissions
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">Why It Is Needed</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  Post-surgical patients often experience complications (fever, wound infection, dosage confusion) after returning home. Nursing desks lack the staffing to call hundreds of discharged patients individually every day.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#0077FF] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">How It Helps (Workflow)</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  Voice AI agents place automated follow-up phone calls on Day 1, Day 3, and Day 7 post-discharge, conversing in the patient's vernacular language to evaluate pain scores, fever levels, and medication adherence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-[#10B981] flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-900 text-base">How Hospitals Benefit</h4>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  - **38% Lower Readmission Rates**: Early detection of complications.<br />
                  - **Instant Nurse Escalation**: Red-flag symptoms trigger priority calls.<br />
                  - **100% Patient Outreach Coverage**: Every patient contacted post-op.
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
