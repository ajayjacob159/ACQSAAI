import React from 'react';
import { 
  Search, 
  Target, 
  Cpu, 
  FileText, 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Diagnose Pipeline & GTM Bottlenecks',
      tag: 'PHASE 1',
      desc: 'Our dedicated account strategists dissect your existing outbound metrics, domain reputation, CRM routing, and sales bottlenecks to establish an exact baseline.',
      icon: <Search className="w-5 h-5 text-[#FF1B6B]" />,
      action: 'Full Deliverability & Funnel Audit'
    },
    {
      num: '02',
      title: 'ICP & Irresistible Offer Formulation',
      tag: 'PHASE 2',
      desc: 'We engineer high-value ICP account criteria with compelling value propositions and offers your prospective buyers cannot say no to.',
      icon: <Target className="w-5 h-5 text-[#9333EA]" />,
      action: 'Verified ICP & Offer Architecture'
    },
    {
      num: '03',
      title: 'Sales Tech Stack & Pipeline Setup',
      tag: 'PHASE 3',
      desc: 'Deploy our battle-tested sales stack: Clay waterfall enrichment, Instantly.ai / Smartlead outbound senders, secondary domains, and automated lead routing.',
      icon: <Cpu className="w-5 h-5 text-[#0080FF]" />,
      action: 'Clay + Dual-ESP + CRM Integration'
    },
    {
      num: '04',
      title: 'Creation of Sales Assets & Content',
      tag: 'PHASE 4',
      desc: 'Engineer tactical lead magnets, PDF teardowns, LinkedIn viral hooks, and multi-touch cold email copywriting with automated Spintax variations.',
      icon: <FileText className="w-5 h-5 text-[#10B981]" />,
      action: 'Playbooks, SOPs & Inbound Assets'
    },
    {
      num: '05',
      title: 'Launch The Multichannel Campaign',
      tag: 'PHASE 5',
      desc: 'Go live across cold email, LinkedIn outreach, and inbound lead magnet scraping. Continual A/B testing, reply qualification, and live calendar booking.',
      icon: <Rocket className="w-5 h-5 text-[#FF1B6B]" />,
      action: 'Meeting-Ready Sales Calls Delivered'
    }
  ];

  return (
    <section id="process" className="py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-poppins font-extrabold text-slate-800 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#0080FF]" />
            PROVEN 5-PHASE GTM ROADMAP
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            How We Turn Your Business Into <br />
            <span className="bg-gradient-to-r from-[#0080FF] via-[#9333EA] to-[#FF1B6B] bg-clip-text text-transparent">
              A Lead Generation Machine
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            From initial audit to predictable monthly sales calls, our structured 5-phase onboarding takes you live without operational chaos.
          </p>
        </div>

        {/* 5-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFC] rounded-2xl p-6 border-2 border-slate-200 hover:border-[#0080FF] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between space-y-4 group relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-extrabold text-slate-400 group-hover:text-[#0080FF] transition-colors">
                    {st.tag}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    {st.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-2xl font-poppins font-extrabold text-slate-900">
                    {st.num}
                  </div>
                  <h3 className="text-sm font-poppins font-extrabold text-slate-900 leading-snug group-hover:text-[#0080FF] transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {st.desc}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/60 text-[11px] font-mono font-bold text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{st.action}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
