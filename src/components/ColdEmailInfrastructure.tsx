import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Server, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Globe, 
  Key, 
  Zap, 
  RefreshCw,
  Sliders,
  BarChart3,
  Cpu
} from 'lucide-react';

export const ColdEmailInfrastructure: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dns' | 'esp' | 'warmup' | 'spintax'>('dns');

  return (
    <section id="infrastructure" className="py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-poppins font-extrabold text-[#0080FF] shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#0080FF]" />
            BULLETPROOF DELIVERABILITY ARCHITECTURE
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-slate-900 tracking-tight leading-tight">
            Cold Email Infrastructure: <br />
            <span className="bg-gradient-to-r from-[#0080FF] via-[#9333EA] to-[#FF1B6B] bg-clip-text text-transparent">
              100% Inboxing. Zero Spam.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Most outbound campaigns fail before they start because domains land in spam. ACQSA AI engineers enterprise secondary domain networks with dual-ESP routing.
          </p>
        </div>

        {/* 4 Technical Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#FAFAFC] p-6 rounded-2xl border-2 border-slate-200 hover:border-[#0080FF] transition-all space-y-4 shadow-sm group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#0080FF] flex items-center justify-center font-bold">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-extrabold text-lg text-slate-900">
              Secondary Domains
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              We never send outbound from your primary corporate domain. We purchase 5–10 secondary domains with exact brand redirects to preserve your primary domain reputation.
            </p>
            <div className="text-[11px] font-mono text-[#0080FF] font-bold">
              Protects Google Workspace & SEO
            </div>
          </div>

          <div className="bg-[#FAFAFC] p-6 rounded-2xl border-2 border-slate-200 hover:border-[#9333EA] transition-all space-y-4 shadow-sm group">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 text-[#9333EA] flex items-center justify-center font-bold">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-extrabold text-lg text-slate-900">
              Dual-ESP Routing
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              We configure a 50/50 balance between Google Workspace and Microsoft 365 Exchange. Microsoft recipients receive from Microsoft inboxes; Google from Google.
            </p>
            <div className="text-[11px] font-mono text-[#9333EA] font-bold">
              Zero cross-provider spam penalties
            </div>
          </div>

          <div className="bg-[#FAFAFC] p-6 rounded-2xl border-2 border-slate-200 hover:border-[#10B981] transition-all space-y-4 shadow-sm group">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
              <Key className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-extrabold text-lg text-slate-900">
              SPF, DKIM & DMARC
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              100% compliant technical authentication records. Plus custom tracking domains (CNAME) so your email deliverability never relies on shared third-party pixels.
            </p>
            <div className="text-[11px] font-mono text-emerald-600 font-bold">
              10/10 Mail-Tester Score Guaranteed
            </div>
          </div>

          <div className="bg-[#FAFAFC] p-6 rounded-2xl border-2 border-slate-200 hover:border-[#FF1B6B] transition-all space-y-4 shadow-sm group">
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 text-[#FF1B6B] flex items-center justify-center font-bold">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-extrabold text-lg text-slate-900">
              2-Week Gradual Ramp
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Every inbox undergoes 14 days of algorithmic peer warmup before sending a single prospect email. Sending limits strictly capped at 30–50 emails/day per inbox.
            </p>
            <div className="text-[11px] font-mono text-[#FF1B6B] font-bold">
              30 inboxes = 1,200 emails/day safely
            </div>
          </div>

        </div>

        {/* Interactive Technical Deep-Dive Widget */}
        <div className="bg-[#FAFAFC] rounded-3xl border-2 border-slate-200 p-8 sm:p-12 shadow-md space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-slate-900">
                Interactive Technical Blueprint
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Explore the technical configurations ACQSA AI deploys for every B2B client.
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('dns')}
                className={`px-4 py-2 rounded-xl text-xs font-poppins font-bold transition-all ${
                  activeTab === 'dns'
                    ? 'bg-[#0080FF] text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                DNS Records
              </button>
              <button
                onClick={() => setActiveTab('esp')}
                className={`px-4 py-2 rounded-xl text-xs font-poppins font-bold transition-all ${
                  activeTab === 'esp'
                    ? 'bg-[#0080FF] text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                ESP Architecture
              </button>
              <button
                onClick={() => setActiveTab('warmup')}
                className={`px-4 py-2 rounded-xl text-xs font-poppins font-bold transition-all ${
                  activeTab === 'warmup'
                    ? 'bg-[#0080FF] text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                Warm-up Schedule
              </button>
              <button
                onClick={() => setActiveTab('spintax')}
                className={`px-4 py-2 rounded-xl text-xs font-poppins font-bold transition-all ${
                  activeTab === 'spintax'
                    ? 'bg-[#0080FF] text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                Spintax Engine
              </button>
            </div>
          </div>

          {/* Active Tab Panel Content */}
          {activeTab === 'dns' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>RECORD: TXT (SPF)</span>
                    <span className="text-emerald-600 font-bold">100% PASS</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-800 break-all">
                    v=spf1 include:_spf.google.com ~all
                  </div>
                  <p className="text-[11px] text-slate-500 font-sans">
                    Authorizes Google mail servers to deliver messages on behalf of your secondary domain.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>RECORD: TXT (DKIM)</span>
                    <span className="text-emerald-600 font-bold">2048-BIT SIGNED</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-800 break-all">
                    google._domainkey.company-hq.com
                  </div>
                  <p className="text-[11px] text-slate-500 font-sans">
                    Cryptographic signature verifying your emails haven’t been altered in transit.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>RECORD: TXT (DMARC)</span>
                    <span className="text-emerald-600 font-bold">POLICY ALIGNED</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-800 break-all">
                    v=DMARC1; p=reject; rua=mailto:dmarc@...
                  </div>
                  <p className="text-[11px] text-slate-500 font-sans">
                    Guarantees inbox providers recognize domain legitimacy, blocking spoofing attempts.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'esp' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-extrabold flex items-center justify-center">
                    G
                  </div>
                  <div>
                    <h4 className="font-poppins font-extrabold text-slate-900">Google Workspace Inboxes</h4>
                    <span className="text-xs text-slate-500">10 Dedicated Secondary Accounts</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Configured with business-tier licenses. Routed specifically to prospects using Gmail and Google Workspace to bypass enterprise external filters.
                </p>
                <div className="text-xs font-mono text-emerald-600 font-bold">
                  ✓ Average Delivery Rate: 99.4%
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-extrabold flex items-center justify-center">
                    M
                  </div>
                  <div>
                    <h4 className="font-poppins font-extrabold text-slate-900">Microsoft 365 Exchange Inboxes</h4>
                    <span className="text-xs text-slate-500">10 Dedicated Secondary Accounts</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Native Microsoft Exchange routing. Delivers seamlessly into Fortune 500 Outlook/Office 365 inboxes without triggering quarantine barriers.
                </p>
                <div className="text-xs font-mono text-emerald-600 font-bold">
                  ✓ Average Delivery Rate: 98.9%
                </div>
              </div>
            </div>
          )}

          {activeTab === 'warmup' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2 text-center">
                  <span className="text-[10px] font-mono font-bold text-slate-400">DAYS 1 – 4</span>
                  <div className="text-xl font-poppins font-extrabold text-slate-900">5 – 10 / day</div>
                  <p className="text-[11px] text-slate-500">Initial peer handshake & seed network interactions</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2 text-center">
                  <span className="text-[10px] font-mono font-bold text-slate-400">DAYS 5 – 8</span>
                  <div className="text-xl font-poppins font-extrabold text-slate-900">15 – 20 / day</div>
                  <p className="text-[11px] text-slate-500">Reputation establishment & auto-reply generation</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2 text-center">
                  <span className="text-[10px] font-mono font-bold text-slate-400">DAYS 9 – 14</span>
                  <div className="text-xl font-poppins font-extrabold text-slate-900">25 – 35 / day</div>
                  <p className="text-[11px] text-slate-500">Deliverability testing across Yahoo, Outlook & Gmail</p>
                </div>
                <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200 shadow-sm space-y-2 text-center">
                  <span className="text-[10px] font-mono font-bold text-emerald-600">FULL SCALE</span>
                  <div className="text-xl font-poppins font-extrabold text-emerald-800">40 – 50 / day</div>
                  <p className="text-[11px] text-emerald-700">Production campaign launch with 100% inbox health</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'spintax' && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-500">
                <span>DYNAMIC SPINTAX VARIATION SAMPLE</span>
                <span className="text-[#FF1B6B] font-bold">1,024 UNIQUE COMBINATIONS</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 leading-relaxed">
                {"{Hi|Hey|Hello} {first_name}, {noticed|came across|saw} your {recent post|update} regarding {topic}. {Wanted to see if|Curious whether|Wondering if} you're currently exploring {solution}..."}
              </div>
              <p className="text-[11px] font-sans text-slate-500">
                Spintax varies phrasing dynamically across every sent message, completely eliminating algorithmic hash detection and bulk spam classification.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
