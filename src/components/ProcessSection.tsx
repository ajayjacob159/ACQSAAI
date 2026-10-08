import React from 'react';
import { Search, UserCheck, Target, MessageSquare, CheckSquare, TrendingUp, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    { num: '01', title: 'DISCOVER', desc: 'Audit current sales pipeline, ICP criteria, deal sizes & target buyer triggers.', icon: <Search className="w-4 h-4 text-[#B8FF3D]" /> },
    { num: '02', title: 'POSITION', desc: 'Optimize founder LinkedIn profile, banner, and messaging authority.', icon: <UserCheck className="w-4 h-4 text-[#B8FF3D]" /> },
    { num: '03', title: 'TARGET', desc: 'Curate verified target account lists & identify direct decision-makers.', icon: <Target className="w-4 h-4 text-[#B8FF3D]" /> },
    { num: '04', title: 'ENGAGE', desc: 'Initiate research-backed, non-spammy manual connection sequences.', icon: <MessageSquare className="w-4 h-4 text-[#B8FF3D]" /> },
    { num: '05', title: 'QUALIFY', desc: 'Evaluate intent, deal fit, and purchase timing before scheduling calls.', icon: <CheckSquare className="w-4 h-4 text-[#B8FF3D]" /> },
    { num: '06', title: 'OPTIMIZE', desc: 'Log CRM touchpoints & review weekly conversation analytics.', icon: <TrendingUp className="w-4 h-4 text-[#B8FF3D]" /> }
  ];

  return (
    <section className="py-24 bg-[#080A0C] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3 py-1 rounded-full bg-[#101318] border border-[#20242A]">
            IMPLEMENTATION ROADMAP
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            FROM FIRST AUDIT <br />
            <span className="text-lime-gradient">TO QUALIFIED PIPELINE.</span>
          </h2>
        </div>

        {/* Desktop Horizontal Process Flow */}
        <div className="hidden lg:grid grid-cols-6 gap-3 relative">
          {steps.map((st, idx) => (
            <div key={idx} className="bg-[#101318] p-5 rounded-xl border border-[#20242A] space-y-3 relative group hover:border-[#B8FF3D] transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#B8FF3D]">STEP {st.num}</span>
                {st.icon}
              </div>
              <h3 className="text-sm font-heading font-extrabold uppercase text-white group-hover:text-[#B8FF3D] transition-colors">
                {st.title}
              </h3>
              <p className="text-[11px] text-[#A7ADB5] leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((st, idx) => (
            <div key={idx} className="bg-[#101318] p-6 rounded-xl border border-[#20242A] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#080A0C] border border-[#20242A] flex items-center justify-center shrink-0">
                {st.icon}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#B8FF3D]">STEP {st.num}</span>
                  <h3 className="text-base font-heading font-extrabold uppercase text-white">{st.title}</h3>
                </div>
                <p className="text-xs text-[#A7ADB5] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
