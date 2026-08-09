import React, { useState } from 'react';
import { Calculator, Clock, TrendingUp, Users, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export const ROICalculator: React.FC = () => {
  // Inputs
  const [monthlyCalls, setMonthlyCalls] = useState(6000);
  const [monthlyWhatsApp, setMonthlyWhatsApp] = useState(9000);
  const [agents, setAgents] = useState(8);
  const [handlingTime, setHandlingTime] = useState(4.5);
  const [dischargeSummaries, setDischargeSummaries] = useState(450);
  const [tpaCases, setTpaCases] = useState(300);
  const [docTime, setDocTime] = useState(25);

  // Calculations (Illustrative estimates)
  const assistedConversations = Math.round((monthlyCalls * 0.7) + (monthlyWhatsApp * 0.85));
  const callHoursSaved = Math.round(((monthlyCalls * 0.7 * handlingTime) + (monthlyWhatsApp * 0.85 * 1.5)) / 60);
  const docHoursSaved = Math.round(((dischargeSummaries * (docTime * 0.75)) + (tpaCases * 15)) / 60);
  const totalMonthlyHoursSaved = callHoursSaved + docHoursSaved;
  const annualHoursUnlocked = Math.round(totalMonthlyHoursSaved * 12);
  const estimatedApptOpportunities = Math.round(assistedConversations * 0.42);

  return (
    <section className="py-24 relative bg-[#071621] border-t border-[#20D6C7]/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09242A] border border-[#20D6C7]/30 text-xs font-semibold text-[#20D6C7]">
            <Calculator className="w-3.5 h-3.5" /> Operational Modeling Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Calculate the <br />
            <span className="text-gradient">operational opportunity.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Adjust the sliders below to estimate the staff capacity and patient conversation volume your hospital can unlock.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders Input Panel */}
          <div className="lg:col-span-7 bg-[#09242A]/80 border-2 border-[#20D6C7]/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
            <h3 className="font-heading font-bold text-lg text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#20D6C7]" /> Hospital Baseline Inputs
            </h3>

            {/* Slider 1: Monthly Patient Calls */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">Monthly Patient Calls:</span>
                <span className="text-[#20D6C7] font-mono text-sm">{monthlyCalls.toLocaleString()} calls</span>
              </div>
              <input
                type="range"
                min="1000"
                max="30000"
                step="500"
                value={monthlyCalls}
                onChange={(e) => setMonthlyCalls(Number(e.target.value))}
                className="w-full accent-[#20D6C7] bg-[#071621] h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Slider 2: Monthly WhatsApp Inquiries */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">Monthly WhatsApp Inquiries:</span>
                <span className="text-[#53CFFF] font-mono text-sm">{monthlyWhatsApp.toLocaleString()} chats</span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={monthlyWhatsApp}
                onChange={(e) => setMonthlyWhatsApp(Number(e.target.value))}
                className="w-full accent-[#53CFFF] bg-[#071621] h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Slider 3: Front Office Agents */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">Front Office Desk Staff:</span>
                <span className="text-[#6BE7B7] font-mono text-sm">{agents} agents</span>
              </div>
              <input
                type="range"
                min="2"
                max="50"
                step="1"
                value={agents}
                onChange={(e) => setAgents(Number(e.target.value))}
                className="w-full accent-[#6BE7B7] bg-[#071621] h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Slider 4: Monthly Discharge Summaries */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">Monthly Discharge Summaries:</span>
                <span className="text-[#8B7CFF] font-mono text-sm">{dischargeSummaries.toLocaleString()} notes</span>
              </div>
              <input
                type="range"
                min="50"
                max="3000"
                step="50"
                value={dischargeSummaries}
                onChange={(e) => setDischargeSummaries(Number(e.target.value))}
                className="w-full accent-[#8B7CFF] bg-[#071621] h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Slider 5: Monthly TPA Cases */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">Monthly TPA & Cashless Claims:</span>
                <span className="text-[#20D6C7] font-mono text-sm">{tpaCases.toLocaleString()} cases</span>
              </div>
              <input
                type="range"
                min="20"
                max="2000"
                step="20"
                value={tpaCases}
                onChange={(e) => setTpaCases(Number(e.target.value))}
                className="w-full accent-[#20D6C7] bg-[#071621] h-2 rounded-lg cursor-pointer"
              />
            </div>

          </div>

          {/* Results Output Card */}
          <div className="lg:col-span-5 bg-[#09242A] border-2 border-[#20D6C7]/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <h3 className="font-heading font-extrabold text-xl text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#20D6C7]" /> Capacity Unlocked Model
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#071621] border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">
                  Est. Conversations Assisted / Month
                </span>
                <div className="text-3xl font-heading font-black text-white">
                  {assistedConversations.toLocaleString()}
                </div>
                <span className="text-[11px] text-[#20D6C7]">Voice calls + WhatsApp inquiries</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#071621] border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">
                  Monthly Staff Hours Redirected
                </span>
                <div className="text-3xl font-heading font-black text-[#53CFFF]">
                  {totalMonthlyHoursSaved.toLocaleString()} hrs / mo
                </div>
                <span className="text-[11px] text-[#53CFFF]">Front office + clinical scribe time</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#071621] border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">
                  Est. Annual Capacity Unlocked
                </span>
                <div className="text-3xl font-heading font-black text-[#6BE7B7]">
                  {annualHoursUnlocked.toLocaleString()} hrs / yr
                </div>
                <span className="text-[11px] text-[#6BE7B7]">Operational bandwidth created</span>
              </div>
            </div>

            {/* Disclaimer Box */}
            <div className="p-3.5 rounded-xl bg-[#071621] border border-[#53CFFF]/30 text-[11px] text-slate-400 space-y-1">
              <span className="flex items-center gap-1.5 font-bold text-[#53CFFF]">
                <AlertCircle className="w-3.5 h-3.5" /> Note on Estimates:
              </span>
              <p className="leading-relaxed italic">
                Illustrative estimate only. Actual outcomes depend on workflow, integration, call volume, hospital policies and deployment scope.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
