import React from 'react';
import { Lock, Key, Eye, UserCheck, Trash2, Users, Server, ShieldCheck, AlertTriangle } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const pillars = [
    {
      icon: <Lock className="w-5 h-5 text-[#FF1B6B]" />,
      title: 'Encryption in transit & at rest',
      desc: 'AES-256 and TLS 1.3 encryption protocols safeguard patient dialogues and clinical records across all layers.'
    },
    {
      icon: <Key className="w-5 h-5 text-[#0077FF]" />,
      title: 'Role-based access controls (RBAC)',
      desc: 'Granular access policies ensure doctors, nurses, front-desk staff, and TPA billing agents see only relevant data.'
    },
    {
      icon: <Eye className="w-5 h-5 text-[#00C2B3]" />,
      title: 'Immutable audit trails',
      desc: 'Comprehensive system logs record every AI transcription, document edit, doctor approval, and data export.'
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#7C3AED]" />,
      title: 'Consent-aware workflows',
      desc: 'Explicit patient consent collection before voice call recording or WhatsApp messaging initiation.'
    },
    {
      icon: <Trash2 className="w-5 h-5 text-[#10B981]" />,
      title: 'Configurable data retention',
      desc: 'Hospitals define custom data purge timelines to align with institutional privacy policies.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#FF1B6B]" />,
      title: 'Human-in-the-loop governance',
      desc: 'All clinical outputs require mandatory doctor verification before entering official HIS records.'
    },
    {
      icon: <Server className="w-5 h-5 text-[#0077FF]" />,
      title: 'Deployment flexibility',
      desc: 'Designed to support cloud, hybrid, or private hospital network deployment architectures.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#10B981]" />,
      title: 'Healthcare data protection readiness',
      desc: 'Architected to align with strict Indian healthcare data privacy principles and hospital IT standards.'
    }
  ];

  return (
    <section id="security" className="py-24 relative bg-[#FAFAFC] border-t border-slate-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#10B981]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" /> CLINICAL SAFETY & DATA SOVEREIGNTY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Security & Governance <br />
            <span className="text-gradient">Engineered for Hospitals.</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-medium">
            Security, clinical safety, and data sovereignty are embedded into every component of the ACQSA architecture.
          </p>
        </div>

        {/* 8 Security Pillars Grid with High-Contrast Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-[#FF1B6B]/60 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  {p.icon}
                </div>
                <h3 className="font-poppins font-bold text-base text-slate-900 group-hover:text-[#FF1B6B] transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Responsibility Notices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-2 font-medium shadow-sm">
            <h4 className="font-poppins font-bold text-sm text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" /> Mandatory Clinical Responsibility Notice
            </h4>
            <p className="text-slate-800 leading-relaxed font-medium">
              ACQSA AI serves as a clinical documentation drafting tool. All generated discharge summaries, TPA pre-auth packages, and diagnosis extractions must be reviewed and signed off by a licensed doctor prior to official entry into hospital HIS/EMR records.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 space-y-2 font-medium shadow-sm">
            <h4 className="font-poppins font-bold text-sm text-emerald-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" /> Emergency Triage Protocol
            </h4>
            <p className="text-slate-800 leading-relaxed font-medium">
              Voice AI agents immediately detect emergency symptoms (e.g., chest pain, shortness of breath, acute trauma) and trigger an instant human staff handover to emergency hospital dispatchers.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
