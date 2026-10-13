import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhoItsForSection } from './components/WhoItsForSection';
import { PricingSection } from './components/PricingSection';
import { ProofSection } from './components/ProofSection';
import { AboutFounderSection } from './components/AboutFounderSection';
import { FinalCTA } from './components/FinalCTA';
import { StrategyCallModal } from './components/StrategyCallModal';
import { Footer } from './components/Footer';

export function App() {
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

      {/* Global Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking('Exploratory 20-min Strategy Call')} />

      {/* Main Single-Page Sections */}
      <main className="flex-1">
        {/* 1. Hero section */}
        <Hero onOpenBooking={() => handleOpenBooking('Paid Pilot ($1,500)')} />

        {/* 2. Problem section */}
        <ProblemSection />

        {/* 3. Solution / How it works (5 clear steps) */}
        <HowItWorksSection onOpenBooking={() => handleOpenBooking('Paid Pilot ($1,500)')} />

        {/* 4. Who it's for & clear exclusion */}
        <WhoItsForSection onOpenBooking={() => handleOpenBooking('Fit Evaluation Call')} />

        {/* 5. Transparent Pricing section (Pilot $1,500 / Core $2,800 / Premium $3,800) */}
        <PricingSection onSelectPackage={(pkg) => handleOpenBooking(pkg)} />

        {/* 6. Proof / Results section (commercial signals, case teardowns, testimonials) */}
        <ProofSection onOpenBooking={() => handleOpenBooking('Strategy Session')} />

        {/* 7. About the founder (Rocky Jacob, India cost leverage, photo placeholder) */}
        <AboutFounderSection onOpenBooking={() => handleOpenBooking('20-min Founder Call with Rocky')} />

        {/* 8. Final CTA section */}
        <FinalCTA onOpenBooking={() => handleOpenBooking('Final CTA Strategy Call')} />
      </main>

      {/* 9. Clean Modern Footer */}
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

export default App;
