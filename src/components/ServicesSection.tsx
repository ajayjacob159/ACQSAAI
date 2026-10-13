import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Sparkles, 
  Users, 
  Target, 
  TrendingUp, 
  Calendar,
  Layers,
  ShieldCheck,
  ChevronRight,
  Clock,
  Briefcase,
  Zap,
  MessageSquare
} from 'lucide-react';

export interface ServiceOffer {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  price: string;
  priceNote: string;
  buyer: string;
  icon: React.ReactNode;
  badge: string;
  tagColor: string;
  overview: string;
  valueAdd: string;
  whyImportant: string;
  included: string[];
  before: string[];
  after: string[];
}

export const SERVICES_DATA: ServiceOffer[] = [
  {
    id: 'founder-authority',
    number: 'Offer 1',
    title: 'Founder LinkedIn Authority',
    subtitle: 'Turn founder expertise into commercial category dominance',
    price: '$750–$1,500',
    priceNote: '/ month after a defined pilot',
    buyer: 'B2B SaaS founders, CEOs & specialist consultants',
    icon: <Sparkles className="w-5 h-5 text-[#FF1B6B]" />,
    badge: 'FOUNDER BRANDING & GHOSTWRITING',
    tagColor: 'border-pink-200 text-[#FF1B6B] bg-pink-50/50',
    overview: 'High-fidelity executive ghostwriting that captures your authentic founder voice and turns your personal profile into an inbound trust engine.',
    valueAdd: 'Positions the founder as the unquestioned category leader. Replaces shallow "viral broetry" and generic AI fluff with high-conviction market commentary, product philosophy, and commercial teardowns that earn the trust of enterprise buyers before they ever talk to sales.',
    whyImportant: 'Enterprise B2B SaaS buyers do not buy from anonymous corporate logos—they buy from credible executives with clear domain authority. When a founder has authority, customer acquisition cost (CAC) drops, sales cycle lengths shrink by up to 40%, and prospective clients reach out with predefined trust.',
    included: [
      'Comprehensive founder positioning & ICP messaging framework',
      'Full LinkedIn profile & header banner conversion overhaul',
      'Bi-weekly 45-min strategic voice extraction interviews',
      '8–12 original bespoke ghostwritten posts per month (2–3/week)',
      'Editorial calendar & content planning workspace (Notion/Slack)',
      'Monthly engagement & commercial inbound pipeline reporting'
    ],
    before: [
      'Founder has 20 draft ideas in Notes app but posts once every 2 months',
      'Profile looks like a standard CV rather than a high-converting landing page',
      'Occasional generic ChatGPT posts sound robotic and destroy founder credibility',
      'Zero qualified enterprise inbound inquiries or buyer trust signals'
    ],
    after: [
      'Consistent, high-conviction posts publishing 2–3 times every single week',
      'Profile converted into an executive landing page driving newsletter & demo clicks',
      'Authentic founder voice preserved with zero time wasted on typing or editing',
      'Target VPs and C-suite decision-makers proactively engaging in DMs and comments'
    ]
  },
  {
    id: 'lead-generation',
    number: 'Offer 2',
    title: 'LinkedIn Lead Generation',
    subtitle: 'Direct pipeline generation targeting verified SaaS decision-makers',
    price: '$1,000–$2,000',
    priceNote: '/ month',
    buyer: 'B2B SaaS businesses & specialist technology agencies needing sales conversations',
    icon: <Target className="w-5 h-5 text-[#9333EA]" />,
    badge: 'TARGETED OUTBOUND & PIPELINE',
    tagColor: 'border-purple-200 text-[#9333EA] bg-purple-50/50',
    overview: 'Surgical account-based lead generation combining precision ICP mapping, tailored conversational messaging, and strict qualification to deliver warm sales demos.',
    valueAdd: 'Builds a repeatable, predictable outbound pipeline without burning brand reputation. We identify your highest-fit accounts, find the exact decision-makers with buying power, and initiate respectful, contextual conversations that lead to qualified discovery calls.',
    whyImportant: 'Cold email deliverability is crashing and mass automation spam gets accounts restricted. High-growth B2B SaaS requires personalized, multi-touch LinkedIn prospecting where every outreach message reflects deep industry context and clear value proposition.',
    included: [
      'Deep Ideal Customer Profile (ICP) & account tiering research',
      'Curated lists of 150–250 verified target accounts monthly',
      'Decision-maker identification (VP, C-level, Head of Department)',
      'Contextual, hyper-personalized outreach sequence design',
      'Conversational lead qualification & objection handling in DMs',
      'Real-time pipeline tracking and direct Calendly demo booking'
    ],
    before: [
      'Sales reps sending spray-and-pray automated messages with <1% response rate',
      'Relying solely on sporadic referrals or unpredictable inbound spikes',
      'Sales calendar full of empty slots or unqualified "tire-kickers"',
      'Wasted hours researching accounts manually without systematic tracking'
    ],
    after: [
      '150+ high-fit tier-1 accounts methodically engaged every month',
      'Tailored, peer-to-peer conversational touchpoints achieving 18–32% response rates',
      'Calendar consistently booked with pre-qualified decision-makers ready to talk',
      'Complete transparency with bi-weekly pipeline qualification dashboards'
    ]
  },
  {
    id: 'full-stack-demand',
    number: 'Offer 3',
    title: 'Founder Authority + Demand Generation',
    subtitle: 'The complete full-funnel revenue engine: Organic Moat + Surgical Outbound',
    price: '$2,500–$4,000',
    priceNote: '/ month for established scale',
    buyer: 'Established, sales-led B2B SaaS companies with a clear growth objective',
    icon: <TrendingUp className="w-5 h-5 text-[#0080FF]" />,
    badge: 'FULL-FUNNEL ENTERPRISE REVENUE',
    tagColor: 'border-blue-200 text-[#0080FF] bg-blue-50/50',
    overview: 'The complete end-to-end LinkedIn system. We combine executive thought leadership that builds market awareness with proactive target account engagement that converts awareness into pipeline.',
    valueAdd: 'Creates a synchronized revenue flywheel: when your outbound reps contact a target account, the prospect already recognizes your founder and respects your category perspective. Inbound authority and outbound prospecting work together to shorten sales cycles and boost deal sizes.',
    whyImportant: 'Running content without outbound leaves revenue on the table. Running outbound without authority results in high resistance and low conversion. Combining both creates an unbeatable market presence where your brand becomes the default choice in your category.',
    included: [
      'Everything in Offer 1 (Full Founder Authority & Ghostwriting)',
      'Everything in Offer 2 (Dedicated Account-Based Lead Generation)',
      'Content-driven outbound sequencing (leveraging posts in outreach)',
      'Strategic engagement on tier-1 target prospect posts & key discussions',
      'Multi-stakeholder account warming across target buying committees',
      'Bi-weekly strategic revenue review with pipeline attribution metrics'
    ],
    before: [
      'Marketing and sales teams operating in completely disconnected silos',
      'Founder posts get vanity likes from peers, while outbound reps face cold resistance',
      'Long 6–9 month enterprise sales cycles with heavy prospect skepticism',
      'High customer acquisition costs with unpredictable revenue forecasting'
    ],
    after: [
      'Unified flywheel where content directly supports and warms outbound target accounts',
      'Prospects enter discovery calls having already read your thought leadership',
      'Enterprise sales cycle reduced by up to 45% due to pre-established trust',
      'Predictable, high-ACV pipeline compounding month-over-month'
    ]
  }
];

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES_DATA[0].id);
  const activeService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAFAFC] text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-slate-800 shadow-sm"
          >
            <Layers className="w-3.5 h-3.5 text-[#FF1B6B]" />
            <span>SPECIALIZED LINKEDIN SERVICE PACKAGES</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold tracking-tight text-slate-900 leading-tight">
            Engineered for pipeline. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
              Tailored to your growth stage.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Whether you need authentic founder thought leadership, high-intent lead generation, or a unified full-funnel revenue engine—explore each service and its measurable before-and-after transformation.
          </p>
        </div>

        {/* 3 Offer Selection Tabs with Motion Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {SERVICES_DATA.map((service) => {
            const isActive = service.id === activeTab;
            return (
              <motion.button
                key={service.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(service.id)}
                className={`p-5 rounded-2xl text-left border-2 transition-all relative flex flex-col justify-between ${
                  isActive 
                    ? 'bg-white border-slate-950 shadow-xl ring-2 ring-slate-950/5' 
                    : 'bg-white/70 hover:bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      {service.number}
                    </span>
                    <div className="p-1.5 rounded-xl bg-slate-50 border border-slate-100">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className={`font-poppins font-extrabold text-sm sm:text-base leading-snug ${
                    isActive ? 'text-slate-950' : 'text-slate-800'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 flex items-baseline justify-between">
                  <div>
                    <span className="font-poppins font-black text-lg text-slate-900">
                      {service.price}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 block">
                      {service.priceNote}
                    </span>
                  </div>
                  <span className={`text-xs font-mono font-bold ${
                    isActive ? 'text-[#FF1B6B]' : 'text-slate-400'
                  }`}>
                    {isActive ? 'Viewing details →' : 'View'}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* In-Depth Service Breakdown & Before / After Analysis */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl border-2 border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-xl space-y-12"
          >
            {/* Header banner of the active offer */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-100 pb-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border border-slate-200 bg-slate-50">
                  <span>{activeService.number}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-700">{activeService.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-poppins font-extrabold text-slate-900 tracking-tight">
                  {activeService.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  {activeService.overview}
                </p>

                <div className="flex items-center gap-2 pt-1 text-xs font-mono text-slate-700 bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-xl inline-block">
                  <Briefcase className="w-3.5 h-3.5 text-slate-500 shrink-0 inline mr-1" />
                  <span className="font-bold text-slate-900">Target Buyer: </span>
                  <span>{activeService.buyer}</span>
                </div>
              </div>

              {/* Price & Action Card */}
              <div className="bg-[#FAFAFC] border-2 border-slate-200 rounded-2xl p-6 sm:p-7 shrink-0 text-center lg:text-left space-y-4 lg:w-72">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Investment Structure
                  </span>
                  <div className="text-3xl font-poppins font-extrabold text-slate-900 pt-1">
                    {activeService.price}
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {activeService.priceNote}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onSelectService(`${activeService.title} (${activeService.price})`)}
                  className="w-full py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <span>Select & Book Call</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF1B6B]" />
                </motion.button>
                
                <p className="text-[10px] font-mono text-slate-400 text-center">
                  Direct conversation with Rocky Jacob
                </p>
              </div>
            </div>

            {/* How It Adds Value & Why It's Critical */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                  <Zap className="w-4 h-4 text-[#FF1B6B]" />
                  <span>How It Adds Value To The Company</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {activeService.valueAdd}
                </p>
              </div>

              <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Why It's Critical For B2B SaaS</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {activeService.whyImportant}
                </p>
              </div>
            </div>

            {/* Scope / What's Included */}
            <div className="space-y-4">
              <h4 className="font-poppins font-bold text-base text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>What's Included In Delivery</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {activeService.included.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs text-slate-700 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF1B6B] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Before vs. After Transformation Sessions Breakdown */}
            <div className="space-y-5 pt-4 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="font-poppins font-extrabold text-lg text-slate-900 tracking-tight">
                  The Transformation: Before vs. After Sessions
                </h4>
                <span className="text-xs font-mono text-slate-400">
                  Measured across our client cohort
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* BEFORE */}
                <div className="rounded-2xl border-2 border-rose-200/80 bg-rose-50/40 p-6 sm:p-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
                    <XCircle className="w-4 h-4 text-rose-500" />
                    <span>Before ACQSA AI Collaboration</span>
                  </div>
                  
                  <div className="space-y-3">
                    {activeService.before.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-rose-900/90 leading-relaxed">
                        <span className="text-rose-400 font-bold shrink-0 mt-0.5">✕</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AFTER */}
                <div className="rounded-2xl border-2 border-emerald-200/90 bg-emerald-50/40 p-6 sm:p-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>After Defined Pilot & Retainer Sessions</span>
                  </div>
                  
                  <div className="space-y-3">
                    {activeService.after.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-emerald-950 leading-relaxed font-medium">
                        <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA bar inside the service card */}
            <div className="p-6 rounded-2xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="font-poppins font-bold text-sm text-white">
                  Ready to deploy {activeService.title}?
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {activeService.price} {activeService.priceNote} • Transparent terms
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://calendly.com/rockyjacob-ai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-poppins font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  Direct Calendly (30 min)
                </a>
                <button
                  onClick={() => onSelectService(`${activeService.title} (${activeService.price})`)}
                  className="px-5 py-2.5 rounded-full bg-[#FF1B6B] hover:bg-[#ff0055] text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-1.5"
                >
                  <span>Select & Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
