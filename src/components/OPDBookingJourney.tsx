import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle, RefreshCw, PhoneCall, Sparkles, MessageCircle, UserCheck, ShieldCheck, ChevronRight } from 'lucide-react';

export const OPDBookingJourney: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const steps = [
    {
      num: 1,
      title: 'Patient connects',
      desc: 'Voice call, missed-call callback or WhatsApp message initiated by patient.',
      icon: <PhoneCall className="w-5 h-5 text-[#20D6C7]" />
    },
    {
      num: 2,
      title: 'ACQSA understands',
      desc: 'Detects language, intent, hospital branch, department and preferred date.',
      icon: <Sparkles className="w-5 h-5 text-[#53CFFF]" />
    },
    {
      num: 3,
      title: 'Slot discovery',
      desc: 'Checks live HIS database for available doctors and open appointment slots.',
      icon: <Calendar className="w-5 h-5 text-[#6BE7B7]" />
    },
    {
      num: 4,
      title: 'Booking confirmation',
      desc: 'Reserves the slot and generates a unique hospital booking reference ID.',
      icon: <CheckCircle className="w-5 h-5 text-[#20D6C7]" />
    },
    {
      num: 5,
      title: 'Patient engagement',
      desc: 'Sends WhatsApp confirmation, Google Maps directions, prep instructions & reminders.',
      icon: <MessageCircle className="w-5 h-5 text-[#25D366]" />
    }
  ];

  // Interactive booking card state
  const [bookingState, setBookingState] = useState({
    hospital: 'ACQSA Multispeciality Hospital',
    department: 'Cardiology',
    doctor: 'Dr. Ananya Rao',
    date: 'Tuesday, 12 August',
    time: '11:30 AM',
    status: 'Confirmed',
    refId: 'ACQ-CARD-8902'
  });

  const [rescheduled, setRescheduled] = useState(false);
  const [addedToCal, setAddedToCal] = useState(false);
  const [directionsOpened, setDirectionsOpened] = useState(false);

  const handleReschedule = () => {
    setBookingState(prev => ({
      ...prev,
      time: prev.time === '11:30 AM' ? '04:00 PM' : '11:30 AM',
      refId: 'ACQ-CARD-' + Math.floor(1000 + Math.random() * 9000)
    }));
    setRescheduled(true);
    setTimeout(() => setRescheduled(false), 3000);
  };

  const handleAddToCal = () => {
    setAddedToCal(true);
    setTimeout(() => setAddedToCal(false), 3000);
  };

  const handleGetDirections = () => {
    setDirectionsOpened(true);
    setTimeout(() => setDirectionsOpened(false), 3000);
  };

  return (
    <section id="opd-journey" className="py-24 relative bg-[#071621] border-t border-[#20D6C7]/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09242A] border border-[#20D6C7]/30 text-xs font-semibold text-[#20D6C7]">
            <Clock className="w-3.5 h-3.5" /> End-to-End OPD Booking Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            From “Hello” to <br />
            <span className="text-gradient">confirmed OPD appointment.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Experience how ACQSA AI processes incoming requests, checks hospital schedules, and confirms bookings seamlessly.
          </p>
        </div>

        {/* 5-Step Process Bar */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {steps.map((st, idx) => {
            const isActive = activeStepIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStepIdx(idx)}
                className={`p-4 rounded-2xl text-left transition-all border ${
                  isActive
                    ? 'bg-[#09242A] border-[#20D6C7] shadow-xl shadow-[#20D6C7]/15 scale-[1.02]'
                    : 'bg-[#09242A]/40 border-white/10 hover:border-[#20D6C7]/30'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-[#071621] border border-[#20D6C7]/30 flex items-center justify-center font-bold text-xs text-[#20D6C7]">
                    {st.num}
                  </span>
                  {st.icon}
                </div>
                <h3 className="font-heading font-bold text-sm text-white mb-1">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {st.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Hospital Booking Card Demo */}
        <div className="max-w-2xl mx-auto bg-[#09242A]/90 border-2 border-[#20D6C7]/40 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-6">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-[10px] font-bold tracking-wider text-[#53CFFF] uppercase">
                Generated Booking Confirmation Card
              </span>
              <h3 className="font-heading font-extrabold text-xl text-white mt-0.5">
                {bookingState.hospital}
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#6BE7B7]/20 text-[#6BE7B7] border border-[#6BE7B7]/40 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> {bookingState.status}
            </span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-[#071621] p-5 rounded-2xl border border-white/5 text-xs">
            <div>
              <span className="text-slate-400 text-[10px] block">Department</span>
              <strong className="text-white text-sm">{bookingState.department}</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">Consultant Doctor</span>
              <strong className="text-[#20D6C7] text-sm">{bookingState.doctor}</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">Booking Ref ID</span>
              <strong className="text-[#53CFFF] font-mono text-sm">{bookingState.refId}</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">Scheduled Date</span>
              <strong className="text-slate-200">{bookingState.date}</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">Time Slot</span>
              <strong className="text-slate-200">{bookingState.time}</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">Channel</span>
              <strong className="text-[#25D366]">Voice + WhatsApp</strong>
            </div>
          </div>

          {/* Notification feedback banners */}
          {rescheduled && (
            <div className="p-3 rounded-xl bg-[#53CFFF]/20 border border-[#53CFFF]/40 text-xs text-[#53CFFF] font-semibold animate-in fade-in">
              ✓ Slot rescheduled to {bookingState.time}! WhatsApp notification updated.
            </div>
          )}
          {addedToCal && (
            <div className="p-3 rounded-xl bg-[#6BE7B7]/20 border border-[#6BE7B7]/40 text-xs text-[#6BE7B7] font-semibold animate-in fade-in">
              ✓ Calendar invite added to patient's Google / iCal calendar!
            </div>
          )}
          {directionsOpened && (
            <div className="p-3 rounded-xl bg-[#20D6C7]/20 border border-[#20D6C7]/40 text-xs text-[#20D6C7] font-semibold animate-in fade-in">
              ✓ Hospital OPD Gate 3 location link sent via WhatsApp!
            </div>
          )}

          {/* Functional Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleAddToCal}
              className="flex-1 min-w-[130px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#071621] hover:bg-[#0d323a] border border-[#20D6C7]/30 text-xs font-bold text-white transition-all"
            >
              <Calendar className="w-4 h-4 text-[#20D6C7]" />
              Add to Calendar
            </button>

            <button
              onClick={handleGetDirections}
              className="flex-1 min-w-[130px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#071621] hover:bg-[#0d323a] border border-[#20D6C7]/30 text-xs font-bold text-white transition-all"
            >
              <MapPin className="w-4 h-4 text-[#53CFFF]" />
              Get Directions
            </button>

            <button
              onClick={handleReschedule}
              className="flex-1 min-w-[130px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#20D6C7]/15 hover:bg-[#20D6C7]/25 border border-[#20D6C7]/50 text-xs font-bold text-[#20D6C7] transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Reschedule Slot
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
