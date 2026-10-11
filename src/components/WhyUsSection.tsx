import React from 'react';
import { 
  Users, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Target, 
  Zap, 
  Flame 
} from 'lucide-react';

export const WhyUsSection: React.FC<{ onBookCall?: () => void }> = ({ onBookCall }) => {
  const pillars = [
    {
      title: 'Simplify Your Hiring',
      tag: 'NO BLOATED PAYROLL',
      description: 'We manage all marketing and outbound tasks, saving you money without the overhead, recruitment delays, or management headaches of multiple domestic hires.',
      benefit: 'Save over 80% on internal sales overhead',
      icon: <Users className="w-6 h-6 text-[#FF1B6B]" />
    },
    {
      title: 'Ready-to-Go Experts',
      tag: 'ZERO RAMP TIME',
      description: 'Start campaigns immediately with our specialized revenue strategists using the latest GTM strategies, automated enrichment tools, and deliverability infrastructure.',
      benefit: 'Fully operational in under 14 business days',
      icon: <Zap className="w-6 h-6 text-[#9333EA]" />
    },
    {
      title: 'Guaranteed Quality Leads',
      tag: 'PERFORMANCE-BACKED',
      description: 'Get reliable, meeting-ready B2B leads who strictly match your ICP criteria, deal size, and buying authority—or pay nothing if you are unsatisfied.',
      benefit: 'Zero vanity clicks, 100% decision-makers',
      icon: <ShieldCheck className="w-6 h-6 text-[#0080FF]" />
    }
  ];

  const results = [
    { value: '197+', label: 'Sales Calls Booked', desc: 'Using our Multichannel Funnel' },
    { value: '7,000+', label: 'Verified B2B Leads', desc: 'Generated for software clients' },
    { value: '2x', label: 'Demo Bookings', desc: 'Doubled monthly sales velocity' },
    { value: '50K+', label: 'Target Impressions', desc: 'Organic LinkedIn executive reach' }
  ];

  return (
    <section id="why-us" className="py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-poppins font-extrabold text-[#FF1B6B] shadow-sm">
            <Flame className="w-4 h-4 text-[#FF1B6B]" />
            THE MULTICHANNEL ADVANTAGE
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Why ACQSA AI? <br />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
              360-Degree Lead Gen Systems
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            ACQSA AI helps you fill your calendar with 360 degree lead gen systems while building your brand across all social media channels.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFC] rounded-3xl p-8 sm:p-10 border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono font-extrabold uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                    {pillar.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-poppins font-extrabold text-slate-900 group-hover:text-[#0080FF] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs font-poppins font-bold text-emerald-700 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{pillar.benefit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Results Strip */}
        <div className="bg-[#FAFAFC] rounded-3xl border-2 border-slate-200 p-8 sm:p-10 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-slate-400">PROVEN TRACK RECORD</span>
            <h3 className="text-2xl font-poppins font-extrabold text-slate-900">Our Verified Commercial Results</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {results.map((res, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                <div className="text-3xl sm:text-4xl font-poppins font-extrabold bg-gradient-to-r from-[#FF1B6B] to-[#0080FF] bg-clip-text text-transparent">
                  {res.value}
                </div>
                <div className="text-xs font-poppins font-extrabold text-slate-900 uppercase">
                  {res.label}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {res.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Apply CTA */}
        <div className="text-center space-y-4">
          <p className="text-sm text-slate-500 font-medium">
            Let’s chat about how to attract high-quality leads while enhancing your social media impact.
          </p>
          <a
            href="#audit"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-poppins font-extrabold text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all"
          >
            <span>Apply Here To Work With Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
