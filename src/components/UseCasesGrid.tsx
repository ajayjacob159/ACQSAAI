import React, { useState } from 'react';
import { Calendar, PhoneCall, PhoneIncoming, Search, MapPin, AlertCircle, PhoneOutgoing, MessageCircle, FileText, ShieldCheck, HeartHandshake, UserCheck, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const UseCasesGrid: React.FC = () => {
  const useCases = [
    {
      title: 'New OPD appointment',
      category: 'PatientConnect Voice & WhatsApp',
      icon: <Calendar className="w-5 h-5 text-[#20D6C7]" />,
      summary: 'Conversational booking agent identifies patient symptoms, matches department doctor, and locks HIS slot.',
      workflowSim: 'Voice Call Received → Department Selected (Orthopedics) → Slot Verified (Dr. Sharma 11:00 AM) → WhatsApp Pass Issued'
    },
    {
      title: 'Appointment rescheduling',
      category: 'Voice + WhatsApp Sync',
      icon: <PhoneCall className="w-5 h-5 text-[#53CFFF]" />,
      summary: 'Allows patients to change dates or times over phone or WhatsApp without front-desk manual intervention.',
      workflowSim: 'Patient Requests Shift → Live HIS Schedule Queried → Alternative Slots Presented → Calendar Updated'
    },
    {
      title: 'Missed-call callback',
      category: 'Outbound Automation',
      icon: <PhoneIncoming className="w-5 h-5 text-[#6BE7B7]" />,
      summary: 'Instantly places outbound AI calls or WhatsApp messages to high-volume missed callers.',
      workflowSim: 'Missed Call Logged → AI Triggers Outbound Call within 30s → Intent Identified → OPD Slot Secured'
    },
    {
      title: 'Doctor availability inquiry',
      category: 'Hospital FAQ Bot',
      icon: <Search className="w-5 h-5 text-[#8B7CFF]" />,
      summary: 'Answers real-time questions about consultant doctor visiting hours and OPD schedules.',
      workflowSim: 'Query: "Is Dr. Mehta available today?" → Live Duty Roster Checked → Confirmation & Token Sent'
    },
    {
      title: 'Department guidance',
      category: 'Multilingual Triage',
      icon: <MapPin className="w-5 h-5 text-[#20D6C7]" />,
      summary: 'Guides patients to appropriate specialty clinics based on symptom descriptions in local languages.',
      workflowSim: 'Patient Describes Symptoms → Clinical Taxonomy Matches Department → Directions & Room # Provided'
    },
    {
      title: 'Pre-appointment instructions',
      category: 'WhatsApp Automated Prep',
      icon: <AlertCircle className="w-5 h-5 text-[#53CFFF]" />,
      summary: 'Delivers fasting, report submission, and registration guidelines prior to diagnostic or OPD visits.',
      workflowSim: 'Lab OPD Scheduled → Automated Fasting Notice Sent 12h Prior → QR Check-in Code Delivered'
    },
    {
      title: 'Follow-up calls',
      category: 'Outbound Voice Agent',
      icon: <PhoneOutgoing className="w-5 h-5 text-[#6BE7B7]" />,
      summary: 'Automates post-consultation follow-up calls to check recovery status and schedule review appointments.',
      workflowSim: '7 Days Post-OPD → Outbound Call Placed → Health Status Survey Completed → Review Confirmed'
    },
    {
      title: 'Patient feedback',
      category: 'NPS & Quality Analytics',
      icon: <MessageCircle className="w-5 h-5 text-[#8B7CFF]" />,
      summary: 'Collects structured voice and WhatsApp feedback following OPD or IPD discharge.',
      workflowSim: 'Discharge Completed → WhatsApp Survey Sent → Vernacular Voice Feedback Analyzed → Management Alerts'
    },
    {
      title: 'Discharge summary preparation',
      category: 'ClinScribe Ambient AI',
      icon: <FileText className="w-5 h-5 text-[#20D6C7]" />,
      summary: 'Converts doctor ward rounds into structured discharge notes with diagnosis, medicines, and advice.',
      workflowSim: 'Doctor Speaks Notes → Speech Parsed into ICD Format → Draft Created → 1-Click Doctor Approval'
    },
    {
      title: 'TPA document coordination',
      category: 'Cashless Claims Engine',
      icon: <ShieldCheck className="w-5 h-5 text-[#53CFFF]" />,
      summary: 'Extracts clinical parameters required by insurance TPA portals and flags missing pre-auth documents.',
      workflowSim: 'Admission Form Processed → TPA Checklist Scanned → Missing Pre-Auth Alert Sent to Desk'
    },
    {
      title: 'Post-discharge instructions',
      category: 'Nursing Continuity',
      icon: <HeartHandshake className="w-5 h-5 text-[#6BE7B7]" />,
      summary: 'Sends medication dosages, wound care tips, and emergency signs to patients in native languages.',
      workflowSim: 'Patient Discharged → Personalized Care Plan Built → Vernacular WhatsApp Audio Instructions Sent'
    },
    {
      title: 'Human escalation',
      category: 'Smart Agent Handover',
      icon: <UserCheck className="w-5 h-5 text-[#8B7CFF]" />,
      summary: 'Seamlessly transfers complex patient queries to hospital staff with complete call context history.',
      workflowSim: 'Complex Request Triggered → Full Conversation Summary Compiled → Staff Desk Notified'
    }
  ];

  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 relative bg-[#071621] border-t border-[#20D6C7]/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09242A] border border-[#20D6C7]/30 text-xs font-semibold text-[#20D6C7]">
            <Sparkles className="w-3.5 h-3.5" /> Specialized Healthcare Workflows
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Built for the moments that <br />
            <span className="text-gradient">shape the patient experience.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore 12 interactive hospital use cases powered by ACQSA AI across voice, WhatsApp, and clinical documentation.
          </p>
        </div>

        {/* 12 Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleExpand(idx)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  isExpanded
                    ? 'bg-[#09242A] border-[#20D6C7] shadow-xl shadow-[#20D6C7]/15'
                    : 'glass-panel glass-panel-hover'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold tracking-wider text-[#53CFFF] uppercase bg-[#53CFFF]/10 px-2.5 py-1 rounded border border-[#53CFFF]/30">
                    {uc.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#071621] border border-[#20D6C7]/30 flex items-center justify-center text-[#20D6C7]">
                    {uc.icon}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-base text-white mb-1.5">
                  {uc.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {uc.summary}
                </p>

                {/* Expandable Workflow Simulator */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-2 animate-in fade-in">
                    <span className="text-[10px] font-bold text-[#20D6C7] uppercase tracking-wider block">
                      Simulated Workflow Chain:
                    </span>
                    <p className="text-[11px] text-slate-200 bg-[#071621] p-3 rounded-xl border border-white/5 font-mono leading-relaxed">
                      {uc.workflowSim}
                    </p>
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between text-[11px] font-bold text-[#20D6C7]">
                  <span>{isExpanded ? 'Hide Workflow' : 'Click to inspect workflow'}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
