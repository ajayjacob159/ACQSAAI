import React, { useState } from 'react';
import { Zap, CheckCircle2, AlertTriangle, ArrowRight, RotateCcw, ShieldCheck, Check } from 'lucide-react';

interface PipelineAuditProps {
  onAuditSubmitted?: (data: any) => void;
}

export const PipelineAudit: React.FC<PipelineAuditProps> = ({ onAuditSubmitted }) => {
  const questions = [
    { q: "1. Do you have a clearly defined B2B ICP?", sub: "Strict criteria based on revenue, headcount, triggers & deal size." },
    { q: "2. Do you maintain a target-account list?", sub: "Curated 250-500 accounts updated monthly." },
    { q: "3. Can you identify the actual decision-maker?", sub: "Direct executive budget holders (Founders, CEOs, CXOs)." },
    { q: "4. Is the founder's LinkedIn profile positioned around a clear commercial outcome?", sub: "Sells credibility & problem solving rather than generic bio." },
    { q: "5. Do you have a repeatable outreach sequence?", sub: "Research-backed manual dialogue without template spam." },
    { q: "6. Do you systematically follow up?", sub: "Multi-touch follow-up cadences with value-add insights." },
    { q: "7. Do you track conversations and qualified opportunities?", sub: "Structured CRM tracking every prospect & sales call status." }
  ];

  const [answers, setAnswers] = useState<boolean[]>(Array(7).fill(false));
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    website: '',
    linkedinUrl: '',
    monthlyTarget: '',
    primaryOffer: '',
    agreed: true
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const toggleAnswer = (val: boolean) => {
    const updated = [...answers];
    updated[currentStep] = val;
    setAnswers(updated);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculateScore = () => {
    const yesCount = answers.filter(Boolean).length;
    return Math.round((yesCount / 7) * 100);
  };

  const getTier = (score: number) => {
    if (score <= 30) return { label: 'No Sales System', color: 'text-rose-500', desc: 'Your LinkedIn is being treated as a casual profile. Massive sales pipeline leakage.' };
    if (score <= 50) return { label: 'Early Pipeline', color: 'text-amber-400', desc: 'Some prospecting activity exists, but lacks account research and structured follow-up.' };
    if (score <= 70) return { label: 'Functional System', color: 'text-sky-400', desc: 'Core elements in place, but founder positioning and conversation qualification need optimization.' };
    if (score <= 85) return { label: 'Strong Sales Engine', color: 'text-[#B8FF3D]', desc: 'Solid execution. Fine-tuning account lists and response cadences will increase conversion.' };
    return { label: 'High-Performance Engine', color: 'text-[#B8FF3D]', desc: 'Excellent demand architecture. Focus on scaling deal size and weekly reporting.' };
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const score = calculateScore();
    const tier = getTier(score);
    const fitCategory = score >= 60 ? 'HIGH FIT' : score >= 35 ? 'MEDIUM FIT' : 'LOW FIT';

    const payload = {
      ...formData,
      score,
      tier: tier.label,
      fitCategory,
      answers
    };

    if (onAuditSubmitted) {
      onAuditSubmitted(payload);
    }
    setSubmitted(true);
  };

  const score = calculateScore();
  const tier = getTier(score);

  return (
    <section id="audit" className="py-24 bg-[#080A0C] text-white border-b border-[#20242A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3.5 py-1.5 rounded-full bg-[#101318] border border-[#20242A]">
            PRIMARY LEAD-GENERATION MECHANISM
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            HOW STRONG IS YOUR <br />
            <span className="text-lime-gradient">LINKEDIN SALES ENGINE?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A7ADB5] font-semibold max-w-2xl mx-auto">
            Answer 7 questions. Get a practical assessment of where your LinkedIn pipeline is leaking.
          </p>
        </div>

        {/* Audit Container */}
        <div className="max-w-4xl mx-auto bg-[#101318] border border-[#20242A] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {!isCompleted ? (
            <div className="space-y-6">
              {/* Progress Bar */}
              <div className="flex items-center justify-between text-xs font-mono text-[#A7ADB5]">
                <span>QUESTION 0{currentStep + 1} OF 07</span>
                <span className="text-[#B8FF3D] font-bold">{Math.round(((currentStep + 1) / 7) * 100)}% COMPLETED</span>
              </div>
              <div className="w-full h-1.5 bg-[#080A0C] rounded-full overflow-hidden border border-[#20242A]">
                <div 
                  className="h-full bg-[#B8FF3D] transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / 7) * 100}%` }}
                />
              </div>

              {/* Active Question Box */}
              <div className="p-8 bg-[#080A0C] rounded-xl border border-[#20242A] space-y-3 min-h-[160px] flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                  {questions[currentStep].q}
                </h3>
                <p className="text-xs font-mono text-[#A7ADB5]">
                  {questions[currentStep].sub}
                </p>
              </div>

              {/* Answer Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => toggleAnswer(true)}
                  className="py-4 rounded-xl bg-[#080A0C] border-2 border-[#B8FF3D]/60 hover:border-[#B8FF3D] text-white font-extrabold text-sm uppercase tracking-wider hover:bg-[#B8FF3D]/10 transition-all flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4 text-[#B8FF3D]" /> YES, WE DO
                </button>
                <button
                  onClick={() => toggleAnswer(false)}
                  className="py-4 rounded-xl bg-[#080A0C] border-2 border-rose-500/40 hover:border-rose-500 text-white font-extrabold text-sm uppercase tracking-wider hover:bg-rose-500/10 transition-all flex items-center justify-center gap-2"
                >
                  NO / NOT YET
                </button>
              </div>
            </div>
          ) : (
            /* COMPLETED AUDIT RESULT & LEAD FORM */
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {/* Score Gauge Block */}
              <div className="p-8 bg-[#080A0C] rounded-xl border border-[#20242A] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#A7ADB5] uppercase font-bold">YOUR LINKEDIN PIPELINE SCORE</span>
                  <h3 className={`text-3xl font-heading font-extrabold uppercase ${tier.color}`}>
                    {tier.label}
                  </h3>
                  <p className="text-xs text-[#A7ADB5] max-w-md">
                    {tier.desc}
                  </p>
                </div>

                {/* Animated Circular Score */}
                <div className="relative w-28 h-28 shrink-0 flex items-center justify-center rounded-full bg-[#101318] border-4 border-[#B8FF3D] shadow-2xl">
                  <span className="text-3xl font-heading font-extrabold text-white font-mono">{score}</span>
                  <span className="text-[9px] font-mono text-[#A7ADB5] absolute bottom-3">/ 100</span>
                </div>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-3 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-heading font-extrabold text-white">Assessment Submitted Successfully!</h4>
                  <p className="text-xs text-[#A7ADB5] max-w-md mx-auto">
                    We have received your LinkedIn Pipeline Assessment. Our strategy team is preparing your custom breakdown.
                  </p>
                </div>
              ) : (
                /* LEAD FORM */
                <form onSubmit={handleFormSubmit} className="space-y-6 pt-4 border-t border-[#20242A]">
                  <div className="space-y-1 text-left">
                    <h4 className="text-lg font-heading font-extrabold text-white uppercase">
                      GET YOUR FREE DETAILED PIPELINE REVIEW
                    </h4>
                    <p className="text-xs text-[#A7ADB5]">
                      Enter your business details to receive a customized action plan.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-[#A7ADB5] block mb-1">FULL NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#080A0C] border border-[#20242A] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B8FF3D]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono text-[#A7ADB5] block mb-1">WORK EMAIL *</label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#080A0C] border border-[#20242A] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B8FF3D]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono text-[#A7ADB5] block mb-1">COMPANY NAME *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Tech B2B"
                        className="w-full bg-[#080A0C] border border-[#20242A] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B8FF3D]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono text-[#A7ADB5] block mb-1">WEBSITE URL</label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://company.com"
                        className="w-full bg-[#080A0C] border border-[#20242A] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B8FF3D]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono text-[#A7ADB5] block mb-1">FOUNDER LINKEDIN PROFILE URL *</label>
                      <input
                        type="url"
                        required
                        value={formData.linkedinUrl}
                        onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                        placeholder="https://linkedin.com/in/johndoe"
                        className="w-full bg-[#080A0C] border border-[#20242A] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B8FF3D]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono text-[#A7ADB5] block mb-1">PRIMARY B2B OFFERING *</label>
                      <input
                        type="text"
                        required
                        value={formData.primaryOffer}
                        onChange={(e) => setFormData({ ...formData, primaryOffer: e.target.value })}
                        placeholder="Enterprise SaaS / IT Consulting"
                        className="w-full bg-[#080A0C] border border-[#20242A] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B8FF3D]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#A7ADB5] pt-2">
                    <input
                      type="checkbox"
                      id="agree"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="rounded border-[#20242A] bg-[#080A0C] text-[#B8FF3D] focus:ring-0"
                    />
                    <label htmlFor="agree">I agree to be contacted regarding my pipeline assessment.</label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#B8FF3D] text-[#080A0C] font-extrabold text-sm uppercase tracking-wider shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    GET MY FREE PIPELINE REVIEW →
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
                  className="text-xs font-mono text-[#A7ADB5] hover:text-white flex items-center gap-1.5"
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
