import React, { useState } from 'react';
import { Database, CheckCircle2, UserCheck, PhoneCall, ChevronRight, Eye } from 'lucide-react';

export const CRMKanban: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const columns = [
    { title: 'TARGET', count: '42 Accounts' },
    { title: 'CONTACTED', count: '28 Outbound' },
    { title: 'RESPONDED', count: '18 Replies' },
    { title: 'CONVERSATION', count: '12 Active' },
    { title: 'QUALIFIED', count: '8 Vetted' },
    { title: 'CALL BOOKED', count: '5 Scheduled' },
    { title: 'OPPORTUNITY', count: '3 Pipeline' }
  ];

  const cards = [
    {
      id: 'c1',
      col: 'TARGET',
      company: 'DataScale SaaS',
      name: 'Michael Vance',
      role: 'Founder & CEO',
      lastTouch: '2 hours ago',
      nextAction: 'Review profile triggers',
      status: 'High ICP Fit ($35k ARR)'
    },
    {
      id: 'c2',
      col: 'CONTACTED',
      company: 'CloudOps Tech',
      name: 'Sarah Jenkins',
      role: 'Chief Revenue Officer',
      lastTouch: 'Yesterday',
      nextAction: 'Monitor response',
      status: 'Outreach Sent'
    },
    {
      id: 'c3',
      col: 'RESPONDED',
      company: 'Apex Advisory',
      name: 'David Thorne',
      role: 'Managing Director',
      lastTouch: '3 hours ago',
      nextAction: 'Send case teardown',
      status: 'Positive Sentiment'
    },
    {
      id: 'c4',
      col: 'CONVERSATION',
      company: 'FinTech Stack',
      name: 'Elena Rostova',
      role: 'Co-Founder & VP Sales',
      lastTouch: '30 mins ago',
      nextAction: 'Qualify deal urgency',
      status: 'Discussing Outbound Pain'
    },
    {
      id: 'c5',
      col: 'QUALIFIED',
      company: 'Nexus Recruitment',
      name: 'Robert Sterling',
      role: 'Managing Partner',
      lastTouch: '1 hour ago',
      nextAction: 'Share calendar link',
      status: 'Passed ICP & Urgency'
    },
    {
      id: 'c6',
      col: 'CALL BOOKED',
      company: 'Vanguard IT Services',
      name: 'Alexander Cross',
      role: 'Founder & CEO',
      lastTouch: '10 mins ago',
      nextAction: 'Pre-call briefing',
      status: 'Confirmed Thu 3 PM'
    }
  ];

  return (
    <section className="py-24 bg-[#080A0C] text-white border-b border-[#20242A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8FF3D] font-bold px-3 py-1 rounded-full bg-[#101318] border border-[#20242A]">
            PROSPECT MANAGEMENT CRM
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            INTERACTIVE KANBAN CRM SYSTEM
          </h2>

          <p className="text-sm sm:text-base text-[#A7ADB5] max-w-2xl mx-auto font-medium">
            Hover over any prospect card to inspect conversation history, intent qualification, and upcoming actions.
          </p>
        </div>

        {/* Kanban Board Container */}
        <div className="bg-[#101318] border border-[#20242A] rounded-2xl p-6 shadow-2xl overflow-x-auto no-scrollbar">
          
          <div className="grid grid-cols-7 gap-3 min-w-[1200px]">
            {columns.map((col, idx) => (
              <div key={idx} className="space-y-3 bg-[#080A0C] p-3 rounded-xl border border-[#20242A] min-h-[380px]">
                <div className="border-b border-[#20242A] pb-2 text-[11px] font-mono">
                  <strong className="block text-white uppercase font-extrabold truncate">{col.title}</strong>
                  <span className="text-[#B8FF3D] text-[10px]">{col.count}</span>
                </div>

                {/* Cards in Column */}
                <div className="space-y-3">
                  {cards
                    .filter((c) => c.col === col.title)
                    .map((card) => (
                      <div
                        key={card.id}
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer relative ${
                          hoveredCard === card.id
                            ? 'bg-[#101318] border-[#B8FF3D] shadow-lg scale-105 ring-1 ring-[#B8FF3D]/40 z-10'
                            : 'bg-[#101318]/60 border-[#20242A] text-[#A7ADB5]'
                        }`}
                      >
                        <span className="text-[9px] font-mono text-[#B8FF3D] block font-bold truncate">{card.company}</span>
                        <strong className="block text-xs text-white font-heading font-bold truncate mt-0.5">{card.name}</strong>
                        <span className="text-[10px] text-[#A7ADB5] block truncate">{card.role}</span>

                        {hoveredCard === card.id && (
                          <div className="pt-2 border-t border-[#20242A] mt-2 space-y-1 text-[9px] font-mono animate-in fade-in">
                            <span className="text-white block font-semibold">Action: {card.nextAction}</span>
                            <span className="text-[#B8FF3D] block">{card.status}</span>
                            <span className="text-slate-500 block">Touch: {card.lastTouch}</span>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
