import React from 'react';
import { Database, Server, Smartphone, MessageSquare, Calendar, Mail, FileText, CreditCard, Activity, Code, ShieldCheck } from 'lucide-react';

export const IntegrationsMap: React.FC = () => {
  const integrations = [
    { name: 'HIS Systems', desc: 'Apollo, Suvarna, Insta, Medtrak, Custom HIS APIs', icon: <Database className="w-5 h-5 text-[#FF1B6B]" /> },
    { name: 'EMR / EHR Systems', desc: 'Epic, Cerner, ABDM M3, Orbis Health EMRs', icon: <Server className="w-5 h-5 text-[#0077FF]" /> },
    { name: 'Hospital CRMs', desc: 'Salesforce Health, LeadSquared, Zendesk', icon: <Activity className="w-5 h-5 text-[#7C3AED]" /> },
    { name: 'Appointment Calendars', desc: 'Google Calendar, Outlook, Practo Ray', icon: <Calendar className="w-5 h-5 text-[#00C2B3]" /> },
    { name: 'Telephony Gateways', desc: 'Exotel, MyOperator, Twilio, Tata Tele', icon: <Smartphone className="w-5 h-5 text-[#FF1B6B]" /> },
    { name: 'WhatsApp Business API', desc: 'Meta Business Cloud, Gupshup, AiSensy', icon: <MessageSquare className="w-5 h-5 text-[#10B981]" /> },
    { name: 'TPA Insurance Portals', desc: 'Star Health, HDFC Ergo, NHA Health Claims', icon: <ShieldCheck className="w-5 h-5 text-[#0077FF]" /> },
    { name: 'Enterprise Email', desc: 'Google Workspace, Microsoft Exchange', icon: <Mail className="w-5 h-5 text-[#7C3AED]" /> },
    { name: 'SMS Gateways', desc: 'ValueFirst, Kaleyra, Msg91 DLT Gateways', icon: <Smartphone className="w-5 h-5 text-[#00C2B3]" /> },
    { name: 'Payment Gateways', desc: 'Razorpay, PhonePe, Paytm, BillDesk UPI', icon: <CreditCard className="w-5 h-5 text-[#10B981]" /> },
    { name: 'Lab & Pathology LIS', desc: 'Thyrocare, Dr Lal, CrelioHealth LIS', icon: <Activity className="w-5 h-5 text-[#FF1B6B]" /> },
    { name: 'Pharmacy Software', desc: 'Marg ERP, ChemistSW, MedPlus POS', icon: <FileText className="w-5 h-5 text-[#0077FF]" /> },
    { name: 'REST APIs & Webhooks', desc: 'Secure Webhooks & FHIR / HL7 standard connectors', icon: <Code className="w-5 h-5 text-[#7C3AED]" /> }
  ];

  return (
    <section id="integrations" className="py-24 relative bg-[#FAFAFC] border-t border-slate-200 overflow-hidden">
      
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00C2B3]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF1B6B]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0077FF]">
            <Code className="w-3.5 h-3.5 text-[#0077FF]" /> UNIVERSAL HOSPITAL SYSTEM INTEGRATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Connects to your existing <br />
            <span className="text-gradient">HIS, EMR & Telephony Infrastructure.</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-medium">
            ACQSA AI integrates via HL7 / FHIR APIs, secure Webhooks, and legacy software RPA agents—requiring zero replacement of your existing hospital software.
          </p>
        </div>

        {/* Central Router Visualizer */}
        <div className="flex justify-center mb-8">
          <div className="px-6 py-3 rounded-full bg-white border-2 border-[#00C2B3] text-slate-900 font-poppins font-extrabold text-sm shadow-xl flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#00C2B3] animate-pulse" />
            <span>ACQSA AI CORE NEURAL ROUTER</span>
          </div>
        </div>

        {/* 13 Integration Badges Grid with High-Contrast Text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {integrations.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-[#FF1B6B] transition-all flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 group-hover:bg-[#FF1B6B]/10 group-hover:border-[#FF1B6B]/30 transition-all shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-poppins font-extrabold text-sm text-slate-900 group-hover:text-[#FF1B6B] transition-colors leading-tight">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
