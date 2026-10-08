import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you manage our entire LinkedIn account?",
      a: "No. ACQSA AI is not a generic social-media agency or personal branding service. We build a founder-led demand-generation system focused strictly on ICP targeting, decision-maker research, conversation sequences, qualification, and sales call booking. The founder retains control while we handle the heavy operational lifting."
    },
    {
      q: "Do you guarantee leads?",
      a: "No honest B2B company guarantees leads because commercial outcomes depend on your ICP fit, deal size, market timing, product offer, and pricing. Our focus is on building a predictable, repeatable sales outbound system and maximizing your volume of qualified sales conversations."
    },
    {
      q: "Do you use automation?",
      a: "No mass automation or spam bots. Unsolicited bot messaging alienates target executive buyers and risks your LinkedIn account safety. ACQSA AI prioritizes research-backed, account-level manual conversations and structured follow-ups."
    },
    {
      q: "Do we need a large LinkedIn following?",
      a: "No. Our system is fundamentally based on ICP identification, target accounts, direct decision-makers, and two-way conversations—not vanity follower counts. You can generate consistent qualified sales pipeline with under 500 connections."
    },
    {
      q: "Does the founder need to create all the content?",
      a: "No. ACQSA AI structures the founder's positioning, profile assets, and value-add teardowns while preserving the founder's authentic voice and technical authority."
    },
    {
      q: "How quickly can results happen?",
      a: "We do not promise unrealistic overnight results. Outbound momentum typically builds within the first 30–60 days as account research, profile positioning, and conversation cadences mature."
    }
  ];

  return (
    <section className="py-24 bg-[#101318] text-white border-b border-[#20242A] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3 py-1 rounded-full bg-[#080A0C] border border-[#20242A]">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
            HONEST ANSWERS FOR B2B FOUNDERS
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#080A0C] border border-[#20242A] rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-extrabold text-sm sm:text-base text-white hover:text-[#B8FF3D] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#B8FF3D] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-[#A7ADB5] font-medium leading-relaxed border-t border-[#20242A]/60 pt-4 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
