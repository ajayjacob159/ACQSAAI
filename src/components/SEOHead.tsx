import React, { useEffect } from 'react';

export const SEOHead: React.FC = () => {
  useEffect(() => {
    // Set document title & meta description matching ACQSA AI B2B Multichannel OS
    document.title = "ACQSA AI – B2B Multichannel Lead Generation Agency & Demand OS";

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.acqsaai.com/#organization",
          "name": "ACQSA AI",
          "url": "https://www.acqsaai.com",
          "logo": "https://www.acqsaai.com/logo.png",
          "description": "We build multichannel acquisition systems that deliver consistent, high-quality leads from cold email, LinkedIn, social media, and outbound. Grow your brand while keeping your calendar full of qualified B2B sales calls.",
          "knowsAbout": [
            "B2B Lead Generation",
            "Multichannel Outbound Systems",
            "Cold Email Infrastructure",
            "LinkedIn Demand Generation",
            "Target Account Research"
          ]
        },
        {
          "@type": "Service",
          "@id": "https://www.acqsaai.com/#service",
          "name": "B2B Multichannel Acquisition & Lead Generation OS",
          "provider": {
            "@id": "https://www.acqsaai.com/#organization"
          },
          "serviceType": "Multichannel Outbound Sales Pipeline System",
          "areaServed": "Global",
          "description": "Structured 4-step acquisition system combining cold email, LinkedIn outbound, decision-maker research, intent qualification, and direct calendar sales call booking."
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
