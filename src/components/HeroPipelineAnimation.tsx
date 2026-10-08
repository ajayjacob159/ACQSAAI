import React, { useState, useEffect } from 'react';
import { Target, Users, Search, MessageSquare, CheckCircle, PhoneCall, TrendingUp, Filter, Sparkles } from 'lucide-react';

export const HeroPipelineAnimation: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: 'UNKNOWN MARKET', detail: 'Broad unsegmented industry', icon: <Filter className="w-3.5 h-3.5" /> },
    { label: 'ICP', detail: 'Defined B2B customer profile', icon: <Target className="w-3.5 h-3.5" /> },
    { label: 'TARGET ACCOUNTS', detail: 'High-fit company list', icon: <Users className="w-3.5 h-3.5" /> },
    { label: 'DECISION-MAKERS', detail: 'CEOs, Founders & CXOs', icon: <Search className="w-3.5 h-3.5" /> },
    { label: 'RESEARCH', detail: 'Triggers & company pain', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: 'OUTREACH', detail: 'Personalized dialogue', icon: <MessageSquare className="w-3.5 h-3.5" /> },
    { label: 'CONVERSATIONS', detail: 'Manual two-way response', icon: <MessageSquare className="w-3.5 h-3.5" /> },
    { label: 'QUALIFICATION', detail: 'Intent & budget fit', icon: <CheckCircle className="w-3.5 h-3.5" /> },
    { label: 'SALES CALL', detail: 'Booked founder call', icon: <PhoneCall className="w-3.5 h-3.5" /> },
    { label: 'PIPELINE', detail: 'Predictive revenue', icon: <TrendingUp className="w-3.5 h-3.5" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#101318] border border-[#20242A] rounded-2xl p-4 sm:p-6 shadow-2xl space-y-4 relative overflow-hidden">
      
      <div className="flex items-center justify-between border-b border-[#20242A] pb-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#B8FF3D] animate-ping" />
          <span className="font-mono text-[#B8FF3D] font-bold uppercase tracking-wider text-[11px]">
            ACQSA AI B2B DEMAND-GENERATION PIPELINE SYSTEM
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#A7ADB5] bg-[#080A0C] px-2.5 py-1 rounded border border-[#20242A]">
          SYSTEM FLOW: STEP 0{activeStep + 1} OF 10
        </span>
      </div>

      {/* Horizontal Pipeline Animation Rail */}
      <div className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const isPassed = idx < activeStep;
          return (
            <React.Fragment key={idx}>
              <div 
                onClick={() => setActiveStep(idx)}
                className={`shrink-0 p-3 rounded-xl border transition-all cursor-pointer min-w-[140px] ${
                  isActive
                    ? 'bg-[#080A0C] border-[#B8FF3D] shadow-lg shadow-[#B8FF3D]/10 ring-1 ring-[#B8FF3D]/30 scale-105'
                    : isPassed
                    ? 'bg-[#101318] border-[#20242A] text-[#A7ADB5]'
                    : 'bg-[#080A0C]/60 border-[#20242A]/60 text-slate-600'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className={`text-[9px] font-mono font-bold ${isActive ? 'text-[#B8FF3D]' : 'text-[#A7ADB5]'}`}>
                    0{idx + 1}
                  </span>
                  <div className={`p-1 rounded-md ${isActive ? 'bg-[#B8FF3D] text-[#080A0C]' : 'bg-[#20242A] text-[#A7ADB5]'}`}>
                    {step.icon}
                  </div>
                </div>
                <strong className={`block text-[11px] font-extrabold uppercase leading-tight ${isActive ? 'text-white' : 'text-[#A7ADB5]'}`}>
                  {step.label}
                </strong>
                <span className="text-[9px] text-[#A7ADB5] leading-none block mt-0.5 font-medium">
                  {step.detail}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <div className="shrink-0 flex items-center justify-center w-4 text-[#20242A]">
                  <span className={`text-xs font-mono font-bold ${idx < activeStep ? 'text-[#B8FF3D]' : 'text-[#20242A]'}`}>
                    →
                  </span>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#20242A]/60 text-[10px] text-[#A7ADB5] font-mono">
        <span>* Manual outreach & qualification — zero automated spam</span>
        <span className="text-[#B8FF3D] font-bold">12 Execution Steps Active</span>
      </div>

    </div>
  );
};
