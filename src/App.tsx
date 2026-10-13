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
import { AboutFounderSection } from './components/AboutFounderSection';
import { FinalCTA } from './components/FinalCTA';
import { StrategyCallModal } from './components/StrategyCallModal';
import { Footer } from './components/Footer';

function MainContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>();

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

  const handleOpenBooking = (packageTitle?: string) => {
    setSelectedPackage(packageTitle);
    setIsModalOpen(true);
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

        {/* 6. Transparent Pricing section (Dynamic localized prices by Country) */}
        <PricingSection onSelectPackage={(pkg) => handleOpenBooking(pkg)} />

        {/* 7. Proof / Results section (commercial signals, case teardowns, testimonials) */}
        <ProofSection onOpenBooking={() => handleOpenBooking('Strategy Session')} />

        {/* 8. About the founder (Rocky Jacob, India cost leverage, photo) */}
        <AboutFounderSection onOpenBooking={() => handleOpenBooking('20-min Founder Call with Rocky')} />

        {/* 9. Final CTA section */}
        <FinalCTA onOpenBooking={() => handleOpenBooking('Final CTA Strategy Call')} />
      </main>

      {/* 10. Clean Modern Footer */}
      <Footer />

      {/* Interactive Booking & Strategy Call Modal */}
      <StrategyCallModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialPackage={selectedPackage} 
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
