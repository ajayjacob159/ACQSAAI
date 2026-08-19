import React, { useState } from 'react';
import { X, CheckCircle2, PhoneCall, Sparkles, Send, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, initialType = 'live_demo' }) => {
  const [activeType, setActiveType] = useState<string>(initialType);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    hospitalName: '',
    contactName: '',
    phone: '',
    email: '',
    role: 'Managing Director / CEO',
    city: '',
    language: 'Telugu + English',
    dailyCalls: '500 - 2,000 calls/day'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00C2B3', '#0077FF', '#7C3AED']
    });

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C2B3]/10 text-xs font-bold text-[#00C2B3]">
            <Sparkles className="w-3.5 h-3.5" /> ACQSA ENTERPRISE DEMO & VOICE TEST
          </div>
          <h3 className="text-2xl font-poppins font-extrabold text-slate-900">
            {activeType === 'voice_call' ? 'Request Instant AI Voice Call' : 'Book Executive Hospital Demo'}
          </h3>
          <p className="text-xs text-slate-600">
            Experience real-time vernacular voice AI calls and clinical EMR auto-scribing tailored to your hospital network.
          </p>
        </div>

        {/* Form Body */}
        {submitted ? (
          <div className="py-10 text-center space-y-3 animate-in zoom-in-95">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-[#10B981]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Demo Request Submitted!</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Our clinical automation desk will connect with <strong className="text-slate-900">{formData.phone || 'your phone'}</strong> within 15 minutes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-poppins font-medium">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 mb-1">Hospital / Clinic Name</label>
                <input
                  type="text"
                  required
                  value={formData.hospitalName}
                  onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                  placeholder="e.g. Apollo Multi-Specialty"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#00C2B3]"
                />
              </div>
              <div>
                <label className="block text-slate-700 mb-1">Your Name & Designation</label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  placeholder="Dr. Rajesh Kumar (MD)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#00C2B3]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 mb-1">Phone Number (For Test Call)</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#00C2B3]"
                />
              </div>
              <div>
                <label className="block text-slate-700 mb-1">Hospital Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="director@hospital.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#00C2B3]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 mb-1">Primary Language Dialect</label>
                <select
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-[#00C2B3]"
                >
                  <option>Telugu + English</option>
                  <option>Hindi + English</option>
                  <option>Tamil + English</option>
                  <option>Kannada + English</option>
                  <option>Marathi + English</option>
                  <option>Bengali + English</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-700 mb-1">Daily Call / OPD Volume</label>
                <select
                  value={formData.dailyCalls}
                  onChange={(e) => setFormData({ ...formData, dailyCalls: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-[#00C2B3]"
                >
                  <option>Under 500 calls/day</option>
                  <option>500 - 2,000 calls/day</option>
                  <option>2,000 - 10,000 calls/day</option>
                  <option>10,000+ calls/day (Network)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00C2B3] via-[#0077FF] to-[#7C3AED] text-white font-poppins font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {activeType === 'voice_call' ? 'Trigger Instant AI Test Call' : 'Schedule Live Executive Demo'}
            </button>

            <div className="pt-2 text-center text-[10px] text-slate-500 font-jura flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" /> Enterprise Security & Clinical Data Protection Compliant
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
