import React, { useState } from 'react';
import { X, Sparkles, PhoneCall, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, initialType }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    hospitalName: '',
    role: 'Hospital CEO / COO',
    email: '',
    phone: '',
    productInterest: 'Full Enterprise AI Suite',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#20D6C7', '#53CFFF', '#6BE7B7', '#8B7CFF']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-xl bg-[#09242A] border-2 border-[#20D6C7]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#071621] text-slate-400 hover:text-white border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-in zoom-in duration-300">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#6BE7B7]/20 border border-[#6BE7B7] flex items-center justify-center text-[#6BE7B7]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-white">
              Demonstration Request Confirmed
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Our enterprise healthcare AI specialist will contact <strong className="text-[#20D6C7]">{formData.hospitalName}</strong> within 2 business hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#20D6C7] text-[#091B22] font-bold text-sm"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#20D6C7]/15 text-[11px] font-bold text-[#20D6C7]">
                <Sparkles className="w-3.5 h-3.5" /> ACQSA ENTERPRISE DEMO
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white">
                {initialType === 'voice_call' ? 'Schedule a Voice AI Call' : 'Book a Live ACQSA AI Demo'}
              </h3>
              <p className="text-xs text-slate-400">
                Experience intelligent voice, WhatsApp, OPD, and ClinScribe automation tailored to your hospital workflows.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Dr. Rajesh Kumar"
                    className="w-full bg-[#071621] text-white px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#20D6C7]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Hospital / Clinic Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.hospitalName}
                    onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                    placeholder="City Multispeciality Hospital"
                    className="w-full bg-[#071621] text-white px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#20D6C7]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Designation / Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#071621] text-white px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#20D6C7]"
                  >
                    <option>Hospital CEO / COO</option>
                    <option>Medical Director</option>
                    <option>Hospital Administrator</option>
                    <option>Front Office Manager</option>
                    <option>OPD / Nursing Head</option>
                    <option>TPA & Billing Manager</option>
                    <option>Doctor / Consultant</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Product Interest</label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full bg-[#071621] text-white px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#20D6C7]"
                  >
                    <option>Full Enterprise AI Suite</option>
                    <option>ACQSA Voice & WhatsApp Agent</option>
                    <option>ACQSA ClinScribe Auto-Scribe</option>
                    <option>TPA & Cashless Automation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Official Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rajesh@hospital.com"
                    className="w-full bg-[#071621] text-white px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#20D6C7]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Mobile / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#071621] text-white px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#20D6C7]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">Workflow Notes (Optional)</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your OPD call volumes or HIS integration setup..."
                  className="w-full bg-[#071621] text-white px-3.5 py-2 rounded-xl border border-white/10 focus:outline-none focus:border-[#20D6C7]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#20D6C7] via-[#53CFFF] to-[#6BE7B7] text-[#091B22] font-heading font-extrabold text-sm shadow-xl shadow-[#20D6C7]/25 hover:scale-[1.01] transition-transform"
              >
                Submit Demo Request
              </button>

              <p className="text-[10px] text-slate-400 text-center">
                🔒 Your information is confidential and will only be used for ACQSA AI product demonstration coordination.
              </p>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
