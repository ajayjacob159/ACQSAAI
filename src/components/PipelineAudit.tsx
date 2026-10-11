import React, { useState } from 'react';
import { Check, X, RotateCcw, ArrowRight, ShieldAlert, Sparkles, CheckCircle2, Flame, Award } from 'lucide-react';

interface PipelineAuditProps {
  onAuditSubmitted?: (data: any) => void;
}

export const PipelineAudit: React.FC<PipelineAuditProps> = ({ onAuditSubmitted }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<boolean[]>(Array(7).fill(false));
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    website: '',
    linkedinUrl: '',
    primaryOffer: '',
    agreed: true
  });

  const questions = [
    {
      q: "Do you have a documented ICP with defined deal size and buying criteria?",
      sub: "Or are you targeting anyone with a relevant-sounding title?"
    },
    {
      q: "Do you have dedicated secondary domains configured with Google Workspace & Microsoft 365?",
      sub: "Or are you sending outbound from your primary corporate email domain risking your reputation?"
    },
    {
      q: "Are your email authentication records (SPF, DKIM, DMARC) 100% verified with zero bounce rate?",
      sub: "Or are your cold emails landing silently in spam and junk folders?"
    },
    {
      q: "Do you capture and scrape engaged prospects who like or comment on your LinkedIn posts?",
      sub: "Or do you publish posts and wait passively hoping someone messages you?"
    },
    {
      q: "Do you waterfall-enrich prospect work emails with Clay, Prospeo and real-time intent triggers?",
      sub: "Or are you relying on outdated, static CSV contact databases?"
    },
    {
      q: "Do you have a structured multi-touch conversational sequence with automated follow-ups?",
      sub: "Or does your team give up after sending just one or two messages?"
    },
    {
      q: "Do you qualify prospects by company revenue, decision authority, and pain point before booking?",
      sub: "Or does your calendar fill up with curiosity seekers and unqualified calls?"
    }
  ];

  const toggleAnswer = (val: boolean) => {
    const updated = [...answers];
    updated[currentStep] = val;
    setAnswers(updated);

    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculateScore = () => {
    const yesCount = answers.filter(Boolean).length;
    return Math.round((yesCount / 7) * 100);
  };

  const getTier = (sc: number) => {
    if (sc <= 40) return { 
      label: 'CRITICAL PIPELINE RISK', 
      color: 'text-rose-600', 
      desc: 'Your outbound and inbound sales engines lack technical infrastructure and lead enrichment. You are burning domain reputation and leaving dozens of qualified sales calls on the table every month.' 
    };
    if (sc <= 70) return { 
      label: 'INCONSISTENT CONVERSION', 
      color: 'text-amber-600', 
      desc: 'You have foundational pieces in place, but lack secondary domain deliverability, automated lead scraping, and structured follow-up cadences to produce predictable B2B sales meetings.' 
    };
    return { 
      label: 'OPTIMIZED REVENUE ENGINE', 
      color: 'text-emerald-600', 
      desc: 'You have solid GTM hygiene. Deploying ACQSA AI’s multichannel acquisition system will scale your outreach volume to 30–50+ qualified sales calls every month.' 
    };
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      score: calculateScore(),
      answers,
      submittedAt: new Date().toISOString()
    };
    if (onAuditSubmitted) {
      onAuditSubmitted(payload);
    }
    setSubmitted(true);
  };

  const score = calculateScore();
  const tier = getTier(score);

  return (
    <section id="audit" className="py-24 bg-[#FAFAFC] text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-200 text-xs font-poppins font-extrabold text-[#FF1B6B] shadow-sm">
            <Flame className="w-4 h-4 text-[#FF1B6B]" />
            PRIMARY LEAD-GENERATION AUDIT
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            How Strong Is Your <br />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
              B2B Acquisition Engine?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Answer 7 quick questions. Get an immediate diagnosis of where your outbound and inbound pipeline is leaking.
          </p>
        </div>

        {/* Audit Container */}
        <div className="max-w-3xl mx-auto bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          
          {!isCompleted ? (
            <div className="space-y-8">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-500">
                  <span>QUESTION 0{currentStep + 1} OF 07</span>
                  <span className="text-[#0080FF]">{Math.round(((currentStep + 1) / 7) * 100)}% COMPLETED</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                  <div 
                    className="h-full bg-gradient-to-r from-[#FF1B6B] to-[#0080FF] transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / 7) * 100}%` }}
                  />
                </div>
              </div>

              {/* Active Question Box */}
              <div className="p-8 bg-[#FAFAFC] rounded-2xl border border-slate-200 space-y-3 min-h-[160px] flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-slate-900 leading-snug">
                  {questions[currentStep].q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {questions[currentStep].sub}
                </p>
              </div>

              {/* Answer Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => toggleAnswer(true)}
                  className="py-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 hover:border-emerald-500 text-emerald-800 font-poppins font-extrabold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02]"
                >
                  <Check className="w-5 h-5 text-emerald-600" /> YES, WE DO
                </button>
                <button
                  onClick={() => toggleAnswer(false)}
                  className="py-4 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-slate-400 text-slate-700 font-poppins font-extrabold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02]"
                >
                  NO / NOT YET
                </button>
              </div>
            </div>
          ) : (
            /* COMPLETED AUDIT RESULT & LEAD FORM */
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {/* Score Gauge Block */}
              <div className="p-8 bg-[#FAFAFC] rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-bold tracking-wider">
                    YOUR ACQUISITION PIPELINE SCORE
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-poppins font-extrabold uppercase ${tier.color}`}>
                    {tier.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                {/* Score Circle */}
                <div className="relative w-28 h-28 shrink-0 flex items-center justify-center rounded-full bg-white border-4 border-[#0080FF] shadow-lg">
                  <span className="text-3xl font-poppins font-extrabold text-slate-900 font-mono">{score}</span>
                  <span className="text-[10px] font-mono text-slate-400 absolute bottom-3">/ 100</span>
                </div>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-2xl font-poppins font-extrabold text-emerald-950">
                    Assessment Submitted Successfully!
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto font-medium">
                    We have received your B2B Acquisition Assessment. Our strategy team is preparing your custom breakdown.
                  </p>
                </div>
              ) : (
                /* LEAD FORM */
                <form onSubmit={handleFormSubmit} className="space-y-6 pt-4 border-t border-slate-200">
                  <div className="space-y-1 text-left">
                    <h4 className="text-xl font-poppins font-extrabold text-slate-900">
                      Get Your Free Detailed Pipeline Review
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      Enter your business details to receive a customized action plan and deliverability report.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">FULL NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0080FF]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">WORK EMAIL *</label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0080FF]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">COMPANY NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="ScaleTech B2B"
                        className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0080FF]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">WEBSITE URL</label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://company.com"
                        className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0080FF]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">FOUNDER LINKEDIN URL *</label>
                      <input
                        type="url"
                        required
                        value={formData.linkedinUrl}
                        onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                        placeholder="https://linkedin.com/in/alexmorgan"
                        className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0080FF]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">PRIMARY B2B OFFERING *</label>
                      <input
                        type="text"
                        required
                        value={formData.primaryOffer}
                        onChange={(e) => setFormData({ ...formData, primaryOffer: e.target.value })}
                        placeholder="B2B SaaS / IT Services / Enterprise Consulting"
                        className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0080FF]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600 pt-2">
                    <input
                      type="checkbox"
                      id="agree"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="rounded border-slate-300 text-[#0080FF] focus:ring-0"
                    />
                    <label htmlFor="agree">I agree to be contacted regarding my pipeline assessment.</label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] text-white font-poppins font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-purple-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Get My Free Pipeline Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="flex justify-center pt-4">
                <button
                  onClick={() => {
                    setIsCompleted(false);
                    setCurrentStep(0);
                    setAnswers(Array(7).fill(false));
                    setSubmitted(false);
                  }}
                  className="text-xs font-mono font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Retake Assessment
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
