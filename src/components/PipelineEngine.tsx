import React, { useState } from 'react';
import { Target, Search, MessageSquare, CheckSquare, PhoneCall, ArrowRight, Activity, Database, Check } from 'lucide-react';

export const PipelineEngine: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      step: '01',
      title: 'TARGET',
      subtitle: 'ICP + Target Account List',
      icon: <Target className="w-5 h-5 text-[#B8FF3D]" />,
      activities: [
        'Analyze historical closed-won customers to formulate ICP criteria',
        'Identify target industries, revenue ranges, and technology stacks',
        'Curate focused 250-500 target account lists based on structural fit',
        'Filter out low-intent or unviable prospect domains'
      ],
      metric: 'Account List Precision: 98%'
    },
    {
      step: '02',
      title: 'IDENTIFY',
      subtitle: 'Decision-Makers + Buying Signals',
      icon: <Search className="w-5 h-5 text-[#B8FF3D]" />,
      activities: [
        'Map executive titles (Founder, CEO, Managing Director, CRO)',
        'Track active hiring signals, funding rounds, and expansion triggers',
        'Verify target prospect activity on LinkedIn',
        'Identify secondary influencers and technical stakeholders'
      ],
      metric: 'Verified Decision-Makers: 100%'
    },
    {
      step: '03',
      title: 'ENGAGE',
      subtitle: 'Connection + Personalized Conversations',
      icon: <MessageSquare className="w-5 h-5 text-[#B8FF3D]" />,
      activities: [
        'Optimize founder profile for maximum credibility and conversion',
        'Craft non-spammy connection notes referencing account triggers',
        'Initiate two-way peer dialogue around core business challenges',
        'Share relevant case breakdowns, benchmarks, and teardowns'
      ],
      metric: 'Connection Acceptance: ~40%'
    },
    {
      step: '04',
      title: 'QUALIFY',
      subtitle: 'Intent + Fit + Sales Readiness',
      icon: <CheckSquare className="w-5 h-5 text-[#B8FF3D]" />,
      activities: [
        'Evaluate prospect urgency, problem severity, and active priorities',
        'Filter out non-buyers, students, and low-budget inquiries',
        'Validate decision-maker authority and purchase timing',
        'Prepare transition details for founder call briefing'
      ],
      metric: 'Qualification Accuracy: High-Fit Only'
    },
    {
      step: '05',
      title: 'CONVERT',
      subtitle: 'Qualified Sales Conversation',
      icon: <PhoneCall className="w-5 h-5 text-[#B8FF3D]" />,
      activities: [
        'Proactively schedule calendar invite directly on founder schedule',
        'Send pre-call background briefing & prospect research dossier',
        'Log conversation history & account notes into CRM',
        'Track weekly pipeline revenue impact and call conversions'
      ],
      metric: 'Target Outcome: Predictable Pipeline'
    }
  ];

  return (
    <section id="pipeline-engine" className="py-24 bg-[#080A0C] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3 py-1 rounded-full bg-[#101318] border border-[#20242A]">
            INTERACTIVE PIPELINE ENGINE
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            WHAT HAPPENS <br />
            <span className="text-lime-gradient">BEHIND THE SCENES?</span>
          </h2>
        </div>

        {/* 5 Connected Stages Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {stages.map((stg, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-[#101318] border-[#B8FF3D] ring-1 ring-[#B8FF3D]/40 scale-105 shadow-xl'
                    : 'bg-[#080A0C] border-[#20242A] hover:border-[#A7ADB5]/40 text-[#A7ADB5]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#B8FF3D]' : 'text-[#A7ADB5]'}`}>
                    STAGE {stg.step}
                  </span>
                  {stg.icon}
                </div>
                <h3 className={`text-sm font-heading font-extrabold uppercase ${isActive ? 'text-white' : 'text-[#A7ADB5]'}`}>
                  {stg.title}
                </h3>
                <p className="text-[10px] font-mono text-[#A7ADB5] truncate mt-1">
                  {stg.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Details Panel */}
        <div className="bg-[#101318] border border-[#20242A] rounded-2xl p-8 shadow-2xl space-y-6 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#20242A] pb-4 gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-[#B8FF3D] uppercase">
                STAGE {stages[activeStage].step} ARCHITECTURE
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-white uppercase mt-1">
                {stages[activeStage].title}: {stages[activeStage].subtitle}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#B8FF3D] bg-[#080A0C] px-3 py-1.5 rounded border border-[#20242A] self-start sm:self-auto">
              {stages[activeStage].metric}
            </span>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-mono text-[#A7ADB5] uppercase font-bold">Execution Activities Underneath:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stages[activeStage].activities.map((act, i) => (
                <div key={i} className="p-4 bg-[#080A0C] rounded-xl border border-[#20242A] flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#B8FF3D] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#A7ADB5] font-medium leading-relaxed">
                    {act}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
