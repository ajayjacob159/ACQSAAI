import React, { useState } from 'react';
import { Stethoscope, Building2, ShieldCheck, Activity, Pill, QrCode, PieChart, CheckCircle2, ArrowRight, Sparkles, Zap, HelpCircle, TrendingUp, Layers, Database, UserCheck, PhoneCall, Mic, FileText } from 'lucide-react';

export const HealthcareDivisions: React.FC = () => {
  const [activeDivision, setActiveDivision] = useState<number>(0);

  const divisions = [
    {
      id: 'opd',
      name: '1. Outpatient & Polyclinic Division',
      tag: 'VOICE AI · WHATSAPP BOT · 50+ SPECIALTY EMR · QUEUELESS QMS',
      icon: <Stethoscope className="w-5 h-5 text-[#FF1B6B]" />,
      whyNeeded: 'Morning OPD call spikes flood front-desk desks, causing 30%+ abandoned calls, chaotic waiting rooms, and doctor typing burnout.',
      workflow: 'Vernacular Voice AI answers calls 24/7 → Matches specialty doctor → Locks HIS slot → Issues WhatsApp Pass → Voice-to-Rx EMR formats 30-sec prescription → Live lobby token display updates.',
      results: ['Zero phone call hold times', '64% reduction in OPD no-shows', '70% faster doctor consultation documentation']
    },
    {
      id: 'ipd',
      name: '2. Inpatient & Ward Care Division',
      tag: 'CLINSCRIBE DISCHARGE AI · NURSING CONTINUITY · BED TRIAGE',
      icon: <Building2 className="w-5 h-5 text-[#0077FF]" />,
      whyNeeded: 'Typing complex discharge summaries takes doctors 3 hours daily, delaying bed turnover and delaying patient checkout times.',
      workflow: 'ClinScribe NLP listens during doctor rounds → Auto-extracts diagnosis & ICD-10 codes → Formats NABH summary → Doctor signs off in 1 tap → Nursing sends WhatsApp care audio.',
      results: ['4.8 minutes saved per discharge note', '100% NABH & JCI audit readiness', '38% lower 30-day readmissions']
    },
    {
      id: 'tpa',
      name: '3. TPA Cashless & Revenue Division',
      tag: 'PRE-AUTH AUTOMATION · 3C REGISTER · PAYER VOICE RCM',
      icon: <ShieldCheck className="w-5 h-5 text-[#00C2B3]" />,
      whyNeeded: 'Insurance pre-authorizations and claim denial hold codes lock up millions in hospital working capital for weeks.',
      howNeeded: 'AI scans admission papers → Verifies policy coverage → Files pre-auth → Outbound Voice RCM callers dial insurance IVRs to clear hold code #96 → 3C Register logs GST billing.',
      results: ['94% first-pass prior auth approval rate', 'Claim turnaround cut from 21 days to 3 days', '80% fewer billing staff phone hours']
    },
    {
      id: 'diagnostics',
      name: '4. Pathology & Radiology Division',
      tag: 'AI LAB OCR PARSER · RADIOLOGY AUTO-REPORTING · PACS/LIS APIs',
      icon: <Activity className="w-5 h-5 text-[#10B981]" />,
      whyNeeded: 'Pathologists and radiologists face dictation backlogs, while patients lose paper lab reports before follow-up visits.',
      workflow: 'Vision OCR parses blood test PDFs → Flags abnormal markers (HbA1c, Lipid, LFT/KFT) → AI Radiology Copilot drafts X-ray/MRI reports → Auto-stores in WhatsApp Health Vault.',
      results: ['60% faster radiology report turnaround', 'Color-coded risk trends for doctors', '100% digital lab report retention']
    },
    {
      id: 'pharmacy',
      name: '5. Pharmacy & Prescription Division',
      tag: 'REFILL PROTOCOL ENGINE · WHATSAPP RX · DRUG SAFETY CHECK',
      icon: <Pill className="w-5 h-5 text-[#7C3AED]" />,
      whyNeeded: 'Chronic prescription refill checks divert doctors from acute care, while manual paper Rx leads to dosage transcription errors.',
      workflow: 'Refill Engine cross-checks lab safety (eGFR, ALT/AST) → Queues chronic renewal for doctor sign-off → Dispatches digital Rx & UPI payment link to WhatsApp.',
      results: ['75% faster chronic refill approvals', 'Automated drug-drug interaction safety alerts', 'Zero paper prescription printing costs']
    },
    {
      id: 'abdm',
      name: '6. ABDM National Health OS Division',
      tag: 'ABHA 14-DIGIT CREATION · M1 M2 M3 CERTIFIED · HEALTH VAULT',
      icon: <QrCode className="w-5 h-5 text-[#FF1B6B]" />,
      whyNeeded: 'Hospitals without ABDM integration face regulatory penalties and friction in National Health Authority (NHA) digital health exchange.',
      workflow: 'Creates 14-digit ABHA via Aadhaar OTP in 30 seconds → Auto-links hospital health records to ABDM network → Manages patient consent-based record sharing.',
      results: ['Instant 14-digit ABHA creation', 'Full ABDM M1, M2 & M3 workflow compliance', 'Seamless inter-hospital health record exchange']
    },
    {
      id: 'mis',
      name: '7. Executive Leadership & MIS Division',
      tag: 'REAL-TIME DASHBOARD · ROI CALCULATOR · COMPLIANCE AUDIT',
      icon: <PieChart className="w-5 h-5 text-[#0077FF]" />,
      whyNeeded: 'Hospital CEOs and MDs lack real-time visibility into OPD call conversion rates, doctor time utilization, and billing bottlenecks.',
      workflow: 'Aggregates telemetry from all divisions into a unified real-time dashboard → Tracks daily call volume, language split, OPD revenue, and compliance audit logs.',
      results: ['100% operational transparency', 'Maximizes OPD revenue & bed utilization', 'Measurable return on investment']
    }
  ];

  return (
    <section id="divisions" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF1B6B]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold text-[#FF1B6B]">
            <Zap className="w-3.5 h-3.5 text-[#FF1B6B]" /> EXCLUSIVE AI & AUTOMATIONS FOR ALL DIVISIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            ACQSA AI End-to-End Suite <br />
            <span className="text-gradient">Powering Every Healthcare Division.</span>
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-medium">
            ACQSA AI exclusively automates every division of modern hospitals and clinics—from OPD front-desks and inpatient wards to TPA billing, pathology labs, pharmacy OS, ABDM ABHA accounts, and executive MIS.
          </p>
        </div>

        {/* Division Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {divisions.map((d, idx) => {
            const isActive = activeDivision === idx;
            return (
              <button
                key={d.id}
                onClick={() => setActiveDivision(idx)}
                className={`px-5 py-3 rounded-2xl text-xs font-poppins font-extrabold transition-all whitespace-nowrap flex items-center gap-2 border-2 ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-105'
                    : 'bg-[#FAFAFC] text-slate-900 hover:text-slate-900 border-slate-200 shadow-md'
                }`}
              >
                {d.icon}
                <span>{d.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Division Card */}
        <div className="bg-[#FAFAFC] border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-10 animate-in fade-in duration-300">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF1B6B] bg-[#FF1B6B]/10 px-3 py-1 rounded-full border border-[#FF1B6B]/20">
                {divisions[activeDivision].tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                {divisions[activeDivision].name}
              </h3>
            </div>
            <span className="text-xs font-extrabold text-[#0077FF] bg-sky-50 px-4 py-2 rounded-xl border border-sky-200">
              100% Dedicated Healthcare AI Automation
            </span>
          </div>

          {/* 3 Columns: Why Needed, AI Workflow, Division Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h4 className="font-poppins font-extrabold text-slate-900 text-base">Division Bottleneck</h4>
              <p className="text-slate-800 text-xs font-semibold leading-relaxed">
                {divisions[activeDivision].whyNeeded}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#0077FF] flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-poppins font-extrabold text-slate-900 text-base">ACQSA AI Division Workflow</h4>
              <p className="text-slate-800 text-xs font-semibold leading-relaxed">
                {divisions[activeDivision].workflow || divisions[activeDivision].howNeeded}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-[#10B981] flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-poppins font-extrabold text-slate-900 text-base">Measurable Division Results</h4>
              <ul className="space-y-2 text-xs text-slate-900 font-extrabold">
                {divisions[activeDivision].results.map((r, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
