import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Search, 
  Linkedin, 
  ArrowLeft,
  Calendar,
  Share2,
  Tag
} from 'lucide-react';
import { BLOG_POSTS, BlogPostData } from '../data/blogPosts';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { StrategyCallModal } from '../components/StrategyCallModal';
import { NewsletterPopup } from '../components/NewsletterPopup';

export const BlogIndexPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  useEffect(() => {
    document.title = 'Blogs & Playbooks | Founder Personal Branding | ACQSA AI';
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = BLOG_POSTS[0];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(new Set(BLOG_POSTS.flatMap((p) => p.tags)));

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#FF1B6B]/20 selection:text-[#FF1B6B]">
      
      {/* Header */}
      <Navbar onOpenBooking={() => setIsModalOpen(true)} />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Page Title & Mission */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-800 shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-[#FF1B6B]" />
              <span>THE FOUNDER AUTHORITY BLOG & PLAYBOOKS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-poppins font-black text-slate-900 tracking-tight leading-tight">
              LinkedIn Playbooks for <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#FF1B6B] via-[#9333EA] to-[#0080FF] bg-clip-text text-transparent">
                pipeline, not just likes.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-medium">
              Actionable teardowns on building an algorithm-proof founder brand, executive ghostwriting, and B2B pipeline conversion. Read and share these direct playbooks.
            </p>

            {/* Back to Home button */}
            <div className="pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-600 hover:text-slate-950 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to ACQSA AI Homepage</span>
              </Link>
            </div>
          </div>

          {/* Search & Topic Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto pt-2">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search playbooks..."
                className="w-full bg-[#FAFAFC] border border-slate-200 rounded-full pl-10 pr-4 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-950 transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded-full border transition-colors ${
                  selectedTag === null
                    ? 'bg-slate-950 text-white border-slate-950'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                All Topics
              </button>
              {allTags.slice(0, 4).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={`px-3 py-1 rounded-full border transition-colors ${
                    selectedTag === tag
                      ? 'bg-slate-950 text-white border-slate-950'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Article Card */}
          {featuredPost && (
            <div className="bg-[#FAFAFC] border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                
                <div className="lg:col-span-6 relative bg-slate-950 h-72 sm:h-96 lg:h-full min-h-[320px]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-[#FF1B6B]" />
                    <span>Featured Article</span>
                  </div>
                </div>

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
                    <Link to={`/blog/${featuredPost.slug}`}>
                      <h2 className="text-2xl sm:text-3xl font-poppins font-extrabold text-slate-900 hover:text-[#FF1B6B] transition-colors leading-tight">
                        {featuredPost.title}
                      </h2>
                    </Link>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {featuredPost.subtitle}
                    </p>
                  </div>

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
                      to={`/blog/${featuredPost.slug}`}
                      className="px-6 py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-poppins font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Read Playbook & Share</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF1B6B]" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* List of Other Articles */}
          <div className="space-y-6 pt-4">
            <h3 className="text-2xl font-poppins font-extrabold text-slate-900">
              All Founder Brand & Pipeline Articles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all space-y-6 shadow-2xs hover:shadow-md"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                      <span className="font-bold text-[#FF1B6B]">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <h4 className="text-xl font-poppins font-extrabold text-slate-900 hover:text-[#FF1B6B] transition-colors leading-snug">
                        {post.title}
                      </h4>
                    </Link>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {post.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">
                      By {post.author.name}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-poppins font-bold text-slate-900 hover:text-[#FF1B6B] transition-colors"
                    >
                      <span>Read Full Post</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Global Footer */}
      <Footer onOpenNewsletter={() => setIsNewsletterOpen(true)} />

      {/* Modal */}
      <StrategyCallModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPackage="Strategy Call via Blog Index"
      />

      {/* Newsletter */}
      <NewsletterPopup
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />

    </div>
  );
};
