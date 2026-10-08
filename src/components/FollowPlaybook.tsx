import React from 'react';
import { ArrowRight, BookOpen, CheckCircle2, Linkedin } from 'lucide-react';

export const FollowPlaybook: React.FC = () => {
  const topics = [
    'ICP definition & target filters',
    'Founder profile positioning teardowns',
    'B2B prospecting & signal tracking',
    'Target-account selection strategies',
    'Decision-maker executive research',
    'High-response LinkedIn outreach templates',
    'Peer-to-peer conversation frameworks',
    'Multi-touch follow-up cadences',
    'Commercial intent qualification logic',
    'Founder-led B2B outbound systems'
  ];

  return (
    <section className="py-24 bg-[#101318] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3 py-1 rounded-full bg-[#080A0C] border border-[#20242A]">
            CONTENT & PRACTICAL PLAYBOOKS
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            FOLLOW THE PLAYBOOK.
          </h2>

          <p className="text-sm sm:text-base text-[#B8FF3D] font-mono font-bold">
            No motivational LinkedIn fluff.
          </p>
          <p className="text-xs sm:text-sm text-[#A7ADB5] max-w-xl mx-auto font-medium">
            Expect practical, actionable breakdowns on building B2B demand generation systems:
          </p>
        </div>

        {/* 10 Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {topics.map((t, idx) => (
            <div key={idx} className="bg-[#080A0C] p-4 rounded-xl border border-[#20242A] space-y-2 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#B8FF3D] shrink-0 mt-0.5" />
              <span className="text-xs text-[#A7ADB5] font-semibold leading-relaxed">{t}</span>
            </div>
          ))}
        </div>

        {/* External LinkedIn Follow CTA */}
        <div className="text-center pt-4">
          <a
            href="https://linkedin.com/company/acqsa-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#080A0C] border-2 border-[#B8FF3D] text-white font-extrabold text-sm uppercase tracking-wider shadow-xl hover:bg-[#B8FF3D] hover:text-[#080A0C] transition-all group"
          >
            <Linkedin className="w-4 h-4 text-[#B8FF3D] group-hover:text-[#080A0C]" />
            FOLLOW ACQSA AI ON LINKEDIN <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
