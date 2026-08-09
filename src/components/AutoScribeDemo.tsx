import React, { useState, useEffect } from 'react';
import { Mic, FileText, CheckCircle2, ShieldAlert, Download, Edit3, UserCheck, AlertTriangle, Sparkles, RefreshCw, Eye } from 'lucide-react';

export const AutoScribeDemo: React.FC = () => {
  const [approved, setApproved] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [missingAlert, setMissingAlert] = useState(false);

  // Progressive summary data
  const [summaryData, setSummaryData] = useState({
    patientName: 'Suresh Verma (34 M)',
    ipdNo: 'IPD-2026-8812',
    admissionDate: '06 Aug 2026',
    dischargeDate: '10 Aug 2026',
    chiefComplaints: 'High fever (102°F), generalized weakness, nausea, and acute dehydration since 4 days.',
    clinicalFindings: 'Body temp 98.6°F, BP 118/76 mmHg, mild abdominal tenderness, clinically stable.',
    diagnosis: 'Dengue Fever (NS1 Ag Positive) with mild thrombocytopenia (Recovered).',
    investigations: 'Complete Blood Count, NS1 Dengue Antigen, Serum Electrolytes, LFT.',
    procedures: 'Intravenous rehydration therapy, platelet monitoring twice daily.',
    treatment: 'IV Normal Saline 1000ml, Tab Paracetamol 650mg TDS, Tab Pantoprazole 40mg OD.',
    medicinesDischarge: '1. Tab Paracetamol 650mg BD (3 days)\n2. Multivitamin Supplements OD (14 days)\n3. Oral Rehydration Solution',
    followUp: 'Review in OPD Room 12 with Dr. Ananya Rao after 5 days or if fever recurs.',
    tpaChecklist: 'Pre-auth letter approved, Final bill attached, Pharmacy vouchers verified.'
  });

  const handleApprove = () => {
    setApproved(true);
  };

  return (
    <section id="auto-scribe" className="py-24 relative bg-[#071621] border-t border-[#20D6C7]/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09242A] border border-[#53CFFF]/40 text-xs font-semibold text-[#53CFFF]">
            <Mic className="w-3.5 h-3.5 text-[#20D6C7]" /> ACQSA ClinScribe AI Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Let doctors speak. <br />
            <span className="text-gradient">ACQSA structures the documentation.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Ambient speech recognition converts natural doctor-patient dialogues into structured, review-ready discharge notes in seconds.
          </p>
        </div>

        {/* Mandatory Safety Warning Banner */}
        <div className="mb-8 p-3.5 rounded-2xl bg-[#09242A] border border-[#53CFFF]/30 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#53CFFF] shrink-0" />
            <span>
              <strong className="text-white">Clinical Safety Protocol:</strong> AI-generated draft—review and approval by an authorized healthcare professional required.
            </span>
          </div>
          <span className="text-[10px] font-bold text-[#6BE7B7] bg-[#6BE7B7]/10 px-2.5 py-1 rounded">
            Human-in-the-Loop Active
          </span>
        </div>

        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Live Ambient Transcript */}
          <div className="lg:col-span-5 bg-[#09242A]/80 border border-[#20D6C7]/20 rounded-3xl p-6 backdrop-blur-xl shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20D6C7] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#20D6C7]"></span>
                </span>
                <h3 className="font-heading font-bold text-sm text-white">
                  Live Consultation Audio Feed
                </h3>
              </div>
              <span className="text-[10px] font-bold text-[#53CFFF] bg-[#53CFFF]/10 px-2 py-0.5 rounded border border-[#53CFFF]/30">
                Speaker Diarization On
              </span>
            </div>

            {/* Simulated Live Consultation Dialogue */}
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#071621] border border-white/5 space-y-1">
                <span className="font-bold text-[#20D6C7] block">Doctor:</span>
                <p className="text-slate-200">
                  "Patient was admitted with high fever, weakness and dehydration."
                </p>
                <span className="text-[9px] text-[#53CFFF] block pt-1">
                  Extracted: [Chief Complaints: High Fever, Weakness, Dehydration]
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#071621] border border-white/5 space-y-1">
                <span className="font-bold text-[#53CFFF] block">Patient:</span>
                <p className="text-slate-200">
                  "The fever started four days ago."
                </p>
                <span className="text-[9px] text-[#53CFFF] block pt-1">
                  Extracted: [Onset Duration: 4 days]
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#071621] border border-white/5 space-y-1">
                <span className="font-bold text-[#20D6C7] block">Doctor:</span>
                <p className="text-slate-200">
                  "Investigations confirmed dengue. Platelet count has improved and the patient is clinically stable."
                </p>
                <span className="text-[9px] text-[#6BE7B7] block pt-1">
                  Extracted: [Diagnosis: Dengue Fever | Platelets: Recovered | Status: Stable]
                </span>
              </div>
            </div>

            {/* Extracted Entities Tag Cloud */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Extracted Clinical Concepts:
              </span>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-semibold text-slate-200">
                <span className="bg-[#071621] px-2 py-0.5 rounded border border-[#20D6C7]/30 text-[#20D6C7]">Dengue NS1+</span>
                <span className="bg-[#071621] px-2 py-0.5 rounded border border-[#53CFFF]/30 text-[#53CFFF]">Dehydration</span>
                <span className="bg-[#071621] px-2 py-0.5 rounded border border-[#6BE7B7]/30 text-[#6BE7B7]">IV Fluids</span>
                <span className="bg-[#071621] px-2 py-0.5 rounded border border-white/10">Paracetamol 650mg</span>
              </div>
            </div>

          </div>

          {/* Right Column: Progressive Structured Discharge Summary */}
          <div className="lg:col-span-7 bg-[#09242A]/90 border-2 border-[#20D6C7]/40 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-2xl space-y-5">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-bold text-[#20D6C7] uppercase tracking-wider">
                  Automated Structured Note
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white mt-0.5 flex items-center gap-2">
                  Discharge Summary Draft
                  {approved && <CheckCircle2 className="w-5 h-5 text-[#6BE7B7]" />}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMissingAlert(!missingAlert)}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#071621] border border-white/10 hover:border-[#20D6C7]/40 text-slate-300 flex items-center gap-1"
                >
                  <AlertTriangle className="w-3 h-3 text-[#53CFFF]" /> Missing Check
                </button>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#071621] border border-white/10 hover:border-[#20D6C7]/40 text-slate-300 flex items-center gap-1"
                >
                  <Edit3 className="w-3 h-3 text-[#20D6C7]" /> {isEditing ? 'View Mode' : 'Edit Note'}
                </button>
              </div>
            </div>

            {/* Missing Info Alert Box */}
            {missingAlert && (
              <div className="p-3 rounded-xl bg-[#53CFFF]/15 border border-[#53CFFF]/40 text-xs text-[#53CFFF] space-y-1 animate-in fade-in">
                <strong className="flex items-center gap-1 font-bold">
                  <AlertTriangle className="w-3.5 h-3.5" /> Missing Information Alert:
                </strong>
                <p>Emergency contact relationship & secondary insurance TPA ID pending verification before final HIS submission.</p>
              </div>
            )}

            {/* Structured Fields */}
            <div className="space-y-3 text-xs bg-[#071621] p-4 rounded-2xl border border-white/5">
              
              <div className="grid grid-cols-2 gap-3 border-b border-white/5 pb-3">
                <div>
                  <span className="text-slate-400 text-[10px] block">Patient Name</span>
                  <strong className="text-white">{summaryData.patientName}</strong>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">IPD Number</span>
                  <strong className="text-[#53CFFF] font-mono">{summaryData.ipdNo}</strong>
                </div>
              </div>

              <div>
                <span className="text-[#20D6C7] font-bold block mb-0.5">Chief Complaints</span>
                <p className="text-slate-200">{summaryData.chiefComplaints}</p>
              </div>

              <div>
                <span className="text-[#20D6C7] font-bold block mb-0.5">Final Diagnosis</span>
                <p className="text-slate-200">{summaryData.diagnosis}</p>
              </div>

              <div>
                <span className="text-[#20D6C7] font-bold block mb-0.5">Treatment Provided</span>
                <p className="text-slate-200">{summaryData.treatment}</p>
              </div>

              <div>
                <span className="text-[#20D6C7] font-bold block mb-0.5">Medicines at Discharge</span>
                <pre className="font-sans text-slate-200 whitespace-pre-wrap">{summaryData.medicinesDischarge}</pre>
              </div>

              <div>
                <span className="text-[#20D6C7] font-bold block mb-0.5">Follow-up Advice</span>
                <p className="text-slate-200">{summaryData.followUp}</p>
              </div>
            </div>

            {/* Review & Export Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10">
              <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#20D6C7]" />
                <span>Doctor Review Status: <strong>{approved ? 'Approved by Dr. Rao' : 'Draft Pending Approval'}</strong></span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleApprove}
                  disabled={approved}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    approved
                      ? 'bg-[#6BE7B7]/20 text-[#6BE7B7] border border-[#6BE7B7]/40 cursor-default'
                      : 'bg-gradient-to-r from-[#20D6C7] to-[#53CFFF] text-[#091B22] shadow-lg shadow-[#20D6C7]/20 hover:scale-[1.02]'
                  }`}
                >
                  {approved ? '✓ Summary Approved' : 'Sign & Approve Draft'}
                </button>

                <button
                  onClick={() => alert('PDF export generated for HIS system.')}
                  className="px-4 py-2 rounded-xl bg-[#071621] hover:bg-[#0d323a] border border-[#20D6C7]/30 text-xs font-bold text-white flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#20D6C7]" /> Export PDF
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
