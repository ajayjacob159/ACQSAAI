import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Share2, 
  X, 
  CheckCircle2, 
  Calendar,
  Linkedin,
  MessageSquare,
  TrendingUp,
  Target,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import blogBannerImg from '../assets/blog-viral-profitable-brand.jpg';

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  excerpt: string;
  fullBody: React.ReactNode;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'viral-profitable-brand',
    title: 'Build a Viral Brand. Build a Profitable Brand. Most People Only Build One.',
    subtitle: 'I spent 2 years studying 100+ founder personal brands. Here is the 3-pillar system to build an algorithm-proof brand for pipeline, authority, and freedom.',
    category: 'FOUNDER BRANDING PLAYBOOK',
    readTime: '4 min read',
    date: '14 October 2026',
    image: blogBannerImg,
    featured: true,
    author: {
      name: 'Rocky Jacob',
      role: 'Founder & CEO @ ACQSA AI',
      avatar: '/rocky-jacob.jpg'
    },
    tags: ['#PersonalBranding', '#FounderBrand', '#Leadership', '#CoachingBusiness', '#Investors', '#LinkedInGrowth'],
    excerpt: 'Everyone is trying to BEAT the algorithm. Smart founders build a brand that is ALGORITHM-PROOF. Viral gets you views. Profitable gets you clients. Algorithm-proof gets you freedom. You need all 3.',
    fullBody: (
      <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p className="text-lg sm:text-xl font-poppins font-bold text-slate-900 leading-snug">
          Build a viral brand. Build a profitable brand.<br />
          <span className="text-[#FF1B6B]">Most people only build one.</span>
        </p>

        <p>
          I spent <strong>2 years studying 100+ founder personal brands</strong> across B2B SaaS, tech consulting, and venture capital.
        </p>

        <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-[#FF1B6B] my-4 space-y-2">
          <p className="font-poppins font-extrabold text-slate-900 text-base">
            Here's what I learned:
          </p>
          <p className="text-slate-800 font-medium">
            Everyone is trying to <em>BEAT</em> the algorithm.<br />
            Smart founders build a brand that is <strong>ALGORITHM-PROOF</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          <div className="p-4 rounded-xl bg-pink-50/50 border border-pink-200 text-center">
            <span className="text-xs font-mono font-bold uppercase text-[#FF1B6B] block">Pillar 1</span>
            <span className="font-poppins font-bold text-slate-900 text-sm">Viral gets you views.</span>
          </div>
          <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-200 text-center">
            <span className="text-xs font-mono font-bold uppercase text-[#9333EA] block">Pillar 2</span>
            <span className="font-poppins font-bold text-slate-900 text-sm">Profitable gets you clients.</span>
          </div>
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 text-center">
            <span className="text-xs font-mono font-bold uppercase text-[#0080FF] block">Pillar 3</span>
            <span className="font-poppins font-bold text-slate-900 text-sm">Algorithm-proof gets you freedom.</span>
          </div>
        </div>

        <p className="font-semibold text-slate-900 text-base">
          You need all 3. Here is my exact 3-pillar system:
        </p>

        {/* Pillar Breakdown */}
        <div className="space-y-4 pt-2">
          <div className="p-5 rounded-2xl border-2 border-slate-200/90 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF1B6B]" />
              <h4 className="font-poppins font-extrabold text-base text-slate-900">
                1. VIRAL: Content that stops the scroll
              </h4>
            </div>
            <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
              → Not trends. Truths. Your hard lessons, not hustle quotes. Share the operational scars, the pricing teardowns, and the product trade-offs that only someone in the trenches would know.
            </p>
          </div>

          <div className="p-5 rounded-2xl border-2 border-slate-200/90 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9333EA]" />
              <h4 className="font-poppins font-extrabold text-base text-slate-900">
                2. PROFITABLE: Content that starts conversations
              </h4>
            </div>
            <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
              → Every post has one job: <strong>Make your ideal client say "this is exactly my problem."</strong> When your target buyers see their exact technical or commercial headache articulated with surgical precision, inbound DMs follow naturally.
            </p>
          </div>

          <div className="p-5 rounded-2xl border-2 border-slate-200/90 bg-white shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0080FF]" />
              <h4 className="font-poppins font-extrabold text-base text-slate-900">
                3. ALGORITHM-PROOF: Content that builds assets
              </h4>
            </div>
            <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
              → Email list, community, inbound pipeline. So you never depend on LinkedIn's mood swings or sudden distribution drops. You own the relationship with your audience forever.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-950 text-white space-y-3 my-6">
          <p className="text-lg font-poppins font-bold text-white">
            Not followers. Freedom.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            I used this system to help founders turn their LinkedIn profile into a predictable client machine — driving qualified enterprise pipeline, category authority, and direct inbound revenue.
          </p>
        </div>

        <div className="space-y-4 pt-2">
          <h4 className="text-base font-poppins font-bold text-slate-900">
            Apply to Work with Us
          </h4>
          <p>
            If you're a <strong>Founder, Leader, Coach or Investor</strong> and you're tired of posting daily with zero pipeline...
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href="https://calendly.com/rockyjacob-ai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-xs uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>Apply to Work with Us (Book Strategy Call)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF1B6B]" />
            </a>

            <a
              href="https://www.linkedin.com/in/rockyjacob159/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-800 font-poppins font-bold text-xs uppercase tracking-wider text-center shadow-xs flex items-center justify-center gap-2"
            >
              <Linkedin className="w-4 h-4 text-[#0077FF]" />
              <span>DM "BRAND" on LinkedIn</span>
            </a>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-mono mt-4">
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
    id: 'zero-to-pipeline-playbook',
    title: 'The Inbound Architecture: How B2B Founders Turn 1,000 Profile Views into $35k Pipeline',
    subtitle: 'Why 99% of founder LinkedIn profiles leak qualified buyers, and the 5-part positioning framework that fixes it in 48 hours.',
    category: 'LINKEDIN POSITIONING & PIPELINE',
    readTime: '3 min read',
    date: '10 October 2026',
    image: '/rocky-jacob.jpg',
    featured: false,
    author: {
      name: 'Rocky Jacob',
      role: 'Founder & CEO @ ACQSA AI',
      avatar: '/rocky-jacob.jpg'
    },
    tags: ['#InboundPipeline', '#SaaSSales', '#FounderLedGrowth', '#B2BMarketing'],
    excerpt: 'Your banner and headline are not a resume. They are an executive landing page. When prospective enterprise buyers land on your profile, you have 6 seconds to establish commercial category relevance.',
    fullBody: (
      <div className="space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p className="text-lg font-poppins font-bold text-slate-900">
          Your LinkedIn profile is not an online resume. It is your company's highest-converting executive landing page.
        </p>
        <p>
          When prospective buyers, investors, or enterprise champions click on your name after seeing an insightful comment or post, they make up their mind in less than 6 seconds:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Is this founder building in my problem space?</strong></li>
          <li><strong>Do they deeply understand my commercial bottlenecks?</strong></li>
          <li><strong>Can they solve this without wasting 6 months of junior sales cycles?</strong></li>
        </ul>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <p className="font-mono text-xs text-slate-800">
            <strong>Key Metric:</strong> Optimizing a founder's profile conversion architecture routinely lifts direct inbound connection requests from target accounts by over 240%.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'human-voice-extraction',
    title: 'Why 95% of Executive Ghostwriting Fails (And the 45-Min Voice Extraction Fix)',
    subtitle: 'Generic agency copywriters don’t know ARR from CAC. Here is how authentic voice capture bridges the gap without taxing founder time.',
    category: 'EXECUTIVE GHOSTWRITING',
    readTime: '4 min read',
    date: '04 October 2026',
    image: blogBannerImg,
    featured: false,
    author: {
      name: 'Rocky Jacob',
      role: 'Founder & CEO @ ACQSA AI',
      avatar: '/rocky-jacob.jpg'
    },
    tags: ['#Ghostwriting', '#VoiceExtraction', '#B2BTech', '#FounderAuthority'],
    excerpt: 'Most ghostwriting fails because agencies assign junior english graduates to write for technical B2B founders. We replace that with a bi-weekly 45-min voice extraction interview system.',
    fullBody: (
      <div className="space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p className="text-lg font-poppins font-bold text-slate-900">
          Founders don't hate personal branding. They hate editing bad, generic drafts that sound like ChatGPT or a 22-year-old intern.
        </p>
        <p>
          Real executive thought leadership requires capturing your authentic cadence, technical opinions, and battle-tested industry perspectives. In a structured 45-minute bi-weekly voice interview, we extract 10+ high-authority post frameworks that sound 100% like you.
        </p>
      </div>
    )
  }
];

interface BlogSectionProps {
  onOpenBooking: (packageTitle?: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenBooking }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <section id="blog" className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-800 shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#FF1B6B]" />
            <span>FOUNDER THOUGHT LEADERSHIP & BLOG</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold tracking-tight text-slate-900 leading-tight">
            Playbooks for founders who want <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
              pipeline, not just likes.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Real frameworks, teardowns, and tactical systems for B2B SaaS founders, leaders, and executive creators.
          </p>
        </div>

        {/* Featured Big Blog Post Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="bg-[#FAFAFC] border-2 border-slate-200/90 hover:border-slate-300 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Banner Image with Badge */}
            <div className="lg:col-span-6 relative overflow-hidden bg-slate-900 h-64 sm:h-80 lg:h-full min-h-[300px]">
              <Link to={`/blog/${featuredPost.id}`} className="block w-full h-full">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold uppercase tracking-wider pointer-events-none">
                <Sparkles className="w-3 h-3 text-[#FF1B6B]" />
                <span>Featured Playbook</span>
              </div>
            </div>

            {/* Content Preview */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500">
                <span className="font-bold text-[#FF1B6B] uppercase tracking-wider">
                  {featuredPost.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{featuredPost.readTime}</span>
                </span>
                <span>•</span>
                <span>{featuredPost.date}</span>
              </div>

              <div className="space-y-2">
                <Link to={`/blog/${featuredPost.id}`}>
                  <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 group-hover:text-[#FF1B6B] transition-colors leading-tight">
                    {featuredPost.title}
                  </h3>
                </Link>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {featuredPost.subtitle}
                </p>
              </div>

              {/* Author & Action */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <span className="font-poppins font-bold text-xs text-slate-900 block">
                      {featuredPost.author.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 block">
                      {featuredPost.author.role}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="px-6 py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Read Full Post & Share</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF1B6B]" />
                </Link>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Secondary Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FAFAFC] border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all space-y-6 group"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                  <span className="font-bold text-[#FF1B6B]">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <Link to={`/blog/${post.id}`}>
                  <h4 className="text-xl font-poppins font-extrabold text-slate-900 group-hover:text-[#FF1B6B] transition-colors leading-snug">
                    {post.title}
                  </h4>
                </Link>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {post.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  By {post.author.name}
                </span>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-poppins font-bold text-slate-900 hover:text-[#FF1B6B] transition-colors"
                >
                  <span>Read Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom directory explore button */}
        <div className="text-center pt-2">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-900 transition-all shadow-2xs hover:scale-105"
          >
            <BookOpen className="w-4 h-4 text-[#FF1B6B]" />
            <span>Explore All Founder Playbooks & Shareable Articles (/blog)</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>

      </div>

      {/* Full Screen / Modal Blog Reader Drawer */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white border-2 border-slate-200 rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative my-8 text-slate-900 max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-10"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                {/* Category & Date */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 border-b border-slate-100 pb-4">
                  <span className="px-2.5 py-1 rounded-full bg-pink-50 text-[#FF1B6B] font-bold">
                    {selectedPost.category}
                  </span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                </div>

                {/* Banner Image */}
                {selectedPost.image && (
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm max-h-72">
                    <img
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Header Title */}
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-extrabold text-slate-900 leading-tight">
                    {selectedPost.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                    {selectedPost.subtitle}
                  </p>
                </div>

                {/* Author Card */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedPost.author.avatar}
                      alt={selectedPost.author.name}
                      className="w-12 h-12 rounded-full object-cover border border-slate-300"
                    />
                    <div>
                      <span className="font-poppins font-bold text-sm text-slate-900 block">
                        {selectedPost.author.name}
                      </span>
                      <span className="text-xs font-mono text-slate-500 block">
                        {selectedPost.author.role}
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/rockyjacob159/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 hover:text-[#0077FF] hover:border-[#0077FF] transition-all flex items-center gap-1.5 shrink-0"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0077FF]" />
                    <span>Follow on LinkedIn</span>
                  </a>
                </div>

                {/* Full Article Content */}
                <div className="pt-2 border-t border-slate-100">
                  {selectedPost.fullBody}
                </div>

                {/* Bottom CTA Inside Reader */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      setSelectedPost(null);
                      onOpenBooking('Strategy Call from Blog');
                    }}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Apply to Work with Rocky</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF1B6B]" />
                  </button>

                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-xs font-mono font-bold text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    Close & return to site
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
