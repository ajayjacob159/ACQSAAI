import React from 'react';
import { BarChart3, TrendingUp, Users, PhoneCall, CheckCircle, ArrowUpRight, Lock } from 'lucide-react';

export const WeeklyReporting: React.FC = () => {
  const metrics = [
    { label: 'Target Accounts', value: '450', change: '+12 this week' },
    { label: 'Decision-Makers Researched', value: '820', change: '+45 verified' },
    { label: 'Connection Requests', value: '340', change: '42.1% accept rate' },
    { label: 'Responses', value: '142', change: 'Active dialogues' },
    { label: 'Active Conversations', value: '58', change: 'Two-way threads' },
    { label: 'Qualified Prospects', value: '24', change: 'Passed ICP fit' },
    { label: 'Calls Booked', value: '14', change: 'Direct on calendar' },
    { label: 'Pipeline Opportunities', value: '$185,000', change: '+18.4% weekly' }
  ];

  return (
    <section className="py-24 bg-[#101318] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3 py-1 rounded-full bg-[#080A0C] border border-[#20242A]">
            WEEKLY REPORTING & ANALYTICS
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            EVERYTHING GETS TRACKED.
          </h2>

          <p className="text-sm sm:text-base text-[#A7ADB5] max-w-2xl mx-auto font-medium">
            Complete transparency across every touchpoint, dialogue response, qualified prospect, and booked sales call.
          </p>
        </div>

        {/* Illustrative Dashboard Mockup */}
        <div className="bg-[#080A0C] border border-[#20242A] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#20242A] pb-6 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#101318] border border-[#20242A] text-[#B8FF3D]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-extrabold text-white uppercase">WEEKLY PIPELINE DASHBOARD</h3>
                <span className="text-xs font-mono text-[#A7ADB5]">Live Performance Telemetry</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#B8FF3D] bg-[#101318] px-3.5 py-1.5 rounded-lg border border-[#20242A]">
              <TrendingUp className="w-4 h-4" /> Weekly Growth: +18.4%
            </div>
          </div>

          {/* Grid Widgets */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m, idx) => (
              <div key={idx} className="bg-[#101318] p-5 rounded-xl border border-[#20242A] space-y-2">
                <span className="text-[10px] font-mono text-[#A7ADB5] uppercase block truncate">{m.label}</span>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white font-mono flex items-center justify-between">
                  <span>{m.value}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B8FF3D]" />
                </div>
                <span className="text-[10px] font-mono text-[#B8FF3D] block">{m.change}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center text-[11px] font-mono text-[#A7ADB5]">
            * Dashboard metrics are illustrative models until connected to your actual CRM dataset.
          </div>

        </div>

      </div>
    </section>
  );
};
