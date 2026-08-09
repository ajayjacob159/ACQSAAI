import React, { useState } from 'react';
import { MessageSquare, Send, UserCheck, PhoneCall, MapPin, Calendar, XCircle, CheckCheck, User, ShieldAlert, Sparkles } from 'lucide-react';

export const WhatsAppDemo: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'acqsa',
      text: 'Hello Priya. Your appointment with Dr. Ananya Rao is confirmed for tomorrow at 11:30 AM.',
      time: '10:42 AM'
    },
    {
      sender: 'patient',
      text: 'Can I reschedule it to the evening?',
      time: '10:43 AM'
    },
    {
      sender: 'acqsa',
      text: 'Certainly. Available evening slots for Dr. Ananya Rao tomorrow are 4:00 PM and 5:30 PM.',
      time: '10:43 AM'
    },
    {
      sender: 'patient',
      text: '4:00 PM',
      time: '10:44 AM'
    },
    {
      sender: 'acqsa',
      text: 'Your appointment has been rescheduled successfully to tomorrow at 4:00 PM. A calendar invite has been sent.',
      time: '10:44 AM'
    }
  ]);

  const [humanHandoverActive, setHumanHandoverActive] = useState(false);
  const [customInput, setCustomInput] = useState('');

  const quickReplyChips = [
    { label: 'Book Appointment', icon: <Calendar className="w-3.5 h-3.5" /> },
    { label: 'Reschedule', icon: <Calendar className="w-3.5 h-3.5 text-[#53CFFF]" /> },
    { label: 'Cancel', icon: <XCircle className="w-3.5 h-3.5 text-[#89A3AA]" /> },
    { label: 'Hospital Directions', icon: <MapPin className="w-3.5 h-3.5 text-[#20D6C7]" /> },
    { label: 'Talk to Staff', icon: <UserCheck className="w-3.5 h-3.5 text-[#6BE7B7]" /> }
  ];

  const handleChipClick = (chipLabel: string) => {
    if (chipLabel === 'Talk to Staff') {
      triggerHumanHandover();
      return;
    }

    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [
      ...prev,
      { sender: 'patient', text: chipLabel, time: timeNow }
    ]);

    setTimeout(() => {
      let botResp = '';
      if (chipLabel === 'Book Appointment') {
        botResp = 'Sure! Which department doctor would you like to consult? (Cardiology, Orthopedics, Pediatrics, Gynaecology)';
      } else if (chipLabel === 'Reschedule') {
        botResp = 'Please select a new time slot: Morning (10:00 AM) or Evening (5:30 PM).';
      } else if (chipLabel === 'Cancel') {
        botResp = 'Your appointment request has been cancelled. Would you like to leave feedback or book another date?';
      } else if (chipLabel === 'Hospital Directions') {
        botResp = '📍 ACQSA Multispeciality Hospital, Main OPD Gate 3. Live Google Maps: https://maps.app.goo.gl/sample';
      }

      setMessages(prev => [
        ...prev,
        { sender: 'acqsa', text: botResp, time: timeNow }
      ]);
    }, 800);
  };

  const triggerHumanHandover = () => {
    setHumanHandoverActive(true);
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [
      ...prev,
      { sender: 'patient', text: 'I want to speak with front office staff.', time: timeNow },
      {
        sender: 'human_staff',
        text: 'Hello Priya, this is Rajesh from the Front Office Desk. I have your complete call history & appointment record. How can I assist you further?',
        time: timeNow
      }
    ]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const userText = customInput.trim();
    setCustomInput('');
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages(prev => [
      ...prev,
      { sender: 'patient', text: userText, time: timeNow }
    ]);

    setTimeout(() => {
      const isStaffMode = humanHandoverActive;
      setMessages(prev => [
        ...prev,
        {
          sender: isStaffMode ? 'human_staff' : 'acqsa',
          text: isStaffMode 
            ? `Staff Response: Thank you for your inquiry about "${userText}". I am processing this directly in your medical record.`
            : `ACQSA Bot: Thank you for messaging. I have updated your request regarding "${userText}".`,
          time: timeNow
        }
      ]);
    }, 1000);
  };

  return (
    <section id="whatsapp-demo" className="py-24 relative bg-[#040d14] border-t border-[#20D6C7]/15 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09242A] border border-[#25D366]/40 text-xs font-semibold text-[#25D366]">
            <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Conversational Agent
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            The hospital journey <br />
            <span className="text-gradient">continues on WhatsApp.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Interact with our simulated WhatsApp bot below. Test instant quick replies or trigger live human agent handover.
          </p>
        </div>

        {/* Simulated WhatsApp Phone Frame */}
        <div className="max-w-xl mx-auto bg-[#071621] border-4 border-[#09242A] rounded-[36px] shadow-2xl overflow-hidden flex flex-col h-[620px] relative">
          
          {/* Header Bar */}
          <div className="bg-[#09242A] p-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                  ACQSA Hospital Assistant
                  <CheckCheck className="w-4 h-4 text-[#20D6C7]" />
                </h3>
                <p className="text-[11px] text-[#6BE7B7]">
                  {humanHandoverActive ? '● Rajesh (Front Office Staff) Active' : '● Verified AI Agent · 24×7 Active'}
                </p>
              </div>
            </div>

            <button
              onClick={triggerHumanHandover}
              disabled={humanHandoverActive}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                humanHandoverActive
                  ? 'bg-[#6BE7B7]/20 text-[#6BE7B7] border border-[#6BE7B7]/40 cursor-default'
                  : 'bg-[#20D6C7]/20 text-[#20D6C7] hover:bg-[#20D6C7]/30 border border-[#20D6C7]/40'
              }`}
            >
              {humanHandoverActive ? 'Handover Active' : 'Test Handover'}
            </button>
          </div>

          {/* Handover Notice Banner */}
          {humanHandoverActive && (
            <div className="bg-gradient-to-r from-[#20D6C7]/20 to-[#53CFFF]/20 px-4 py-2 text-[11px] text-[#53CFFF] font-semibold flex items-center justify-between border-b border-[#20D6C7]/30 animate-in fade-in">
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#20D6C7]" /> Human staff joined with full transcript context
              </span>
              <span className="text-[10px] uppercase font-bold text-white bg-black/40 px-2 py-0.5 rounded">Live Session</span>
            </div>
          )}

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-dot-pattern bg-[#040d14]/90">
            {messages.map((m, idx) => {
              const isPatient = m.sender === 'patient';
              const isStaff = m.sender === 'human_staff';

              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isPatient ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[82%] p-3 rounded-2xl text-xs space-y-1 ${
                      isPatient
                        ? 'bg-[#005c4b] text-white rounded-tr-none'
                        : isStaff
                        ? 'bg-[#1f2c34] border border-[#20D6C7]/50 text-white rounded-tl-none shadow-lg'
                        : 'bg-[#202c33] text-slate-100 rounded-tl-none border border-white/5'
                    }`}
                  >
                    {!isPatient && (
                      <span className={`text-[10px] font-bold block ${isStaff ? 'text-[#20D6C7]' : 'text-[#25D366]'}`}>
                        {isStaff ? 'Rajesh (Front Office)' : 'ACQSA Bot'}
                      </span>
                    )}
                    <p className="leading-relaxed">{m.text}</p>
                    <span className="text-[9px] text-slate-400 block text-right">
                      {m.time} {isPatient && '✓✓'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Reply Chips */}
          <div className="p-2 bg-[#09242A] border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {quickReplyChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleChipClick(chip.label)}
                className="px-3 py-1.5 rounded-full bg-[#071621] hover:bg-[#0d323a] border border-[#20D6C7]/30 text-[11px] font-semibold text-slate-200 whitespace-nowrap flex items-center gap-1.5 transition-all"
              >
                {chip.icon}
                <span>{chip.label}</span>
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 bg-[#09242A] border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Type a message or select a chip above..."
              className="flex-1 bg-[#071621] text-xs text-white placeholder-slate-500 px-4 py-2.5 rounded-full border border-white/10 focus:outline-none focus:border-[#20D6C7]"
            />
            <button
              type="submit"
              className="p-2.5 rounded-full bg-[#25D366] text-[#091B22] font-bold hover:scale-105 transition-transform"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
