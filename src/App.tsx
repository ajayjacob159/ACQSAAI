import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { WhyUsSection } from './components/WhyUsSection';
import { HowWeHelpSection } from './components/HowWeHelpSection';
import { InboundOutboundSystem } from './components/InboundOutboundSystem';
import { ColdEmailInfrastructure } from './components/ColdEmailInfrastructure';
import { NineLinkedInScenarios } from './components/NineLinkedInScenarios';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TestimonialsGrid } from './components/TestimonialsGrid';
import { ROICalculator } from './components/ROICalculator';
import { PipelineAudit } from './components/PipelineAudit';
import { ServicePackages } from './components/ServicePackages';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { LeadQualificationModal } from './components/LeadQualificationModal';
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

  const handleOpenAuditScroll = () => {
    const auditElem = document.getElementById('audit');
    if (auditElem) {
      auditElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsModalOpen(true);
    }
  };

  const handleOpenStrategyCall = (packageTitle?: string) => {
    setSelectedPackage(packageTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#FF1B6B]/20 selection:text-[#FF1B6B] relative">
      
      {/* Dynamic SEO & AEO JSON-LD Schema Metadata */}
      <SEOHead />

      {/* Global Navbar */}
      <Navbar 
        onOpenAudit={handleOpenAuditScroll} 
        onOpenStrategyCall={() => handleOpenStrategyCall('General Strategy Call')} 
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenAudit={handleOpenAuditScroll} 
          onOpenStrategyCall={() => handleOpenStrategyCall('General Strategy Call')} 
        />

        {/* Live Commercial Metrics & Trust Strip */}
        <TrustMarquee />

        {/* Why ACQSA AI? (360-Degree Lead Gen Systems) */}
        <WhyUsSection onBookCall={() => handleOpenStrategyCall('General Strategy Call')} />

        {/* How We Help You ? (5-Step Framework) */}
        <HowWeHelpSection />

        {/* 5-Step Inbound-Led Outbound System */}
        <InboundOutboundSystem />

        {/* Cold Email Deliverability & Technical Infrastructure */}
        <ColdEmailInfrastructure />

        {/* 9 Conversion Triggers That Turn Engagement Into Sales Calls */}
        <NineLinkedInScenarios />

        {/* 6 Real Client Case Studies */}
        <CaseStudiesSection />

        {/* What Our Clients Say (Verified Testimonials from Ogilvy, Philips, Salee, etc.) */}
        <TestimonialsGrid />

        {/* Interactive B2B Multichannel Pipeline & ROI Calculator */}
        <ROICalculator onBookCall={() => handleOpenStrategyCall('ROI Calculator')} />

        {/* Interactive 7-Question Pipeline Audit */}
        <PipelineAudit onAuditSubmitted={(data) => console.log('Audit submitted:', data)} />

        {/* Transparent Service Packages */}
        <ServicePackages onDiscussBusiness={(pkg) => handleOpenStrategyCall(pkg)} />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Final High-Converting CTA */}
        <FinalCTA 
          onOpenAudit={handleOpenAuditScroll} 
          onOpenStrategyCall={() => handleOpenStrategyCall('Final CTA Strategy Call')} 
        />
      </main>

      {/* Global Footer (Featuring ACQSA AI & Trending Now) */}
      <Footer />

      {/* Lead Qualification & Strategy Call Modal */}
      <LeadQualificationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialPackage={selectedPackage} 
      />

    </div>
  );
}

export default App;
