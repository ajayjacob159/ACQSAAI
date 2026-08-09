import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const faqs = [
    {
      q: 'Can ACQSA speak Indian regional languages?',
      a: 'Yes. ACQSA is built with deep vernacular speech models that support major Indian languages including Hindi, Telugu, Tamil, Kannada, Malayalam, Marathi, Bengali, Gujarati, Punjabi, Urdu, and English, adapting to regional accents and dialects.'
    },
    {
      q: 'Can it book appointments directly in our hospital system?',
      a: 'ACQSA is designed to interface with hospital HIS/EMR systems and appointment scheduling software via configurable REST APIs, database connectors, or webhooks based on your IT infrastructure.'
    },
    {
      q: 'Can it manage both incoming and outgoing calls?',
      a: 'Yes. ACQSA handles inbound patient inquiry calls as well as automated outbound calls for appointment confirmations, rescheduling reminders, missed-call callbacks, and post-discharge check-ins.'
    },
    {
      q: 'Can patients continue a voice conversation on WhatsApp?',
      a: 'Yes. ACQSA supports cross-channel continuity. A booking initiated over a voice call can automatically send instant WhatsApp confirmation passes, directions, and prep instructions.'
    },
    {
      q: 'What happens when a patient needs a human agent?',
      a: 'ACQSA includes configurable escalation rules. When a complex query or emergency signal is detected, the agent triggers a warm handover to front-office staff, transferring the complete call context.'
    },
    {
      q: 'Can the Auto-Scribe use our hospital’s discharge template?',
      a: 'ClinScribe AI can be configured to map extracted clinical entities directly into your hospital’s existing discharge summary templates and specialty-specific formats.'
    },
    {
      q: 'Does ACQSA make medical decisions?',
      a: 'No. ACQSA AI acts strictly as an administrative and documentation assistant. It does not independently diagnose conditions, prescribe treatments, or make clinical decisions. All clinical drafts require review and approval by authorized healthcare professionals.'
    },
    {
      q: 'Can doctors edit and approve generated summaries?',
      a: 'Yes. ClinScribe AI generates review-ready drafts that doctors can quickly edit, refine, and sign off with a single click before final export to the hospital HIS.'
    },
    {
      q: 'Can ACQSA support TPA documentation workflows?',
      a: 'Yes. ACQSA assists TPA desks by extracting clinical findings into standardized pre-authorization packages, identifying missing documentation, and drafting responses to insurer queries.'
    },
    {
      q: 'How is patient information protected?',
      a: 'ACQSA incorporates AES-256 encryption at rest, TLS 1.3 in transit, strict role-based access control (RBAC), and consent-aware workflows designed to support hospital data governance policies.'
    },
    {
      q: 'Can ACQSA work across multiple hospitals or branches?',
      a: 'Yes. ACQSA supports multi-branch routing, allowing healthcare networks to manage central call centers while maintaining department schedules for individual hospital units.'
    },
    {
      q: 'How long does implementation take?',
      a: 'Deployment timelines vary depending on hospital size, number of departments, custom template requirements, and HIS integration complexity. Typical phased deployments roll out department-by-department.'
    },
    {
      q: 'Is on-premises or private deployment available?',
      a: 'ACQSA offers flexible deployment options including secure cloud, hybrid setups, or private hospital network deployments depending on institutional security requirements.'
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0); // First open by default

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 relative bg-[#040d14] border-t border-[#20D6C7]/15 overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09242A] border border-[#20D6C7]/30 text-xs font-semibold text-[#20D6C7]">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Questions hospital teams <br />
            <span className="text-gradient">ask about ACQSA AI.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Detailed answers regarding regional language capabilities, HIS integration, safety protocols, and deployment models.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#09242A] border-[#20D6C7]/50 shadow-lg shadow-[#20D6C7]/10'
                    : 'bg-[#09242A]/40 border-white/10 hover:border-[#20D6C7]/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-white hover:text-[#20D6C7] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#20D6C7]">0{idx + 1}.</span>
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#20D6C7] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
