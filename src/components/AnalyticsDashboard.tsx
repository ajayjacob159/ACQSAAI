import React, { useState } from 'react';
import { BarChart3, TrendingUp, PhoneCall, MessageSquare, CalendarCheck, Clock, Users, FileText, Filter, Activity, Globe } from 'lucide-react';

export const AnalyticsDashboard: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'today' | '7d' | '30d'>('7d');
  const [deptFilter, setDeptFilter] = useState('All Departments');

  // Multiplier for timeframe
  const mult = timeframe === 'today' ? 1 : timeframe === '7d' ? 6.5 : 26;

  const baseMetrics = {
    callsHandled: Math.round(480 * mult),
    whatsappChats: Math.round(890 * mult),
    appointmentsRequested: Math.round(310 * mult),
    appointmentsConfirmed: Math.round(285 * mult),
    transferredToStaff: Math.round(42 * mult),
    avgResponseTime: '1.2s',
    docDraftsCreated: Math.round(195 * mult),
    pendingApprovals: Math.round(14 * (timeframe === 'today' ? 1 : 1.2)),
    tpaAttention: Math.round(6 * (timeframe === 'today' ? 1 : 1.5))
  };

  return (
    <section className="py-24 relative bg-[#071621] border-t border-[#20D6C7]/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09242A] border border-[#20D6C7]/30 text-xs font-semibold text-[#20D6C7]">
            <BarChart3 className="w-3.5 h-3.5" /> Operations & Intelligence Console
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Turn every patient interaction <br />
            <span className="text-gradient">into operational insight.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Monitor voice call volumes, WhatsApp conversion rates, clinical drafting backlogs, and TPA turnaround metrics in real time.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div className="bg-[#09242A]/90 border-2 border-[#20D6C7]/30 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-6">
          
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#6BE7B7] animate-pulse" />
              <div>
                <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
                  Hospital Operational Intelligence
                </h3>
                <span className="text-[10px] text-[#53CFFF] font-bold tracking-wider uppercase">
                  Illustrative dashboard — Sample hospital dataset
                </span>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="flex items-center gap-1 bg-[#071621] p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setTimeframe('today')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    timeframe === 'today' ? 'bg-[#20D6C7] text-[#091B22]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Today
                </button>
                <button
                  onClick={() => setTimeframe('7d')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    timeframe === '7d' ? 'bg-[#20D6C7] text-[#091B22]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  7 Days
                </button>
                <button
                  onClick={() => setTimeframe('30d')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    timeframe === '30d' ? 'bg-[#20D6C7] text-[#091B22]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  30 Days
                </button>
              </div>

              <select
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
                className="bg-[#071621] text-slate-200 px-3 py-2 rounded-xl border border-white/10 font-medium focus:outline-none focus:border-[#20D6C7]"
              >
                <option>All Departments</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
                <option>Neurology</option>
                <option>Gynaecology</option>
              </select>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            
            <div className="p-4 rounded-2xl bg-[#071621] border border-white/5 space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
                <PhoneCall className="w-3 h-3 text-[#20D6C7]" /> Voice Calls Handled
              </span>
              <div className="text-2xl font-heading font-extrabold text-white">
                {baseMetrics.callsHandled.toLocaleString()}
              </div>
              <span className="text-[10px] text-[#6BE7B7] font-semibold">+18% vs prev period</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#071621] border border-white/5 space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
                <MessageSquare className="w-3 h-3 text-[#25D366]" /> WhatsApp Chats
              </span>
              <div className="text-2xl font-heading font-extrabold text-white">
                {baseMetrics.whatsappChats.toLocaleString()}
              </div>
              <span className="text-[10px] text-[#6BE7B7] font-semibold">94% resolution rate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#071621] border border-white/5 space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
                <CalendarCheck className="w-3 h-3 text-[#53CFFF]" /> OPD Confirmed
              </span>
              <div className="text-2xl font-heading font-extrabold text-white">
                {baseMetrics.appointmentsConfirmed.toLocaleString()}
              </div>
              <span className="text-[10px] text-[#53CFFF] font-semibold">92% conversion</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#071621] border border-white/5 space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
                <FileText className="w-3 h-3 text-[#8B7CFF]" /> Summaries Drafted
              </span>
              <div className="text-2xl font-heading font-extrabold text-white">
                {baseMetrics.docDraftsCreated.toLocaleString()}
              </div>
              <span className="text-[10px] text-[#20D6C7] font-semibold">Avg 4.2 mins saved/note</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#071621] border border-white/5 space-y-1 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#20D6C7]" /> Avg Voice Latency
              </span>
              <div className="text-2xl font-heading font-extrabold text-[#20D6C7]">
                {baseMetrics.avgResponseTime}
              </div>
              <span className="text-[10px] text-slate-400">Sub-second neural response</span>
            </div>

          </div>

          {/* Visual SVG Chart & Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            
            {/* Call Volume Chart */}
            <div className="lg:col-span-7 bg-[#071621] p-5 rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-white">
                <span>Daily Conversation & Booking Trajectory</span>
                <span className="text-[#20D6C7] text-[10px]">Peak Hour: 10:00 AM – 1:00 PM</span>
              </div>
              
              {/* Simulated Bar Chart */}
              <div className="h-44 flex items-end justify-between gap-2 pt-6">
                {[65, 80, 45, 90, 75, 100, 85].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <div
                      style={{ height: `${val}%` }}
                      className="w-full bg-gradient-to-t from-[#20D6C7]/30 to-[#53CFFF] rounded-t-lg group-hover:brightness-125 transition-all relative"
                    >
                      <span className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-[#20D6C7] bg-black px-1.5 py-0.5 rounded">
                        {val * 4}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Breakdown */}
            <div className="lg:col-span-5 bg-[#071621] p-5 rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-white">
                <span className="flex items-center gap-1.5 text-[#53CFFF]"><Globe className="w-3.5 h-3.5" /> Language Distribution</span>
                <span className="text-[10px] text-slate-400">Automated Detection</span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] mb-1 font-medium">
                    <span className="text-slate-200">Hindi (हिंदी)</span>
                    <span className="text-[#20D6C7]">42%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#20D6C7] w-[42%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1 font-medium">
                    <span className="text-slate-200">Telugu (తెలుగు)</span>
                    <span className="text-[#53CFFF]">24%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#53CFFF] w-[24%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1 font-medium">
                    <span className="text-slate-200">English</span>
                    <span className="text-[#6BE7B7]">18%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#6BE7B7] w-[18%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1 font-medium">
                    <span className="text-slate-200">Tamil, Kannada & Marathi</span>
                    <span className="text-[#8B7CFF]">16%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#8B7CFF] w-[16%]" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
