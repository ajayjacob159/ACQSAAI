import React, { useEffect } from 'react';

export const SEOHead: React.FC = () => {
  useEffect(() => {
    // Add MedicalOrganization & SoftwareApplication JSON-LD Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalOrganization",
          "@id": "https://www.acqsaai.com/#organization",
          "name": "ACQSA AI",
          "url": "https://www.acqsaai.com",
          "logo": "https://www.acqsaai.com/logo.jpg",
          "description": "Intelligent voice, WhatsApp, clinical documentation, TPA and hospital workflow automation solutions for modern healthcare institutions.",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-80-6900-8800",
            "contactType": "enterprise sales desk",
            "email": "contact@acqsa.ai",
            "areaServed": "IN",
            "availableLanguage": ["en", "te", "hi", "ta", "kn", "mr"]
          }
        },
        {
          "@type": "SoftwareApplication",
          "@id": "https://www.acqsaai.com/#software",
          "name": "ACQSA AI Healthcare Operating System",
          "operatingSystem": "Web, Android, iOS, Windows, EMR, HIS",
          "applicationCategory": "HealthApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1280"
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.acqsaai.com/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is ACQSA AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ACQSA AI is an enterprise healthcare artificial intelligence platform providing vernacular Voice AI agents, WhatsApp OPD appointment booking, ClinScribe discharge summary drafting, and TPA pre-authorization automation for hospitals."
              }
            },
            {
              "@type": "Question",
              "name": "Does ACQSA AI integrate with hospital HIS and EMR systems?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, ACQSA AI connects directly to major hospital information systems (HIS) and electronic medical record (EMR) databases via secure APIs and legacy software RPA agents."
              }
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};
