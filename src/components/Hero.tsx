import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, CheckCircle2, Globe, Phone, ArrowRight, ShieldCheck, Sparkles, Activity, Play, Pause } from 'lucide-react';
import { ThreeSphere } from './ThreeSphere';

interface HeroProps {
  onOpenDemoModal: (type?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  // Dynamic phrase cycling
  const phrases = [
    'in every language.',
    'across every channel.',
    'without keeping patients waiting.',
    'from first call to final discharge.'
  ];
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 300);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Voice AI Interactive Simulation state
  const [isPlaying, setIsPlaying] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const transcript = [
    {
      speaker: 'Patient (Priya Sharma)',
      lang: 'Telugu',
      text: '“డాక్టర్ గారిని రేపు కలవడానికి అపాయింట్మెంట్ కావాలి.”',
      sub: 'Translation: I need an appointment to see the doctor tomorrow.',
    },
    {
      speaker: 'ACQSA Voice AI',
      lang: 'English / Telugu Auto-select',
      text: '“Certainly. Which department would you like to visit?”',
      sub: 'Department & Doctor Discovery initiated',
    },
    {
      speaker: 'Patient (Priya Sharma)',
      lang: 'Telugu',
      text: '“Cardiology.”',
      sub: 'Intent extracted: Department = Cardiology',
    },
    {
      speaker: 'ACQSA Voice AI',
      lang: 'English / Telugu',
      text: '“Dr. Rao is available tomorrow at 11:30 AM and 4:00 PM. Which time would you prefer?”',
      sub: 'HIS Slot queried: 11:30 AM & 4:00 PM open',
    }
  ];

  const [currentTranscriptIdx, setCurrentTranscriptIdx] = useState(0);

  // Auto advance dialogue
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentTranscriptIdx((prev) => (prev + 1) % transcript.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Audio Canvas Waveform Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      ctx.beginPath();
      const bars = 36;
      const barWidth = width / bars;

      for (let i = 0; i < bars; i++) {
        const x = i * barWidth;
        const amplitude = isPlaying 
          ? Math.sin(step + i * 0.3) * 16 + Math.cos(step * 0.6 + i * 0.2) * 10 + 8 
          : 4;
        
        const gradient = ctx.createLinearGradient(0, centerY - amplitude, 0, centerY + amplitude);
        gradient.addColorStop(0, '#20D6C7');
        gradient.addColorStop(0.5, '#53CFFF');
        gradient.addColorStop(1, '#8B7CFF');

        ctx.fillStyle = gradient;
        ctx.fillRect(x + 2, centerY - amplitude / 2, barWidth - 4, amplitude);
      }

      step += 0.08;
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying]);

  // Healthcare verticals for right continuous rail ticker (LIA-inspired vertical scroll)
  const hospitalVerticals = [
    { title: 'OPD & SPECIALTY CLINICS', desc: 'Instant 24×7 booking, rescheduling & queue management' },
    { title: 'EMERGENCY & TPA DESK', desc: 'Rapid pre-authorization extraction & missing document alerts' },
    { title: 'INPATIENT & NURSING WARDS', desc: 'Automated discharge instructions & medication guidance' },
    { title: 'DIAGNOSTICS & PATHOLOGY', desc: 'Pre-test fasting notices & automated lab report dispatch' },
    { title: 'HOSPITAL PHARMACY', desc: 'Refill reminders, prescription queries & home delivery passes' },
    { title: 'MEDICAL RECORDS (MRD)', desc: '100% template-compliant discharge notes ready for HIS' },
    { title: 'MULTISPECIALTY GROUPS', desc: 'Centralized multi-branch call routing in vernacular dialects' },
    { title: 'TELE-OPD CONSULTATIONS', desc: 'Pre-visit symptom intake & video link distribution' }
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-16 overflow-hidden flex items-center justify-center hero-atmosphere text-foreground">
      
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* LIA-Inspired 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-5 space-y-7 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09242A] border border-[#20D6C7]/30 backdrop-blur-md shadow-lg shadow-[#20D6C7]/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20D6C7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20D6C7]"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide font-jura uppercase">
                Next-Gen Healthcare Intelligence
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold uppercase leading-[1.05] tracking-tight text-white">
                Healthcare <br />
                conversations, <br />
                <span className="text-gradient">handled intelligently</span>
              </h1>
              
              <div className="h-10 flex items-center">
                <span 
                  className={`text-xl sm:text-2xl font-jura font-bold text-[#53CFFF] uppercase tracking-wider transition-all duration-300 transform ${
                    fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  {phrases[currentPhraseIdx]}
                </span>
              </div>
            </div>

            {/* Supporting Copy */}
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed font-normal uppercase tracking-wider font-inter">
              ACQSA AI connects seamlessly across voice calls, WhatsApp, OPD scheduling, TPA portals and hospital EMRs—delivering human-like patient care with clinical precision.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenDemoModal('live_demo')}
                className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-heading font-extrabold text-sm text-[#091B22] overflow-hidden transition-all shadow-xl shadow-[#20D6C7]/20 hover:shadow-[#20D6C7]/40 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#20D6C7] via-[#53CFFF] to-[#6BE7B7]" />
                <span className="relative flex items-center gap-2">
                  Book a Live Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-slate-200 bg-[#09242A] hover:bg-[#0d323a] border border-[#20D6C7]/30 transition-all group"
              >
                <div className="w-7 h-7 rounded-full bg-[#20D6C7]/20 flex items-center justify-center text-[#20D6C7]">
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                </div>
                {isPlaying ? 'Pause Neural Voice AI' : 'Experience Voice AI'}
              </button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-[11px] text-slate-400 font-jura uppercase">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#20D6C7]" /> Vernacular Dialogues
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#53CFFF]" /> HIS & EMR Ready
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#6BE7B7]" /> 24×7 Active
              </div>
            </div>

          </div>

          {/* Center Column: WebGL 3D Particle Sphere + Neural Orb Overlay */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative my-4 lg:my-0">
            
            {/* LIA-style Sonar Outer Rings + WebGL 3D Sphere */}
            <div className="relative flex items-center justify-center w-72 h-72 sm:w-80 sm:h-80">
              
              {/* Animated Sonar Ripple Layers */}
              <div className="absolute inset-0 rounded-full border border-[#20D6C7]/30 animate-sonar pointer-events-none" />
              <div className="absolute inset-4 rounded-full border border-[#53CFFF]/25 animate-sonar pointer-events-none" style={{ animationDelay: '0.8s' }} />
              <div className="absolute inset-8 rounded-full border border-[#8B7CFF]/20 animate-sonar pointer-events-none" style={{ animationDelay: '1.6s' }} />

              {/* WebGL 3D Particle Sphere */}
              <div className="absolute inset-0 z-10">
                <ThreeSphere isPlaying={isPlaying} />
              </div>

              {/* Central Floating Action Mic Button */}
              <div className="absolute z-20 flex flex-col items-center justify-center pointer-events-auto">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#20D6C7] via-[#53CFFF] to-[#8B7CFF] text-[#091B22] flex items-center justify-center shadow-[0_0_30px_rgba(32,214,199,0.6)] hover:scale-110 transition-transform"
                  title="Toggle Voice Input"
                >
                  <Mic className="w-6 h-6 animate-pulse" />
                </button>
                <span className="font-jura text-[10px] font-bold text-white tracking-widest uppercase mt-2 bg-[#040810]/80 px-2.5 py-0.5 rounded-full border border-[#20D6C7]/30">
                  {isPlaying ? '● ACQSA AI Active' : 'Paused'}
                </span>
              </div>

            </div>

            {/* Audio Waveform Canvas */}
            <div className="w-full max-w-sm my-3 p-2 bg-[#071621]/90 rounded-xl border border-[#20D6C7]/30">
              <canvas ref={canvasRef} width={340} height={36} className="w-full h-9 rounded" />
            </div>

            {/* Live Bilingual Transcript Box */}
            <div className="w-full max-w-sm bg-[#09242A]/90 border border-[#20D6C7]/30 rounded-2xl p-4 shadow-xl space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold border-b border-white/10 pb-1.5">
                <span className="text-[#53CFFF]">{transcript[currentTranscriptIdx].speaker}</span>
                <span className="text-[10px] text-[#20D6C7] bg-[#20D6C7]/10 px-2 py-0.5 rounded">
                  {transcript[currentTranscriptIdx].lang}
                </span>
              </div>

              <p className="text-xs font-medium text-white">{transcript[currentTranscriptIdx].text}</p>
              <p className="text-[10px] text-slate-400 italic">{transcript[currentTranscriptIdx].sub}</p>

              <div className="pt-2 flex items-center justify-between text-[10px] text-[#6BE7B7] font-semibold border-t border-white/5">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Slot Secured</span>
                <span>Tomorrow · 11:30 AM</span>
              </div>
            </div>

          </div>

          {/* Right Column: LIA-Inspired Auto-scrolling Vertical Rail ("ACQSA AI for") */}
          <div className="lg:col-span-3 hidden lg:flex flex-col text-left">
            <h3 className="mb-3 font-poppins text-lg font-bold text-white uppercase tracking-wider">
              ACQSA AI for
            </h3>

            {/* Rail Scroll Viewport */}
            <div className="relative overflow-hidden h-[460px] border-l-2 border-[#20D6C7]/30 pl-4">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-[#040810] to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-t from-[#040810] to-transparent" />

              <div className="hero-rail-scroll flex flex-col gap-6">
                {hospitalVerticals.concat(hospitalVerticals).map((vert, idx) => (
                  <article key={idx} className="space-y-1 group">
                    <h4 className="font-jura text-xs font-bold uppercase tracking-wider text-[#53CFFF] group-hover:text-[#20D6C7] transition-colors">
                      {vert.title}
                    </h4>
                    <p className="font-inter text-[11px] text-slate-400 leading-snug">
                      {vert.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
