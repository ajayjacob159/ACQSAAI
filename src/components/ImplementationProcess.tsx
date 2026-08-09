import React from 'react';
import { Search, Settings, Cpu, ShieldCheck, Rocket, TrendingUp } from 'lucide-react';

export const ImplementationProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Map hospital departments, call flows, doctor schedules, and documentation templates.',
      icon: <Search className="w-5 h-5 text-[#20D6C7]" />
    },
    {
      num: '02',
      title: 'Configure',
      desc: 'Set supported vernacular languages, custom triage logic, and escalation rules.',
      icon: <Settings className="w-5 h-5 text-[#53CFFF]" />
    },
    {
      num: '03',
      title: 'Integrate',
      desc: 'Connect telephony trunks, WhatsApp Business API, HIS/EMR systems, and TPA desks.',
      icon: <Cpu className="w-5 h-5 text-[#6BE7B7]" />
    },
    {
      num: '04',
      title: 'Validate',
      desc: 'Conduct end-to-end simulation of patient calls, booking flows, and discharge note accuracy.',
      icon: <ShieldCheck className="w-5 h-5 text-[#8B7CFF]" />
    },
    {
      num: '05',
      title: 'Launch',
      desc: 'Go live department-by-department or hospital-wide with full staff onboarding.',
      icon: <Rocket className="w-5 h-5 text-[#20D6C7]" />
    },
    {
      num: '06',
      title: 'Improve',
      desc: 'Review real-time call analytics, doctor edit history, and continuously optimize workflows.',
      icon: <TrendingUp className="w-5 h-5 text-[#53CFFF]" />
    }
  ];

  return (
    <section className="py-24 relative bg-[#040d14] border-t border-[#20D6C7]/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09242A] border border-[#20D6C7]/30 text-xs font-semibold text-[#20D6C7]">
            <Rocket className="w-3.5 h-3.5" /> Turnkey Deployment Pathway
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            From hospital workflow <br />
            <span className="text-gradient">to live AI agent.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A structured, 6-step deployment methodology designed for zero disruption to ongoing hospital operations.
          </p>
        </div>

        {/* 6 Steps Grid Pathway */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4 group relative"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-black text-[#20D6C7]/40 group-hover:text-[#20D6C7] transition-colors">
                  {st.num}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#09242A] border border-[#20D6C7]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {st.icon}
                </div>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-[#20D6C7] transition-colors">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-1 font-normal">
                  {st.desc}
                </p>
              </div>

              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#20D6C7] to-[#53CFFF] w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
