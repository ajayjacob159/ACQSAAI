import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CountryProvider } from './context/CountryContext';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhoItsForSection } from './components/WhoItsForSection';
import { PricingSection } from './components/PricingSection';
import { ProofSection } from './components/ProofSection';
import { BlogSection } from './components/BlogSection';
import { AboutFounderSection } from './components/AboutFounderSection';
import { FinalCTA } from './components/FinalCTA';
import { StrategyCallModal } from './components/StrategyCallModal';
import { NewsletterPopup } from './components/NewsletterPopup';
import { Footer } from './components/Footer';

function MainContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>();
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  // Smooth Scrolling physics (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Polite auto-popup for newsletter after 8 seconds if not dismissed
  useEffect(() => {
    try {
      const alreadySubscribed = localStorage.getItem('acqsa_newsletter_subscribed');
      const dismissed = sessionStorage.getItem('acqsa_newsletter_dismissed');
      if (!alreadySubscribed && !dismissed) {
        const timer = setTimeout(() => {
          setIsNewsletterOpen(true);
        }, 8000);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleOpenBooking = (packageTitle?: string) => {
    setSelectedPackage(packageTitle);
    setIsModalOpen(true);
  };

  const handleCloseNewsletter = () => {
    setIsNewsletterOpen(false);
    try {
      sessionStorage.setItem('acqsa_newsletter_dismissed', 'true');
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#FF1B6B]/20 selection:text-[#FF1B6B] relative">
      
      {/* Dynamic SEO & AEO JSON-LD Schema Metadata */}
      <SEOHead />

      {/* Global Navbar with Services dropdown */}
      <Navbar onOpenBooking={(pkg) => handleOpenBooking(pkg || 'Exploratory 20-min Strategy Call')} />

      {/* Main Single-Page Sections */}
      <main className="flex-1">
        {/* 1. Hero section */}
        <Hero onOpenBooking={() => handleOpenBooking('Offer 1: Founder LinkedIn Authority')} />

        {/* 2. Specialized Services & Offers Section (The 3 Core Offers) */}
        <ServicesSection onSelectService={(srv) => handleOpenBooking(srv)} />

        {/* 3. Problem section */}
        <ProblemSection />

        {/* 4. Solution / How it works (5 clear steps) */}
        <HowItWorksSection onOpenBooking={() => handleOpenBooking('Paid Pilot')} />

        {/* 5. Who it's for & clear exclusion */}
        <WhoItsForSection onOpenBooking={() => handleOpenBooking('Fit Evaluation Call')} />

        {/* 6. Transparent Pricing section (USD Dollars) */}
        <PricingSection onSelectPackage={(pkg) => handleOpenBooking(pkg)} />

        {/* 7. Proof / Results section (commercial signals, case teardowns, testimonials) */}
        <ProofSection onOpenBooking={() => handleOpenBooking('Strategy Session')} />

        {/* 8. Founder Thought Leadership & Blog Section */}
        <BlogSection onOpenBooking={(pkg) => handleOpenBooking(pkg)} />

        {/* 9. About the founder (Rocky Jacob, India cost leverage, photo) */}
        <AboutFounderSection onOpenBooking={() => handleOpenBooking('20-min Founder Call with Rocky')} />

        {/* 9. Final CTA section */}
        <FinalCTA onOpenBooking={() => handleOpenBooking('Final CTA Strategy Call')} />
      </main>

      {/* 10. Clean Modern Footer with Newsletter Subscription */}
      <Footer onOpenNewsletter={() => setIsNewsletterOpen(true)} />

      {/* Interactive Booking & Strategy Call Modal */}
      <StrategyCallModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialPackage={selectedPackage} 
      />

      {/* Newsletter Dispatch Popup Modal */}
      <NewsletterPopup 
        isOpen={isNewsletterOpen} 
        onClose={handleCloseNewsletter} 
      />

    </div>
  );
}

export function App() {
  return (
    <CountryProvider>
      <MainContent />
    </CountryProvider>
  );
}

export default App;
