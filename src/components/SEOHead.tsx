import React, { useEffect } from 'react';

export const SEOHead: React.FC = () => {
  useEffect(() => {
    document.title = "Rocky Jacob | Solo LinkedIn Founder Branding & Executive Ghostwriting | ACQSA AI";

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "name": "Rocky Jacob",
          "jobTitle": "Solo Executive Ghostwriter & Founder Branding Strategist",
          "worksFor": {
            "@type": "Organization",
            "name": "ACQSA AI",
            "url": "https://www.acqsaai.com",
            "logo": "https://www.acqsaai.com/logo.png"
          },
          "description": "LinkedIn that drives pipeline, not just likes. Executive ghostwriting and category positioning for US and UK growth-stage B2B SaaS founders (Series A–B)."
        },
        {
          "@type": "Service",
          "name": "Solo Founder LinkedIn Branding & Executive Ghostwriting",
          "provider": {
            "@type": "Organization",
            "name": "ACQSA AI"
          },
          "serviceType": "Executive Ghostwriting & LinkedIn Demand Generation",
          "areaServed": ["United States", "United Kingdom", "Global"],
          "offers": [
            {
              "@type": "Offer",
              "name": "Paid Pilot (4-6 weeks)",
              "price": "1500",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "name": "Core Retainer",
              "price": "2800",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "name": "Premium Retainer",
              "price": "3800",
              "priceCurrency": "USD"
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
