import React, { useState, useEffect } from 'react';
import { Target, Users, Search, MessageSquare, CheckCircle, PhoneCall, TrendingUp, Filter, Sparkles, Zap, ArrowRight } from 'lucide-react';

export const HeroPipelineAnimation: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: 'UNKNOWN MARKET', detail: 'Broad unsegmented industry', icon: <Filter className="w-4 h-4 text-slate-600" /> },
    { label: 'ICP DEFINITION', detail: 'Defined B2B buyer profile', icon: <Target className="w-4 h-4 text-[#FF1B6B]" /> },
    { label: 'TARGET ACCOUNTS', detail: 'High-fit company list', icon: <Users className="w-4 h-4 text-[#9333EA]" /> },
    { label: 'DECISION-MAKERS', detail: 'CEOs, Founders & CXOs', icon: <Search className="w-4 h-4 text-[#0080FF]" /> },
    { label: 'PROSPECT RESEARCH', detail: 'Triggers & company pain', icon: <Sparkles className="w-4 h-4 text-[#10B981]" /> },
    { label: 'OUTREACH', detail: 'Personalized dialogue', icon: <MessageSquare className="w-4 h-4 text-[#FF1B6B]" /> },
    { label: 'CONVERSATIONS', detail: 'Manual two-way response', icon: <MessageSquare className="w-4 h-4 text-[#9333EA]" /> },
    { label: 'QUALIFICATION', detail: 'Intent & budget fit', icon: <CheckCircle className="w-4 h-4 text-[#0080FF]" /> },
    { label: 'SALES CALL', detail: 'Booked founder call', icon: <PhoneCall className="w-4 h-4 text-[#10B981]" /> },
    { label: 'PIPELINE', detail: 'Predictive revenue', icon: <TrendingUp className="w-4 h-4 text-[#FF1B6B]" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
      
      {/* Skylead Style Dashboard Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200 pb-4 gap-2 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-[#0080FF] flex items-center justify-center font-bold">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <span className="font-poppins font-extrabold text-slate-900 text-sm block">
              ACQSA AI B2B Outbound Campaign Builder
            </span>
            <span className="text-[11px] text-slate-500 font-mono">
              Live Interactive Sequence Flow
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
          <span className="text-[11px] font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            ACTIVE STEP: 0{activeStep + 1} / 10
          </span>
        </div>
      </div>

      {/* Skylead Style Horizontal Campaign Rail */}
      <div className="flex items-center gap-3 overflow-x-auto py-3 no-scrollbar">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const isPassed = idx < activeStep;
          return (
            <React.Fragment key={idx}>
              <div 
                onClick={() => setActiveStep(idx)}
                className={`shrink-0 p-4 rounded-2xl border-2 transition-all cursor-pointer min-w-[150px] ${
                  isActive
                    ? 'bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 border-[#0080FF] shadow-lg ring-2 ring-[#0080FF]/20 scale-105'
                    : isPassed
                    ? 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className={`text-[10px] font-mono font-extrabold ${isActive ? 'text-[#0080FF]' : 'text-slate-400'}`}>
                    0{idx + 1}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white shadow-sm border border-slate-200' : 'bg-slate-100'}`}>
                    {step.icon}
                  </div>
                </div>
                <strong className={`block text-xs font-poppins font-extrabold uppercase leading-tight ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                  {step.label}
                </strong>
                <span className="text-[10px] text-slate-500 leading-snug block mt-1 font-medium">
                  {step.detail}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <div className="shrink-0 flex items-center justify-center w-4 text-slate-300">
                  <ArrowRight className={`w-4 h-4 ${idx < activeStep ? 'text-[#0080FF]' : 'text-slate-300'}`} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-slate-200 text-xs text-slate-600 font-mono gap-2">
        <span className="flex items-center gap-1.5">
          <CheckCircle className="w-4 h-4 text-[#10B981]" /> 100% Peer-to-Peer Human Outreach — Zero Robotic Spam
        </span>
        <span className="text-[#0080FF] font-bold">12-Step Demand System Active</span>
      </div>

    </div>
  );
};
