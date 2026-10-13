import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
}

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({ isOpen, onClose, initialPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    linkedinUrl: '',
    stage: 'Series A ($1M–$5M ARR)',
    biggestChallenge: 'No time to write consistently',
    packageInterest: initialPackage || 'Paid Pilot ($1,500)'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[BOOKING INQUIRY FOR ROCKY JACOB]:', formData);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white border-2 border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-9 shadow-2xl relative my-8 text-slate-900">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-400 hover:text-slate-800 border border-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div className="space-y-1.5 border-b border-slate-100 pb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF1B6B] font-bold">
                20-MIN STRATEGY CALL / PILOT ONBOARDING
              </span>
              <h3 className="text-xl font-poppins font-extrabold text-slate-900">
                Discuss Your Founder LinkedIn Voice
              </h3>
              <p className="text-xs text-slate-500">
                You will speak directly with Rocky Jacob. Zero sales reps or scripted pitches.
              </p>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">YOUR NAME *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. David Henderson"
                  className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-900"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">WORK EMAIL *</label>
                <input
                  type="email"
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="david@company.com"
                  className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-900"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">B2B SAAS COMPANY NAME *</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Acme Cloud Systems"
                  className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-900"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">FOUNDER LINKEDIN PROFILE URL *</label>
                <input
                  type="url"
                  required
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  placeholder="https://linkedin.com/in/yourname"
                  className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">COMPANY STAGE</label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-900"
                  >
                    <option>Series A ($1M–$5M ARR)</option>
                    <option>Series B ($5M–$20M ARR)</option>
                    <option>Seed ($500k+ ARR)</option>
                    <option>Bootstrapped ($1M+ ARR)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">PACKAGE SELECTION</label>
                  <select
                    value={formData.packageInterest}
                    onChange={(e) => setFormData({ ...formData, packageInterest: e.target.value })}
                    className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-900"
                  >
                    <option>Paid Pilot ($1,500)</option>
                    <option>Core Retainer ($2,800/mo)</option>
                    <option>Premium ($3,800/mo)</option>
                    <option>Exploratory 20-min Call</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
            >
              <span>Schedule Strategy Call →</span>
            </button>

            <div className="pt-2 text-center">
              <a
                href="https://calendly.com/rockyjacob-ai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-[#0080FF] hover:underline font-bold"
              >
                Or book directly via Calendly (30 min) →
              </a>
            </div>
          </form>
        ) : (
          <div className="py-8 space-y-5 text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <div className="space-y-1.5">
              <h4 className="text-xl font-poppins font-bold text-slate-900">
                Request Received!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.name}. Rocky Jacob will review your profile and send a calendar invite / preliminary positioning teardown within 12 hours.
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold uppercase transition-colors"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
