import React from 'react';
import { ArrowRight, CheckCircle2, Zap, ShieldCheck, Flame, Users, Sparkles } from 'lucide-react';

interface ServicePackagesProps {
  onDiscussBusiness: (packageTitle: string) => void;
}

export const ServicePackages: React.FC<ServicePackagesProps> = ({ onDiscussBusiness }) => {
  const packages = [
    {
      title: 'COLD EMAIL INFRASTRUCTURE',
      tag: 'TECHNICAL DELIVERABILITY',
      description: 'Complete technical setup of your outbound email engine with guaranteed 100% inbox deliverability.',
      icon: <ShieldCheck className="w-6 h-6 text-[#0080FF]" />,
      deliverables: [
        '5–10 secondary domains purchased & configured',
        'Dual-ESP setup (Google Workspace + Microsoft 365 Exchange)',
        'Full DNS records: SPF, DKIM, DMARC, custom CNAME tracking',
        '14-day gradual algorithmic peer warmup protocol',
        'Dynamic Spintax templates with 1,000+ variations',
        'Up to 20 dedicated inboxes ready for safe high-volume sending'
      ],
      popular: false
    },
    {
      title: 'MULTICHANNEL GROWTH ENGINE',
      tag: 'END-TO-END PIPELINE SYSTEM',
      description: 'Our flagship 360-degree acquisition OS combining Cold Email, LinkedIn Outbound, and Inbound-Led Outbound.',
      icon: <Flame className="w-6 h-6 text-[#FF1B6B]" />,
      deliverables: [
        'Full Cold Email Infrastructure with 20+ dedicated inboxes',
        'LinkedIn Founder Positioning, Custom Banner & GNC Content Strategy',
        'Inbound-Led Outbound: Scrape post commenters & likers weekly',
        'Clay Waterfall Enrichment (Prospeo work emails + Trigify signals)',
        'Personalized multi-touch cold email + LinkedIn sequences',
        'Active prospect qualification & direct calendar booking',
        'Guaranteed 30–50 qualified B2B sales conversations per month'
      ],
      popular: true
    },
    {
      title: 'DEDICATED GTM SALES SQUAD',
      tag: 'REMOTE OFFSHORE BDR TEAM',
      description: 'We recruit, train, and manage an in-house offshore sales development team operating our validated playbooks.',
      icon: <Users className="w-6 h-6 text-[#9333EA]" />,
      deliverables: [
        'Everything in Multichannel Growth Engine included',
        'Full recruitment, vetting, and training of 2 dedicated remote BDRs',
        '80% cost savings compared to traditional domestic SDR salaries',
        'Full software sales tech stack integration (CRM, Instantly, Clay)',
        'Daily management, call recordings review & objection handling',
        'Fully operational within 9 weeks with meeting volume guarantee'
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-24 bg-[#FAFAFC] text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-200 text-xs font-poppins font-extrabold text-[#9333EA] shadow-sm">
            <Sparkles className="w-4 h-4 text-[#9333EA]" />
            TRANSPARENT SERVICE MODELS
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            How We Work With <br />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
              Founder-Led B2B Companies
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Choose the acquisition model that fits your current stage. Every engagement is built for high commercial return and predictable pipeline growth.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 sm:p-10 space-y-8 flex flex-col justify-between border-2 transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-white border-[#FF1B6B] shadow-2xl scale-[1.02] ring-4 ring-rose-500/10'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-md hover:shadow-xl'
              }`}
            >
              {/* Most Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FF1B6B] to-[#9333EA] text-white text-[11px] font-poppins font-extrabold uppercase tracking-wider shadow-md">
                  MOST POPULAR • 30–50 CALLS / MO
                </div>
              )}

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    {pkg.icon}
                  </div>
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {pkg.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-poppins font-extrabold text-slate-900 tracking-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-slate-400 block">
                    WHAT'S INCLUDED:
                  </span>
                  {pkg.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                      <span className="text-xs text-slate-700 font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={() => onDiscussBusiness(pkg.title)}
                  className={`w-full py-4 rounded-full font-poppins font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] text-white hover:scale-[1.02] shadow-purple-500/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>Discuss Your Growth Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
