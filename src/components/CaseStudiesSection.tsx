import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Mail, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Award, 
  BarChart2, 
  Building2, 
  ExternalLink 
} from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: 'How We Booked 197+ Sales Calls Using a Multichannel Funnel',
      client: 'B2B Sales Software Company',
      category: 'MULTICHANNEL OUTBOUND',
      highlightStat: '197+ Calls Booked',
      metrics: [
        { label: 'Booked Sales Calls', value: '197+' },
        { label: 'Outbound Reply Rate', value: '30%' },
        { label: 'Qualified Leads', value: '500+' },
        { label: 'Content Views', value: '100K+' }
      ],
      challenge: 'As a newcomer entering a saturated sales tech market, the client struggled with low email deliverability, extended sales cycles, and low LinkedIn response rates.',
      strategy: 'Engineered a comprehensive multichannel outreach infrastructure combining targeted LinkedIn decision-maker outreach, value-driven LinkedIn content, live webinars, and secondary domain cold email campaigns.',
      execution: [
        'Built verified list of ICP decision-makers across mid-market tech companies',
        'Set up dual-ESP cold email infrastructure to guarantee 99%+ deliverability',
        'Published weekly educational playbooks generating over 100K views',
        'Automated warm follow-ups converting content commenters directly into demo calls'
      ],
      outcome: 'Achieved an unprecedented 30% reply rate and consistently generated over 197 qualified sales calls, establishing strong market presence.'
    },
    {
      id: 2,
      title: 'Our ABM Infrastructure That Helped an Enterprise Book 237 Demo Calls',
      client: 'Enterprise Cloud & Data Platform',
      category: 'ACCOUNT-BASED MARKETING (ABM)',
      highlightStat: '237 Demo Calls',
      metrics: [
        { label: 'Enterprise Demos', value: '237 Calls' },
        { label: 'Warmed Inboxes', value: '30 Mailboxes' },
        { label: 'High-Value Accounts', value: '1,200 ICP' },
        { label: 'Pipeline Generated', value: '$1.4M+' }
      ],
      challenge: 'Enterprise sales team struggled to penetrate Fortune 1000 accounts. Generic cold outreach was failing against corporate spam filters.',
      strategy: 'Deployed an Account-Based Marketing (ABM) architecture utilizing 30 dedicated secondary inboxes, custom Clay waterfall data enrichment, and hyper-personalized account hooks.',
      execution: [
        'Configured 15 Google Workspace + 15 Microsoft 365 Exchange accounts',
        'Authenticated full SPF, DKIM, DMARC, and custom CNAME tracking domains',
        'Researched account-level pain points and ongoing cloud migration initiatives',
        'Executed 5-touch multi-channel sequences across LinkedIn and email'
      ],
      outcome: 'Secured 237 enterprise demo calls with VP & C-level buyers, transforming their annual revenue trajectory.'
    },
    {
      id: 3,
      title: 'How We Built a Sales Team That Booked 25 Calls in 30 Days',
      client: 'B2B IT & Machine Learning Startup',
      category: 'GTM TEAM PLACEMENT',
      highlightStat: '25 Calls / 30 Days',
      metrics: [
        { label: 'Monthly Calls', value: '25–30' },
        { label: 'Cost Reduction', value: '80%' },
        { label: 'Turnaround Time', value: '9 Weeks' },
        { label: 'Prior Burn', value: '$20K/mo' }
      ],
      challenge: 'The client spent over $20,000/month on an in-house sales team that was only booking 5 calls per month due to role fragmentation and marketing-sales friction.',
      strategy: 'Replaced the bloated in-house setup with an agile, high-performance remote offshore sales squad powered by validated outbound playbooks.',
      execution: [
        'Conducted A/B testing on various outbound campaign angles to identify winning hooks',
        'Hired, trained, and integrated dedicated BDRs operating on tested SOPs',
        'Implemented daily activity tracking and automated CRM qualification pipelines',
        'Lowered total payroll overhead by 80% while dramatically improving lead quality'
      ],
      outcome: 'The team was fully operational in 9 weeks, consistently delivering 25–30 qualified B2B sales meetings every month.'
    },
    {
      id: 4,
      title: 'How We Helped a B2B Outreach Software Generate 100K Views in 30 Days',
      client: 'B2B Sales Tech Startup',
      category: 'VIRAL INBOUND-LED OUTBOUND',
      highlightStat: '100K+ Impressions',
      metrics: [
        { label: 'Organic Views', value: '100K+' },
        { label: 'Inbound Inquiries', value: '320+' },
        { label: 'Lead Magnet Downloads', value: '1,450+' },
        { label: 'Ad Spend Required', value: '$0' }
      ],
      challenge: 'Zero brand recognition in a highly crowded competitive niche, with high acquisition costs from paid search ads.',
      strategy: 'Implemented our GNC (Growth, Nurture, Convert) content methodology with viral curiosity hooks and high-value lead magnet teardowns.',
      execution: [
        'Extracted top-performing hooks from Kleo viral database',
        'Published daily carousel and text teardowns showcasing tactical sales SOPs',
        'Automated comment scraping with PhantomBuster to capture all engaged leads',
        'Routed warm commenters into email nurturing sequences via Instantly.ai'
      ],
      outcome: 'Generated 100K+ organic impressions and 320+ high-intent inbound inquiries in the first 30 days without spending a dollar on ads.'
    },
    {
      id: 5,
      title: 'How Our In-House Inbound Infrastructure Led to 323+ Verified Leads',
      client: 'B2B SaaS & Growth Agency',
      category: 'DEMAND GENERATION SYSTEM',
      highlightStat: '323+ Inbound Leads',
      metrics: [
        { label: 'Verified Leads', value: '323+' },
        { label: 'Meeting Conversion', value: '28.4%' },
        { label: 'Pipeline Closed', value: '$380K' },
        { label: 'Lead Magnet ROI', value: '5.2x' }
      ],
      challenge: 'Inconsistent monthly lead flow relying almost entirely on unpredictable word-of-mouth referrals.',
      strategy: 'Created an evergreen inbound demand infrastructure turning social engagement into structured CRM sales pipelines.',
      execution: [
        'Created 4 proprietary B2B asset playbooks addressing urgent workflow hurdles',
        'Set up automated lead capture workflows linking LinkedIn to Clay and HubSpot',
        'Launched signal-based follow-ups triggered when prospects interacted with assets',
        'Provided weekly transparent performance tracking dashboards'
      ],
      outcome: 'Generated 323+ verified decision-maker leads and $380K in closed pipeline within 90 days.'
    },
    {
      id: 6,
      title: 'How We Helped a B2B Software Company Book 32 Demos in 45 Days',
      client: 'Chrome Extension Lead-Gen SaaS',
      category: 'PRODUCT-LED OUTBOUND',
      highlightStat: '32 Demos in 45 Days',
      metrics: [
        { label: 'Product Demos', value: '32 Calls' },
        { label: 'Targeting Timeframe', value: '45 Days' },
        { label: 'Demo-to-Trial Rate', value: '64%' },
        { label: 'Market Velocity', value: '8.5x' }
      ],
      challenge: 'New software product with innovative workflow required education-first pitching rather than generic hard sales messages.',
      strategy: 'Refined the Ideal Customer Profile (ICP), designed video-backed educational outreach, and established rigorous lead qualification criteria.',
      execution: [
        'Segmented ICP based on active browser extension usage and outbound volume',
        'Crafted conversational outbound scripts emphasizing the 3-minute workflow fix',
        'Installed Calendly routing forms ensuring only qualified companies booked calls',
        'Followed up with interactive product GIF demos to educate prospects'
      ],
      outcome: 'Secured 32 high-value product demos in 45 days, achieving a 64% demo-to-trial conversion rate.'
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-poppins font-extrabold text-[#FF1B6B] shadow-sm">
            <Award className="w-4 h-4 text-[#FF1B6B]" />
            PROVEN TRACK RECORD & CLIENT RESULTS
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Real B2B Case Studies: <br />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
              Verified Pipeline & Sales Calls
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Explore how ACQSA AI transforms outbound lead generation for B2B SaaS, IT enterprises, and high-value tech companies.
          </p>
        </div>

        {/* Case Study Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-full text-xs font-poppins font-bold transition-all border ${
                activeTab === idx
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              <span className="mr-1.5 font-mono text-[11px] opacity-70">0{cs.id}.</span>
              <span>{cs.client}</span>
            </button>
          ))}
        </div>

        {/* Active Case Study Detail Box */}
        <div className="bg-[#FAFAFC] rounded-3xl border-2 border-slate-200 p-8 sm:p-12 shadow-xl space-y-10">
          
          {/* Top Banner */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono font-extrabold uppercase px-3 py-1 rounded-full bg-purple-50 text-[#9333EA] border border-purple-200">
                  {caseStudies[activeTab].category}
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">
                  {caseStudies[activeTab].client}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 max-w-3xl">
                {caseStudies[activeTab].title}
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center shrink-0 min-w-[180px]">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block">PRIMARY OUTCOME</span>
              <span className="text-2xl font-poppins font-extrabold bg-gradient-to-r from-[#FF1B6B] to-[#0080FF] bg-clip-text text-transparent">
                {caseStudies[activeTab].highlightStat}
              </span>
            </div>
          </div>

          {/* 4 Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {caseStudies[activeTab].metrics.map((m, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center space-y-1">
                <span className="text-xs font-mono text-slate-500 font-medium">{m.label}</span>
                <div className="text-xl sm:text-2xl font-poppins font-extrabold text-slate-900">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Breakdown Grid: Challenge, Strategy, Execution, Outcome */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-xs font-mono font-extrabold uppercase tracking-wider text-rose-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" /> The Challenge
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {caseStudies[activeTab].challenge}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-xs font-mono font-extrabold uppercase tracking-wider text-indigo-600 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" /> Strategic Architecture
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {caseStudies[activeTab].strategy}
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xs font-mono font-extrabold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> Execution Playbook
              </h4>
              <div className="space-y-3">
                {caseStudies[activeTab].execution.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-medium">
                  <strong className="font-bold">Final Commercial Outcome:</strong> {caseStudies[activeTab].outcome}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
