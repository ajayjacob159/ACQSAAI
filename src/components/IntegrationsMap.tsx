import React from 'react';
import { Cpu, Database, Calendar, Phone, MessageSquare, ShieldCheck, Mail, CreditCard, FlaskConical, Pill, Code, Server, Activity } from 'lucide-react';

export const IntegrationsMap: React.FC = () => {
  const integrationCategories = [
    { name: 'HIS Systems', icon: <Database className="w-4 h-4 text-[#20D6C7]" /> },
    { name: 'EMR / EHR', icon: <Server className="w-4 h-4 text-[#53CFFF]" /> },
    { name: 'Hospital CRM', icon: <Activity className="w-4 h-4 text-[#6BE7B7]" /> },
    { name: 'Appointment Calendar', icon: <Calendar className="w-4 h-4 text-[#20D6C7]" /> },
    { name: 'Telephony Gateways', icon: <Phone className="w-4 h-4 text-[#53CFFF]" /> },
    { name: 'WhatsApp Business API', icon: <MessageSquare className="w-4 h-4 text-[#25D366]" /> },
    { name: 'TPA & Insurer Portals', icon: <ShieldCheck className="w-4 h-4 text-[#8B7CFF]" /> },
    { name: 'Enterprise Email', icon: <Mail className="w-4 h-4 text-[#20D6C7]" /> },
    { name: 'SMS Gateways', icon: <Phone className="w-4 h-4 text-[#53CFFF]" /> },
    { name: 'Payment Gateways', icon: <CreditCard className="w-4 h-4 text-[#6BE7B7]" /> },
    { name: 'Laboratory LIMS', icon: <FlaskConical className="w-4 h-4 text-[#20D6C7]" /> },
    { name: 'Pharmacy Software', icon: <Pill className="w-4 h-4 text-[#53CFFF]" /> },
    { name: 'REST APIs & Webhooks', icon: <Code className="w-4 h-4 text-[#8B7CFF]" /> }
  ];

  return (
    <section id="integrations" className="py-24 relative bg-[#040d14] border-t border-[#20D6C7]/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09242A] border border-[#20D6C7]/30 text-xs font-semibold text-[#53CFFF]">
            <Cpu className="w-3.5 h-3.5 text-[#20D6C7]" /> Enterprise Interoperability Layer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Designed to work with <br />
            <span className="text-gradient">your hospital ecosystem.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Connect ACQSA with existing hospital workflows through configurable APIs, webhooks and enterprise integrations.
          </p>
        </div>

        {/* Orbit Visualization Container */}
        <div className="relative py-12 flex flex-col items-center justify-center">
          
          {/* Central ACQSA Core Node */}
          <div className="relative z-20 w-28 h-28 rounded-full bg-gradient-to-br from-[#20D6C7] via-[#53CFFF] to-[#8B7CFF] p-1 shadow-2xl shadow-[#20D6C7]/30 flex items-center justify-center animate-pulse-slow">
            <div className="w-full h-full bg-[#071621] rounded-full flex flex-col items-center justify-center p-3 text-center">
              <Activity className="w-7 h-7 text-[#20D6C7] animate-pulse" />
              <span className="font-heading font-black text-xs text-white tracking-tighter mt-1">ACQSA AI</span>
              <span className="text-[8px] text-[#53CFFF] uppercase font-bold">Core Router</span>
            </div>
          </div>

          {/* Orbit Rings (CSS Decorative) */}
          <div className="absolute w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] rounded-full border border-[#20D6C7]/15 pointer-events-none animate-spin-slow" />
          <div className="absolute w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-[#53CFFF]/20 pointer-events-none" />

          {/* Categories Grid (Clean Enterprise Badges) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 w-full max-w-5xl">
            {integrationCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl glass-panel glass-panel-hover flex items-center gap-3 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#071621] border border-[#20D6C7]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
