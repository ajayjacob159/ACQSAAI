import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

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
  const [leadFit, setLeadFit] = useState<'HIGH FIT' | 'MEDIUM FIT' | 'LOW FIT'>('HIGH FIT');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Qualification logic
    let fit: 'HIGH FIT' | 'MEDIUM FIT' | 'LOW FIT' = 'HIGH FIT';
    if (formData.avgDealSize === '< $5k ARR' || formData.monthlyRevenueGoal === '< $10k') {
      fit = 'LOW FIT';
    } else if (formData.currentMonthlyConversations === '15+') {
      fit = 'MEDIUM FIT';
    }
    setLeadFit(fit);

    // Private Admin Payload
    const payload = {
      ...formData,
      packageRequested: initialPackage || 'General Audit & Strategy Call',
      leadFitCategory: fit,
      timestamp: new Date().toISOString()
    };
    console.log('[ACQSA AI PRIVATE CRM LEAD PAYLOAD]:', payload);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080A0C]/90 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-[#101318] border border-[#20242A] rounded-2xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#080A0C] text-[#A7ADB5] hover:text-white border border-[#20242A]"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2 text-left border-b border-[#20242A] pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold">
                LEAD QUALIFICATION & STRATEGY CALL
              </span>
              <h3 className="text-2xl font-heading font-extrabold uppercase text-white">
                DISCUSS YOUR B2B SALES PIPELINE
              </h3>
              {initialPackage && (
                <span className="text-xs font-mono text-[#A7ADB5] block">
                  Package Interest: <strong className="text-[#B8FF3D] font-bold">{initialPackage}</strong>
                </span>
              )}
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
                  placeholder="Acme Technologies"
                  className="w-full bg-[#080A0C] border border-[#20242A] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B8FF3D]"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-[#A7ADB5] block mb-1">FOUNDER LINKEDIN URL *</label>
                <input
                  type="url"
                  required
                  value={formData.linkedinProfile}
                  onChange={(e) => setFormData({ ...formData, linkedinProfile: e.target.value })}
                  placeholder="https://linkedin.com/in/johndoe"
                  className="w-full bg-[#080A0C] border border-[#20242A] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B8FF3D]"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-[#A7ADB5] block mb-1">AVERAGE DEAL SIZE *</label>
                <select
                  value={formData.avgDealSize}
                  onChange={(e) => setFormData({ ...formData, avgDealSize: e.target.value })}
                  className="w-full bg-[#080A0C] border border-[#20242A] rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#B8FF3D]"
                >
                  <option>&lt; $5k ARR</option>
                  <option>$5k - $10k ARR</option>
                  <option>$10k - $25k ARR</option>
                  <option>$25k - $50k+ ARR</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono text-[#A7ADB5] block mb-1">TIMELINE *</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-[#080A0C] border border-[#20242A] rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#B8FF3D]"
                >
                  <option>Immediate (Next 30 days)</option>
                  <option>Next 60 days</option>
                  <option>Evaluating options</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono text-[#A7ADB5] block mb-1">PRIMARY B2B OFFERING & SALES CHALLENGE</label>
              <textarea
                rows={2}
                required
                value={formData.primaryOffer}
                onChange={(e) => setFormData({ ...formData, primaryOffer: e.target.value })}
                placeholder="Briefly describe your product/service and main pipeline problem..."
                className="w-full bg-[#080A0C] border border-[#20242A] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B8FF3D]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#B8FF3D] text-[#080A0C] font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
            >
              SUBMIT QUALIFICATION APPLICATION →
            </button>
          </form>
        ) : (
          <div className="py-8 space-y-6 text-center animate-in fade-in">
            <CheckCircle2 className="w-12 h-12 text-[#B8FF3D] mx-auto" />
            <div className="space-y-2">
              <h3 className="text-2xl font-heading font-extrabold uppercase text-white">APPLICATION RECEIVED</h3>
              <p className="text-xs text-[#A7ADB5] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Our strategy team is reviewing your profile and company details. We will reach out within 24 hours to schedule your strategy call.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-[#080A0C] border border-[#20242A] text-white font-extrabold text-xs uppercase tracking-wider hover:border-[#B8FF3D]"
            >
              CLOSE WINDOW
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
