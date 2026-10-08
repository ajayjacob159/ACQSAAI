import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Target } from 'lucide-react';

interface ServicePackagesProps {
  onDiscussBusiness: (packageTitle: string) => void;
}

export const ServicePackages: React.FC<ServicePackagesProps> = ({ onDiscussBusiness }) => {
  const packages = [
    {
      title: 'FOUNDATION',
      tag: 'POSITIONING & ICP ARCHITECTURE',
      deliverables: [
        'ICP Definition & Target Buyer Personas',
        'Founder LinkedIn Profile Positioning & Banner',
        'Core Value Proposition & Messaging Strategy',
        'Outreach Message Sequence Blueprints'
      ],
      cta: 'DISCUSS YOUR BUSINESS →'
    },
    {
      title: 'PIPELINE',
      tag: 'OUTBOUND ENGAGEMENT SYSTEM',
      deliverables: [
        'Everything in FOUNDATION Package',
        'Curated Target Account Lists (250-500 accounts)',
        'Decision-Maker Research & Verification',
        'Manual Dialogue Sequence Execution',
        'Multi-Touch Follow-Up Cadences'
      ],
      cta: 'DISCUSS YOUR BUSINESS →',
      popular: true
    },
    {
      title: 'FULL ENGINE',
      tag: 'COMPLETE DEMAND GENERATION OS',
      deliverables: [
        'Everything in PIPELINE Package',
        'Dedicated Prospect Research Dossiers',
        'Commercial Intent Qualification',
        'Direct Founder Calendar Booking',
        'Simple CRM Integration & Management',
        'Transparent Weekly Performance Reporting'
      ],
      cta: 'DISCUSS YOUR BUSINESS →'
    }
  ];

  return (
    <section className="py-24 bg-[#101318] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3 py-1 rounded-full bg-[#080A0C] border border-[#20242A]">
            SERVICE MODEL & PACKAGES
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white">
            WHAT WE ACTUALLY DO
          </h2>

          <p className="text-sm sm:text-base text-[#A7ADB5] max-w-2xl mx-auto font-medium">
            Structured engagement tiers built around your company's growth stage and pipeline targets.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`bg-[#080A0C] rounded-2xl p-8 space-y-8 flex flex-col justify-between border relative ${
                pkg.popular ? 'border-[#B8FF3D] shadow-2xl ring-1 ring-[#B8FF3D]/30 scale-105' : 'border-[#20242A]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#B8FF3D] text-[#080A0C] text-[10px] font-mono font-extrabold uppercase tracking-wider">
                  MOST POPULAR SYSTEM
                </div>
              )}

              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#B8FF3D] uppercase tracking-wider">{pkg.tag}</span>
                <h3 className="text-2xl font-heading font-extrabold uppercase text-white">{pkg.title}</h3>
                <div className="w-full h-px bg-[#20242A]" />

                <div className="space-y-3">
                  <span className="text-[11px] font-mono text-[#A7ADB5] uppercase font-bold">SYSTEM DELIVERABLES:</span>
                  <ul className="space-y-3">
                    {pkg.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#A7ADB5] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#B8FF3D] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onDiscussBusiness(pkg.title)}
                className={`w-full py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all ${
                  pkg.popular 
                    ? 'bg-[#B8FF3D] text-[#080A0C] hover:scale-105' 
                    : 'bg-[#101318] text-white border border-[#20242A] hover:border-[#B8FF3D]'
                }`}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
