import React, { useState, useEffect } from 'react';
import { Download, Smartphone, X, Sparkles, CheckCircle2 } from 'lucide-react';

export const PWAInstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Show banner anyway after 4s for interactive preview if standalone is supported
    const timer = setTimeout(() => {
      if (!window.matchMedia('(display-mode: standalone)').matches) {
        setShowBanner(true);
      }
    }, 4000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      clearTimeout(timer);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      setInstalled(true);
      setTimeout(() => setShowBanner(false), 3000);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed top-20 right-4 z-40 max-w-sm w-[90%] sm:w-auto bg-white/95 backdrop-blur-xl border-2 border-[#00C2B3]/40 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-top duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00C2B3] to-[#0077FF] flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
            🏥
          </div>
          <div>
            <h4 className="font-poppins font-extrabold text-xs text-slate-900 flex items-center gap-1.5">
              Install ACQSA Mobile App <Sparkles className="w-3.5 h-3.5 text-[#00C2B3]" />
            </h4>
            <p className="text-[11px] text-slate-600 font-inter leading-tight">
              Add ACQSA AI to your Android home screen for instant access.
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowBanner(false)}
          className="text-slate-400 hover:text-slate-700 p-1"
          aria-label="Close install banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-3 flex items-center gap-2">
        {installed ? (
          <div className="w-full py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> App Installed on Home Screen!
          </div>
        ) : (
          <button
            onClick={handleInstallClick}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#00C2B3] to-[#0077FF] text-white font-poppins font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] transition-transform flex items-center justify-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" /> Install ACQSA Web App
          </button>
        )}
      </div>
    </div>
  );
};
