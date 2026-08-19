import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScrollRevealSection } from './components/ScrollRevealSection';
import { TrustMarquee } from './components/TrustMarquee';
import { ProductsOverview } from './components/ProductsOverview';
import { YCInnovations } from './components/YCInnovations';
import { AppConsole } from './components/AppConsole';
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
import { MobileBottomNav } from './components/MobileBottomNav';
import { PWAInstallBanner } from './components/PWAInstallBanner';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoModalType, setDemoModalType] = useState<string | undefined>('live_demo');

  // Initialize Lenis 60fps smooth scrolling physics
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
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col font-sans selection:bg-[#00C2B3]/20 selection:text-[#0077FF] relative">
      
      {/* PWA 1-Click App Installation Banner */}
      <PWAInstallBanner />

      {/* Global Navbar */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Section 1: Hero with 3D WebGL Particle Sphere */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        {/* 3D Scroll-Pinned Card Reveal */}
        <ScrollRevealSection />

        {/* Section 2: Trust & Value Strip */}
        <TrustMarquee />

        {/* Section 3: Y Combinator Healthcare AI Innovations Suite */}
        <YCInnovations />

        {/* Section 4: Native Android Mobile Web App Console */}
        <AppConsole />

        {/* Section 5: Two Core AI Products Overview */}
        <ProductsOverview onOpenDemoModal={handleOpenDemoModal} />

        {/* Section 6: Vernacular AI Experience */}
        <VernacularExperience />

        {/* Section 7: OPD Booking Journey */}
        <OPDBookingJourney />

        {/* Section 8: WhatsApp Agent Demo */}
        <WhatsAppDemo />

        {/* Section 9: Auto-Scribe Experience */}
        <AutoScribeDemo />

        {/* Section 10: TPA Workflow */}
        <TPAWorkflow />

        {/* Section 11: Designed for Every Hospital Team */}
        <RoleBenefits />

        {/* Section 12: Integrations Orbit */}
        <IntegrationsMap />

        {/* Section 13: Analytics Dashboard */}
        <AnalyticsDashboard />

        {/* Section 14: Security & Responsible AI */}
        <SecuritySection />

        {/* Section 15: Interactive ROI Calculator */}
        <ROICalculator />

        {/* Section 16: Implementation Process */}
        <ImplementationProcess />

        {/* Section 17: Use Cases Grid */}
        <UseCasesGrid />

        {/* Section 18: FAQ Accordion */}
        <FAQAccordion />

        {/* Section 19: Final CTA & Demo Request */}
        <FinalCTA onOpenDemoModal={handleOpenDemoModal} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Native Mobile App Bottom Navigation Bar (Visible on mobile screens) */}
      <MobileBottomNav onOpenDemoModal={handleOpenDemoModal} />

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
