import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const BannerShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-[#080A0C] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3 py-1 rounded-full bg-[#101318] border border-[#20242A]">
            LINKEDIN ASSET SPECIFICATION
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold uppercase tracking-tight text-white">
            FOUNDER LINKEDIN BANNER SHOWCASE
          </h2>
          <p className="text-xs sm:text-sm text-[#A7ADB5]">
            Optimized for 1584 × 396 px display to communicate authority instantly when target buyers land on your profile.
          </p>
        </div>

        {/* Realistic LinkedIn Profile Mockup Frame */}
        <div className="max-w-5xl mx-auto bg-[#101318] border border-[#20242A] rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Header Bar */}
          <div className="bg-[#080A0C] px-4 py-2 border-b border-[#20242A] flex items-center justify-between text-[11px] font-mono text-[#A7ADB5]">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> LinkedIn Banner Spec (1584 × 396 px)
            </span>
            <span>ACQSA AI Positioning Asset</span>
          </div>

          {/* Banner Container (1584 x 396 aspect ratio ~ 4:1) */}
          <div className="w-full aspect-[4/1] bg-gradient-to-r from-[#080A0C] via-[#101318] to-[#080A0C] border-b border-[#20242A] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#B8FF3D]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex justify-between items-start z-10">
              <div className="space-y-1 sm:space-y-2">
                <span className="text-[9px] sm:text-xs font-mono text-[#B8FF3D] font-extrabold uppercase tracking-widest">
                  ACQSA AI · LINKEDIN GROWTH FOR B2B FOUNDERS
                </span>
                <h3 className="text-lg sm:text-3xl lg:text-4xl font-heading font-extrabold text-white uppercase tracking-tight leading-none">
                  TURN LINKEDIN <br />
                  <span className="text-[#B8FF3D]">INTO YOUR SALES PIPELINE.</span>
                </h3>
              </div>

              <div className="hidden sm:flex flex-col items-end text-right">
                <span className="text-xs font-mono text-[#B8FF3D] font-bold">12-Step Demand System</span>
                <span className="text-[10px] text-[#A7ADB5]">For Founder-Led B2B Companies</span>
              </div>
            </div>

            <div className="space-y-2 z-10">
              <p className="text-[10px] sm:text-xs font-mono font-bold text-white uppercase">
                ICP → TARGET ACCOUNTS → OUTREACH → QUALIFIED CALLS
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2 text-[9px] sm:text-xs text-[#A7ADB5]">
                <span>For B2B founders who want conversations, not vanity metrics.</span>
                <span className="text-[#B8FF3D] font-bold flex items-center gap-1">
                  FOLLOW FOR PRACTICAL B2B LINKEDIN SYSTEMS <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

          </div>

          {/* Profile Frame Bottom Details */}
          <div className="p-6 bg-[#101318] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#080A0C] border-2 border-[#B8FF3D] flex items-center justify-center font-extrabold text-white text-xl shadow-lg -mt-10 sm:-mt-12 bg-[#080A0C]">
                FOUNDER
              </div>
              <div>
                <h4 className="font-extrabold text-white text-base">B2B Founder & CEO</h4>
                <p className="text-xs text-[#A7ADB5] font-mono">
                  Founder-Led Demand Generation System · ACQSA AI
                </p>
              </div>
            </div>

            <span className="text-xs font-mono text-[#B8FF3D] bg-[#080A0C] px-3.5 py-1.5 rounded-lg border border-[#20242A]">
              ✓ Verified Positioning Layout
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
