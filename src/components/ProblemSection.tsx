import React, { useState } from 'react';
import { AlertTriangle, XCircle, ArrowRight, Zap, Ban, Activity } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const problemCards = [
    {
      title: 'Posting Without Pipeline',
      quote: '“Thousands of impressions can still produce zero qualified opportunities.”',
      description: 'Chasing viral likes and vanity reach creates superficial engagement without generating a single B2B sales conversation with a decision-maker.',
      icon: <XCircle className="w-5 h-5 text-rose-500" />
    },
    {
      title: 'Random Outreach',
      quote: '“Connecting with anyone who looks vaguely relevant is not targeting.”',
      description: 'Blasting connection requests to broad lists without trigger research, ICP filters, or account scoring alienates target buyers and damages founder authority.',
      icon: <Ban className="w-5 h-5 text-amber-500" />
    },
    {
      title: 'No Follow-Up System',
      quote: '“The first message rarely closes the deal. The system between first touch and sales call matters.”',
      description: 'Without structured multi-touch conversation tracking, 80% of warm replies fall through the cracks before reaching sales qualification.',
      icon: <AlertTriangle className="w-5 h-5 text-[#B8FF3D]" />
    }
  ];

  return (
    <section id="problem" className="py-24 bg-[#080A0C] text-white border-b border-[#20242A] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-rose-400 font-bold px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30">
            THE PIPELINE DIAGNOSIS
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            YOUR LINKEDIN IS NOT THE PROBLEM. <br />
            <span className="text-lime-gradient">YOUR SALES SYSTEM IS.</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-left sm:text-center text-[#A7ADB5] text-sm sm:text-base font-medium leading-relaxed bg-[#101318] p-6 rounded-2xl border border-[#20242A]">
            <p>
              Most founders treat LinkedIn as a publishing platform. <br className="hidden sm:inline" />
              <strong className="text-white">Post. Wait. Get likes. Gain followers. Hope someone buys.</strong>
            </p>
            <p className="text-xs text-rose-400 font-mono font-bold">
              ✕ That is not a predictable sales system.
            </p>
            <p className="text-white font-semibold pt-2 border-t border-[#20242A]">
              ACQSA AI turns LinkedIn into a structured outbound channel designed around your ICP, target accounts, decision-makers, messaging, conversations and qualification.
            </p>
          </div>
        </div>

        {/* 3 Interactive Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problemCards.map((card, idx) => {
            const isHovered = activeCard === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                className={`b2b-card p-8 space-y-4 relative transition-all duration-300 ${
                  isHovered ? 'border-[#B8FF3D] bg-[#101318] shadow-2xl scale-105' : 'border-[#20242A]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#A7ADB5]">PROBLEM 0{idx + 1}</span>
                  {card.icon}
                </div>

                <h3 className="text-xl font-heading font-extrabold uppercase text-white group-hover:text-[#B8FF3D] transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs font-mono italic text-[#B8FF3D] bg-[#080A0C] p-3 rounded-lg border border-[#20242A] leading-relaxed">
                  {card.quote}
                </p>

                <p className="text-xs text-[#A7ADB5] leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
