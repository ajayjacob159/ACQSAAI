import React, { useState } from 'react';
import { Target, Users, Search, Sparkles, UserCheck, MessageSquare, PhoneCall, CheckCircle, Database, BarChart3, ChevronRight, Check } from 'lucide-react';

export const SystemSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: 'STEP 01',
      title: 'DEFINE THE ICP',
      summary: 'Identify your highest-value customer profile, buying triggers and decision criteria.',
      detail: 'We build an explicit Ideal Customer Profile matrix analyzing contract sizes, technology stack, hiring patterns, structural triggers, and actual buying authority to ensure outreach is never wasted on non-buyers.'
    },
    {
      num: 'STEP 02',
      title: 'TARGET ACCOUNTS',
      summary: 'Build focused account lists based on fit rather than volume.',
      detail: 'Rather than scraping thousands of low-quality contacts, we curate tight target account lists filtered by revenue brackets, headcount momentum, and solution compatibility.'
    },
    {
      num: 'STEP 03',
      title: 'DECISION-MAKERS',
      summary: 'Identify founders, CEOs, CXOs and relevant buying influencers.',
      detail: 'We map executive organizational charts to identify the exact decision-maker holding economic budget and operational responsibility for solving your target problem.'
    },
    {
      num: 'STEP 04',
      title: 'PROSPECT RESEARCH',
      summary: 'Understand the business, role, timing, trigger and potential pain.',
      detail: 'Every prospect is thoroughly researched before outreach. We analyze recent company announcements, quarterly priorities, team expansions, and public statements to craft relevant context.'
    },
    {
      num: 'STEP 05',
      title: 'FOUNDER POSITIONING',
      summary: "Turn the founder's LinkedIn profile into a credibility and conversion asset.",
      detail: "We restructure the founder's headline, about summary, featured assets, and experience history to position them as an authoritative industry peer rather than a vendor pitching services."
    },
    {
      num: 'STEP 06',
      title: 'MESSAGE SEQUENCES',
      summary: 'Create relevant connection, conversation and follow-up sequences.',
      detail: 'We write non-templated, high-signal connection notes, opening dialogue prompts, and value-add follow-up sequences tailored to the founder’s authentic tone.'
    },
    {
      num: 'STEP 07',
      title: 'MANUAL CONVERSATIONS',
      summary: 'Start real conversations instead of robotic mass outreach.',
      detail: 'All dialogue is handled manually. We respond thoughtfully to prospect questions, address objections, and foster genuine peer-to-peer relationships.'
    },
    {
      num: 'STEP 08',
      title: 'FOLLOW-UP',
      summary: 'Systematically follow up without becoming spammy.',
      detail: '80% of sales opportunities require multi-touch persistence. We execute structured follow-up cadences sharing insights, case teardowns, and relevant benchmarks.'
    },
    {
      num: 'STEP 09',
      title: 'QUALIFICATION',
      summary: 'Separate curiosity from genuine commercial intent.',
      detail: 'We evaluate prospect pain urgency, deal timeline, decision-maker fit, and budget authority before suggesting a calendar call.'
    },
    {
      num: 'STEP 10',
      title: 'QUALIFIED CALLS',
      summary: 'Move qualified prospects into sales conversations.',
      detail: 'When a prospect passes commercial qualification, we seamlessly transition them into a booked calendar sales call directly on the founder’s schedule.'
    },
    {
      num: 'STEP 11',
      title: 'SIMPLE CRM',
      summary: 'Track every prospect, conversation, status and next action.',
      detail: 'We maintain a clean CRM view of all active accounts, touchpoint histories, conversation status, and upcoming follow-ups.'
    },
    {
      num: 'STEP 12',
      title: 'WEEKLY REPORTING',
      summary: 'Measure activity, conversations, qualified prospects and sales opportunities.',
      detail: 'You receive transparent weekly reports breaking down total accounts targeted, response rates, active dialogues, qualified leads, and booked sales opportunities.'
    }
  ];

  return (
    <section id="system" className="py-24 bg-[#101318] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3.5 py-1.5 rounded-full bg-[#B8FF3D]/10 border border-[#B8FF3D]/30">
            THE 12-STEP OPERATING SYSTEM
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            FROM PROFILE <br />
            <span className="text-lime-gradient">TO PIPELINE.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A7ADB5] font-semibold max-w-2xl mx-auto">
            One operating system. Twelve execution steps. One commercial objective: qualified conversations.
          </p>
        </div>

        {/* 12-Step Timeline & Micro-Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Timeline List (Left) */}
          <div className="lg:col-span-5 space-y-2 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#080A0C] border-[#B8FF3D] shadow-lg ring-1 ring-[#B8FF3D]/40'
                      : 'bg-[#101318] border-[#20242A] hover:border-[#A7ADB5]/40'
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#B8FF3D]' : 'text-[#A7ADB5]'}`}>
                      {step.num}
                    </span>
                    <h3 className={`text-xs font-heading font-extrabold uppercase ${isActive ? 'text-white' : 'text-[#A7ADB5] group-hover:text-white'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#B8FF3D] translate-x-1' : 'text-[#20242A]'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Micro-Panel Detail (Right) */}
          <div className="lg:col-span-7 bg-[#080A0C] border border-[#20242A] rounded-2xl p-8 space-y-6 shadow-2xl relative min-h-[420px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#20242A] pb-4">
                <span className="text-xs font-mono font-bold text-[#B8FF3D] bg-[#B8FF3D]/10 px-3 py-1 rounded border border-[#B8FF3D]/30">
                  {steps[activeStep].num} EXECUTION DETAIL
                </span>
                <span className="text-xs font-mono text-[#A7ADB5]">12-Step Demand System</span>
              </div>

              <h3 className="text-2xl font-heading font-extrabold text-white uppercase tracking-tight">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm font-semibold text-[#B8FF3D] font-mono leading-relaxed bg-[#101318] p-4 rounded-xl border border-[#20242A]">
                "{steps[activeStep].summary}"
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono text-[#A7ADB5] uppercase font-bold">Execution Methodology:</h4>
                <p className="text-xs text-[#A7ADB5] font-medium leading-relaxed">
                  {steps[activeStep].detail}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#20242A] flex items-center justify-between text-xs text-[#A7ADB5]">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#B8FF3D]" /> Systematic & repeatable outbound execution
              </span>
              <button 
                onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                className="text-xs font-mono font-bold text-[#B8FF3D] hover:underline"
              >
                Next Step →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
