import React from 'react';
import { Target, Cpu, Building, Briefcase, Users, ShieldCheck } from 'lucide-react';

export const WhoForSection: React.FC = () => {
  const audiences = [
    {
      title: 'B2B SaaS Founders',
      desc: 'SaaS products with annual contract values ($5k–$50k+) requiring direct conversations with VPs, CROs, and CEOs rather than low-converting ad campaigns.',
      icon: <Cpu className="w-5 h-5 text-[#B8FF3D]" />
    },
    {
      title: 'IT Services Founders',
      desc: 'Technology development & cloud engineering firms needing structured relationships with CTOs, CIOs, and VPs of Engineering for long-term retainers.',
      icon: <Building className="w-5 h-5 text-[#B8FF3D]" />
    },
    {
      title: 'Consulting Firms',
      desc: 'Management, financial, and operational advisory practices selling high-ticket strategic guidance where founder credibility is the primary buying trigger.',
      icon: <Briefcase className="w-5 h-5 text-[#B8FF3D]" />
    },
    {
      title: 'Agencies',
      desc: 'Specialized performance, design, and growth agencies looking to break into enterprise tier accounts through targeted executive outreach.',
      icon: <Users className="w-5 h-5 text-[#B8FF3D]" />
    },
    {
      title: 'Technology Companies',
      desc: 'B2B hardware, cybersecurity, and data infrastructure companies selling complex solutions requiring account-level research and multi-touch follow-up.',
      icon: <ShieldCheck className="w-5 h-5 text-[#B8FF3D]" />
    },
    {
      title: 'High-Value B2B Services',
      desc: 'Executive search, recruitment, specialized legal, and corporate B2B services with contract sizes large enough to justify structured outbound.',
      icon: <Target className="w-5 h-5 text-[#B8FF3D]" />
    }
  ];

  return (
    <section id="who-for" className="py-24 bg-[#101318] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3 py-1 rounded-full bg-[#080A0C] border border-[#20242A]">
            IDEAL CUSTOMER PROFILE & SEGMENTS
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            THIS IS BUILT FOR <br />
            <span className="text-lime-gradient">FOUNDERS WHO ALREADY HAVE SOMETHING TO SELL.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A7ADB5] max-w-2xl mx-auto font-medium">
            Designed specifically for founder-led B2B companies with legitimate offerings and deal values large enough to justify outbound.
          </p>
        </div>

        {/* 6 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud, idx) => (
            <div key={idx} className="bg-[#080A0C] p-8 rounded-2xl border border-[#20242A] space-y-4 b2b-card-hover group">
              <div className="w-10 h-10 rounded-xl bg-[#101318] border border-[#20242A] flex items-center justify-center">
                {aud.icon}
              </div>
              <h3 className="text-lg font-heading font-extrabold uppercase text-white group-hover:text-[#B8FF3D] transition-colors">
                {aud.title}
              </h3>
              <p className="text-xs text-[#A7ADB5] leading-relaxed font-medium">
                {aud.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
