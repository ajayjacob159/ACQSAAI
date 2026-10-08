import React from 'react';
import { TrendingUp, ShieldCheck, AlertCircle, BarChart2 } from 'lucide-react';

export const WinsProofSection: React.FC = () => {
  const metricCards = [
    { label: 'Founders / Companies Served', value: '[X]+', desc: 'B2B Founder-led businesses' },
    { label: 'Qualified Conversations Generated', value: '[X]+', desc: 'Peer-to-peer prospect responses' },
    { label: 'Increase in Qualified Conversations', value: '[X]%', desc: 'Average baseline lift' },
    { label: 'Target Accounts Researched', value: '[X]', desc: 'Curated ICP account lists' },
    { label: 'Sales Calls Booked', value: '[X]', desc: 'Direct calendar opportunities' },
    { label: 'Pipeline Value Influenced', value: '[X]', desc: 'Total contract value generated' }
  ];

  return (
    <section id="proof" className="py-24 bg-[#080A0C] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3 py-1 rounded-full bg-[#101318] border border-[#20242A]">
            VERIFIED METRICS & PERFORMANCE
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            WE LIKE NUMBERS. <br />
            <span className="text-lime-gradient">BECAUSE NUMBERS ARE HARDER TO ARGUE WITH.</span>
          </h2>
        </div>

        {/* Highlight Wins Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {metricCards.map((m, idx) => (
            <div key={idx} className="b2b-card p-6 sm:p-8 space-y-3 b2b-card-hover border-[#20242A] relative group">
              <span className="text-[10px] font-mono text-[#A7ADB5] uppercase font-bold">METRIC 0{idx + 1}</span>
              <div className="text-3xl sm:text-5xl font-heading font-extrabold text-[#B8FF3D] font-mono group-hover:scale-105 transition-transform">
                {m.value}
              </div>
              <h3 className="text-xs sm:text-sm font-heading font-extrabold text-white uppercase leading-tight">
                {m.label}
              </h3>
              <p className="text-[11px] text-[#A7ADB5] font-medium">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Content Admin Verification Layer Note */}
        <div className="p-4 bg-[#101318] border border-amber-500/40 rounded-xl flex items-center gap-3 text-xs text-[#A7ADB5] font-mono">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
          <span>
            <strong className="text-amber-400 uppercase">CMS Admin Content Layer:</strong> All metrics must be replaced with verified company/client data before publishing. ACQSA AI strictly prohibits fake social proof.
          </span>
        </div>

      </div>
    </section>
  );
};
