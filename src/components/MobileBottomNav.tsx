import React from 'react';
import { Home, Zap, Mic, FileText, Calendar, Sparkles } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenDemoModal: (type?: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenDemoModal }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-2xl px-2 py-1.5 flex items-center justify-around">
      <a
        href="#"
        className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-[#00C2B3] transition-colors py-1 px-2 text-[10px] font-poppins font-medium"
      >
        <Home className="w-4 h-4 text-slate-700" />
        <span>Home</span>
      </a>

      <a
        href="#yc-innovations"
        className="flex flex-col items-center gap-0.5 text-[#00C2B3] font-bold transition-colors py-1 px-2 text-[10px] font-poppins"
      >
        <Zap className="w-4 h-4 text-[#00C2B3]" />
        <span>YC AI</span>
      </a>

      <a
        href="#products"
        className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-[#00C2B3] transition-colors py-1 px-2 text-[10px] font-poppins font-medium"
      >
        <Mic className="w-4 h-4 text-[#0077FF]" />
        <span>Voice AI</span>
      </a>

      <a
        href="#auto-scribe"
        className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-[#00C2B3] transition-colors py-1 px-2 text-[10px] font-poppins font-medium"
      >
        <FileText className="w-4 h-4 text-[#7C3AED]" />
        <span>Auto-Scribe</span>
      </a>

      <button
        onClick={() => onOpenDemoModal('live_demo')}
        className="flex flex-col items-center gap-0.5 text-white font-bold bg-gradient-to-r from-[#00C2B3] to-[#0077FF] rounded-xl px-3 py-1.5 text-[10px] font-poppins shadow-md"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Demo</span>
      </button>
    </div>
  );
};
