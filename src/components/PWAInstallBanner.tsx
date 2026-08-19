import React, { useState, useEffect } from 'react';
import { Smartphone, Download, X, Sparkles } from 'lucide-react';

export const PWAInstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Show demo banner after 3 seconds for mobile devices if prompt hasn't fired
    const timer = setTimeout(() => {
      if (window.innerWidth < 1024) {
        setShowBanner(true);
      }
    }, 3000);

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
        setShowBanner(false);
      }
      setDeferredPrompt(null);
    } else {
      alert("To install ACQSA AI on your mobile device:\n\n1. Tap your browser Menu (⋮ or Share icon)\n2. Tap 'Add to Home screen' or 'Install App'");
      setShowBanner(false);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-16 lg:bottom-6 left-4 right-4 lg:left-auto lg:right-6 z-50 max-w-md bg-white border-2 border-[#FF1B6B] rounded-2xl p-4 shadow-2xl space-y-3 animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="ACQSA AI" className="h-7 w-auto object-contain" />
          <div>
            <strong className="block text-xs font-poppins font-extrabold text-slate-900 leading-tight">
              Install ACQSA AI Mobile Web App
            </strong>
            <span className="text-[10px] text-slate-700 font-semibold leading-tight block">
              1-Click Home Screen App Access & Vernacular Voice AI
            </span>
          </div>
        </div>

        <button
          onClick={() => setShowBanner(false)}
          className="p-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900"
          aria-label="Close PWA banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleInstallClick}
          className="flex-1 py-2 rounded-xl bg-gradient-to-r from-[#FF1B6B] via-[#0077FF] to-[#7C3AED] text-white font-poppins font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] transition-transform flex items-center justify-center gap-1.5"
        >
          <Download className="w-3.5 h-3.5" />
          Install Mobile App
        </button>
        <button
          onClick={() => setShowBanner(false)}
          className="px-3 py-2 rounded-xl bg-slate-100 text-slate-800 font-poppins font-bold text-xs hover:bg-slate-200"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};
