import React, { useState } from 'react';
import { Cpu, ShieldCheck, PhoneCall, Stethoscope, FileText, CheckCircle2, ArrowRight, Zap, RefreshCw, AlertTriangle, Layers, Activity, Sparkles, Filter } from 'lucide-react';

export const YCInnovations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'prior_auth' | 'voice_rcm' | 'specialty_scribe' | 'practice_os' | 'capacity_triage'>('prior_auth');

  // Interactive state for Tab 1 (Prior Auth)
  const [authSubmitted, setAuthSubmitted] = useState(false);
  const [authCriteria, setAuthCriteria] = useState({
    biologicApproved: true,
    icdMatched: true,
    clinicalNotesAttached: true,
    copaySupportActive: true
  });

  // Interactive state for Tab 2 (Voice RCM)
  const [claimStatus, setClaimStatus] = useState('Payer Call Queued');
  const [rcmSimulating, setRcmSimulating] = useState(false);

  const simulateRcmCall = () => {
    setRcmSimulating(true);
    setClaimStatus('AI Voice Agent Dialing Payer...');
    setTimeout(() => {
      setClaimStatus('Payer IVR Navigated → Agent Connected');
    }, 1500);
    setTimeout(() => {
      setClaimStatus('Claim Denial Code #96 Resolved · Payment Authorized');
      setRcmSimulating(false);
    }, 3500);
  };

  const tabs = [
    {
      id: 'prior_auth',
      title: 'Prior Auth & Referral AI',
      subtitle: 'Locata & Ruma Care Model',
      icon: <ShieldCheck className="w-4 h-4 text-[#00C2B3]" />
    },
    {
      id: 'voice_rcm',
      title: 'Voice RCM & Denial Resolution',
      subtitle: 'LunaBill & Clicks Health Model',
      icon: <PhoneCall className="w-4 h-4 text-[#0077FF]" />
    },
    {
      id: 'specialty_scribe',
      title: 'Specialty Ambient Scribing',
      subtitle: 'Ember, Andy & CareSwift Model',
      icon: <Stethoscope className="w-4 h-4 text-[#10B981]" />
    },
    {
      id: 'practice_os',
      title: 'Autonomous Practice OS',
      subtitle: 'Plena & Standard Medical Model',
      icon: <Cpu className="w-4 h-4 text-[#7C3AED]" />
    },
    {
      id: 'capacity_triage',
      title: 'Predictive Bed & Triage AI',
      subtitle: 'Capacity & Flow OS',
      icon: <Activity className="w-4 h-4 text-[#00C2B3]" />
    }
  ];

  return (
    <section id="yc-innovations" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      
      {/* Ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00C2B3]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-[#00C2B3]/40 text-xs font-bold text-[#00C2B3]">
            <Zap className="w-3.5 h-[#00C2B3]" /> Y COMBINATOR HEALTHCARE AI SUITE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Next-Gen Healthcare AI <br />
            <span className="text-gradient">Innovations & Automations.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            ACQSA AI integrates breakthrough capabilities pioneered by top Y Combinator healthcare AI startups into one unified hospital operating system.
          </p>
        </div>

        {/* Interactive Horizontal Tab Selector */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {tabs.map((t) => {
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`px-5 py-3 rounded-2xl text-xs font-poppins font-bold transition-all whitespace-nowrap flex items-center gap-2.5 border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/10 scale-105'
                    : 'bg-white text-slate-700 hover:text-slate-900 border-slate-200 hover:border-slate-300'
                }`}
              >
                {t.icon}
                <div className="text-left">
                  <div className="leading-tight">{t.title}</div>
                  <div className={`text-[9px] font-normal font-jura ${isActive ? 'text-[#00C2B3]' : 'text-slate-400'}`}>
                    {t.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* TAB 1: Prior Auth & Referral AI */}
        {activeTab === 'prior_auth' && (
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00C2B3]/15 text-xs font-bold text-[#00C2B3]">
                Y COMBINATOR MODEL: LOCATA & RUMA CARE
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900">
                  Prior Authorization & Referral AI
                </h3>
                <p className="text-sm font-semibold text-[#0077FF] mt-1">
                  Automated Biologic & Specialty Insurance Authorization
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Eliminates administrative friction by parsing patient medical charts against payer-specific prior authorization criteria, auto-filling portals, broadcasting status updates to patients, and managing copay assistance.
              </p>

              {/* Live Interactive Checklist */}
              <div className="space-y-2.5 bg-white p-4 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  AI Prior Auth Criteria Match:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span>Biologic Criteria Verified</span>
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span>ICD-10 Code Formatted</span>
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span>Clinical Notes Attached</span>
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span>Copay Support Applied</span>
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    setAuthSubmitted(true);
                    setTimeout(() => setAuthSubmitted(false), 3500);
                  }}
                  className="px-6 py-3 rounded-xl bg-[#00C2B3] text-white font-poppins font-bold text-xs hover:bg-[#00a89b] transition-all shadow-md shadow-[#00C2B3]/20"
                >
                  {authSubmitted ? '✓ Prior Auth Submitted to Payer' : 'Test Auto-Submission'}
                </button>
                <span className="text-xs text-slate-500 font-medium">94% First-Pass Approval Rate</span>
              </div>
            </div>

            {/* Visual Workflow Mockup Card */}
            <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-lg space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00C2B3]" /> Live Referral & Pre-Auth Tracker
                </span>
                <span className="text-[10px] font-bold text-[#10B981] bg-[#10B981]/15 px-2.5 py-0.5 rounded-full">
                  Automated Submission
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Patient Name</span>
                    <strong className="text-slate-800">Meera Iyer (42 F)</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 text-[10px] block">Payer Portal</span>
                    <strong className="text-[#0077FF]">Star Health / HDFC Ergo</strong>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-400 text-[10px] block">Prescribed Medication / Procedure</span>
                  <strong className="text-slate-800">Secukinumab 150mg Subcutaneous Injection</strong>
                  <div className="text-[10px] text-[#00C2B3] font-mono pt-1">
                    [ICD: L40.0 Psoriasis | Prior Failures: Methotrexate 15mg Verified]
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-between font-semibold text-[11px]">
                  <span>Status: Pre-Authorization Form Submitted Automatically</span>
                  <span>Turnaround: 1.8 hrs</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: Voice RCM & Denial Resolution */}
        {activeTab === 'voice_rcm' && (
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0077FF]/15 text-xs font-bold text-[#0077FF]">
                Y COMBINATOR MODEL: LUNABILL & CLICKS HEALTH
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900">
                  Voice AI Revenue Cycle Management (RCM)
                </h3>
                <p className="text-sm font-semibold text-[#7C3AED] mt-1">
                  Automated Insurance Claim Follow-up & Denial Resolution
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Replaces 80% of manual billing phone calls. ACQSA Voice AI agents place outbound calls to insurance payers, navigate complex IVRs, resolve claim hold codes, and verify eligibility.
              </p>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs space-y-2">
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span className="flex items-center gap-2 text-[#0077FF]"><PhoneCall className="w-4 h-4" /> AI Voice Payer Agent</span>
                  <span className="text-[10px] text-slate-400">Live Call Monitor</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 text-white font-mono text-[11px] space-y-1">
                  <span className="text-[#00C2B3] block">&gt; {claimStatus}</span>
                  {rcmSimulating && <span className="text-slate-400 text-[10px] animate-pulse">Navigating Payer Audio IVR...</span>}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={simulateRcmCall}
                  disabled={rcmSimulating}
                  className="px-6 py-3 rounded-xl bg-[#0077FF] text-white font-poppins font-bold text-xs hover:bg-[#0060d0] transition-all shadow-md shadow-[#0077FF]/20"
                >
                  {rcmSimulating ? 'Dialing Payer...' : 'Simulate Payer Call'}
                </button>
                <span className="text-xs text-slate-500 font-medium">80% Billing Workload Saved</span>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-lg space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">
                RCM Denial Code Resolution Dashboard
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Claim ID</span>
                    <strong className="text-slate-800">CLM-2026-9042</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Denial Reason</span>
                    <strong className="text-rose-600">Code 96: Non-Covered Charge</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">AI Action</span>
                    <strong className="text-[#00C2B3]">Re-coded & Appeal Sent</strong>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex justify-between items-center font-semibold">
                  <span>Reimbursed Amount: ₹1,48,500</span>
                  <span className="text-xs">Resolved in 4 mins</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: Specialty Ambient Scribing */}
        {activeTab === 'specialty_scribe' && (
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#10B981]/15 text-xs font-bold text-[#10B981]">
                Y COMBINATOR MODEL: EMBER, ANDY AI & CARESWIFT
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900">
                  Specialty Ambient Clinical Scribing
                </h3>
                <p className="text-sm font-semibold text-[#00C2B3] mt-1">
                  Surgeons, Home Health Nurses, EMS Ambulance & Physical Therapy
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Goes beyond generic outpatient scribing. Tailored ambient clinical note generators built specifically for surgical procedure notes, home health nurse field charting, emergency EMS reporting, and physical therapy progress notes.
              </p>

              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 font-bold block">Surgical Copilot</strong>
                  <p className="text-slate-500 text-[11px]">Operative reports, letters of medical necessity, implants.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 font-bold block">Home Health Scribe</strong>
                  <p className="text-slate-500 text-[11px]">Field nursing charting, OASIS assessments, vital logs.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 font-bold block">EMS Ambulance Assistant</strong>
                  <p className="text-slate-500 text-[11px]">Real-time patient care reports & trauma protocol checks.</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                  <strong className="text-slate-900 font-bold block">Rehab & PT Scribe</strong>
                  <p className="text-slate-500 text-[11px]">Range-of-motion metrics & objective progress documentation.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-lg space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#10B981]" /> Operative Surgical Note Draft
                </span>
                <span className="text-[10px] font-bold bg-[#10B981]/15 text-[#10B981] px-2.5 py-0.5 rounded-full">
                  Specialty Template
                </span>
              </div>

              <div className="space-y-2.5 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200 font-mono">
                <div>
                  <span className="text-slate-400 text-[10px] block">Procedure Performed</span>
                  <strong className="text-slate-900">Laparoscopic Cholecystectomy</strong>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">Indications</span>
                  <p className="text-slate-700 font-sans">Symptomatic cholelithiasis with recurrent biliary colic.</p>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">Implants & Hemostasis</span>
                  <p className="text-slate-700 font-sans">Titanium clips applied to cystic duct & artery. Blood loss &lt; 20ml.</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: Autonomous Practice OS & Fax Triage */}
        {activeTab === 'practice_os' && (
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#7C3AED]/15 text-xs font-bold text-[#7C3AED]">
                Y COMBINATOR MODEL: PLENA & STANDARD MEDICAL
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900">
                  Autonomous Practice OS & Digital Fax Triage
                </h3>
                <p className="text-sm font-semibold text-[#0077FF] mt-1">
                  Prescription Renewals, Routine Lab Ordering & Paperwork Intake
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Automates back-office paperwork processing. Parses incoming digital faxes, matches patient records in the EMR, handles routine prescription refill requests, and queues routine lab orders under physician supervision.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />
                  <span>Incoming Fax OCR & Patient Chart Matching</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />
                  <span>Automated Prescription Refill Protocols</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />
                  <span>Physician Supervised Order Queueing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-lg space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">
                Digital Fax Triage & Prescription Queue
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Fax Document</span>
                    <strong className="text-slate-800">Lab Results - Thyroid Panel</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Matched Patient</span>
                    <strong className="text-[#0077FF]">Rajesh Sharma</strong>
                  </div>
                  <span className="px-2 py-1 rounded bg-purple-100 text-[#7C3AED] font-bold text-[10px]">
                    Filed to EMR
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Refill Request</span>
                    <strong className="text-slate-800">Metformin 500mg BD</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Safety Check</span>
                    <strong className="text-[#10B981]">Passed (Lab eGFR Normal)</strong>
                  </div>
                  <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    Queued for Doctor Sign
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 5: Predictive Capacity & Bed Triage */}
        {activeTab === 'capacity_triage' && (
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00C2B3]/15 text-xs font-bold text-[#00C2B3]">
                HOSPITAL CAPACITY & FLOW ENGINE
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900">
                  Predictive Bed Management & Emergency Triage AI
                </h3>
                <p className="text-sm font-semibold text-[#0077FF] mt-1">
                  Intelligent Patient Flow & Capacity Optimization
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Predicts IPD bed turnover, balances emergency department arrival queues, and allocates specialized ICU beds based on real-time clinical acuity scores.
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <span>Emergency Acuity Score Index</span>
                  <strong className="text-[#00C2B3]">ESI Level 2 (Urgent)</strong>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <span>Predicted Bed Release</span>
                  <strong className="text-[#0077FF]">14 Beds Available by 2:00 PM</strong>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-lg space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">
                Live Bed Capacity Monitor
              </h4>

              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="text-[10px] text-emerald-800 font-bold uppercase block">ICU Beds Free</span>
                  <strong className="text-2xl text-emerald-900 font-extrabold">6</strong>
                </div>
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200">
                  <span className="text-[10px] text-sky-800 font-bold uppercase block">General Ward</span>
                  <strong className="text-2xl text-sky-900 font-extrabold">24</strong>
                </div>
                <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
                  <span className="text-[10px] text-purple-800 font-bold uppercase block">Pending Discharge</span>
                  <strong className="text-2xl text-purple-900 font-extrabold">12</strong>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
