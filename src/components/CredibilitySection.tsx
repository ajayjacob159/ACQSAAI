import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Building, Zap } from 'lucide-react';

export const CredibilitySection: React.FC = () => {
  const credibilityPoints = [
    { title: 'Entrepreneurship Programme', desc: 'ISB Hyderabad (Indian School of Business) Alumni Ecosystem' },
    { title: 'Startup Ecosystem Experience', desc: 'Hands-on founder execution scaling early-stage B2B ventures' },
    { title: 'Startup India Ecosystem Recognition', desc: 'Recognized within national innovation frameworks' },
    { title: 'Accelerator & Growth Experience', desc: 'Vetted by premier venture & startup acceleration programs' },
    { title: 'Strategic Partnerships', desc: 'Collaborating with high-growth technology and consulting ecosystems' },
    { title: 'Founder-Led Systems Building', desc: 'Designing repeatable outbound frameworks that drive verified sales calls' }
  ];

  return (
    <section id="about" className="py-24 bg-[#101318] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3 py-1 rounded-full bg-[#080A0C] border border-[#20242A]">
            FOUNDER CREDIBILITY & BACKGROUND
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            BUILT BY A FOUNDER. <br />
            <span className="text-lime-gradient">FOR FOUNDERS.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A7ADB5] max-w-2xl mx-auto font-medium">
            An entrepreneur focused on building practical systems that turn business problems into scalable commercial opportunities.
          </p>
        </div>

        {/* Founder Bio Card & Grid */}
        <div className="bg-[#080A0C] border border-[#20242A] rounded-2xl p-8 sm:p-10 shadow-2xl space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-[#20242A] pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#B8FF3D] font-bold uppercase">FOUNDER & CEO — ACQSA AI</span>
              <h3 className="text-2xl font-heading font-extrabold text-white">Systematic B2B Demand Architect</h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#101318] border border-[#20242A] text-xs font-mono text-[#A7ADB5]">
              Verification Status: <span className="text-[#B8FF3D] font-bold">100% Verified Credentials</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credibilityPoints.map((point, idx) => (
              <div key={idx} className="bg-[#101318] p-5 rounded-xl border border-[#20242A] space-y-2 hover:border-[#B8FF3D]/40 transition-colors">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8FF3D] shrink-0" />
                  <h4 className="text-xs font-heading font-extrabold text-white uppercase">{point.title}</h4>
                </div>
                <p className="text-xs text-[#A7ADB5] font-medium leading-relaxed pl-6">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Verification Anti-Fabrication Notice Box */}
          <div className="p-4 bg-[#101318] border border-[#20242A] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#A7ADB5] font-mono">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B8FF3D]" /> Strict Anti-Fabrication Rule: We publish verified records only.
            </span>
            <span className="text-[#B8FF3D] font-bold">[INSERT VERIFIED RESULT PLACEHOLDER]</span>
          </div>

        </div>

      </div>
    </section>
  );
};
