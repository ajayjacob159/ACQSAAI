import React, { useState } from 'react';
import { Linkedin, Mail, ArrowRight, ShieldCheck, MapPin, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface FooterProps {
  onOpenNewsletter?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenNewsletter }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      try {
        localStorage.setItem('acqsa_newsletter_subscribed', 'true');
      } catch {
        // ignore
      }
    }, 500);
  };

  return (
    <footer className="bg-[#FAFAFC] border-t border-slate-200 text-slate-600 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Row: Brand & Contact */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-200 pb-10">
          
          <div className="space-y-2 max-w-sm">
            <a href="#" className="flex items-center gap-2.5">
              <img 
                src={logoImg} 
                alt="ACQSA AI" 
                className="h-8 w-auto object-contain" 
              />
            </a>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              LinkedIn that drives pipeline, not just likes. Solo executive ghostwriting & category positioning for US/UK Series A–B SaaS founders.
            </p>
          </div>

          {/* Quick links & contact details */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-mono">
            <a 
              href="mailto:ceo@acqsaai.com" 
              className="flex items-center gap-1.5 text-slate-700 hover:text-slate-950 font-bold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF1B6B]" />
              <span>ceo@acqsaai.com</span>
            </a>

            <a 
              href="mailto:ajayjacobe2@gmail.com" 
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              ajayjacobe2@gmail.com
            </a>

            <a 
              href="tel:+919966997159" 
              className="text-slate-800 hover:text-slate-950 font-bold transition-colors"
            >
              +91 9966997159
            </a>

            <a 
              href="https://www.linkedin.com/in/rockyjacob159/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#0077FF] font-bold transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0077FF]" />
              <span>LinkedIn</span>
            </a>

            <a 
              href="https://calendly.com/rockyjacob-ai/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full font-bold transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0080FF]" />
              <span>Book Call (Calendly)</span>
            </a>
          </div>

        </div>

        {/* Newsletter Subscription Block */}
        <div className="bg-white rounded-3xl border-2 border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-7 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-[10px] font-mono font-bold text-[#FF1B6B]">
                <Sparkles className="w-3 h-3 text-[#FF1B6B]" />
                <span>WEEKLY FOUNDER NEWSLETTER</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-slate-900 tracking-tight">
                Subscribe to The Founder Pipeline Dispatch
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                Every Thursday: 1 tactical breakdown on founder LinkedIn positioning, executive ghostwriting frameworks, and B2B pipeline strategies. Read by 1,200+ Series A–B SaaS founders.
              </p>
            </div>

            <div className="lg:col-span-5">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter work email"
                      className="flex-1 bg-[#FAFAFC] border border-slate-300 rounded-full px-4 py-3 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-950 focus:bg-white transition-all shadow-2xs"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <span>{loading ? 'Subscribing...' : 'Subscribe'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF1B6B]" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 px-2">
                    <span>100% spam-free • Unsubscribe anytime</span>
                    {onOpenNewsletter && (
                      <button
                        type="button"
                        onClick={onOpenNewsletter}
                        className="text-[#FF1B6B] hover:underline font-bold"
                      >
                        Preview issue →
                      </button>
                    )}
                  </div>
                </form>
              ) : (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold block">You're Subscribed! 🎉</span>
                    <span className="text-[11px] text-emerald-700">Watch your inbox for this Thursday's founder breakdown.</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Massive Signature ACQSA AI Watermark Logo */}
        <div className="pt-2 pb-2 text-center select-none overflow-hidden border-b border-slate-100 flex flex-col items-center justify-center">
          <img 
            src={logoImg} 
            alt="ACQSA AI" 
            className="w-full max-w-lg sm:max-w-xl md:max-w-2xl h-auto object-contain opacity-85 hover:opacity-100 transition-opacity duration-300" 
          />
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2026 Rocky Jacob / ACQSA AI. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Solo Ghostwriting Architecture</span>
            <span>•</span>
            <span>US & UK B2B SaaS Focus</span>
            <span>•</span>
            <span>India Cost Leverage</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
