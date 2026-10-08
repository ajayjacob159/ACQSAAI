import React from 'react';
import { Ban, XCircle, CheckCircle2 } from 'lucide-react';

export const WhoNotForSection: React.FC = () => {
  const notForItems = [
    'Mass automation & software bot tools',
    'Unsolicited template spam outreach',
    'Fake engagement pods & bot likes',
    'Vanity follower inflation campaigns',
    'Gimmicky "guaranteed leads" promises',
    'Overnight results without process building'
  ];

  return (
    <section className="py-20 bg-[#080A0C] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-rose-400 font-bold px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30">
            QUALIFICATION & BOUNDARIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold uppercase text-white">
            PROBABLY NOT FOR YOU.
          </h2>
          <p className="text-sm text-[#A7ADB5] max-w-xl mx-auto font-medium">
            This system is intentionally designed for founders willing to build a structured outbound asset—not quick shortcuts.
          </p>
        </div>

        {/* Not For List Card */}
        <div className="max-w-3xl mx-auto bg-[#101318] border border-rose-500/30 rounded-2xl p-8 space-y-6 shadow-xl">
          <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase border-b border-[#20242A] pb-4">
            <Ban className="w-4 h-4 text-rose-500" />
            THIS IS NOT DESIGNED FOR BUSINESSES LOOKING FOR:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notForItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-[#080A0C] rounded-xl border border-[#20242A] text-xs text-[#A7ADB5]">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#20242A] text-center text-xs font-mono text-[#B8FF3D] font-bold">
            ✓ IT IS DESIGNED FOR FOUNDERS WILLING TO BUILD A REPEATABLE SALES SYSTEM.
          </div>
        </div>

      </div>
    </section>
  );
};
