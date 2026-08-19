import React, { useState } from 'react';
import { Smartphone, Mic, Calendar, FileText, ShieldCheck, CheckCircle2, Volume2, MessageSquare, Send, Sparkles, Wifi, Battery, Signal, ChevronRight, Play } from 'lucide-react';

export const AppConsole: React.FC = () => {
  const [activeAppTab, setActiveAppTab] = useState<'voice' | 'opd' | 'scribe' | 'tpa'>('voice');
  const [selectedSlot, setSelectedSlot] = useState<string | null>('11:30 AM');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [voiceActive, setVoiceActive] = useState(true);

  return (
    <section id="app-console" className="py-24 relative bg-[#FAFAFC] text-slate-900 border-t border-slate-200 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00C2B3]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-[#00C2B3]/40 text-xs font-bold text-[#00C2B3]">
            <Smartphone className="w-3.5 h-3.5" /> NATIVE MOBILE APPLICATION EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold tracking-tight leading-tight text-slate-900">
            Full Android Web App <br />
            <span className="text-gradient">Experience on your browser.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Experience ACQSA AI like a native Android app—test voice AI calls, OPD slot locking, WhatsApp notifications, and discharge auto-scribing in real time.
          </p>
        </div>

        {/* Interactive App Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls & Tab Switcher */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-poppins font-extrabold text-slate-900">
                Interactive App Features
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Click any tab to switch screens inside the Android mobile app simulator on the right.
              </p>
            </div>

            <div className="space-y-3">
              
              <button
                onClick={() => setActiveAppTab('voice')}
                className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between shadow-sm ${
                  activeAppTab === 'voice'
                    ? 'bg-white border-[#00C2B3] text-slate-900 shadow-md ring-2 ring-[#00C2B3]/20'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00C2B3]/15 text-[#00C2B3] flex items-center justify-center font-bold">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-slate-900">1. Voice AI & Vernacular Assistant</strong>
                    <span className="text-xs text-slate-500">Live call synthesis & intent extraction</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#00C2B3]" />
              </button>

              <button
                onClick={() => setActiveAppTab('opd')}
                className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between shadow-sm ${
                  activeAppTab === 'opd'
                    ? 'bg-white border-[#0077FF] text-slate-900 shadow-md ring-2 ring-[#0077FF]/20'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0077FF]/15 text-[#0077FF] flex items-center justify-center font-bold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-slate-900">2. Touch OPD Slot Booking</strong>
                    <span className="text-xs text-slate-500">Select doctor, date & lock slot</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#0077FF]" />
              </button>

              <button
                onClick={() => setActiveAppTab('scribe')}
                className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between shadow-sm ${
                  activeAppTab === 'scribe'
                    ? 'bg-white border-[#7C3AED] text-slate-900 shadow-md ring-2 ring-[#7C3AED]/20'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/15 text-[#7C3AED] flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-slate-900">3. ClinScribe Auto-Summary</strong>
                    <span className="text-xs text-slate-500">Doctor review & 1-tap approval</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#7C3AED]" />
              </button>

              <button
                onClick={() => setActiveAppTab('tpa')}
                className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between shadow-sm ${
                  activeAppTab === 'tpa'
                    ? 'bg-white border-[#10B981] text-slate-900 shadow-md ring-2 ring-[#10B981]/20'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-slate-900">4. TPA Pre-Auth Tracker</strong>
                    <span className="text-xs text-slate-500">Cashless claim checklist & status</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#10B981]" />
              </button>

            </div>
          </div>

          {/* Right Column: Android Phone Shell Simulator */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[340px] sm:max-w-[380px] bg-slate-900 text-white rounded-[44px] border-[6px] border-slate-300 p-4 shadow-2xl relative overflow-hidden text-slate-900">
              
              {/* Android Top Camera Punch Hole & Speaker */}
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center gap-2 z-30 relative">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              </div>

              {/* Android Status Bar */}
              <div className="flex items-center justify-between px-3 text-[10px] text-slate-300 font-semibold mb-3">
                <span>09:41</span>
                <div className="flex items-center gap-1.5">
                  <Signal className="w-3 h-3 text-[#00C2B3]" />
                  <Wifi className="w-3 h-3 text-[#00C2B3]" />
                  <Battery className="w-3.5 h-3.5 text-[#10B981]" />
                </div>
              </div>

              {/* Phone Screen Container */}
              <div className="bg-[#FAFAFC] rounded-[32px] p-4 min-h-[500px] flex flex-col justify-between shadow-inner">
                
                {/* App Screen Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#00C2B3] to-[#0077FF] flex items-center justify-center text-white font-bold text-xs">
                      AC
                    </div>
                    <div>
                      <span className="font-poppins font-extrabold text-xs text-slate-900 block leading-none">ACQSA Mobile</span>
                      <span className="text-[9px] text-[#00C2B3] font-bold">Android App Mode</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    5G Active
                  </span>
                </div>

                {/* APP SCREEN CONTENT SWITCHER */}
                <div className="my-auto py-3 space-y-3">
                  
                  {/* SCREEN 1: VOICE AI */}
                  {activeAppTab === 'voice' && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm text-center space-y-2">
                        <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-tr from-[#00C2B3] to-[#0077FF] text-white flex items-center justify-center shadow-md">
                          <Mic className="w-6 h-6 animate-pulse" />
                        </div>
                        <h4 className="font-bold text-xs text-slate-900">ACQSA Vernacular Voice AI</h4>
                        <p className="text-[10px] text-slate-500">“నాకు రేపు మధ్యాహ్నం డెర్మటాలజీ అపాయింట్మెంట్ కావాలి.”</p>
                      </div>

                      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-900 space-y-1">
                        <span className="font-bold block">Intent Extracted:</span>
                        <p className="text-[10px] text-emerald-800 font-mono">
                          Dept: Dermatology | Time: Tomorrow Afternoon | Lang: Telugu
                        </p>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 2: TOUCH OPD BOOKING */}
                  {activeAppTab === 'opd' && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2 text-xs">
                        <span className="font-bold text-slate-900 block text-[11px]">Select Doctor & Slot</span>
                        <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                          <strong className="text-slate-900 block">Dr. Preeti Verma</strong>
                          <span className="text-slate-500 text-[10px]">Dermatology · Apollo Hospital</span>
                        </div>

                        <span className="text-[10px] text-slate-400 font-bold block">Available Time Slots:</span>
                        <div className="grid grid-cols-3 gap-1.5 text-[10px] font-bold">
                          {['10:00 AM', '11:30 AM', '04:00 PM'].map((slot) => (
                            <button
                              key={slot}
                              onClick={() => setSelectedSlot(slot)}
                              className={`py-1.5 rounded-lg border transition-all ${
                                selectedSlot === slot
                                  ? 'bg-[#00C2B3] text-white border-[#00C2B3]'
                                  : 'bg-white text-slate-700 border-slate-200'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>

                        <button
                          onClick={() => setBookingConfirmed(true)}
                          className="w-full py-2 rounded-xl bg-gradient-to-r from-[#00C2B3] to-[#0077FF] text-white font-bold text-xs mt-2 shadow-sm"
                        >
                          {bookingConfirmed ? '✓ Slot Locked & WhatsApp Sent' : 'Confirm Slot'}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 3: CLINSCRIBE AUTO-SUMMARY */}
                  {activeAppTab === 'scribe' && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2 text-xs">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                          <span className="font-bold text-[#7C3AED]">Discharge Summary Draft</span>
                          <span className="text-[9px] bg-purple-100 text-[#7C3AED] px-1.5 py-0.5 rounded font-bold">AI Drafted</span>
                        </div>
                        <p className="text-[10px] text-slate-600">
                          <strong>Diagnosis:</strong> Acute Gastritis<br />
                          <strong>Rx:</strong> Pantoprazole 40mg, Sucralfate Syrup<br />
                          <strong>Follow-up:</strong> 7 Days
                        </p>
                        <button className="w-full py-1.5 rounded-lg bg-[#7C3AED] text-white font-bold text-[10px] shadow-sm">
                          Doctor Sign-off & Export
                        </button>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 4: TPA CLAIMS */}
                  {activeAppTab === 'tpa' && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2 text-xs">
                        <span className="font-bold text-slate-900 block text-[11px]">TPA Pre-Auth Checklist</span>
                        <div className="space-y-1 text-[10px]">
                          <div className="flex items-center justify-between p-1.5 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
                            <span>Insurance ID Card Verified</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                          </div>
                          <div className="flex items-center justify-between p-1.5 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
                            <span>Initial Assessment Signed</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                          </div>
                          <div className="flex items-center justify-between p-1.5 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
                            <span>Lab Estimates Uploaded</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Android Bottom Navigation Bar inside phone */}
                <div className="border-t border-slate-200 pt-2 flex items-center justify-around text-[9px] text-slate-500 font-bold">
                  <button
                    onClick={() => setActiveAppTab('voice')}
                    className={`flex flex-col items-center gap-0.5 ${activeAppTab === 'voice' ? 'text-[#00C2B3]' : ''}`}
                  >
                    <Mic className="w-3.5 h-3.5" />
                    <span>Voice</span>
                  </button>
                  <button
                    onClick={() => setActiveAppTab('opd')}
                    className={`flex flex-col items-center gap-0.5 ${activeAppTab === 'opd' ? 'text-[#0077FF]' : ''}`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>OPD</span>
                  </button>
                  <button
                    onClick={() => setActiveAppTab('scribe')}
                    className={`flex flex-col items-center gap-0.5 ${activeAppTab === 'scribe' ? 'text-[#7C3AED]' : ''}`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Scribe</span>
                  </button>
                  <button
                    onClick={() => setActiveAppTab('tpa')}
                    className={`flex flex-col items-center gap-0.5 ${activeAppTab === 'tpa' ? 'text-[#10B981]' : ''}`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>TPA</span>
                  </button>
                </div>

                {/* Android Home Gesture Pill */}
                <div className="w-20 h-1 bg-slate-300 rounded-full mx-auto mt-2" />

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
