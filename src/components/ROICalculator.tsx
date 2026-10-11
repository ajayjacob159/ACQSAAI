import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Calendar, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const ROICalculator: React.FC<{ onBookCall?: () => void }> = ({ onBookCall }) => {
  const [dealSize, setDealSize] = useState(12000);
  const [monthlyOutboundAccounts, setMonthlyOutboundAccounts] = useState(2500);
  const [closeRate, setCloseRate] = useState(20);

  // Commercial formulas based on ACQSA AI's multichannel benchmarks
  // 2,500 target accounts -> ~1.4% meeting booked rate across cold email + LinkedIn
  const estimatedQualifiedCalls = Math.max(15, Math.round(monthlyOutboundAccounts * 0.014));
  const projectedClosedDeals = Math.max(2, Math.round(estimatedQualifiedCalls * (closeRate / 100)));
  const monthlyPipelineValue = estimatedQualifiedCalls * dealSize;
  const projectedNewRevenue = projectedClosedDeals * dealSize;
  const estimatedAnnualValue = projectedNewRevenue * 12;

  return (
    <section id="calculator" className="py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-poppins font-extrabold text-[#0080FF] shadow-sm">
            <Calculator className="w-4 h-4 text-[#0080FF]" />
            B2B REVENUE SIMULATOR
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Calculate Your Pipeline & <br />
            <span className="bg-gradient-to-r from-[#0080FF] via-[#9333EA] to-[#FF1B6B] bg-clip-text text-transparent">
              Expected Qualified Calls
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Adjust your target deal size and monthly outreach volume to model the commercial return of deploying ACQSA AI’s multichannel acquisition engine.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Panel */}
          <div className="lg:col-span-7 bg-[#FAFAFC] rounded-3xl border-2 border-slate-200 p-8 sm:p-10 space-y-8 shadow-md">
            <h3 className="font-poppins font-extrabold text-xl text-slate-900 border-b border-slate-200 pb-4 flex items-center justify-between">
              <span>Your Commercial Parameters</span>
              <span className="text-xs font-mono text-slate-400 font-bold uppercase">LIVE MODEL</span>
            </h3>

            {/* Slider 1: Average Deal Size */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-poppins font-bold">
                <span className="text-slate-700">Average Annual Contract Value (ACV / Deal Size):</span>
                <span className="text-xl font-mono font-extrabold text-[#0080FF]">
                  ${dealSize.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="80000"
                step="1000"
                value={dealSize}
                onChange={(e) => setDealSize(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0080FF]"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>$2,000</span>
                <span>$40,000</span>
                <span>$80,000+</span>
              </div>
            </div>

            {/* Slider 2: Target Decision Makers Reached */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-poppins font-bold">
                <span className="text-slate-700">Monthly Target Accounts Contacted:</span>
                <span className="text-xl font-mono font-extrabold text-[#9333EA]">
                  {monthlyOutboundAccounts.toLocaleString()} accounts
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="8000"
                step="250"
                value={monthlyOutboundAccounts}
                onChange={(e) => setMonthlyOutboundAccounts(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#9333EA]"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>500</span>
                <span>4,000</span>
                <span>8,000</span>
              </div>
            </div>

            {/* Slider 3: Sales Close Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-poppins font-bold">
                <span className="text-slate-700">Estimated Sales Close Rate on Qualified Calls:</span>
                <span className="text-xl font-mono font-extrabold text-[#FF1B6B]">
                  {closeRate}%
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF1B6B]"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>5% (Conservative)</span>
                <span>20% (Typical)</span>
                <span>40% (High-Touch)</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 text-xs text-slate-600 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Calculated using verified benchmarks across 20+ active secondary inboxes & multi-touch LinkedIn cadences.</span>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 space-y-8 shadow-2xl relative overflow-hidden">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                PROJECTED COMMERCIAL YIELD
              </span>
              <span className="text-xs font-mono text-slate-400 font-bold">ACQSA AI ENGINE</span>
            </div>

            {/* Big Metrics */}
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 uppercase">MONTHLY QUALIFIED CALLS</span>
                <div className="text-4xl sm:text-5xl font-poppins font-extrabold text-white flex items-baseline gap-2">
                  <span>{estimatedQualifiedCalls}</span>
                  <span className="text-sm font-normal text-emerald-400 font-mono">calls/mo</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">MONTHLY PIPELINE</span>
                  <div className="text-xl sm:text-2xl font-poppins font-extrabold text-white">
                    ${(monthlyPipelineValue / 1000).toFixed(0)}k
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">EST. NEW DEALS</span>
                  <div className="text-xl sm:text-2xl font-poppins font-extrabold text-emerald-400">
                    {projectedClosedDeals} deals
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-blue-500/20 border border-purple-500/30 space-y-1">
                <span className="text-[10px] font-mono text-slate-300 uppercase">PROJECTED NEW REVENUE RUN-RATE</span>
                <div className="text-2xl sm:text-3xl font-poppins font-extrabold text-white">
                  ${(estimatedAnnualValue / 1000).toFixed(0)}k <span className="text-xs font-normal text-slate-300 font-sans">/ year</span>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-2">
              <a
                href="#audit"
                className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] text-white font-poppins font-extrabold text-sm tracking-wide shadow-xl hover:scale-[1.02] transition-all"
              >
                <span>Request Your Free Pipeline Audit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
