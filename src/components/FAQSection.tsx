import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How much does ACQSA AI charge for a multichannel campaign?",
      a: "Our pricing is structured around your required outbound volume, number of dedicated secondary inboxes, and target market complexity. We offer flexible monthly retainer models and performance-backed agreements where you only invest in real, qualified sales conversations. Schedule a strategy session for an exact quote tailored to your ICP."
    },
    {
      q: "What if I only want to focus on cold outreach?",
      a: "While our full multichannel engine delivers the highest ROI by combining cold email with LinkedIn inbound and outbound, we do offer dedicated Cold Email Infrastructure and pure cold outreach packages. We will purchase secondary domains, configure dual-ESP authentication (Google + Microsoft), warm up the inboxes, and execute targeted campaigns exclusively via email."
    },
    {
      q: "Are software costs included?",
      a: "Yes. All enterprise infrastructure—including secondary domain DNS configuration, email verification tools (NeverBounce/Prospeo), Clay waterfall enrichment credits, and sending software (Instantly/Smartlead)—is managed within our operational stack, eliminating surprise software subscriptions for your team."
    },
    {
      q: "How long does it take to launch a campaign?",
      a: "Campaign onboarding and asset creation typically take 7–10 business days. For cold email, secondary domains undergo our mandatory 14-day algorithmic peer warmup to guarantee 100% inbox deliverability before scaling to full volume. Inbound-led LinkedIn assets often go live within the first 5 business days."
    },
    {
      q: "When can I expect to see results?",
      a: "Most B2B clients begin seeing positive prospect replies and booked discovery calls within the first 2–3 weeks of active outreach. By month two, as the secondary inboxes reach peak warmup and the multichannel flywheel compound, volume typically scales to 25–45 qualified sales meetings per month."
    },
    {
      q: "How do I know if I’m getting qualified leads?",
      a: "Every lead passes through our strict 3-tier qualification filter (Company headcount, annual revenue/funding, verified decision-maker title, and confirmed pain point) before they can book onto your calendar. We never send vanity clicks or junior employees."
    },
    {
      q: "How will I receive updates on my campaign?",
      a: "You receive a live Notion/Airtable client dashboard tracking every prospect, email open rate, reply rate, and booked call. In addition, our team conducts weekly strategic sprint calls and shares weekly summary reports detailing KPIs, A/B test iterations, and upcoming pipeline."
    }
  ];

  return (
    <section id="faqs" className="py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-poppins font-extrabold text-slate-800 shadow-sm">
            <HelpCircle className="w-4 h-4 text-[#0080FF]" />
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything You Need <br />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
              To Know Before Starting
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Clear, transparent answers about our multichannel systems, deliverables, and performance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAFAFC] border-2 border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:border-slate-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-poppins font-extrabold text-base text-slate-900 hover:text-[#0080FF] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-50 border-blue-200 text-[#0080FF]' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 mt-2">
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
