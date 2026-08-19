import React from 'react';
import { Shield, Languages, UserCheck, Layers } from 'lucide-react';

export const TrustMarquee: React.FC = () => {
  const marqueeItems = [
    'VOICE AI',
    'WHATSAPP AI',
    'OPD AUTOMATION',
    'AUTO-SCRIBE',
    'TPA WORKFLOWS',
    'DISCHARGE SUMMARIES',
    'MULTILINGUAL PATIENT SUPPORT',
  ];

  const trustStatements = [
    {
      icon: <Layers className="w-5 h-5 text-[#00C2B3]" />,
      title: 'Designed for Indian healthcare workflows',
      desc: 'Seamlessly handles high OPD volumes, regional accents, and complex multispecialty schedules.'
    },
    {
      icon: <Languages className="w-5 h-5 text-[#0077FF]" />,
      title: 'Built for multilingual patient communication',
      desc: 'Converses fluently in major Indian languages without requiring channel switches.'
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#10B981]" />,
      title: 'Human review where clinical judgment matters',
      desc: 'Empowers clinical teams with automated drafts while keeping doctors in full editorial control.'
    },
    {
      icon: <Shield className="w-5 h-5 text-[#7C3AED]" />,
      title: 'Ready to integrate with hospital systems',
      desc: 'Connects directly to HIS, EMR, telephony networks, and TPA portals via secure APIs.'
    }
  ];

  return (
    <section className="relative py-12 bg-white border-y border-slate-200 overflow-hidden">
      
      {/* Moving Marquee Strip */}
      <div className="relative flex overflow-x-hidden py-3.5 bg-slate-50 border-y border-slate-200">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-poppins font-bold text-xs sm:text-sm tracking-widest text-slate-800 uppercase">
          {marqueeItems.concat(marqueeItems).concat(marqueeItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-[#00C2B3] font-normal">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Trust Statements Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustStatements.map((st, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                {st.icon}
              </div>
              <h3 className="font-poppins font-bold text-base text-slate-900 group-hover:text-[#00C2B3] transition-colors leading-snug">
                {st.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
