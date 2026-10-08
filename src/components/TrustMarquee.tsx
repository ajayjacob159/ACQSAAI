import React from 'react';
import { Target, MessageSquare, TrendingUp, ShieldCheck } from 'lucide-react';

export const TrustMarquee: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF1B6B] font-extrabold">
            COMMERCIAL FOCUS
          </span>
          <h2 className="text-2xl sm:text-3xl font-poppins font-extrabold uppercase tracking-tight text-slate-900">
            STOP CHASING REACH. START BUILDING PIPELINE.
          </h2>
        </div>

        {/* 3 Supporting Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="b2b-card p-6 b2b-card-hover space-y-3 relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-[#FF1B6B] flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-poppins font-extrabold text-lg text-slate-900 uppercase group-hover:text-[#FF1B6B] transition-colors">
              RIGHT PEOPLE
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Reach buyers who actually fit your ICP—not random connection volume or inflated follower counts.
            </p>
          </div>

          <div className="b2b-card p-6 b2b-card-hover space-y-3 relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-[#7C3AED] flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-poppins font-extrabold text-lg text-slate-900 uppercase group-hover:text-[#7C3AED] transition-colors">
              RIGHT MESSAGE
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Start relevant, research-backed conversations instead of sending generic automated pitch spam.
            </p>
          </div>

          <div className="b2b-card p-6 b2b-card-hover space-y-3 relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-poppins font-extrabold text-lg text-slate-900 uppercase group-hover:text-indigo-600 transition-colors">
              RIGHT OUTCOME
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Turn two-way prospect conversations into qualified sales opportunities and booked calendar calls.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
