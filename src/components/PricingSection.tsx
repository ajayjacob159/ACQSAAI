import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage: (pkgTitle: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  const packages = [
    {
      title: "Paid Pilot",
      tag: "LOW-RISK ENTRY POINT",
      price: "$1,500",
      period: "one-time (4–6 weeks)",
      description: "Test voice alignment, content quality, and commercial workflow before committing to an ongoing monthly retainer.",
      features: [
        "1x 60-min in-depth Founder Voice & ICP Strategy Session",
        "Complete LinkedIn Profile & Banner Positioning Optimization",
        "8 high-authority bespoke ghostwritten posts (2/week)",
        "Notion review workspace with unlimited asynchronous revisions",
        "End-of-pilot Commercial Signal & Engagement Report",
        "Seamless option to roll into Core Retainer"
      ],
      ctaText: "Start With Paid Pilot",
      popular: false
    },
    {
      title: "Core Retainer",
      tag: "MOST POPULAR",
      price: "$2,800",
      period: "/ month",
      description: "Full-service founder personal branding and executive ghostwriting for consistent category authority and inbound pipeline.",
      features: [
        "2x 45-min Bi-weekly Strategic Voice Interviews",
        "12–14 custom ghostwritten posts per month (3/week)",
        "Mix of category vision, tactical playbooks, teardowns & culture",
        "Native scheduling, hook testing & formatting optimization",
        "Target account engagement recommendations & comment playbook",
        "Monthly commercial metrics review (target views, inbound DMs)",
        "Month-to-month commitment (cancel anytime with 14 days notice)"
      ],
      ctaText: "Choose Core Retainer",
      popular: true
    },
    {
      title: "Premium Retainer",
      tag: "HIGH-TOUCH / MULTI-EXECUTIVE",
      price: "$3,800",
      period: "/ month",
      description: "Maximum authority for founders seeking aggressive market presence, newsletter integration, or co-founder coverage.",
      features: [
        "Everything in Core Retainer included",
        "16–20 high-impact posts per month (4–5/week)",
        "Monthly long-form LinkedIn Newsletter or Substack article",
        "Dedicated competitor and industry signal monitoring",
        "Direct Slack channel access for rapid commentary on breaking news",
        "Optional co-founder / CTO profile coordination",
        "Priority 24-hour turnaround on urgent draft requests"
      ],
      ctaText: "Choose Premium",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#FAFAFC] text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-slate-800 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FF1B6B]" />
            <span>TRANSPARENT PRICING IN USD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold tracking-tight text-slate-900 leading-tight">
            Predictable investment. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
              Compounding commercial return.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Start with a fixed-scope 4–6 week pilot. Transition to month-to-month retainers only when you experience voice fidelity and quality firsthand.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 sm:p-9 space-y-8 flex flex-col justify-between border-2 transition-all duration-200 relative ${
                pkg.popular
                  ? 'bg-white border-slate-950 shadow-2xl scale-[1.02] ring-4 ring-slate-950/5'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-950 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                  RECOMMENDED FOR SERIES A–B
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                    {pkg.tag}
                  </span>
                  <h3 className="text-2xl font-poppins font-extrabold text-slate-900">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {pkg.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pt-2 border-t border-slate-100 flex items-baseline gap-1.5">
                  <span className="text-4xl font-poppins font-extrabold text-slate-900 tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-medium">
                    {pkg.period}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    What's included:
                  </span>
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-100">
                <button
                  onClick={() => onSelectPackage(pkg.title)}
                  className={`w-full py-3.5 rounded-full font-poppins font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm ${
                    pkg.popular
                      ? 'bg-slate-950 hover:bg-slate-800 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF1B6B]" />
                </button>
                <div className="text-center pt-2 text-[10px] font-mono text-slate-400">
                  No hidden fees • Transparent monthly terms
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Pricing Guarantee & Commercial disclaimer */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center max-w-3xl mx-auto space-y-2 text-xs text-slate-600 font-mono shadow-xs">
          <div className="flex items-center justify-center gap-2 font-bold text-slate-900">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Commercial Positioning Commitment</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            We don't guarantee vanity meeting quotas or fake follower spikes. We provide high-fidelity category authority, authentic founder resonance, and qualified inbound buyer conversations.
          </p>
        </div>

      </div>
    </section>
  );
};
