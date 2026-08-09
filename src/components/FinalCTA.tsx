import React, { useState } from 'react';
import { PhoneCall, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FinalCTAProps {
  onOpenDemoModal: (type?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemoModal }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [consentGiven, setConsentGiven] = useState(true);
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim() || !consentGiven) return;

    setRequestSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#20D6C7', '#53CFFF', '#6BE7B7']
    });

    setTimeout(() => {
      setRequestSubmitted(false);
      setPhoneNumber('');
    }, 4000);
  };

  return (
    <section className="py-24 relative bg-radial-gradient from-[#09242A] via-[#071621] to-[#040d14] border-t border-[#20D6C7]/30 overflow-hidden">
      
      {/* Background ambient lighting & waveform graphic */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#20D6C7]/20 via-[#53CFFF]/15 to-[#8B7CFF]/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Animated Waveform to Workflow SVG Graphic */}
        <div className="flex items-center justify-center gap-1 my-4">
          {[12, 24, 40, 18, 32, 48, 20, 36, 16, 28, 44, 22, 14, 30].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}px` }}
              className="w-1.5 bg-gradient-to-t from-[#20D6C7] to-[#53CFFF] rounded-full animate-pulse-slow"
            />
          ))}
          <div className="h-0.5 w-32 bg-gradient-to-r from-[#53CFFF] to-[#6BE7B7] rounded-full mx-2" />
          <CheckCircle2 className="w-6 h-6 text-[#6BE7B7]" />
        </div>

        {/* Main Headline */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
            Let every patient be heard. <br />
            <span className="text-gradient">Let every hospital team move faster.</span>
          </h2>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bring intelligent voice, WhatsApp and clinical documentation automation into your hospital with ACQSA AI.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenDemoModal('live_demo')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#20D6C7] via-[#53CFFF] to-[#6BE7B7] text-[#091B22] font-heading font-extrabold text-base shadow-2xl shadow-[#20D6C7]/30 hover:scale-[1.03] transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" /> Book a Live Demo
          </button>

          <button
            onClick={() => onOpenDemoModal('voice_call')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#09242A] hover:bg-[#0d323a] border-2 border-[#20D6C7]/40 text-white font-heading font-bold text-base transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-5 h-5 text-[#20D6C7]" /> Talk to ACQSA AI
          </button>
        </div>

        {/* Phone Call Request Box */}
        <div className="max-w-lg mx-auto pt-8">
          <div className="bg-[#09242A]/90 border border-[#20D6C7]/30 rounded-3xl p-6 backdrop-blur-2xl shadow-2xl space-y-4 text-left">
            <h4 className="font-heading font-bold text-sm text-white flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#20D6C7]" /> Request a Demo Call
            </h4>

            {requestSubmitted ? (
              <div className="p-4 rounded-2xl bg-[#6BE7B7]/20 border border-[#6BE7B7]/40 text-xs text-[#6BE7B7] font-semibold text-center animate-in fade-in">
                ✓ Request received! An ACQSA AI specialist will schedule your demonstration call shortly.
              </div>
            ) : (
              <form onSubmit={handlePhoneSubmit} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="flex-1 bg-[#071621] text-xs text-white placeholder-slate-500 px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#20D6C7]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-[#20D6C7] text-[#091B22] font-bold text-xs hover:bg-[#53CFFF] transition-colors"
                  >
                    Request Call
                  </button>
                </div>

                <label className="flex items-start gap-2 text-[11px] text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consentGiven}
                    onChange={(e) => setConsentGiven(e.target.checked)}
                    className="mt-0.5 accent-[#20D6C7]"
                  />
                  <span>
                    By requesting a call, you agree to be contacted by our team for an ACQSA AI product demonstration.
                  </span>
                </label>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
