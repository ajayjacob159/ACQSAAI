import React from 'react';
import { Clock, Bot, DollarSign, XCircle, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    {
      icon: <Clock className="w-5 h-5 text-rose-500" />,
      tag: "TIME-STARVED FOUNDERS",
      title: "You know LinkedIn matters, but you run a Series A–B company",
      description: "Hiring, product roadmap, board meetings, and enterprise pipeline take 70+ hours a week. Writing thoughtful 500-word category teardowns gets pushed to Sunday night — and then doesn't happen.",
      quote: "“I have 20 draft ideas in Notes app, but zero published posts this month.”"
    },
    {
      icon: <Bot className="w-5 h-5 text-purple-500" />,
      tag: "GENERIC AI & BROETRY",
      title: "ChatGPT regurgitations & vanity likes destroy founder credibility",
      description: "Low-effort AI generators output polished buzzwords that sound like every other junior marketer. Your prospective enterprise buyers can tell in 3 seconds, and viral fluff produces zero pipeline.",
      quote: "“15,000 impressions from random engagement pods don't pay ARR payroll.”"
    },
    {
      icon: <DollarSign className="w-5 h-5 text-blue-500" />,
      tag: "BLOATED AGENCIES",
      title: "US/UK agencies charge $6k–$10k/mo for outsourced junior writers",
      description: "Traditional personal branding agencies pitch senior partners, then pass your voice to fresh college grads who don't know what ARR, ACV, PLG, or churn means. You spend more time editing drafts than writing them.",
      quote: "“I was practically paying $8,000/month just to edit junior-level drafts.”"
    }
  ];

  return (
    <section id="problem" className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-600">
            <XCircle className="w-3.5 h-3.5" />
            <span>THE SAAS FOUNDER LINKEDIN DILEMMA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold tracking-tight text-slate-900 leading-tight">
            Why most founder LinkedIn efforts <br className="hidden sm:inline" />
            <span className="text-rose-600">fail to produce commercial pipeline</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Building a personal brand shouldn't require trading off between soundbite fluff and 10 hours of weekly writing time.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {painPoints.map((item, idx) => (
            <div 
              key={idx}
              className="p-7 sm:p-8 rounded-2xl bg-[#FAFAFC] border-2 border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between space-y-6 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-poppins font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-500 italic">
                {item.quote}
              </div>
            </div>
          ))}
        </div>

        {/* Solution Bridge banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] font-mono text-[#FF1B6B] uppercase font-bold tracking-wider">
              THE ALTERNATIVE
            </span>
            <h4 className="text-lg sm:text-xl font-poppins font-bold text-white">
              Authentic voice extraction + AI-assisted research + India cost leverage.
            </h4>
            <p className="text-xs text-slate-400">
              Only 45 minutes of your time every 2 weeks. Zero generic AI output. Real category point-of-view.
            </p>
          </div>

          <a
            href="#how-it-works"
            className="px-5 py-3 rounded-full bg-white text-slate-900 font-poppins font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shrink-0"
          >
            See the 5-step process →
          </a>
        </div>

      </div>
    </section>
  );
};
