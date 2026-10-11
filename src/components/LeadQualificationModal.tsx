import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap, Calendar, Sparkles } from 'lucide-react';

interface LeadQualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
}

export const LeadQualificationModal: React.FC<LeadQualificationModalProps> = ({ isOpen, onClose, initialPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    website: '',
    linkedinProfile: '',
    jobTitle: 'Founder / CEO',
    industry: 'B2B SaaS',
    primaryOffer: '',
    avgDealSize: '$10k - $25k ARR',
    currentMonthlyConversations: '0 - 5',
    primarySalesChallenge: 'Inconsistent pipeline & unpredictable outbound',
    monthlyRevenueGoal: '$50k+',
    timeline: 'Immediate (Next 30 days)'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      packageRequested: initialPackage || 'General Strategy Call',
      timestamp: new Date().toISOString()
    };
    console.log('[ACQSA AI CRM APPLICATION]:', payload);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white border-2 border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative my-8 text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-400 hover:text-slate-800 border border-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-1.5 text-left border-b border-slate-100 pb-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#0080FF] font-extrabold">
                LEAD QUALIFICATION & STRATEGY CALL
              </span>
              <h3 className="text-2xl font-poppins font-extrabold text-slate-900">
                Discuss Your B2B Sales Pipeline
              </h3>
              {initialPackage && (
                <span className="text-xs font-mono text-slate-500 block">
                  Package Interest: <strong className="text-[#FF1B6B] font-bold">{initialPackage}</strong>
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">FULL NAME *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
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
                  placeholder="john@company.com"
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
                  placeholder="Acme Technologies"
                  className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0080FF]"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">FOUNDER LINKEDIN URL *</label>
                <input
                  type="url"
                  required
                  value={formData.linkedinProfile}
                  onChange={(e) => setFormData({ ...formData, linkedinProfile: e.target.value })}
                  placeholder="https://linkedin.com/in/johndoe"
                  className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0080FF]"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">AVERAGE DEAL SIZE *</label>
                <select
                  value={formData.avgDealSize}
                  onChange={(e) => setFormData({ ...formData, avgDealSize: e.target.value })}
                  className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-3 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0080FF]"
                >
                  <option>&lt; $5k ARR</option>
                  <option>$5k - $10k ARR</option>
                  <option>$10k - $25k ARR</option>
                  <option>$25k - $50k+ ARR</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">TIMELINE *</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-3 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0080FF]"
                >
                  <option>Immediate (Next 30 days)</option>
                  <option>Next 60 days</option>
                  <option>Evaluating options</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono font-bold text-slate-600 block mb-1">PRIMARY B2B OFFERING & SALES CHALLENGE</label>
              <textarea
                rows={2}
                required
                value={formData.primaryOffer}
                onChange={(e) => setFormData({ ...formData, primaryOffer: e.target.value })}
                placeholder="Briefly describe your product/service and main pipeline problem..."
                className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-[#0080FF]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] text-white font-poppins font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-purple-500/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
            >
              <span>Submit Strategy Call Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="py-8 space-y-6 text-center animate-in fade-in">
            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
            <div className="space-y-2">
              <h3 className="text-2xl font-poppins font-extrabold text-slate-900">Application Received</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
                Thank you, {formData.name}. Our strategy team is reviewing your profile and company details. We will reach out within 24 hours to schedule your strategy call.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-poppins font-extrabold text-xs uppercase tracking-wider transition-all"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
