import React, { useState } from 'react';
import { AlertTriangle, XCircle, ArrowRight, Zap, Ban, Flame } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  const problemCards = [
    {
      title: 'Posting Without Pipeline',
      subtitle: 'Vanity Reach vs Sales Revenue',
      quote: '“Thousands of impressions can still produce zero qualified opportunities.”',
      description: 'Chasing viral likes and vanity reach creates superficial engagement without generating a single B2B sales conversation with a real decision-maker.',
      icon: <XCircle className="w-5 h-5 text-[#FF1B6B]" />
    },
    {
      title: 'Random Outreach',
      subtitle: 'Unsegmented Connection Requests',
      quote: '“Connecting with anyone who looks vaguely relevant is not targeting.”',
      description: 'Blasting connection requests without ICP filters, trigger research, or account scoring alienates target buyers and damages founder authority.',
      icon: <Ban className="w-5 h-5 text-[#9333EA]" />
    },
    {
      title: 'No Follow-Up System',
      quote: '“The first message rarely closes the deal. The system between first touch and sales call matters.”',
      subtitle: 'Lost Prospect Retention',
      description: 'Without structured multi-touch conversation tracking, 80% of warm replies fall through the cracks before reaching sales qualification.',
      icon: <AlertTriangle className="w-5 h-5 text-[#0077FF]" />
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-poppins font-extrabold text-[#FF1B6B] shadow-sm">
            <Flame className="w-4 h-4 text-[#FF1B6B]" />
            THE PIPELINE DIAGNOSIS
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold uppercase tracking-tight text-slate-900 leading-tight">
            YOUR LINKEDIN IS NOT THE PROBLEM. <br />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0077FF] bg-clip-text text-transparent">
              YOUR SALES SYSTEM IS.
            </span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-left sm:text-center text-slate-700 text-sm sm:text-base font-medium leading-relaxed bg-[#FAFAFC] p-6 sm:p-8 rounded-3xl border-2 border-slate-200 shadow-sm">
            <p>
              Most founders treat LinkedIn as a publishing platform. <br className="hidden sm:inline" />
              <strong className="text-slate-900 font-extrabold">Post. Wait. Get likes. Gain followers. Hope someone buys.</strong>
            </p>
            <p className="text-xs text-[#FF1B6B] font-mono font-bold uppercase">
              ✕ That is not a predictable sales system.
            </p>
            <p className="text-slate-900 font-bold pt-2 border-t border-slate-200">
              ACQSA AI turns LinkedIn into a structured outbound channel designed around your ICP, target accounts, decision-makers, messaging, conversations and qualification.
            </p>
          </div>
        </div>

        {/* Skylead Style Interactive Tab Switcher & Display Panel */}
        <div className="space-y-8">
          
          {/* Tab Selector Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {problemCards.map((card, idx) => {
              const isActive = activeCard === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCard(idx)}
                  className={`w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-poppins font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 border-2 ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-105'
                      : 'bg-white text-slate-700 hover:text-slate-900 border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  {card.icon}
                  <span>{card.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Card Preview Box */}
          <div className="bg-[#FAFAFC] border-2 border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#FF1B6B] bg-rose-100/80 px-3 py-1 rounded-full border border-rose-200">
                  {problemCards[activeCard].subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 mt-2">
                  {problemCards[activeCard].title}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                {problemCards[activeCard].icon}
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-inner font-mono text-xs text-[#FF1B6B] font-extrabold italic">
              {problemCards[activeCard].quote}
            </div>

            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              {problemCards[activeCard].description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
