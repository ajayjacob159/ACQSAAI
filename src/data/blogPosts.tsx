import React from 'react';
import { ArrowRight, Linkedin, Sparkles, CheckCircle2 } from 'lucide-react';
import blogBannerImg from '../assets/blog-viral-profitable-brand.jpg';

export interface BlogPostData {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
    avatar: string;
    linkedin: string;
  };
  tags: string[];
  excerpt: string;
  content: React.ReactNode;
}

export const BLOG_POSTS: BlogPostData[] = [
  {
    slug: 'viral-profitable-brand',
    title: 'Build a Viral Brand. Build a Profitable Brand. Most People Only Build One.',
    subtitle: 'I spent 2 years studying 100+ founder personal brands. Here is the 3-pillar system to build an algorithm-proof brand for pipeline, authority, and freedom.',
    metaDescription: 'Learn the 3-pillar system to build an algorithm-proof founder brand that drives pipeline and enterprise clients, not just vanity views.',
    category: 'FOUNDER PERSONAL BRANDING',
    readTime: '4 min read',
    date: '14 October 2026',
    image: blogBannerImg,
    featured: true,
    author: {
      name: 'Rocky Jacob',
      role: 'Founder & CEO @ ACQSA AI',
      avatar: '/rocky-jacob.jpg',
      linkedin: 'https://www.linkedin.com/in/rockyjacob159/'
    },
    tags: ['#PersonalBranding', '#FounderBrand', '#Leadership', '#CoachingBusiness', '#Investors', '#LinkedInGrowth'],
    excerpt: 'Everyone is trying to BEAT the algorithm. Smart founders build a brand that is ALGORITHM-PROOF. Viral gets you views. Profitable gets you clients. Algorithm-proof gets you freedom. You need all 3.',
    content: (
      <div className="space-y-7 text-slate-700 leading-relaxed text-base sm:text-lg">
        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-2">
          <p className="text-xl sm:text-2xl font-poppins font-extrabold text-white leading-snug">
            Build a viral brand. Build a profitable brand.<br />
            <span className="text-[#FF1B6B]">Most people only build one.</span>
          </p>
          <p className="text-slate-300 text-sm font-mono">
            By Rocky Jacob · Founder & CEO @ ACQSA AI
          </p>
        </div>

        <p>
          I spent <strong>2 years studying 100+ founder personal brands</strong> across B2B SaaS, tech advisory, and growth-stage ventures.
        </p>

        <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-[#FF1B6B] my-6 space-y-2 shadow-2xs">
          <p className="font-poppins font-extrabold text-slate-900 text-lg">
            Here's what I learned:
          </p>
          <p className="text-slate-800 text-base font-medium leading-relaxed">
            Everyone is trying to <span className="underline decoration-[#FF1B6B] decoration-2">BEAT the algorithm</span>.<br />
            Smart founders build a brand that is <strong>ALGORITHM-PROOF</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          <div className="p-5 rounded-2xl bg-pink-50/70 border-2 border-pink-200/90 text-center space-y-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF1B6B] block">Pillar 1</span>
            <span className="font-poppins font-extrabold text-slate-900 text-base block">Viral gets you views.</span>
          </div>
          <div className="p-5 rounded-2xl bg-purple-50/70 border-2 border-purple-200/90 text-center space-y-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9333EA] block">Pillar 2</span>
            <span className="font-poppins font-extrabold text-slate-900 text-base block">Profitable gets you clients.</span>
          </div>
          <div className="p-5 rounded-2xl bg-blue-50/70 border-2 border-blue-200/90 text-center space-y-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0080FF] block">Pillar 3</span>
            <span className="font-poppins font-extrabold text-slate-900 text-base block">Algorithm-proof gets you freedom.</span>
          </div>
        </div>

        <p className="font-poppins font-extrabold text-slate-900 text-xl">
          You need all 3. Here is my exact 3-pillar system:
        </p>

        {/* 3 Pillars In-Depth */}
        <div className="space-y-6 pt-2">
          
          <div className="p-6 sm:p-7 rounded-3xl border-2 border-slate-200/90 bg-white shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-pink-100 text-[#FF1B6B] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                01
              </span>
              <h3 className="font-poppins font-extrabold text-lg sm:text-xl text-slate-900">
                VIRAL: Content that stops the scroll
              </h3>
            </div>
            <p className="text-slate-600 pl-11 text-base leading-relaxed">
              → <strong>Not trends. Truths.</strong> Your hard lessons, not hustle quotes. Share the operational scars, the pricing pivots, the product trade-offs, and the executive decisions that only someone in the trenches would know.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl border-2 border-slate-200/90 bg-white shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-purple-100 text-[#9333EA] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                02
              </span>
              <h3 className="font-poppins font-extrabold text-lg sm:text-xl text-slate-900">
                PROFITABLE: Content that starts conversations
              </h3>
            </div>
            <p className="text-slate-600 pl-11 text-base leading-relaxed">
              → Every post has one job: <strong>Make your ideal client say "this is exactly my problem."</strong> When your target enterprise buyers see their exact technical or commercial headache articulated with surgical precision, inbound DMs follow naturally.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl border-2 border-slate-200/90 bg-white shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-blue-100 text-[#0080FF] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                03
              </span>
              <h3 className="font-poppins font-extrabold text-lg sm:text-xl text-slate-900">
                ALGORITHM-PROOF: Content that builds assets
              </h3>
            </div>
            <p className="text-slate-600 pl-11 text-base leading-relaxed">
              → <strong>Email list, community, inbound pipeline.</strong> So you never depend on LinkedIn's mood swings or sudden distribution drops. You own the relationship with your audience forever.
            </p>
          </div>

        </div>

        <div className="p-8 rounded-3xl bg-slate-950 text-white space-y-3 my-8 shadow-xl">
          <p className="text-2xl font-poppins font-extrabold text-white">
            Not followers. Freedom.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            I used this system to help founders turn their LinkedIn profile into a predictable client machine — for clients, pipeline, and category authority.
          </p>
        </div>

        <div className="bg-[#FAFAFC] rounded-3xl border-2 border-slate-200 p-8 space-y-5">
          <h4 className="text-xl font-poppins font-extrabold text-slate-900">
            Apply to Work with Us
          </h4>
          <p className="text-base text-slate-700">
            If you're a <strong>Founder, Leader, Coach or Investor</strong> and you're tired of posting daily with zero pipeline...
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href="https://calendly.com/rockyjacob-ai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-xs uppercase tracking-wider text-center shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Apply to Work with Us (Book Strategy Call)</span>
              <ArrowRight className="w-4 h-4 text-[#FF1B6B]" />
            </a>

            <a
              href="https://www.linkedin.com/in/rockyjacob159/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white border-2 border-slate-300 hover:border-slate-400 text-slate-900 font-poppins font-bold text-xs uppercase tracking-wider text-center shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Linkedin className="w-4 h-4 text-[#0077FF]" />
              <span>DM "BRAND" on LinkedIn</span>
            </a>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-600 font-mono">
            <span className="font-bold text-slate-900">P.S.</span> What's your biggest struggle with personal branding right now? Drop me a direct message on LinkedIn — I reply to every founder personally.
          </div>
        </div>

        <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
          <span>#PersonalBranding</span>
          <span>#FounderBrand</span>
          <span>#Leadership</span>
          <span>#CoachingBusiness</span>
          <span>#Investors</span>
          <span>#LinkedInGrowth</span>
        </div>
      </div>
    )
  },
  {
    slug: 'zero-to-pipeline-playbook',
    title: 'The Inbound Architecture: How B2B Founders Turn 1,000 Profile Views into $35k Pipeline',
    subtitle: 'Why 99% of founder LinkedIn profiles leak qualified buyers, and the 5-part positioning framework that fixes it in 48 hours.',
    metaDescription: 'Discover how B2B SaaS founders turn profile views into high-converting inbound demo requests with executive positioning.',
    category: 'LINKEDIN POSITIONING & PIPELINE',
    readTime: '3 min read',
    date: '10 October 2026',
    image: '/rocky-jacob.jpg',
    featured: false,
    author: {
      name: 'Rocky Jacob',
      role: 'Founder & CEO @ ACQSA AI',
      avatar: '/rocky-jacob.jpg',
      linkedin: 'https://www.linkedin.com/in/rockyjacob159/'
    },
    tags: ['#InboundPipeline', '#SaaSSales', '#FounderLedGrowth', '#B2BMarketing'],
    excerpt: 'Your banner and headline are not a resume. They are an executive landing page. When prospective enterprise buyers land on your profile, you have 6 seconds to establish commercial category relevance.',
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
        <p className="text-xl font-poppins font-bold text-slate-900">
          Your LinkedIn profile is not an online resume. It is your company's highest-converting executive landing page.
        </p>
        <p>
          When prospective buyers, investors, or enterprise champions click on your name after seeing an insightful comment or post, they make up their mind in less than 6 seconds:
        </p>
        <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-3">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Is this founder building in my problem space?</strong></span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Do they deeply understand my commercial bottlenecks?</strong></span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Can they solve this without wasting 6 months of junior sales cycles?</strong></span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 font-mono text-sm text-emerald-950">
          <strong>Key Impact Metric:</strong> Optimizing a founder's profile conversion architecture routinely lifts direct inbound connection requests from target accounts by over 240%.
        </div>

        <div className="pt-4">
          <a
            href="https://calendly.com/rockyjacob-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-950 text-white font-poppins font-bold text-xs uppercase tracking-wider"
          >
            <span>Book Founder Profile Audit (20-min) →</span>
          </a>
        </div>
      </div>
    )
  },
  {
    slug: 'human-voice-extraction',
    title: 'Why 95% of Executive Ghostwriting Fails (And the 45-Min Voice Extraction Fix)',
    subtitle: 'Generic agency copywriters don’t know ARR from CAC. Here is how authentic voice capture bridges the gap without taxing founder time.',
    metaDescription: 'Why traditional ghostwriting agencies fail B2B SaaS founders, and how structured voice extraction preserves authentic domain authority.',
    category: 'EXECUTIVE GHOSTWRITING',
    readTime: '4 min read',
    date: '04 October 2026',
    image: blogBannerImg,
    featured: false,
    author: {
      name: 'Rocky Jacob',
      role: 'Founder & CEO @ ACQSA AI',
      avatar: '/rocky-jacob.jpg',
      linkedin: 'https://www.linkedin.com/in/rockyjacob159/'
    },
    tags: ['#Ghostwriting', '#VoiceExtraction', '#B2BTech', '#FounderAuthority'],
    excerpt: 'Most ghostwriting fails because agencies assign junior english graduates to write for technical B2B founders. We replace that with a bi-weekly 45-min voice extraction interview system.',
    content: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
        <p className="text-xl font-poppins font-bold text-slate-900">
          Founders don't hate personal branding. They hate editing bad, generic drafts that sound like ChatGPT or an intern.
        </p>
        <p>
          Real executive thought leadership requires capturing your authentic cadence, technical opinions, and battle-tested industry perspectives. In a structured 45-minute bi-weekly voice interview, we extract 10+ high-authority post frameworks that sound 100% like you.
        </p>
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <h4 className="font-poppins font-bold text-slate-900 mb-2">The ACQSA Voice Extraction Cadence:</h4>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
            <li><strong>Voice Capture Session:</strong> 45-min Zoom call deep-diving into your latest customer wins and market opinions.</li>
            <li><strong>Audio Transcription & NLP Hook Analysis:</strong> Extracting your exact words and turns of phrase.</li>
            <li><strong>Human Polish & Commercial Alignment:</strong> Formatting for high-contrast mobile readability and executive trust.</li>
          </ol>
        </div>

        <div className="pt-4">
          <a
            href="https://calendly.com/rockyjacob-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-950 text-white font-poppins font-bold text-xs uppercase tracking-wider"
          >
            <span>Schedule Voice Extraction Call →</span>
          </a>
        </div>
      </div>
    )
  }
];
