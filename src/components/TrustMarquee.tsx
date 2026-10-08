import React from 'react';
import { Target, MessageSquare, TrendingUp, ShieldCheck } from 'lucide-react';

export const TrustMarquee: React.FC = () => {
  return (
    <section className="py-16 bg-[#101318] border-b border-[#20242A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8FF3D] font-bold">
            COMMERCIAL FOCUS
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold uppercase tracking-tight text-white">
            STOP CHASING REACH. START BUILDING PIPELINE.
          </h2>
        </div>

        {/* 3 Supporting Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="b2b-card p-6 b2b-card-hover space-y-3 relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-[#080A0C] border border-[#20242A] text-[#B8FF3D] flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-white uppercase group-hover:text-[#B8FF3D] transition-colors">
              RIGHT PEOPLE
            </h3>
            <p className="text-xs text-[#A7ADB5] font-medium leading-relaxed">
              Reach buyers who actually fit your ICP—not random connection volume or inflated follower counts.
            </p>
          </div>

          <div className="b2b-card p-6 b2b-card-hover space-y-3 relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-[#080A0C] border border-[#20242A] text-[#B8FF3D] flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-white uppercase group-hover:text-[#B8FF3D] transition-colors">
              RIGHT MESSAGE
            </h3>
            <p className="text-xs text-[#A7ADB5] font-medium leading-relaxed">
              Start relevant, research-backed conversations instead of sending generic automated pitch spam.
            </p>
          </div>

          <div className="b2b-card p-6 b2b-card-hover space-y-3 relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-[#080A0C] border border-[#20242A] text-[#B8FF3D] flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-white uppercase group-hover:text-[#B8FF3D] transition-colors">
              RIGHT OUTCOME
            </h3>
            <p className="text-xs text-[#A7ADB5] font-medium leading-relaxed">
              Turn two-way prospect conversations into qualified sales opportunities and booked calendar calls.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
