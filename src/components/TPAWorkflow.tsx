import React, { useState } from 'react';
import { ShieldCheck, FileCheck, AlertTriangle, FileText, Search, Clock, CheckCircle2, ArrowRight, Eye, RefreshCw } from 'lucide-react';

export const TPAWorkflow: React.FC = () => {
  const [checklist, setChecklist] = useState([
    { label: 'Patient identity received', checked: true },
    { label: 'Policy document received', checked: true },
    { label: 'Admission note received', checked: true },
    { label: 'Investigation reports received', checked: true },
    { label: 'Treatment estimate pending', checked: false },
    { label: 'Doctor signature required', checked: false }
  ]);

  const toggleChecklist = (idx: number) => {
    setChecklist(prev =>
      prev.map((item, i) => (i === idx ? { ...item, checked: !item.checked } : item))
    );
  };

  const workflowSteps = [
    'Admission',
    'Document collection',
    'Validation',
    'Query management',
    'Approval tracking',
    'Discharge coordination'
  ];

  const featureCards = [
    {
      title: 'Missing-document alerts',
      desc: 'Automatically flags incomplete pre-authorization packages before TPA submission.',
      icon: <AlertTriangle className="w-5 h-5 text-[#53CFFF]" />
    },
    {
      title: 'Standardized information extraction',
      desc: 'Parses unstructured clinical notes into standardized insurance ICD & CPT formats.',
      icon: <FileText className="w-5 h-5 text-[#20D6C7]" />
    },
    {
      title: 'TPA query drafting',
      desc: 'Generates structured clinical responses for insurer queries to reduce back-and-forth delays.',
      icon: <Search className="w-5 h-5 text-[#6BE7B7]" />
    },
    {
      title: 'Case status visibility',
      desc: 'Gives TPA desk and hospital management real-time status across all active IPD claims.',
      icon: <Eye className="w-5 h-5 text-[#8B7CFF]" />
    },
    {
      title: 'Audit-friendly activity trail',
      desc: 'Tracks every document edit, upload, and approval timestamp with strict role permissions.',
      icon: <ShieldCheck className="w-5 h-5 text-[#20D6C7]" />
    },
    {
      title: 'Role-based access',
      desc: 'Restricts sensitive insurance and financial data to authorized TPA billing staff.',
      icon: <FileCheck className="w-5 h-5 text-[#53CFFF]" />
    }
  ];

  return (
    <section className="py-24 relative bg-[#040d14] border-t border-[#20D6C7]/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09242A] border border-[#20D6C7]/30 text-xs font-semibold text-[#20D6C7]">
            <ShieldCheck className="w-3.5 h-3.5" /> TPA & Cashless Hospital Automation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Faster documentation. <br />
            <span className="text-gradient">Clearer TPA coordination.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Streamline pre-authorization, query handling, and discharge documentation for hospital TPA desks.
          </p>
        </div>

        {/* Visual Workflow Steps Bar */}
        <div className="mb-16 bg-[#09242A]/60 border border-[#20D6C7]/20 rounded-2xl p-4 sm:p-6 backdrop-blur-xl">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">
            Standardized TPA Claims Journey
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl bg-[#071621] border border-white/5 space-y-1">
                <span className="text-[10px] font-bold text-[#20D6C7] bg-[#20D6C7]/10 px-2 py-0.5 rounded">
                  0{idx + 1}
                </span>
                <span className="text-xs font-semibold text-white">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive TPA Case Tracker Card */}
        <div className="max-w-3xl mx-auto bg-[#09242A]/90 border-2 border-[#20D6C7]/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6 mb-16">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-bold text-[#53CFFF] uppercase tracking-wider">
                Live TPA Desk Tracker
              </span>
              <h3 className="font-heading font-extrabold text-xl text-white mt-0.5">
                Patient: Rahul Mehta
              </h3>
              <p className="text-xs text-slate-400">Insurer: <strong className="text-slate-200">Sample Health Insurance Pvt. Ltd.</strong></p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#53CFFF]/15 text-[#53CFFF] border border-[#53CFFF]/30 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 animate-spin" /> Documents under review
            </span>
          </div>

          {/* Interactive Checklist */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              TPA Document Verification Checklist:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {checklist.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleChecklist(idx)}
                  className={`p-3 rounded-xl text-xs font-medium flex items-center justify-between transition-all border ${
                    item.checked
                      ? 'bg-[#071621] border-[#20D6C7]/40 text-slate-100'
                      : 'bg-[#071621]/40 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${item.checked ? 'text-[#20D6C7]' : 'text-slate-600'}`} />
                    {item.label}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${item.checked ? 'bg-[#20D6C7]/20 text-[#20D6C7]' : 'bg-white/5 text-slate-500'}`}>
                    {item.checked ? 'Verified' : 'Pending'}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((fc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#09242A] border border-[#20D6C7]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                {fc.icon}
              </div>
              <h3 className="font-heading font-bold text-base text-white group-hover:text-[#20D6C7] transition-colors">
                {fc.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {fc.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
