import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { ProblemSection } from './components/ProblemSection';
import { SystemSection } from './components/SystemSection';
import { PipelineEngine } from './components/PipelineEngine';
import { FounderPositioning } from './components/FounderPositioning';
import { BannerShowcase } from './components/BannerShowcase';
import { CredibilitySection } from './components/CredibilitySection';
import { WinsProofSection } from './components/WinsProofSection';
import { CustomerImpactSection } from './components/CustomerImpactSection';
import { PipelineAudit } from './components/PipelineAudit';
import { WhoForSection } from './components/WhoForSection';
import { WhoNotForSection } from './components/WhoNotForSection';
import { ServicePackages } from './components/ServicePackages';
import { ProcessSection } from './components/ProcessSection';
import { WeeklyReporting } from './components/WeeklyReporting';
import { CRMKanban } from './components/CRMKanban';
import { FollowPlaybook } from './components/FollowPlaybook';
import { TestimonialsCaseStudies } from './components/TestimonialsCaseStudies';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { LeadQualificationModal } from './components/LeadQualificationModal';
import { Footer } from './components/Footer';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>();

  // Smooth Scrolling physics
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
    <div className="min-h-screen bg-[#080A0C] text-white flex flex-col font-sans selection:bg-[#B8FF3D]/20 selection:text-[#B8FF3D] relative">
      
      {/* Dynamic SEO & AEO JSON-LD Schema Metadata */}
      <SEOHead />

      {/* Global Navbar */}
      <Navbar 
        onOpenAudit={handleOpenAuditScroll} 
        onOpenStrategyCall={() => handleOpenStrategyCall('General Strategy Call')} 
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Section 5 & 6: Hero & Pipeline Animation */}
        <Hero 
          onOpenAudit={handleOpenAuditScroll} 
          onOpenStrategyCall={() => handleOpenStrategyCall('General Strategy Call')} 
        />

        {/* Section 7: Hero Trust Strip */}
        <TrustMarquee />

        {/* Section 8: Problem Section */}
        <ProblemSection />

        {/* Section 9: The ACQSA AI System (12-Step Operating System) */}
        <SystemSection />

        {/* Section 10: Interactive Pipeline Engine */}
        <PipelineEngine />

        {/* Section 11: Founder Profile Positioning Before vs After */}
        <FounderPositioning />

        {/* Section 12: LinkedIn Banner Showcase (1584 x 396 px) */}
        <BannerShowcase />

        {/* Section 13: Founder Credibility Section */}
        <CredibilitySection />

        {/* Section 14 & 15: Wins & Metrics Section */}
        <WinsProofSection />

        {/* Section 16: Customer Impact Framework */}
        <CustomerImpactSection />

        {/* Section 17: Interactive 7-Question LinkedIn Pipeline Audit */}
        <PipelineAudit onAuditSubmitted={(data) => console.log('Audit submitted:', data)} />

        {/* Section 18: Who This Is For */}
        <WhoForSection />

        {/* Section 19: Who This Is NOT For */}
        <WhoNotForSection />

        {/* Section 20: Service Model Packages */}
        <ServicePackages onDiscussBusiness={(pkg) => handleOpenStrategyCall(pkg)} />

        {/* Section 21: Implementation Roadmap Process */}
        <ProcessSection />

        {/* Section 22: Weekly Reporting & Illustrative Dashboard */}
        <WeeklyReporting />

        {/* Section 23: CRM Kanban Visualization */}
        <CRMKanban />

        {/* Section 24: Follow The Playbook / Content Section */}
        <FollowPlaybook />

        {/* Section 25 & 26: Proof, Testimonials & Case Teardowns */}
        <TestimonialsCaseStudies />

        {/* Section 27: Honest B2B Founder FAQs */}
        <FAQSection />

        {/* Section 28 & 30: Final CTA */}
        <FinalCTA 
          onOpenAudit={handleOpenAuditScroll} 
          onOpenStrategyCall={() => handleOpenStrategyCall('Final CTA Strategy Call')} 
        />
      </main>

      {/* Global Footer */}
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
