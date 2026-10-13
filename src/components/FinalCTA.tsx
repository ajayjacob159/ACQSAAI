import React, { useState } from 'react';
import { ArrowRight, Calendar, CheckCircle2, Mail, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log('[QUICK INQUIRY SENT]:', email);
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-24 sm:py-32 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-rose-100/50 via-purple-100/40 to-blue-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-slate-800 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#FF1B6B]" />
          <span>START TURNING LINKEDIN INTO PIPELINE</span>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-poppins font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Ready to build category authority <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
              that actually drives pipeline?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Stop letting dry PR posts or generic AI blur your category reputation. 
            Book a 20-minute voice extraction strategy call or start immediately with our low-risk $1,500 pilot.
          </p>
        </div>

        {/* CTA Actions Container */}
        <div className="space-y-6 pt-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-sm uppercase tracking-wider shadow-xl shadow-slate-950/15 hover:scale-105 active:scale-95 transition-all group"
            >
              <span>Book a free 20-min strategy call</span>
              <ArrowRight className="w-4 h-4 text-[#FF1B6B] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://calendly.com/rockyjacob-ai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-slate-200 text-slate-800 font-poppins font-bold text-sm tracking-wide hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#0080FF]" />
              <span>Direct Calendly (30 min)</span>
            </a>
          </div>

          {/* Quick email inquiry backup form */}
          <div className="max-w-md mx-auto pt-4">
            {!submitted ? (
              <form onSubmit={handleQuickInquiry} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email for a pilot teardown..."
                  className="flex-1 bg-white border border-slate-300 rounded-full px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-slate-900 shadow-sm"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-mono font-bold tracking-wider uppercase transition-colors shrink-0"
                >
                  Send
                </button>
              </form>
            ) : (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-mono text-emerald-800 font-medium">
                ✓ Received. Rocky will reach out directly within 24 hours.
              </div>
            )}
          </div>
        </div>

        {/* Reassurance strip */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Zero hard-sell or pushy agency sales rep</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Speak directly with founder Rocky Jacob</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>4–6 week low-risk paid pilot available</span>
          </div>
        </div>

      </div>
    </section>
  );
};
