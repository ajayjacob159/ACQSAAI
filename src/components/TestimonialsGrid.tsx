import React from 'react';
import { Star, Quote, Building, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export const TestimonialsGrid: React.FC = () => {
  const testimonials = [
    {
      name: 'Volodymyr Dybenko',
      role: 'CEO',
      company: 'Salee',
      quote: 'ACQSA AI revolutionized our marketing efforts, generating over 7,000 verified leads and doubling our monthly demo bookings within 60 days.',
      metric: '7,000+ Leads Generated • 2x Demo Bookings',
      rating: 5,
      avatar: 'VD'
    },
    {
      name: 'Ted Fluck',
      role: 'Marketing Lead',
      company: 'IGTD Philips',
      quote: 'The team secured 100+ executive webinar attendees in just 3 days without ad spend, directly resulting in 5 high-value enterprise sales opportunities. Truly grateful for their support!',
      metric: '100+ Attendees in 3 Days (0 Ad Spend)',
      rating: 5,
      avatar: 'TF'
    },
    {
      name: 'Helge Hoffmann',
      role: 'Creative Director',
      company: 'Ogilvy',
      quote: 'Incredible copywriting and messaging support with unmatched attention to detail, positioning, and psychological nuance. Highly recommended for any B2B team.',
      metric: 'Top-Tier Strategic Copywriting & Positioning',
      rating: 5,
      avatar: 'HH'
    },
    {
      name: 'Maya Schmid',
      role: 'Change Management Consultant',
      company: 'Schmid Consulting',
      quote: 'Thanks to their multichannel distribution strategy, my LinkedIn presence saw an immediate 50,000+ view surge, establishing immediate executive credibility with enterprise clients.',
      metric: '50K+ Organic Decision-Maker Reach',
      rating: 5,
      avatar: 'MS'
    },
    {
      name: 'Syed Sikandar',
      role: 'Sales Manager',
      company: 'Commercial Capital',
      quote: 'Their LinkedIn outreach infrastructure and conversational follow-ups helped me close a major commercial real estate transaction with zero friction.',
      metric: 'Closed High-Value Enterprise Deal',
      rating: 5,
      avatar: 'SS'
    },
    {
      name: 'Amber Staynings',
      role: 'CEO',
      company: 'Hurricane HL Ltd',
      quote: 'We never realized the immense power of structured multichannel outbound until ACQSA AI deployed our system. It doubled our revenue in just a few months—absolutely incredible.',
      metric: '2x Revenue Growth in 90 Days',
      rating: 5,
      avatar: 'AS'
    }
  ];

  return (
    <section id="results" className="py-24 bg-[#FAFAFC] text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-200 text-xs font-poppins font-extrabold text-emerald-600 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            CLIENT TRUST & VALIDATION
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            What Founders & Leaders <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-[#0080FF] bg-clip-text text-transparent">
              Say About Our System
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Read direct feedback from CEOs, Creative Directors, and Sales Leaders who scaled with ACQSA AI.
          </p>
        </div>

        {/* 6 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border-2 border-slate-200 hover:border-[#0080FF] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Rating & Metric Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    VERIFIED CLIENT
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Result */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800 text-[11px] font-mono font-bold">
                  ✓ {t.metric}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-800 to-slate-950 text-white font-poppins font-extrabold text-xs flex items-center justify-center shadow-md">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-slate-900 text-xs sm:text-sm">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {t.role} • <span className="font-bold text-slate-700">{t.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
