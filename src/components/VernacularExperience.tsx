import React, { useState } from 'react';
import { Globe, CheckCircle2, Volume2, Sparkles, RefreshCw } from 'lucide-react';

export const VernacularExperience: React.FC = () => {
  const languages = [
    { code: 'en', name: 'English', native: 'English', patient: '“I need an appointment with Dr. Rao tomorrow for a heart checkup.”', bot: '“Certainly. Dr. Rao has open slots at 11:30 AM and 4:00 PM. Which one suits you?”' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी', patient: '“मुझे कल डॉक्टर से अपॉइंटमेंट चाहिए।”', bot: '“ज़रूर। आप किस विभाग के डॉक्टर से मिलना चाहते हैं?”' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు', patient: '“డాక్టర్ గారిని రేపు కలవడానికి అపాయింట్మెంట్ కావాలి.”', bot: '“ఖచ్చితంగా. కార్డియాలజీ విభాగంలో డాక్టర్ రావు గారు రేపు ఉదయం 11:30 కు అందుబాటులో ఉన్నారు.”' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்', patient: '“எனக்கு நாளை மருத்துவரை சந்திக்க நேரம் வேண்டும்.”', bot: '“நிச்சயமாக. கார்டியாலஜி பிரிவில் நாளை காலை 11:30 மணிக்கு மருத்துவர் ராவ் கிடைக்கிறார்.”' },
    { code: 'kn', name: 'Kannada', native: 'கನ್ನಡ', patient: '“ನನಗೆ ನಾಳೆ ವೈದ್ಯರ ಭೇಟಿಗೆ ಸಮಯ ಬೇಕು.”', bot: '“ಖಂಡಿತ. ಕಾರ್ಡಿಯಾಲಜಿ ವಿಭಾಗದಲ್ಲಿ ನಾಳೆ ಬೆಳಿಗ್ಗೆ 11:30 ಕ್ಕೆ ಸಮಯ ಲಭ್ಯವಿದೆ.”' },
    { code: 'ml', name: 'Malayalam', native: 'മലയാളം', patient: '“എനിക്ക് നാളെ ഡോക്ടറെ കാണാൻ സമയം വേണം.”', bot: '“തീർച്ചയായും. നാളെ രാവിലെ 11:30 ന് അപ്പോയിന്റ്മെന്റ് ലഭ്യമാണ്.”' },
    { code: 'mr', name: 'Marathi', native: 'मराठी', patient: '“मला उद्या डॉक्टरांची अपॉइंटमेंट हवी आहे.”', bot: '“नक्कीच. कार्डिओलॉजी विभागात उद्या सकाळी ११:३० वाजता वेळ उपलब्ध आहे.”' },
    { code: 'bn', name: 'Bengali', native: 'বাংলা', patient: '“আমি কাল ডাক্তারের অ্যাপয়েন্টমেন্ট চাই।”', bot: '“অবশ্যই। কার্ডিওলজি বিভাগে কাল সকাল ১১:৩০ টার সময় খালি আছে।”' },
    { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', patient: '“મને કાલે ડૉક્ટરની અપોઇન્ટમેન્ટ જોઈએ છે.”', bot: '“ચોક્કસ. કાર્ડિયોલોજી વિભાગમાં કાલે સવારે ૧૧:૩૦ વાગ્યે એપોઇન્ટમેન્ટ ઉપલબ્ધ છે.”' },
    { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', patient: '“ਮੈਨੂੰ ਕੱਲ੍ਹ ਡਾਕਟਰ ਦੀ ਅਪਾਇੰਟਮੈਂਟ ਚਾਹੀਦੀ ਹੈ।”', bot: '“ਯਕੀਨਨ। ਕਾਰਡੀਓਲੋਜੀ ਵਿਭਾਗ ਵਿੱਚ ਕੱਲ੍ਹ ਸਵੇਰੇ 11:30 ਵਜੇ ਸਮਾਂ ਮੌਜੂਦ ਹੈ।”' },
    { code: 'ur', name: 'Urdu', native: 'اردو', patient: '“مجھے کل ڈاکٹر سے اپائنٹمنٹ چاہیے۔”', bot: '“بالکل۔ کارڈینالوجی ڈیپارٹمنٹ میں کل صبح 11:30 بجے وقت دستیاب ہے۔”' }
  ];

  const [selectedLang, setSelectedLang] = useState(languages[1]); // Default Hindi

  return (
    <section className="py-24 relative bg-[#040d14] overflow-hidden border-t border-[#20D6C7]/15">
      
      {/* Background Animated Ticker */}
      <div className="absolute top-10 inset-x-0 opacity-10 pointer-events-none overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex gap-12 font-heading font-extrabold text-6xl text-[#53CFFF]">
          {languages.map((l, idx) => (
            <span key={idx}>{l.native} • </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09242A] border border-[#20D6C7]/30 text-xs font-semibold text-[#53CFFF]">
            <Globe className="w-3.5 h-3.5 text-[#20D6C7]" /> Vernacular Accessibility Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Healthcare speaks many languages. <br />
            <span className="text-gradient">So does ACQSA.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            ACQSA helps hospitals serve patients in familiar languages while maintaining a standardized operational workflow.
          </p>
        </div>

        {/* Interactive Language Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 max-w-4xl mx-auto">
          {languages.map((lang) => {
            const isSelected = selectedLang.code === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setSelectedLang(lang)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#20D6C7] text-[#091B22] shadow-lg shadow-[#20D6C7]/25 scale-105 border-transparent'
                    : 'bg-[#09242A] text-slate-300 hover:text-white border border-[#20D6C7]/20 hover:border-[#20D6C7]/50'
                }`}
              >
                <span>{lang.native}</span>
                <span className={`text-[10px] opacity-70 ${isSelected ? 'text-[#091B22]' : 'text-slate-400'}`}>
                  ({lang.name})
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Multilingual Dialogue Display Card */}
        <div className="max-w-3xl mx-auto bg-[#09242A]/80 border-2 border-[#20D6C7]/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#20D6C7]/15 border border-[#20D6C7]/40 flex items-center justify-center text-[#20D6C7]">
                <Volume2 className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-white flex items-center gap-2">
                  Active Dialogue — {selectedLang.name} ({selectedLang.native})
                </h3>
                <p className="text-xs text-[#20D6C7] flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Language detected automatically
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#53CFFF]/15 text-[#53CFFF] border border-[#53CFFF]/30">
              No Channel Switch Needed
            </span>
          </div>

          {/* Dialogue Transcript */}
          <div className="space-y-4">
            {/* Patient */}
            <div className="p-4 rounded-2xl bg-[#071621] border border-white/5 space-y-1">
              <div className="flex items-center justify-between text-xs text-[#53CFFF] font-semibold">
                <span>Patient</span>
                <span className="text-[10px] text-slate-400">Audio input · {selectedLang.name}</span>
              </div>
              <p className="text-base font-medium text-white">{selectedLang.patient}</p>
            </div>

            {/* ACQSA AI Response */}
            <div className="p-4 rounded-2xl bg-[#0d323a]/80 border border-[#20D6C7]/40 space-y-1">
              <div className="flex items-center justify-between text-xs text-[#20D6C7] font-semibold">
                <span>ACQSA Voice AI</span>
                <span className="text-[10px] text-slate-300">Neural Speech Synthesis</span>
              </div>
              <p className="text-base font-medium text-white">{selectedLang.bot}</p>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="pt-2 text-center border-t border-white/10 text-xs text-slate-400">
            <span className="text-slate-200">ACQSA standardizes all operational records</span> into English HIS/EMR database while conversing in the patient's preferred vernacular dialect.
          </div>

        </div>

      </div>
    </section>
  );
};
