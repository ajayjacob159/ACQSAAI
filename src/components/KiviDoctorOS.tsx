import React, { useState } from 'react';
import { Stethoscope, MessageSquare, CreditCard, Users, Video, Calendar, CheckCircle2, ArrowRight, Sparkles, HelpCircle, Zap, TrendingUp, FileText, Smartphone, DollarSign, Activity, PieChart, ShieldCheck, HeartHandshake } from 'lucide-react';

export const KiviDoctorOS: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'emr' | 'billing' | 'whatsapp' | 'retention' | 'telemed'>('emr');

  // Interactive 3C Register & Invoice Simulation
  const [patientName, setPatientName] = useState('');
  const [feeAmount, setFeeAmount] = useState('800');
  const [paymentMode, setPaymentMode] = useState('UPI / PhonePe');
  const [invoiceCreated, setInvoiceCreated] = useState(false);

  const handleBillingSim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName) return;
    setInvoiceCreated(true);
  };

  const features = [
    {
      id: 'emr',
      title: '1. 50+ Specialty Smart EMR',
      tag: 'DENTAL · GYNEC · PEDIATRIC · CARDIOLOGY · ORTHO',
      icon: <Stethoscope className="w-4 h-4 text-[#FF1B6B]" />,
      whyNeeded: 'Generic medical records software forces doctors to fill out complex forms, causing clinical documentation fatigue and delaying outpatient appointments.',
      howItHelps: 'ACQSA AI provides specialty-specific clinical templates tailored for 50+ medical fields. Doctors record chief complaints, diagnostic notes, and treatment plans in 30 seconds via voice or 1-tap chips.',
      benefits: ['30-second digital prescription creation', 'Customized clinical workflows for 50+ medical specialties', 'Zero typing fatigue with smart 1-tap complaint chips']
    },
    {
      id: 'billing',
      title: '2. 3C Financial Register & GST OPD Billing',
      tag: 'CASH · UPI · PENDING FEES · MIS REPORTS',
      icon: <CreditCard className="w-4 h-4 text-[#0077FF]" />,
      whyNeeded: 'Clinics lose thousands monthly due to untracked pending consultation fees, unorganized cash registers, and missing GST billing reports.',
      howItHelps: 'In-built 3C Financial Register tracks cash, UPI, card, and pending OPD billing automatically. Generates GST-compliant invoices and daily collection MIS summaries without needing a full-time accountant.',
      benefits: ['100% accurate daily financial collection tracking', 'GST-compliant instant invoice generation', 'Zero need for external accountants for daily OPD registers']
    },
    {
      id: 'whatsapp',
      title: '3. Automated WhatsApp Rx & Reports',
      tag: 'INSTANT DIGITAL RX · LAB REQUISITIONS · INVOICES',
      icon: <MessageSquare className="w-4 h-4 text-[#10B981]" />,
      whyNeeded: 'Paper prescriptions and printed lab advice get misplaced by patients, while printing paper forms adds thousands to clinic operating overhead.',
      howItHelps: 'Dispatches digital prescriptions, lab test requisitions, GST payment invoices, and diet advice directly to the patient’s WhatsApp inbox with 1 click.',
      benefits: ['Zero paper prescription printing costs', '100% patient compliance via instant WhatsApp Rx delivery', 'Direct WhatsApp lab test requisitions & payment links']
    },
    {
      id: 'retention',
      title: '4. Patient Retention & Vaccine Campaigns',
      tag: 'AUTOMATED REVIEWS · VACCINE ALERTS · RE-ENGAGEMENT',
      icon: <Users className="w-4 h-4 text-[#7C3AED]" />,
      whyNeeded: 'Over 40% of OPD patients miss chronic disease review dates (Hypertension, Diabetes) or pediatric vaccination schedules, leading to poor health outcomes and lost clinic revenue.',
      howItHelps: 'Automates follow-up reminder callouts, pediatric immunization schedule alerts, chronic care review notifications, and personalized birthday/anniversary health broadcasts.',
      benefits: ['40% higher OPD patient retention rate', 'Automated pediatric vaccination timeline alerts', 'Re-engages inactive clinic patients via smart broadcasts']
    },
    {
      id: 'telemed',
      title: '5. Queueless Practice & HD Telemedicine',
      tag: 'LIVE LOBBY QUEUE · VIDEO CONSULT · CHAT',
      icon: <Video className="w-4 h-4 text-[#00C2B3]" />,
      whyNeeded: 'Crowded waiting rooms increase cross-infection risks and alienate busy patients who cannot spend hours waiting in clinic lobbies.',
      howItHelps: 'Enables live token queue tracking on patient smartphones so patients arrive right when their token is called. Includes integrated HD video, audio, and chat tele-consultations.',
      benefits: ['Queueless practice experience for OPD patients', 'Integrated HD video & chat tele-consultation suite', 'Remote patient follow-up without clinic lobby crowding']
    }
  ];

  return (
    <section id="kivi-doctor-os" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF1B6B]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0077FF]">
            <Sparkles className="w-3.5 h-3.5 text-[#0077FF]" /> CLINIC PRACTICE & DOCTOR EMR SUITE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Complete Doctor Practice OS <br />
            <span className="text-gradient">50+ Specialty EMR & WhatsApp Billing.</span>
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-medium">
            Designed for doctors, polyclinics, and specialty medical centers—streamlining OPD consultations, 3C financial registers, WhatsApp Rx delivery, and patient retention campaigns.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {features.map((f) => {
            const isActive = activeTab === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveTab(f.id as any)}
                className={`px-5 py-3 rounded-2xl text-xs font-poppins font-extrabold transition-all whitespace-nowrap flex items-center gap-2 border-2 ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-105'
                    : 'bg-white text-slate-900 hover:text-slate-900 border-slate-200 shadow-md'
                }`}
              >
                {f.icon}
                <span>{f.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Feature Card */}
        {features.map((f) => {
          if (f.id !== activeTab) return null;
          return (
            <div key={f.id} className="bg-[#FAFAFC] border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-10 animate-in fade-in duration-300">
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0077FF] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                    {f.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                    {f.title}
                  </h3>
                </div>
                <span className="text-xs font-extrabold text-[#10B981] bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
                  Doctor Practice & Clinic Growth Standard
                </span>
              </div>

              {/* 3 Columns: Why Needed, How It Helps, Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center font-bold">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h4 className="font-poppins font-extrabold text-slate-900 text-base">Why It Is Needed</h4>
                  <p className="text-slate-800 text-xs font-semibold leading-relaxed">
                    {f.whyNeeded}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#0077FF] flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="font-poppins font-extrabold text-slate-900 text-base">How It Helps (Workflow)</h4>
                  <p className="text-slate-800 text-xs font-semibold leading-relaxed">
                    {f.howItHelps}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-[#10B981] flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="font-poppins font-extrabold text-slate-900 text-base">Clinic & Doctor Benefits</h4>
                  <ul className="space-y-2 text-xs text-slate-900 font-extrabold">
                    {f.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* SIMULATOR FOR 3C FINANCIAL REGISTER & BILLING */}
              {f.id === 'billing' && (
                <div className="p-6 bg-white border-2 border-slate-200 rounded-2xl space-y-4 shadow-inner">
                  <div className="flex items-center justify-between">
                    <h4 className="font-poppins font-extrabold text-sm text-slate-900 flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#0077FF]" /> Interactive 3C Clinical Register & GST Invoice Simulator
                    </h4>
                    <span className="text-[10px] font-bold text-[#0077FF] bg-sky-100 px-2 py-0.5 rounded">3C Register Active</span>
                  </div>

                  {invoiceCreated ? (
                    <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl space-y-2 text-xs text-emerald-950 animate-in fade-in">
                      <div className="flex items-center gap-2 font-extrabold text-sm text-emerald-900">
                        <CheckCircle2 className="w-5 h-5 text-[#10B981]" /> GST Invoice Generated & Sent to Patient WhatsApp!
                      </div>
                      <p className="font-mono font-bold">Patient: {patientName} | OPD Fee: ₹{feeAmount} | Mode: {paymentMode} | Invoice #INV-2026-891</p>
                      <span className="text-[10px] text-emerald-800 font-bold block">✓ Recorded in 3C Financial Register · WhatsApp Invoice PDF Dispatched</span>
                    </div>
                  ) : (
                    <form onSubmit={handleBillingSim} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                      <input
                        type="text"
                        required
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="Patient Full Name..."
                        className="bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 font-bold focus:outline-none focus:border-[#0077FF]"
                      />
                      <input
                        type="number"
                        required
                        value={feeAmount}
                        onChange={(e) => setFeeAmount(e.target.value)}
                        placeholder="Consultation Fee (₹)..."
                        className="bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 font-bold focus:outline-none focus:border-[#0077FF]"
                      />
                      <select
                        value={paymentMode}
                        onChange={(e) => setPaymentMode(e.target.value)}
                        className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-xs text-slate-900 font-bold focus:outline-none focus:border-[#0077FF]"
                      >
                        <option>UPI / PhonePe</option>
                        <option>Cash Register</option>
                        <option>Credit / Debit Card</option>
                        <option>Pending Ledger</option>
                      </select>
                      <button
                        type="submit"
                        className="py-3 rounded-xl bg-gradient-to-r from-[#0077FF] to-[#7C3AED] text-white font-poppins font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
                      >
                        Generate Invoice
                      </button>
                    </form>
                  )}
                </div>
              )}

            </div>
          );
        })}

      </div>
    </section>
  );
};
