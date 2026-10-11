import React, { useState } from 'react';
import { 
  FileText, 
  Share2, 
  DownloadCloud, 
  Database, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Flame, 
  ExternalLink,
  Layers,
  TrendingUp,
  Mail,
  Users
} from 'lucide-react';

export const InboundOutboundSystem: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Create Sales Assets',
      tag: 'ASSET CREATION',
      icon: <FileText className="w-5 h-5 text-[#FF1B6B]" />,
      summary: 'Engineer high-converting lead magnets, teardowns, and actionable B2B frameworks.',
      bullets: [
        'Identify specific pain points in your target ICP’s daily operations',
        'Package solutions into checklists, SOPs, Notion swipe files, or ROI calculators',
        'Demonstrate deep domain expertise before initiating any sales conversation',
        'Establish immediate authority so prospects see you as a peer, not a vendor'
      ],
      techStack: ['Notion', 'Canva Pro', 'Figma', 'Loom Video Teardowns'],
      stat: '4.8x higher response when offering a proven asset vs cold pitching'
    },
    {
      number: '02',
      title: 'Publish LinkedIn Lead Magnet',
      tag: 'CONTENT DISTRIBUTION',
      icon: <Share2 className="w-5 h-5 text-[#9333EA]" />,
      summary: 'Post value-first breakdowns with proven viral hooks using the GNC formula.',
      bullets: [
        'Structure posts with battle-tested curiosity hooks that capture executive feeds',
        'Provide 80% of actionable value directly in the post body to earn engagement',
        'End with an irresistible low-friction CTA: "Comment SYSTEM to receive the resource"',
        'Maintain a consistent cadence of at least 1 lead magnet post per week'
      ],
      techStack: ['LinkedIn Native', 'Kleo Hooks Database', 'Taplio Analytics'],
      stat: '100+ high-intent comments per post from verified decision-makers'
    },
    {
      number: '03',
      title: 'Scrape Comments & Likers',
      tag: 'AUDIENCE EXTRACTION',
      icon: <DownloadCloud className="w-5 h-5 text-[#0080FF]" />,
      summary: 'Automatically harvest all engaged prospects who responded to your post.',
      bullets: [
        'Deploy automated extractors to monitor post engagements within minutes',
        'Capture LinkedIn profile URLs, commenter names, headlines, and comment text',
        'Filter out spam bots, competitors, and non-ICP job titles automatically',
        'Create a real-time list of prospects showing active, documented intent'
      ],
      techStack: ['PhantomBuster', 'Apify LinkedIn Scraper', 'Make.com Webhooks'],
      stat: '100% warm prospects with verified interest in your specific topic'
    },
    {
      number: '04',
      title: 'Enrich the List via Clay',
      tag: 'DATA ENRICHMENT',
      icon: <Database className="w-5 h-5 text-[#10B981]" />,
      summary: 'Waterfall-enrich corporate email, company size, revenue, and buying signals.',
      bullets: [
        'Waterfall enrichment across Prospeo, Findymail, and Datagma for verified work emails',
        'Verify MX records, catch-all status, and mailbox validity (0% bounce rate guarantee)',
        'Enrich firmographic data: employee headcount, funding stage, tech stack, and location',
        'Trigify signal stacking: identify secondary hiring and growth triggers'
      ],
      techStack: ['Clay.com', 'Prospeo.io', 'Trigify.io', 'NeverBounce'],
      stat: '98.4% verified deliverability rate on enriched lead data'
    },
    {
      number: '05',
      title: 'Launch Warm Email Sequence',
      tag: 'MULTI-TOUCH OUTREACH',
      icon: <Send className="w-5 h-5 text-[#FF1B6B]" />,
      summary: 'Send context-rich, conversational emails referencing their specific engagement.',
      bullets: [
        'Immediate reference: "Hey [Name], saw you commented on my LinkedIn post about..."',
        'Deliver the requested asset upfront with zero friction or gating',
        'Follow up with tailored insights specifically relevant to their company size',
        'Invite to a 15-minute tactical discussion: convert warm replies into booked sales calls'
      ],
      techStack: ['Instantly.ai', 'Smartlead.ai', 'Spintax Engine', 'Dedicated Inboxes'],
      stat: '62% open rates, 24% reply rates, and 30–50 booked calls/month'
    }
  ];

  return (
    <section id="inbound-outbound" className="py-24 bg-[#FAFAFC] text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-200 text-xs font-poppins font-extrabold text-[#FF1B6B] shadow-sm">
            <Flame className="w-4 h-4 text-[#FF1B6B]" />
            PROPRIETARY ACQUISITION PLAYBOOK
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            5-Step Inbound-Led <br />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
              Outbound System
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Stop sending cold spam. Turn real LinkedIn engagement into warm, high-converting sales conversations through automated enrichment and hyper-relevant outreach.
          </p>
        </div>

        {/* Step Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-poppins font-extrabold transition-all border ${
                activeStep === idx
                  ? 'bg-white border-[#FF1B6B] text-[#FF1B6B] shadow-md scale-105'
                  : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                activeStep === idx ? 'bg-[#FF1B6B] text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {step.number}
              </span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 sm:p-12 shadow-xl relative overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#FF1B6B] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                  {steps[activeStep].tag}
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">
                  STEP {steps[activeStep].number} OF 05
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900">
                {steps[activeStep].title}
              </h3>

              <p className="text-base text-slate-700 font-medium leading-relaxed">
                {steps[activeStep].summary}
              </p>

              <div className="space-y-3 pt-2">
                {steps[activeStep].bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-600 font-medium">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mr-2">
                  Stack:
                </span>
                {steps[activeStep].techStack.map((tool, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Demo Preview Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-purple-50/30 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 font-bold uppercase">
                  ACQSA AI ENGINE
                </span>
              </div>

              {/* Interactive Micro Graphic Based on Step */}
              {activeStep === 0 && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between text-slate-500">
                      <span>ASSET_TYPE</span>
                      <span className="text-[#FF1B6B] font-bold">PDF Playbook / Sheet</span>
                    </div>
                    <div className="text-slate-900 font-bold text-sm">
                      "B2B Outbound Deliverability Master Checklist 2026"
                    </div>
                    <div className="text-slate-500 text-[11px]">
                      14-page teardown with exact DNS records, Spintax templates, and ICP filters.
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-3 font-sans text-xs">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FF1B6B] to-[#0080FF] text-white flex items-center justify-center font-bold text-[10px]">
                        AI
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">ACQSA AI Founder</div>
                        <div className="text-[10px] text-slate-400">Published 2h ago • 🌐</div>
                      </div>
                    </div>
                    <p className="text-slate-700 text-xs leading-relaxed">
                      "We tested 400 cold email campaigns across 30 inboxes. 82% of founders make this 1 DNS mistake..."
                    </p>
                    <div className="bg-rose-50 text-[#FF1B6B] p-2 rounded-lg font-bold text-[11px]">
                      💬 "Comment 'SYSTEM' and I'll send the step-by-step setup doc."
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-2 font-mono text-xs">
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">Alex Reed</div>
                      <div className="text-[10px] text-slate-500">VP Sales @ B2B SaaS</div>
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-bold">
                      Extracted ✓
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">Sarah Jenkins</div>
                      <div className="text-[10px] text-slate-500">Founder & CEO @ ScaleTech</div>
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-bold">
                      Extracted ✓
                    </span>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-2 font-mono text-xs">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">WATERFALL ENRICHMENT</span>
                      <span className="text-emerald-600 font-bold text-[11px]">CLAY VERIFIED</span>
                    </div>
                    <div className="text-slate-800 font-bold">alex@scaletech.io</div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500">
                      <div>Company: ScaleTech</div>
                      <div>Revenue: $4.2M ARR</div>
                      <div>Headcount: 45</div>
                      <div>Status: Primary MX Active</div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-3 font-sans text-xs">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>SUBJECT: Asset from LinkedIn</span>
                      <span className="text-[#FF1B6B] font-bold">SENT VIA INSTANTLY</span>
                    </div>
                    <p className="text-slate-700 text-xs italic">
                      "Hey Alex, noticed your comment on my post about B2B outbound systems. Here is the direct link to the framework..."
                    </p>
                    <div className="flex items-center justify-between text-[11px] font-mono pt-2 border-t border-slate-100">
                      <span className="text-emerald-600 font-bold">Open Rate: 68.4%</span>
                      <span className="text-[#0080FF] font-bold">Reply: 26.2%</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Proven Metric Badge */}
              <div className="p-4 rounded-xl bg-white border border-purple-200 shadow-sm flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#9333EA] shrink-0" />
                <span className="text-xs font-poppins font-bold text-slate-800">
                  {steps[activeStep].stat}
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="text-center pt-4">
          <a
            href="#audit"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] text-white font-poppins font-extrabold text-sm tracking-wide shadow-xl shadow-purple-500/20 hover:scale-105 transition-all"
          >
            <span>Deploy This System For Your B2B Company</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
