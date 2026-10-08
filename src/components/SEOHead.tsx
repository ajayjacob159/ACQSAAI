import React, { useEffect } from 'react';

export const SEOHead: React.FC = () => {
  useEffect(() => {
    // Set document title & meta description
    document.title = "ACQSA AI | LinkedIn Demand Generation for B2B Founders";

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.acqsaai.com/#organization",
          "name": "ACQSA AI",
          "url": "https://www.acqsaai.com",
          "logo": "https://www.acqsaai.com/logo.jpg",
          "description": "ACQSA AI helps founder-led B2B companies turn LinkedIn into a predictable source of qualified sales conversations through ICP targeting, account research, decision-maker outreach and structured follow-up.",
          "knowsAbout": [
            "LinkedIn Lead Generation",
            "B2B Demand Generation",
            "Founder-Led Sales",
            "Target Account Research",
            "B2B Outbound Strategy"
          ]
        },
        {
          "@type": "Service",
          "@id": "https://www.acqsaai.com/#service",
          "name": "Founder-Led LinkedIn Demand Generation",
          "provider": {
            "@id": "https://www.acqsaai.com/#organization"
          },
          "serviceType": "B2B Sales Pipeline & LinkedIn Outbound System",
          "areaServed": "Global",
          "description": "Structured 12-step system covering ICP definition, target accounts, decision-maker research, founder positioning, manual conversation sequences, qualification and sales call booking."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.acqsaai.com/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you manage our entire LinkedIn account?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. ACQSA AI builds a founder-led demand-generation system focused on ICP targeting, decision-maker research, conversation sequences, and qualification to book sales calls—not generic social media management."
              }
            },
            {
              "@type": "Question",
              "name": "Do you guarantee leads?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. We focus on building a predictable, repeatable sales pipeline system. Commercial outcomes depend on ICP fit, deal size, market timing, and message relevance."
              }
            },
            {
              "@type": "Question",
              "name": "Do you use automated mass messaging?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. ACQSA AI prioritizes research-backed, account-level manual conversations and personalized follow-ups to avoid spamming target buyers."
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
