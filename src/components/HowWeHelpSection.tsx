import React from 'react';
import { 
  AlertCircle, 
  Target, 
  Settings, 
  FileText, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers 
} from 'lucide-react';

export const HowWeHelpSection: React.FC = () => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Identify Your Problems in Lead Generation and Sales System',
      description: 'Our dedicated account executive will analyse the current issues in your system.',
      details: [
        'Dissect current pipeline bottlenecks & missed outbound opportunities',
        'Review past email deliverability, bounce rates, and spam flags',
        'Analyze conversion drop-offs between initial replies and booked meetings'
      ],
      icon: <AlertCircle className="w-6 h-6 text-[#FF1B6B]" />
    },
    {
      step: 'Step 2',
      title: 'ICP and Offer Creation',
      description: 'We create your ICP list with a compelling offer that your prospects can’t say “NO TO”. If needed, we will revamp your current ICP and offer to ensure we have accurate data.',
      details: [
        'Curate verified decision-maker account lists aligned with your target deal sizes',
        'Formulate high-converting value propositions tailored to urgent executive pain points',
        'Cleanse and audit prospect data to guarantee 100% data accuracy'
      ],
      icon: <Target className="w-6 h-6 text-[#9333EA]" />
    },
    {
      step: 'Step 3',
      title: 'Pipeline and Sales Tool Implementation',
      description: 'Pipeline Setup: We set up your pipeline account and create a custom lead nurturing scheme. Sales Tools Stack: Utilizing our in-house sales tools stack, we set-up up the process for the campaign.',
      details: [
        'Pipeline Setup: Custom lead nurturing workflows & automated routing',
        'Sales Tools Stack: In-house setup including Clay waterfall enrichment and Instantly/Smartlead',
        'Integration with your CRM for seamless handover of sales-ready opportunities'
      ],
      icon: <Settings className="w-6 h-6 text-[#0080FF]" />
    },
    {
      step: 'Step 4',
      title: 'Creation of Sales Assets and Content',
      description: 'Sales Assets: We create essential sales assets such as lead magnets, case studies, content, graphics, and outbound scripts. Inbound System: We develop engaging content that will be used across social media campaigns as part of our inbound system. Outbound System: We set up cold email infrastructure, warm domains, and A/B test campaigns.',
      details: [
        'Sales Assets: Lead magnets, case studies, graphics, and conversational outbound scripts',
        'Inbound System: Engaging social content designed to capture high-intent engagement',
        'Outbound System: Secondary domain infrastructure, warm mailboxes, and A/B testing'
      ],
      icon: <FileText className="w-6 h-6 text-[#10B981]" />
    },
    {
      step: 'Step 5',
      title: 'Launch The Campaign',
      description: 'Once we have all the collaterals ready, we will launch the campaign.',
      details: [
        'Multi-channel activation across secondary cold inboxes and targeted LinkedIn',
        'Real-time conversation management, intent qualification, and objection handling',
        'Direct calendar booking of meeting-ready, qualified sales conversations'
      ],
      icon: <Rocket className="w-6 h-6 text-[#FF1B6B]" />
    }
  ];

  return (
    <section id="how-we-help" className="py-24 bg-[#FAFAFC] text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-xs font-poppins font-extrabold text-[#0080FF] shadow-sm">
            <Layers className="w-4 h-4 text-[#0080FF]" />
            STRUCTURED EXECUTION ROADMAP
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            How We Help You ?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            From initial bottleneck diagnosis to full multichannel campaign launch, here is our exact 5-step operational framework.
          </p>
        </div>

        {/* 5-Step Cards */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-xl space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAFAFC] border border-slate-200 flex items-center justify-center shrink-0">
                    {st.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-extrabold text-[#FF1B6B] uppercase tracking-wider block">
                      {st.step}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-slate-900">
                      {st.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                {st.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {st.details.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAFAFC] border border-slate-200/80 text-xs text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
