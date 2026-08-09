import React, { useState } from 'react';
import { Users, Stethoscope, PhoneCall, ShieldCheck, HeartHandshake, FileCheck, BarChart3, Heart, ArrowRight } from 'lucide-react';

export const RoleBenefits: React.FC = () => {
  const roles = [
    {
      id: 'front_office',
      title: 'Front Office',
      icon: <PhoneCall className="w-5 h-5" />,
      benefitTitle: 'Fewer repetitive calls & faster appointment handling',
      desc: 'ACQSA Voice AI offloads up to 70% of inbound calls, handling booking queries in vernacular languages and reducing front-desk queue times.',
      highlights: ['Automated OPD slot booking', 'Instant WhatsApp direction pass', 'Reduced call drop rates']
    },
    {
      id: 'doctors',
      title: 'Doctors',
      icon: <Stethoscope className="w-5 h-5" />,
      benefitTitle: 'Less time spent drafting routine documentation',
      desc: 'ClinScribe AI listens ambiently during rounds or OPD consultations, generating review-ready discharge notes so doctors focus on patient care.',
      highlights: ['Voice-to-clinical summary', 'Standardized ICD templates', '1-click sign-off workflow']
    },
    {
      id: 'tpa_desk',
      title: 'TPA Desk',
      icon: <ShieldCheck className="w-5 h-5" />,
      benefitTitle: 'Structured case information & clearer document tracking',
      desc: 'Extracts diagnosis, procedures, and billing codes into standardized pre-auth forms with real-time missing document alerts.',
      highlights: ['Pre-auth document checklist', 'Automated query drafting', 'Faster claim submission']
    },
    {
      id: 'nursing',
      title: 'Nursing Team',
      icon: <HeartHandshake className="w-5 h-5" />,
      benefitTitle: 'Better discharge coordination & patient instructions',
      desc: 'Provides automated vernacular post-discharge guidelines to patients directly on WhatsApp, reducing readmissions and emergency calls.',
      highlights: ['Automated post-op advice', 'Medication reminders', 'Nurse shift summary notes']
    },
    {
      id: 'mrd',
      title: 'Medical Records',
      icon: <FileCheck className="w-5 h-5" />,
      benefitTitle: 'Consistent templates & organized documentation',
      desc: 'Ensures 100% template compliance across departments with searchable digital records ready for HIS integration.',
      highlights: ['Uniform discharge formats', 'Audit-ready digital archives', 'Structured data indexing']
    },
    {
      id: 'management',
      title: 'Hospital Management',
      icon: <BarChart3 className="w-5 h-5" />,
      benefitTitle: 'Operational visibility & workflow analytics',
      desc: 'Track peak call hours, department conversion rates, documentation turnaround times, and patient satisfaction metrics.',
      highlights: ['Real-time call analytics', 'Departmental load insights', 'Capacity optimization']
    },
    {
      id: 'patients',
      title: 'Patients',
      icon: <Heart className="w-5 h-5" />,
      benefitTitle: 'Faster responses in a familiar language',
      desc: 'Patients receive immediate 24×7 booking support on phone calls and WhatsApp in their preferred regional dialect.',
      highlights: ['Zero hold times', 'Native language support', 'Instant appointment updates']
    }
  ];

  const [activeRole, setActiveRole] = useState(roles[0]);

  return (
    <section id="solutions" className="py-24 relative bg-[#071621] border-t border-[#20D6C7]/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09242A] border border-[#20D6C7]/30 text-xs font-semibold text-[#20D6C7]">
            <Users className="w-3.5 h-3.5" /> Stakeholder Impact Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            One AI layer. <br />
            <span className="text-gradient">Every hospital team connected.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Select a hospital role below to see how ACQSA AI transforms daily clinical and administrative operations.
          </p>
        </div>

        {/* Interactive Role Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {roles.map((role) => {
            const isSelected = activeRole.id === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#20D6C7] to-[#53CFFF] text-[#091B22] shadow-lg shadow-[#20D6C7]/20 font-bold'
                    : 'bg-[#09242A] text-slate-300 hover:text-white border border-[#20D6C7]/20'
                }`}
              >
                {role.icon}
                <span>{role.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Role Display Card */}
        <div className="max-w-4xl mx-auto bg-[#09242A]/80 border-2 border-[#20D6C7]/30 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
          
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#20D6C7]/15 border border-[#20D6C7]/30 flex items-center justify-center text-[#20D6C7]">
                {activeRole.icon}
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#53CFFF] uppercase tracking-wider">
                  Impact For: {activeRole.title}
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-0.5">
                  {activeRole.benefitTitle}
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {activeRole.desc}
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Outcomes:</h4>
              <div className="space-y-2">
                {activeRole.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#20D6C7]" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-[#071621] p-6 rounded-2xl border border-white/10 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#09242A] border border-[#20D6C7]/40 flex items-center justify-center text-[#20D6C7] shadow-inner">
              {activeRole.icon}
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-white">{activeRole.title} Dashboard</h4>
              <p className="text-xs text-[#20D6C7] mt-1">Configured for role-based permissions</p>
            </div>
            <div className="pt-2 text-[11px] text-slate-400 border-t border-white/10">
              "ACQSA AI integrates directly into our existing workflow without requiring staff retraining."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
