import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScrollRevealSection } from './components/ScrollRevealSection';
import { TrustMarquee } from './components/TrustMarquee';
import { ProductsOverview } from './components/ProductsOverview';
import { VernacularExperience } from './components/VernacularExperience';
import { OPDBookingJourney } from './components/OPDBookingJourney';
import { WhatsAppDemo } from './components/WhatsAppDemo';
import { AutoScribeDemo } from './components/AutoScribeDemo';
import { TPAWorkflow } from './components/TPAWorkflow';
import { RoleBenefits } from './components/RoleBenefits';
import { IntegrationsMap } from './components/IntegrationsMap';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { SecuritySection } from './components/SecuritySection';
import { ROICalculator } from './components/ROICalculator';
import { ImplementationProcess } from './components/ImplementationProcess';
import { UseCasesGrid } from './components/UseCasesGrid';
import { FAQAccordion } from './components/FAQAccordion';
import { FinalCTA } from './components/FinalCTA';
import { DemoModal } from './components/DemoModal';
import { Footer } from './components/Footer';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoModalType, setDemoModalType] = useState<string | undefined>('live_demo');

  // Initialize Lenis 60fps smooth scrolling physics (lialive-inspired)
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

  const handleOpenDemoModal = (type?: string) => {
    setDemoModalType(type);
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#040810] text-white flex flex-col font-sans selection:bg-[#20D6C7]/30 selection:text-[#53CFFF]">
      
      {/* Global Navbar */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Section 1: Hero with 3D WebGL Particle Sphere */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        {/* LIA-Inspired Scroll-Pinned 3D Feature Card Reveal */}
        <ScrollRevealSection />

        {/* Section 2: Trust & Value Strip */}
        <TrustMarquee />

        {/* Section 3: Two Core AI Products */}
        <ProductsOverview onOpenDemoModal={handleOpenDemoModal} />

        {/* Section 4: Vernacular AI Experience */}
        <VernacularExperience />

        {/* Section 5: OPD Booking Journey */}
        <OPDBookingJourney />

        {/* Section 6: WhatsApp Agent Demo */}
        <WhatsAppDemo />

        {/* Section 7: Auto-Scribe Experience */}
        <AutoScribeDemo />

        {/* Section 8: TPA Workflow */}
        <TPAWorkflow />

        {/* Section 9: Designed for Every Hospital Team */}
        <RoleBenefits />

        {/* Section 10: Integrations Orbit */}
        <IntegrationsMap />

        {/* Section 11: Analytics Dashboard */}
        <AnalyticsDashboard />

        {/* Section 12: Security & Responsible AI */}
        <SecuritySection />

        {/* Section 13: Interactive ROI Calculator */}
        <ROICalculator />

        {/* Section 14: Implementation Process */}
        <ImplementationProcess />

        {/* Section 15: Use Cases Grid */}
        <UseCasesGrid />

        {/* Section 16: FAQ Accordion */}
        <FAQAccordion />

        {/* Section 17: Final CTA & Demo Request */}
        <FinalCTA onOpenDemoModal={handleOpenDemoModal} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialType={demoModalType}
      />

    </div>
  );
}

export default App;
