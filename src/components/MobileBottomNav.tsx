import React from 'react';
import { Home, Zap, Mic, FileText, Sparkles } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenDemoModal: (type?: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenDemoModal }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl border-t-2 border-slate-200 shadow-2xl py-2 px-3">
      <div className="flex items-center justify-around text-[10px] font-poppins font-extrabold">
        
        {/* Home */}
        <a
          href="#"
          className="flex flex-col items-center gap-1 text-slate-800 hover:text-[#FF1B6B] transition-colors py-1 px-2"
        >
          <Home className="w-4 h-4 text-slate-800" />
          <span>Home</span>
        </a>

        {/* Automations */}
        <a
          href="#yc-innovations"
          className="flex flex-col items-center gap-1 text-[#FF1B6B] hover:text-slate-900 transition-colors py-1 px-2"
        >
          <Zap className="w-4 h-4 text-[#FF1B6B]" />
          <span>Automations</span>
        </a>

        {/* Voice AI */}
        <a
          href="#products"
          className="flex flex-col items-center gap-1 text-[#0077FF] hover:text-slate-900 transition-colors py-1 px-2"
        >
          <Mic className="w-4 h-4 text-[#0077FF]" />
          <span>Voice AI</span>
        </a>

        {/* Auto-Scribe */}
        <a
          href="#auto-scribe"
          className="flex flex-col items-center gap-1 text-[#7C3AED] hover:text-slate-900 transition-colors py-1 px-2"
        >
          <FileText className="w-4 h-4 text-[#7C3AED]" />
          <span>Auto-Scribe</span>
        </a>

        {/* Book Demo */}
        <button
          onClick={() => onOpenDemoModal('live_demo')}
          className="flex flex-col items-center gap-1 text-white bg-gradient-to-r from-[#FF1B6B] to-[#7C3AED] px-3 py-1.5 rounded-xl shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Book Demo</span>
        </button>

      </div>
    </div>
  );
};
