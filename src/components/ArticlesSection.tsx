import React, { useState } from 'react';
import { BookOpen, Clock, User, ArrowRight, Sparkles, ChevronRight, X, Share2, Tag } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const articles = [
    {
      id: 1,
      title: 'How Voice AI & WhatsApp Automation Reduce OPD No-Shows by 64% in Indian Hospitals',
      category: 'OPD & Patient Flow',
      readTime: '6 min read',
      date: '18 August 2026',
      author: 'Dr. Vivek Menon, Chief Healthcare Operations Strategist',
      excerpt: 'High outpatient call volumes and missed appointments cost multispecialty hospitals millions annually. Learn how bilingual voice AI combined with automated WhatsApp appointment confirmation cycles locks OPD slots in sub-seconds.',
      content: `
        ### The OPD Capacity Bottleneck in Indian Healthcare
        Multispecialty hospitals across metro and tier-2 Indian cities face a persistent operational challenge: managing thousands of daily outpatient calls while keeping OPD slot utilization high. Traditional front-desk call centers struggle with long hold times, language dialect barriers, and high appointment no-show rates (often exceeding 25-30%).

        ### The ACQSA Vernacular Voice + WhatsApp Solution
        By deploying autonomous Voice AI agents capable of conversing fluently in regional Indian languages (Telugu, Hindi, Tamil, Kannada, Marathi) alongside English, hospitals achieve:
        1. **Instant 24×7 Slot Locking**: Incoming patient calls are answered instantly, querying the hospital's HIS schedule database to recommend available doctor slots.
        2. **Automated WhatsApp Journey**: Once a slot is selected over voice, the AI immediately dispatches an interactive WhatsApp confirmation ticket containing hospital Google Maps directions, doctor specialty preparation guidelines, and calendar sync links.
        3. **Predictive Reminders**: 24 hours and 2 hours prior to the appointment, automated WhatsApp interactive chips ask patients to confirm or reschedule, enabling instant slot re-allocation for waiting-list patients.

        ### Key Impact Metrics:
        - **64% Reduction in OPD No-Show Rates**
        - **3.2× Increase in Daily OPD Booking Capacity**
        - **Zero Patient Hold Time on Phone Desk**
      `
    },
    {
      id: 2,
      title: 'The 2026 Hospital Guide to Auto-Scribing & EMR Discharge Summaries for NABH Accreditation',
      category: 'Clinical Documentation',
      readTime: '8 min read',
      date: '15 August 2026',
      author: 'Dr. Ananya Rao, Clinical AI Compliance Lead',
      excerpt: 'Doctors spend up to 3 hours daily typing patient discharge notes and clinical charts. Explore how ambient AI auto-scribing captures doctor-patient dialogues and formats NABH-compliant discharge packages with full physician governance.',
      content: `
        ### Clinical Burnout & Documentation Compliance
        Documentation requirements under NABH and JCI accreditation guidelines are stringent. Physicians frequently report administrative fatigue from manually transcribing chief complaints, ICD-10 diagnostic codes, dosage history, and follow-up instructions into Electronic Medical Record (EMR) systems.

        ### Ambient AI Transcription & Structured Note Generation
        ACQSA ClinScribe AI listens ambiently during doctor consultations or patient rounds, using specialized clinical NLP models trained on Indian medical terminology:
        - **Diagnosis & Symptom Extraction**: Automatically identifies primary diagnosis, secondary comorbidities, lab lab markers (e.g. platelet counts, eGFR, HbA1c), and prescribed discharge medicines.
        - **ICD-10 Mapped Output**: Formats extracted clinical notes into standardized hospital templates ready for EMR ingestion.
        - **Doctor Verification Interface**: Maintains strict human-in-the-loop safety where attending physicians review, edit, and digitally sign off on generated drafts in 1 tap.

        ### Key Impact Metrics:
        - **4.8 Minutes Saved per Discharge Note**
        - **100% NABH Documentation Audit Compliance**
        - **Zero Missing Diagnostic Information in Hospital Records**
      `
    },
    {
      id: 3,
      title: 'Automating TPA Cashless Claims & Prior Authorization: A Clinical Operations Playbook',
      category: 'TPA & Revenue Cycle',
      readTime: '7 min read',
      date: '10 August 2026',
      author: 'Rahul Sharma, Hospital RCM & Billing Specialist',
      excerpt: 'Insurance claim denials and delayed prior authorizations cause severe hospital cash flow bottlenecks. Discover how AI agents automate pre-authorization forms, biologic insurance criteria matching, and claim denial resolution.',
      content: `
        ### Administrative Friction in TPA Billing Desks
        Third-Party Administrator (TPA) billing desks in private hospitals spend hundreds of hours manually verifying insurance policy coverage, assembling lab reports, filling out pre-authorization forms, and placing follow-up calls to insurance payers.

        ### Autonomous TPA Pre-Auth & Voice RCM Agents
        ACQSA AI streamlines the entire cashless claim lifecycle:
        1. **Pre-Auth Checklist Automation**: Scans admission documents, verifies policy eligibility, checks required diagnostic attachments, and flags missing pre-auth criteria before initial submission.
        2. **Payer IVR Voice Agents**: Outbound Voice AI callers dial insurance payers, navigate touch-tone IVR trees, query claim status, and resolve hold codes (such as Denial Code #96) without human phone intervention.
        3. **Biologic Criteria Matching**: Parses clinical charts against payer specialty drug authorization guidelines to maximize first-pass claim acceptance.

        ### Key Impact Metrics:
        - **94% First-Pass Prior Authorization Approval Rate**
        - **80% Reduction in Billing Team Phone Call Workload**
        - **1.8 Hour Average Claim Pre-Auth Processing Time**
      `
    },
    {
      id: 4,
      title: 'Generative AI in Hospital Operations: Prescription Renewals, Digital Fax Triage & Bed Flow',
      category: 'Hospital AI OS',
      readTime: '9 min read',
      date: '05 August 2026',
      author: 'Kiran Varma, Healthcare AI Architect',
      excerpt: 'Beyond front-office chatbots, next-generation hospital AI operating systems automate routine prescription renewals, digital fax OCR chart matching, and predictive emergency bed capacity allocation.',
      content: `
        ### The Unseen Back-Office Paperwork Crisis
        Hospital administrative departments process thousands of paper faxes, prescription refill requests, and patient transfer documents daily. Manual handling leads to delayed care delivery and operational bottlenecks.

        ### The Unified ACQSA Hospital AI Operating System
        ACQSA AI integrates breakthrough capabilities inspired by leading global healthcare AI research:
        - **Digital Fax Triage & OCR**: Reads incoming digital faxes, extracts lab results or referrals, and matches them to patient charts in the EMR automatically.
        - **Prescription Renewal Engine**: Verifies chronic medication refill requests against patient kidney/liver lab safety thresholds and queues refills for physician 1-tap sign-off.
        - **Predictive Bed & Triage Allocation**: Forecasts IPD bed turnover, balances emergency department arrival queues, and allocates specialized ICU beds based on real-time clinical acuity scores.

        ### Key Impact Metrics:
        - **100% Elimination of Digital Fax Processing Backlogs**
        - **38% Reduction in 30-Day Post-Discharge Readmission Rates**
        - **Optimal ICU & IPD Bed Turnover Forecasting**
      `
    }
  ];

  return (
    <section id="articles" className="py-24 relative bg-white border-t border-slate-200 overflow-hidden">
      
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00C2B3]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-[#7C3AED]">
            <BookOpen className="w-3.5 h-3.5 text-[#7C3AED]" /> SEO & AEO KNOWLEDGE HUB
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Healthcare AI Operational <br />
            <span className="text-gradient">Guides & Whitepapers.</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-medium">
            Search-optimized, evidence-based insights on OPD workflow automation, clinical auto-scribing, TPA claims, and hospital AI operating systems.
          </p>
        </div>

        {/* 4 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="bg-[#FAFAFC] border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-[#FF1B6B]/60 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="px-3 py-1 rounded-full bg-[#FF1B6B]/10 text-[#FF1B6B] border border-[#FF1B6B]/20">
                    {art.category}
                  </span>
                  <span className="text-slate-500 font-jura flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {art.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-poppins font-bold text-slate-900 group-hover:text-[#FF1B6B] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-500 font-jura truncate max-w-[240px]">
                  {art.author}
                </span>

                <button
                  onClick={() => setSelectedArticle(art)}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 group-hover:bg-[#FF1B6B] group-hover:text-white font-poppins font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                >
                  Read Full Guide <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ARTICLE READING MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 text-slate-900">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF1B6B]/10 text-[#FF1B6B]">
                {selectedArticle.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 leading-tight">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-slate-500 font-jura pt-1 border-b border-slate-100 pb-3">
                <span>By {selectedArticle.author}</span>
                <span>•</span>
                <span>Published {selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            {/* Modal Article Content Body */}
            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-800 leading-relaxed font-medium space-y-4">
              {selectedArticle.content.split('\n\n').map((paragraph: string, idx: number) => {
                if (paragraph.trim().startsWith('###')) {
                  return (
                    <h3 key={idx} className="text-lg font-poppins font-extrabold text-slate-900 pt-3">
                      {paragraph.replace('###', '').trim()}
                    </h3>
                  );
                }
                return <p key={idx}>{paragraph.trim()}</p>;
              })}
            </div>

            {/* Modal Footer */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-[#00C2B3] font-bold flex items-center gap-1.5">
                <Tag className="w-4 h-4" /> SEO & AEO Healthcare AI Knowledge Base
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-poppins font-bold text-xs uppercase"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
