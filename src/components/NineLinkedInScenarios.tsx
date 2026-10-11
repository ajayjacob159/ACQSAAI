import React, { useState } from 'react';
import { 
  Eye, 
  UserPlus, 
  MessageSquare, 
  Download, 
  Send, 
  Calendar, 
  Briefcase, 
  Award, 
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

export const NineLinkedInScenarios: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<number>(2);

  const scenarios = [
    {
      id: 1,
      title: 'New Profile Follower',
      category: 'INBOUND SIGNAL',
      icon: <UserPlus className="w-5 h-5 text-[#0080FF]" />,
      signal: 'Decision-maker follows your or founder LinkedIn profile.',
      action: 'Send personalized welcome message referencing their company domain within 2 hours.',
      template: 'Hey [Name], thanks for following! Saw you are leading sales at [Company]. Curious—are you currently testing outbound or relying on inbound referrals?',
      conversionRate: '14.2% Call Booking Rate'
    },
    {
      id: 2,
      title: 'Profile View Detected',
      category: 'INTENT SIGNAL',
      icon: <Eye className="w-5 h-5 text-[#9333EA]" />,
      signal: 'Target ICP executive browses your profile 2+ times in 48 hours.',
      action: 'Reach out with a low-friction value observation directly relevant to their tech stack.',
      template: 'Hi [Name], noticed you dropped by my profile. Saw [Company] recently expanded your BDR team—thought you might appreciate this cold deliverability framework.',
      conversionRate: '19.8% Call Booking Rate'
    },
    {
      id: 3,
      title: 'Commented on Lead Magnet',
      category: 'ENGAGEMENT SIGNAL',
      icon: <MessageSquare className="w-5 h-5 text-[#FF1B6B]" />,
      signal: 'Prospect comments on your post requesting a checklist, sheet, or playbook.',
      action: 'Deliver the asset immediately via DM and warm email with a tactical qualifying question.',
      template: 'Hey [Name], here is the direct link to the Outbound Setup Doc you requested. Would love to know—what is the biggest bottleneck with your pipeline today?',
      conversionRate: '32.4% Call Booking Rate'
    },
    {
      id: 4,
      title: 'Replied to Giveaway DM',
      category: 'DIRECT ENGAGEMENT',
      icon: <Download className="w-5 h-5 text-[#10B981]" />,
      signal: 'Prospect opens your asset and confirms receipt or asks a follow-up question.',
      action: 'Transition conversation from theoretical advice into a tailored pipeline teardown call.',
      template: 'Glad it was helpful! If you want, I can run a quick 10-minute audit on your secondary domains and share the exact DNS fixes. Free this Thursday?',
      conversionRate: '41.0% Call Booking Rate'
    },
    {
      id: 5,
      title: 'Replied to Outbound Message',
      category: 'OUTBOUND RESPONSE',
      icon: <Send className="w-5 h-5 text-[#0080FF]" />,
      signal: 'Prospect responds to initial cold email or connection note with mild curiosity.',
      action: 'Immediately handle objection and offer a specific 15-minute screen share walkthrough.',
      template: 'Appreciate the reply [Name]. Makes total sense. Instead of a long back-and-forth, would you be open to a 15-min peek at our live Clay enrichment workflow?',
      conversionRate: '28.6% Call Booking Rate'
    },
    {
      id: 6,
      title: 'Natural Inbound Inquiry',
      category: 'HIGH INTENT',
      icon: <Calendar className="w-5 h-5 text-[#9333EA]" />,
      signal: 'Prospect directly asks about your pricing, services, or implementation timeline.',
      action: 'Route through instant qualification filter and auto-book onto founder calendar.',
      template: 'Thanks for reaching out! We specialize in turning cold email & LinkedIn into 30–50 calls/month. Let’s jump on a quick discovery call to see if your ICP is a fit.',
      conversionRate: '68.5% Call Booking Rate'
    },
    {
      id: 7,
      title: 'Attended Industry Event / Webinar',
      category: 'EVENT TRIGGER',
      icon: <Award className="w-5 h-5 text-[#FF1B6B]" />,
      signal: 'Prospect registers for or attends a joint partner webinar or industry summit.',
      action: 'Follow up with session key takeaways and customized application to their business.',
      template: 'Hey [Name], saw you were at the B2B GTM Summit yesterday! What was your main takeaway from the deliverability session? Happy to share our notes.',
      conversionRate: '22.1% Call Booking Rate'
    },
    {
      id: 8,
      title: 'Engaged with Competitor Ad / Page',
      category: 'COMPETITOR SIGNAL',
      icon: <TrendingUp className="w-5 h-5 text-[#10B981]" />,
      signal: 'Prospect engages with competitor posts or reviews competitive software on G2.',
      action: 'Position ACQSA AI’s differentiated multichannel infrastructure advantage.',
      template: 'Hey [Name], saw you follow [Competitor]. Most founders find their single-channel model caps out at 10 calls/mo. We built a multichannel system that 3x that.',
      conversionRate: '24.3% Call Booking Rate'
    },
    {
      id: 9,
      title: 'Job Change / Executive Promotion',
      category: 'CAREER TRIGGER',
      icon: <Briefcase className="w-5 h-5 text-[#0080FF]" />,
      signal: 'Decision-maker takes over as new VP Sales, CRO, or Head of Growth (first 90 days).',
      action: 'Congratulate and offer quick-win pipeline infrastructure to hit their first-quarter KPIs.',
      template: 'Congrats on the new role at [Company], [Name]! If you’re looking to establish an outbound pipeline quickly in your first 90 days, happy to share what worked for us.',
      conversionRate: '27.9% Call Booking Rate'
    }
  ];

  return (
    <section id="scenarios" className="py-24 bg-[#FAFAFC] text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-200 text-xs font-poppins font-extrabold text-[#9333EA] shadow-sm">
            <Zap className="w-4 h-4 text-[#9333EA]" />
            SIGNAL-BASED ACQUISITION FRAMEWORK
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            9 Conversion Triggers That <br />
            <span className="bg-gradient-to-r from-[#9333EA] via-[#FF1B6B] to-[#0080FF] bg-clip-text text-transparent">
              Turn Engagement Into Sales Calls
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Timing is everything. We track real-time buyer actions and trigger precision multi-touch responses that consistently book 30–50 qualified B2B sales calls every month.
          </p>
        </div>

        {/* 9-Grid Scenarios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenarios.map((s, idx) => {
            const isSelected = selectedScenario === idx;
            return (
              <div
                key={s.id}
                onClick={() => setSelectedScenario(idx)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border-2 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#9333EA] shadow-xl scale-[1.02]'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      {s.icon}
                    </div>
                    <span className="text-[10px] font-mono font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-purple-50 text-[#9333EA] border border-purple-100">
                      {s.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-poppins font-extrabold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium mt-1">
                      {s.signal}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-emerald-600">
                    {s.conversionRate}
                  </span>
                  <span className={`text-[11px] font-poppins font-bold ${isSelected ? 'text-[#9333EA]' : 'text-slate-400'}`}>
                    {isSelected ? 'Viewing Script →' : 'View Script'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Script & Execution Teardown */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 sm:p-10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-50 text-[#9333EA]">
                {scenarios[selectedScenario].icon}
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 font-bold">
                  LIVE OUTREACH PLAYBOOK • TRIGGER #{scenarios[selectedScenario].id}
                </span>
                <h4 className="text-xl font-poppins font-extrabold text-slate-900">
                  {scenarios[selectedScenario].title}
                </h4>
              </div>
            </div>
            <div className="text-xs font-mono bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-xl font-extrabold border border-emerald-200">
              {scenarios[selectedScenario].conversionRate}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 space-y-3">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Action Strategy:
              </h5>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                {scenarios[selectedScenario].action}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-poppins text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Zero-friction meeting booking link attached
              </div>
            </div>

            <div className="md:col-span-7 bg-[#FAFAFC] p-5 rounded-2xl border border-slate-200 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span>DM & EMAIL CONVERSION TEMPLATE</span>
                <span className="text-[#9333EA] font-bold">PROVEN CONVERSION SCRIPT</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-sans text-xs italic leading-relaxed">
                "{scenarios[selectedScenario].template}"
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
