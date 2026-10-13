import React, { useState } from 'react';
import { Mic, Search, PenTool, CheckCircle, BarChart3, ArrowRight, Sparkles, Clock } from 'lucide-react';

export const HowItWorksSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      icon: <Mic className="w-5 h-5 text-[#FF1B6B]" />,
      title: "Voice Capture Interview",
      subtitle: "45 minutes bi-weekly via Zoom / Loom",
      description: "We don't send you lengthy questionnaires. We hop on a rapid-fire strategic interview where you talk about what actually happened in your business: sales objections, product tradeoffs, industry shifts, and customer stories.",
      deliverable: "Recorded audio transcribed and indexed into your custom Founder Voice Knowledge Base.",
      founderCommitment: "45 mins every 2 weeks"
    },
    {
      num: "02",
      icon: <Search className="w-5 h-5 text-[#9333EA]" />,
      title: "Research & Positioning",
      subtitle: "ICP pain mapping & category teardowns",
      description: "We research your specific US/UK SaaS niche, competitor messaging, and your buyers' primary pain points. We map your organic insights into 4 distinct content pillars: Category Vision, Tactical Playbooks, Teardowns & Lessons, and Culture/Talent.",
      deliverable: "2-week content roadmap tailored around your ICP and commercial product roadmap.",
      founderCommitment: "0 minutes (handled end-to-end)"
    },
    {
      num: "03",
      icon: <PenTool className="w-5 h-5 text-[#0080FF]" />,
      title: "AI-Assisted Draft + Human Edit",
      subtitle: "Speed on research, craft on prose",
      description: "We leverage AI models for data synthesis, trend aggregation, and syntax variations — then an experienced executive ghostwriter meticulously rewrites every hook, sentence cadence, and conclusion. Zero robotic phrasing, zero corporate jargon.",
      deliverable: "High-density posts crafted in your distinctive cadence, tone, and technical depth.",
      founderCommitment: "0 minutes"
    },
    {
      num: "04",
      icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
      title: "Client Approval & Publishing",
      subtitle: "One-click Notion / Slack reviews",
      description: "You receive your upcoming 2 weeks of posts in a clean Notion board. You approve, leave comments, or request minor tweaks with a single click. Once greenlit, we format, optimize hooks, and handle native scheduling.",
      deliverable: "Ready-to-publish queue with recommended posting hours and engagement prompts.",
      founderCommitment: "10–15 mins to review & approve"
    },
    {
      num: "05",
      icon: <BarChart3 className="w-5 h-5 text-amber-500" />,
      title: "Monthly Commercial Reporting",
      subtitle: "Pipeline signals over vanity metrics",
      description: "At the end of each month, we don't just dump follower counts on you. We analyze profile views from target accounts, inbound DMs from buyers and investors, conversation reply rates, and which topics generated commercial interest.",
      deliverable: "Executive PDF & Loom teardown highlighting ICP engagement and commercial momentum.",
      founderCommitment: "10 mins monthly review"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#FAFAFC] text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#0080FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold tracking-tight text-slate-900 leading-tight">
            From raw founder thoughts to <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
              qualified inbound pipeline
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            A battle-tested 5-step executive ghostwriting operating system requiring less than 60 minutes of your time per month.
          </p>
        </div>

        {/* Step Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-poppins font-bold transition-all border ${
                activeStep === idx
                  ? 'bg-white border-slate-950 text-slate-950 shadow-md scale-105'
                  : 'bg-white/70 border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300'
              }`}
            >
              <span className={`w-5 h-5 rounded-full text-[10px] font-mono flex items-center justify-center font-bold ${
                activeStep === idx ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {s.num}
              </span>
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="bg-white rounded-3xl border-2 border-slate-200/90 p-8 sm:p-12 shadow-xl relative overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF1B6B] bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                  STEP {steps[activeStep].num} OF 05
                </span>
                <span className="text-xs font-mono text-slate-400 font-medium">
                  {steps[activeStep].subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                {steps[activeStep].description}
              </p>

              {/* Concrete deliverables */}
              <div className="p-4 rounded-xl bg-[#FAFAFC] border border-slate-200 space-y-2 text-xs">
                <div className="font-mono font-bold uppercase tracking-wider text-slate-500">
                  Deliverable:
                </div>
                <div className="text-slate-800 font-medium">
                  {steps[activeStep].deliverable}
                </div>
              </div>

              {/* Time commitment */}
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 w-fit">
                <Clock className="w-3.5 h-3.5" />
                <span>Founder commitment: <strong>{steps[activeStep].founderCommitment}</strong></span>
              </div>
            </div>

            {/* Right Preview Box (Linear style illustration) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono text-slate-400">
                <span>STAGE: {steps[activeStep].title.toUpperCase()}</span>
                <span className="text-[#FF1B6B] font-bold">ACQSA SYSTEM</span>
              </div>

              {/* Dynamic Mockup Content */}
              {activeStep === 0 && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                    <div className="text-rose-400 text-[10px] uppercase font-bold">Founder Voice Note Transcribe</div>
                    <p className="text-slate-300 italic text-[11px]">
                      "We noticed enterprise buyers in the UK kept pushing back on security questionnaires. Here's how we reframed SOC2 compliance into a sales accelerator..."
                    </p>
                  </div>
                  <div className="text-[11px] text-emerald-400">✓ Extracted: 3 High-Intent Hooks & 1 Category Playbook</div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1.5">
                    <div className="text-purple-400 text-[10px] uppercase font-bold">ICP Alignment Analysis</div>
                    <div className="text-slate-200 text-[11px]">Target Audience: VPs of Engineering & CTOs ($10M–$50M ARR)</div>
                    <div className="text-slate-400 text-[10px]">Topic: Reducing Cloud Migration Friction</div>
                  </div>
                  <div className="text-[11px] text-purple-300">✓ Angle: Unpopular opinion on Kubernetes sprawl</div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1.5">
                    <div className="text-blue-400 text-[10px] uppercase font-bold">Draft Teardown Polish</div>
                    <p className="text-slate-300 text-[11px] line-clamp-3">
                      "Most SaaS founders treat security as a checkbox at month 11. That's why your Series B enterprise deals take 6 months to close..."
                    </p>
                  </div>
                  <div className="text-[11px] text-blue-300">✓ Human edited: Tone matched to founder cadence</div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>NOTION QUEUE</span>
                      <span className="text-emerald-400 font-bold">READY TO PUBLISH</span>
                    </div>
                    <div className="text-white text-xs font-bold">Post #04: The 3 SaaS Metrics Board Members Misread</div>
                    <div className="text-slate-400 text-[10px]">Scheduled: Tuesday 8:30 AM EST (Peak US/UK overlap)</div>
                  </div>
                  <div className="text-[11px] text-emerald-400">✓ Approved in 45 seconds on mobile</div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>MONTHLY COMMERCIAL SIGNALS</span>
                      <span className="text-amber-400 font-bold">REPORT</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div>Target Account Views: +142</div>
                      <div>Inbound DM Inquiries: 6 Qualified</div>
                      <div>Avg Engaged Seniority: VP+ (78%)</div>
                      <div>Pipeline Value: $120k+ opps</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-amber-300">✓ Full qualitative commentary included</div>
                </div>
              )}

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Time saved monthly:</span>
                <span className="text-emerald-400 font-bold">~25 hours</span>
              </div>
            </div>

          </div>
        </div>

        {/* CTA underneath how it works */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
          >
            <span>Start with a low-risk paid pilot ($1,500)</span>
            <ArrowRight className="w-4 h-4 text-[#FF1B6B]" />
          </button>
        </div>

      </div>
    </section>
  );
};
