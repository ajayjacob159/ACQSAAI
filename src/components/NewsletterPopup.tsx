import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, CheckCircle2, Sparkles, ArrowRight, Bell } from 'lucide-react';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        localStorage.setItem('acqsa_newsletter_subscribed', 'true');
      } catch {
        // ignore
      }
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-xs pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full max-w-md bg-white border-2 border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-2xl relative text-slate-900 overflow-hidden"
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-pink-100/60 to-purple-100/40 rounded-full blur-2xl pointer-events-none -mr-12 -mt-12" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors z-10"
              aria-label="Close newsletter popup"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <div className="space-y-4 relative z-10">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-[10px] font-mono font-bold text-[#FF1B6B]">
                  <Sparkles className="w-3 h-3 text-[#FF1B6B]" />
                  <span>WEEKLY B2B SAAS DISPATCH</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-slate-900 tracking-tight leading-snug">
                    Founder LinkedIn Playbooks in Your Inbox
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Get our weekly breakdown on executive ghostwriting, category positioning, and outbound pipeline strategies. Zero fluff or vanity metrics.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className="w-full bg-[#FAFAFC] border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-950 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{loading ? 'Subscribing...' : 'Subscribe Free to Newsletter'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF1B6B]" />
                  </motion.button>
                </form>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-100">
                  <span>Read by 1,200+ SaaS founders</span>
                  <span>100% spam-free • 1-click unsubscribe</span>
                </div>
              </div>
            ) : (
              <div className="py-6 text-center space-y-3 relative z-10">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-poppins font-extrabold text-slate-900">
                  You're Subscribed! 🎉
                </h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Thank you for joining. Look out for our weekly teardown in your inbox every Thursday.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onClose}
                    className="px-6 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-poppins font-bold text-xs transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
