import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Linkedin, 
  Share2, 
  Check, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  ChevronRight,
  ExternalLink,
  Twitter
} from 'lucide-react';
import { BLOG_POSTS, BlogPostData } from '../data/blogPosts';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { StrategyCallModal } from '../components/StrategyCallModal';
import { NewsletterPopup } from '../components/NewsletterPopup';
import { addSubscriber } from '../lib/supabase';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Find article by slug (default to featured viral-profitable-brand if root /blog)
  const currentPost = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  // Update dynamic document title & meta
  useEffect(() => {
    if (currentPost) {
      document.title = `${currentPost.title} | Rocky Jacob · ACQSA AI`;
      window.scrollTo(0, 0);
    }
  }, [currentPost]);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleShareLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(shareUrl, '_blank', 'width=600,height=600');
  };

  const handleShareTwitter = () => {
    const text = `${currentPost.title} by @RockyJacob`;
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank', 'width=600,height=600');
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    try {
      await addSubscriber(email, `blog_detail_${currentPost.slug}`);
    } catch {
      // ignore
    } finally {
      setSubmitting(false);
      setSubscribed(true);
    }
  };

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== currentPost.slug);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#FF1B6B]/20 selection:text-[#FF1B6B]">
      
      {/* Header Navigation */}
      <Navbar onOpenBooking={() => setIsModalOpen(true)} />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Breadcrumb Navigation & Back Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-500">
              <Link to="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-slate-900 transition-colors">
                Blogs
              </Link>
              <span>/</span>
              <span className="text-[#FF1B6B] truncate max-w-[200px] sm:max-w-xs font-bold">
                {currentPost.title}
              </span>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-950 font-bold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Articles</span>
            </Link>
          </div>

          {/* Article Header Meta */}
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500">
              <span className="px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#FF1B6B] font-bold uppercase tracking-wider">
                {currentPost.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{currentPost.readTime}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{currentPost.date}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-poppins font-black text-slate-900 tracking-tight leading-[1.12]">
              {currentPost.title}
            </h1>

            <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed">
              {currentPost.subtitle}
            </p>

            {/* Author Profile Lockup */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-3xl bg-[#FAFAFC] border-2 border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-3.5">
                <img
                  src={currentPost.author.avatar}
                  alt={currentPost.author.name}
                  className="w-13 h-13 rounded-2xl object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h3 className="font-poppins font-extrabold text-sm sm:text-base text-slate-900">
                    {currentPost.author.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-500">
                    {currentPost.author.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentPost.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-800 hover:text-[#0077FF] hover:border-[#0077FF] transition-all flex items-center gap-1.5 shadow-2xs"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0077FF]" />
                  <span>Connect on LinkedIn</span>
                </a>

                <a
                  href="https://calendly.com/rockyjacob-ai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-poppins font-bold uppercase tracking-wider transition-colors"
                >
                  Book Call
                </a>
              </div>
            </div>

            {/* Social Sharing Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 pb-2 border-y border-slate-100">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Share this playbook:
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShareLinkedIn}
                  className="px-3.5 py-1.5 rounded-full bg-[#0077FF]/10 hover:bg-[#0077FF]/20 text-[#0077FF] text-xs font-mono font-bold transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </button>

                <button
                  onClick={handleShareTwitter}
                  className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold transition-colors flex items-center gap-1.5"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  <span>X (Twitter)</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold transition-colors flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Link!' : 'Copy Link'}</span>
                </button>
              </div>
            </div>
          </header>

          {/* Large Featured Banner Image */}
          {currentPost.image && (
            <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-md">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          )}

          {/* Main Article Body */}
          <div className="pt-2">
            {currentPost.content}
          </div>

          {/* Shareable Link Banner */}
          <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-poppins font-extrabold text-sm text-slate-900 block">
                Found this playbook insightful?
              </span>
              <span className="text-xs font-mono text-slate-500 block">
                Share this direct link with your founder network or team.
              </span>
            </div>

            <button
              onClick={handleCopyLink}
              className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-300 font-mono font-bold text-xs text-slate-900 shadow-2xs hover:scale-105 transition-all flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-[#FF1B6B]" />}
              <span>{copied ? 'Link Copied to Clipboard!' : 'Copy Shareable Link'}</span>
            </button>
          </div>

          {/* Newsletter Subscription Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono font-bold text-[#FF1B6B]">
              <Sparkles className="w-3 h-3 text-[#FF1B6B]" />
              <span>THE FOUNDER PIPELINE DISPATCH</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-poppins font-extrabold text-white">
              Get our next founder teardown delivered to your inbox
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              1 tactical teardown every Thursday on LinkedIn category authority, executive ghostwriting, and B2B pipeline conversion. Read by 1,200+ founders.
            </p>

            {!subscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md pt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter work email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-3 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:bg-white focus:text-slate-900 transition-all"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 rounded-full bg-[#FF1B6B] hover:bg-[#ff0055] text-white font-poppins font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
                >
                  {submitting ? 'Subscribing...' : 'Subscribe Free'}
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-mono">
                ✓ You're subscribed! Welcome to the dispatch.
              </div>
            )}
          </div>

          {/* Related Articles Section */}
          <div className="pt-8 border-t border-slate-200 space-y-6">
            <h3 className="text-xl font-poppins font-extrabold text-slate-900">
              More Founder Brand Playbooks
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="p-6 rounded-2xl bg-[#FAFAFC] border border-slate-200 hover:border-slate-300 transition-all space-y-3 group"
                >
                  <span className="text-[10px] font-mono font-bold text-[#FF1B6B] uppercase tracking-wider block">
                    {post.category}
                  </span>
                  <h4 className="font-poppins font-bold text-base text-slate-900 group-hover:text-[#FF1B6B] transition-colors leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {post.subtitle}
                  </p>
                  <span className="text-xs font-mono font-bold text-slate-900 group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                    <span>Read article</span>
                    <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </article>
      </main>

      {/* Global Footer */}
      <Footer onOpenNewsletter={() => setIsNewsletterOpen(true)} />

      {/* Booking Modal */}
      <StrategyCallModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPackage="Strategy Call via Blog"
      />

      {/* Newsletter Popup */}
      <NewsletterPopup
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />

    </div>
  );
};
