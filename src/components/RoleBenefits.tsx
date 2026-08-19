import React, { useState } from 'react';
import { Users, Stethoscope, ShieldCheck, HeartPulse, FileSpreadsheet, Building2, Heart, CheckCircle2 } from 'lucide-react';

export const RoleBenefits: React.FC = () => {
  const [activeRoleTab, setActiveRoleTab] = useState<number>(0);

  const roles = [
    {
      id: 'front_office',
      title: 'Front Office & Call Center',
      icon: <Users className="w-4 h-4 text-[#FF1B6B]" />,
      whyNeeded: 'Front-desk desks face overwhelming call spikes during morning OPD booking hours, resulting in 30%+ abandoned calls and frustrated patients.',
      howItHelps: 'ACQSA Voice AI answers 100% of incoming calls concurrently, locks OPD slots in real time, and sends WhatsApp confirmation passes.',
      benefits: ['Zero abandoned patient calls', '75% reduction in front-desk call workload', 'Instant vernacular call handling']
    },
    {
      id: 'doctors',
      title: 'Doctors & Clinicians',
      icon: <Stethoscope className="w-4 h-4 text-[#0077FF]" />,
      whyNeeded: 'Doctors spend up to 3 hours daily typing discharge notes and EMR charts instead of attending to patients.',
      howItHelps: 'ClinScribe NLP auto-transcribes ambient consultations and drafts structured NABH-compliant discharge notes for 1-tap sign-off.',
      benefits: ['4.8 minutes saved per discharge summary', 'Zero manual typing burden', 'Mandatory clinical sign-off safety']
    },
    {
      id: 'tpa',
      title: 'TPA & Billing Desk',
      icon: <ShieldCheck className="w-4 h-4 text-[#00C2B3]" />,
      whyNeeded: 'Insurance pre-authorizations and claim hold follow-ups lock up hospital working capital for weeks.',
      howItHelps: 'Automates document checklist verification, pre-auth filing, and outbound Voice AI calls to insurance payers.',
      benefits: ['94% first-pass prior auth approval rate', 'Claim turnaround cut from 21 days to 3 days', '80% fewer phone follow-up hours']
    },
    {
      id: 'nursing',
      title: 'Nursing & Inpatient Wards',
      icon: <HeartPulse className="w-4 h-4 text-[#10B981]" />,
      whyNeeded: 'Nurses spend critical care time explaining repetitive pre-test instructions and post-discharge medication rules.',
      howItHelps: 'Dispatches automated WhatsApp voice notes and video guides for post-op care, fasting rules, and medication alerts.',
      benefits: ['100% post-op patient outreach', '38% lower 30-day readmission rates', 'Frees up nursing ward care capacity']
    },
    {
      id: 'mrd',
      title: 'Medical Records (MRD)',
      icon: <FileSpreadsheet className="w-4 h-4 text-[#7C3AED]" />,
      whyNeeded: 'Incomplete or unstandardized discharge papers delay patient checkout and fail hospital accreditation audits.',
      howItHelps: 'Ensures 100% template compliance with mandatory ICD-10 diagnostic codes and treatment fields.',
      benefits: ['100% NABH & JCI audit readiness', 'Instant digital filing into hospital EMR', 'Zero missing diagnostic fields']
    },
    {
      id: 'management',
      title: 'Hospital Leadership & MDs',
      icon: <Building2 className="w-4 h-4 text-[#FF1B6B]" />,
      whyNeeded: 'Hospital executives lack real-time visibility into call conversion rates, OPD slot utilization, and billing bottlenecks.',
      howItHelps: 'Provides unified analytics dashboards with live metrics on call volume, language split, and capacity unlocked.',
      benefits: ['Complete operational visibility', 'Maximize OPD revenue & bed turnover', 'Measurable return on investment']
    },
    {
      id: 'patients',
      title: 'Patients & Families',
      icon: <Heart className="w-4 h-4 text-[#0077FF]" />,
      whyNeeded: 'Patients struggle with long phone hold times, language barriers, and confusing hospital discharge instructions.',
      howItHelps: 'Engages patients in their native mother tongue over phone or WhatsApp with instant answers and directions.',
      benefits: ['Zero phone hold times', 'Speak in native mother tongue', 'Instant WhatsApp passes & maps']
    }
  ];

  return (
    <section id="solutions" className="py-24 relative bg-[#FAFAFC] border-t border-slate-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#FF1B6B]">
            <Users className="w-3.5 h-3.5 text-[#FF1B6B]" /> DESIGNED FOR EVERY HOSPITAL TEAM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Built for doctors, staff, <br />
            <span className="text-gradient">and patient families alike.</span>
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-medium">
            Discover how ACQSA AI transforms daily workflows for every stakeholder in your healthcare institution.
          </p>
        </div>

        {/* Role Tab Selector */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {roles.map((r, idx) => {
            const isActive = activeRoleTab === idx;
            return (
              <button
                key={r.id}
                onClick={() => setActiveRoleTab(idx)}
                className={`px-4 py-3 rounded-2xl text-xs font-poppins font-bold transition-all whitespace-nowrap flex items-center gap-2 border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105'
                    : 'bg-white text-slate-800 hover:text-slate-900 border-slate-200 shadow-sm'
                }`}
              >
                {r.icon}
                <span>{r.title}</span>
              </button>
            );
          })}
        </div>

        {/* Role Benefit Card */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
          
          <div className="space-y-3 p-5 rounded-2xl bg-rose-50/60 border border-rose-200">
            <h4 className="font-poppins font-extrabold text-slate-900 text-base text-rose-900">
              Operational Challenge
            </h4>
            <p className="text-slate-800 text-xs font-medium leading-relaxed">
              {roles[activeRoleTab].whyNeeded}
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-sky-50/60 border border-sky-200">
            <h4 className="font-poppins font-extrabold text-slate-900 text-base text-[#0077FF]">
              How ACQSA AI Helps
            </h4>
            <p className="text-slate-800 text-xs font-medium leading-relaxed">
              {roles[activeRoleTab].howItHelps}
            </p>
          </div>

          <div className="space-y-3 p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <h4 className="font-poppins font-extrabold text-slate-900 text-base text-emerald-900">
              Key Team Benefits
            </h4>
            <ul className="space-y-2 text-xs text-slate-900 font-bold">
              {roles[activeRoleTab].benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
