import React, { useState } from 'react';
import { Calendar, PhoneCall, PhoneIncoming, Search, MapPin, AlertCircle, PhoneOutgoing, MessageCircle, FileText, ShieldCheck, HeartHandshake, UserCheck, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const UseCasesGrid: React.FC = () => {
  const useCases = [
    {
      title: 'New OPD appointment',
      category: 'PatientConnect Voice & WhatsApp',
      icon: <Calendar className="w-5 h-5 text-[#FF1B6B]" />,
      summary: 'Conversational booking agent identifies patient symptoms, matches department doctor, and locks HIS slot.',
      workflowSim: 'Voice Call Received → Department Selected (Orthopedics) → Slot Verified (Dr. Sharma 11:00 AM) → WhatsApp Pass Issued'
    },
    {
      title: 'Appointment rescheduling',
      category: 'Voice + WhatsApp Sync',
      icon: <PhoneCall className="w-5 h-5 text-[#0077FF]" />,
      summary: 'Allows patients to change dates or times over phone or WhatsApp without front-desk manual intervention.',
      workflowSim: 'Patient Requests Shift → Live HIS Schedule Queried → Alternative Slots Presented → Calendar Updated'
    },
    {
      title: 'Missed-call callback',
      category: 'Outbound Automation',
      icon: <PhoneIncoming className="w-5 h-5 text-[#10B981]" />,
      summary: 'Instantly places outbound AI calls or WhatsApp messages to high-volume missed callers.',
      workflowSim: 'Missed Call Logged → AI Triggers Outbound Call within 30s → Intent Identified → OPD Slot Secured'
    },
    {
      title: 'Doctor availability inquiry',
      category: 'Hospital FAQ Bot',
      icon: <Search className="w-5 h-5 text-[#7C3AED]" />,
      summary: 'Answers real-time questions about consultant doctor visiting hours and OPD schedules.',
      workflowSim: 'Query: "Is Dr. Mehta available today?" → Live Duty Roster Checked → Confirmation & Token Sent'
    },
    {
      title: 'Department guidance',
      category: 'Multilingual Triage',
      icon: <MapPin className="w-5 h-5 text-[#FF1B6B]" />,
      summary: 'Guides patients to appropriate specialty clinics based on symptom descriptions in local languages.',
      workflowSim: 'Patient Describes Symptoms → Clinical Taxonomy Matches Department → Directions & Room # Provided'
    },
    {
      title: 'Pre-appointment instructions',
      category: 'WhatsApp Automated Prep',
      icon: <AlertCircle className="w-5 h-5 text-[#0077FF]" />,
      summary: 'Delivers fasting, report submission, and registration guidelines prior to diagnostic or OPD visits.',
      workflowSim: 'Lab OPD Scheduled → Automated Fasting Notice Sent 12h Prior → QR Check-in Code Delivered'
    },
    {
      title: 'Follow-up calls',
      category: 'Outbound Voice Agent',
      icon: <PhoneOutgoing className="w-5 h-5 text-[#10B981]" />,
      summary: 'Automates post-consultation follow-up calls to check recovery status and schedule review appointments.',
      workflowSim: '7 Days Post-OPD → Outbound Call Placed → Health Status Survey Completed → Review Confirmed'
    },
    {
      title: 'Patient feedback',
      category: 'NPS & Quality Analytics',
      icon: <MessageCircle className="w-5 h-5 text-[#7C3AED]" />,
      summary: 'Collects structured voice and WhatsApp feedback following OPD or IPD discharge.',
      workflowSim: 'Discharge Completed → WhatsApp Survey Sent → Vernacular Voice Feedback Analyzed → Management Alerts'
    },
    {
      title: 'Discharge summary preparation',
      category: 'ClinScribe Ambient AI',
      icon: <FileText className="w-5 h-5 text-[#FF1B6B]" />,
      summary: 'Converts doctor ward rounds into structured discharge notes with diagnosis, medicines, and advice.',
      workflowSim: 'Doctor Speaks Notes → Speech Parsed into ICD Format → Draft Created → 1-Click Doctor Approval'
    },
    {
      title: 'TPA document coordination',
      category: 'Cashless Claims Engine',
      icon: <ShieldCheck className="w-5 h-5 text-[#0077FF]" />,
      summary: 'Extracts clinical parameters required by insurance TPA portals and flags missing pre-auth documents.',
      workflowSim: 'Admission Form Processed → TPA Checklist Scanned → Missing Pre-Auth Alert Sent to Desk'
    },
    {
      title: 'Post-discharge instructions',
      category: 'Nursing Continuity',
      icon: <HeartHandshake className="w-5 h-5 text-[#10B981]" />,
      summary: 'Sends medication dosages, wound care tips, and emergency signs to patients in native languages.',
      workflowSim: 'Patient Discharged → Personalized Care Plan Built → Vernacular WhatsApp Audio Instructions Sent'
    },
    {
      title: 'Human escalation',
      category: 'Smart Agent Handover',
      icon: <UserCheck className="w-5 h-5 text-[#7C3AED]" />,
      summary: 'Seamlessly transfers complex patient queries to hospital staff with complete call context history.',
      workflowSim: 'Complex Request Triggered → Full Conversation Summary Compiled → Staff Desk Notified'
    }
  ];

  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 relative bg-[#FAFAFC] border-t border-slate-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#FF1B6B]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF1B6B]" /> SPECIALIZED HOSPITAL WORKFLOWS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Built for the moments that <br />
            <span className="text-gradient">shape the patient experience.</span>
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-medium">
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
                className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-white border-[#FF1B6B] shadow-xl ring-2 ring-[#FF1B6B]/20'
                    : 'bg-white border-slate-200 shadow-md hover:shadow-xl hover:border-[#FF1B6B]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold tracking-wider text-[#0077FF] uppercase bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                      {uc.category}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
                      {uc.icon}
                    </div>
                  </div>

                  <h3 className="font-poppins font-extrabold text-base text-slate-900 mb-2 leading-snug">
                    {uc.title}
                  </h3>
                  <p className="text-xs text-slate-800 font-semibold leading-relaxed">
                    {uc.summary}
                  </p>
                </div>

                {/* Expandable Workflow Simulator */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-200 space-y-2 animate-in fade-in">
                    <span className="text-[10px] font-extrabold text-[#FF1B6B] uppercase tracking-wider block">
                      Simulated Workflow Chain:
                    </span>
                    <p className="text-xs text-slate-900 font-mono font-bold bg-slate-100 p-3 rounded-xl border border-slate-200 leading-relaxed">
                      {uc.workflowSim}
                    </p>
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between text-xs font-extrabold text-[#FF1B6B] pt-2 border-t border-slate-100">
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
