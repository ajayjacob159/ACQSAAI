import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CountryPricing {
  code: string;
  name: string;
  flag: string;
  currency: string;
  symbol: string;
  pilotPrice: string;
  corePrice: string;
  premiumPrice: string;
  note: string;
}

export const COUNTRIES: CountryPricing[] = [
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    currency: 'USD',
    symbol: '$',
    pilotPrice: '$1,500',
    corePrice: '$2,800',
    premiumPrice: '$3,800',
    note: 'US & Global Standard',
  },
  {
    code: 'UK',
    name: 'United Kingdom',
    flag: '🇬🇧',
    currency: 'GBP',
    symbol: '£',
    pilotPrice: '£1,200',
    corePrice: '£2,250',
    premiumPrice: '£3,000',
    note: 'UK & London SaaS',
  },
  {
    code: 'EU',
    name: 'European Union',
    flag: '🇪🇺',
    currency: 'EUR',
    symbol: '€',
    pilotPrice: '€1,400',
    corePrice: '€2,600',
    premiumPrice: '€3,500',
    note: 'European Tech Ecosystem',
  },
  {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    currency: 'INR',
    symbol: '₹',
    pilotPrice: '₹1,25,000',
    corePrice: '₹2,30,000',
    premiumPrice: '₹3,15,000',
    note: 'Domestic Founder Leverage',
  },
  {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    currency: 'CAD',
    symbol: 'CA$',
    pilotPrice: 'CA$2,050',
    corePrice: 'CA$3,800',
    premiumPrice: 'CA$5,150',
    note: 'Canadian Tech Hubs',
  },
  {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    currency: 'AUD',
    symbol: 'A$',
    pilotPrice: 'A$2,300',
    corePrice: 'A$4,300',
    premiumPrice: 'A$5,800',
    note: 'Australia & APAC',
  },
];

interface CountryContextType {
  selectedCountry: CountryPricing;
  setCountryByCode: (code: string) => void;
  countries: CountryPricing[];
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing>(COUNTRIES[0]);

  // Try to detect user locale or load from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('acqsa_country');
      if (saved) {
        const found = COUNTRIES.find((c) => c.code === saved);
        if (found) {
          setSelectedCountry(found);
          return;
        }
      }

      // Auto-detect browser timeZone / language if no prior preference
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (timeZone.includes('London') || timeZone.includes('Europe/Belfast')) {
        setSelectedCountry(COUNTRIES[1]); // UK
      } else if (timeZone.includes('Kolkata') || timeZone.includes('Calcutta') || timeZone.includes('Asia/Calcutta')) {
        setSelectedCountry(COUNTRIES[3]); // IN
      } else if (timeZone.includes('Europe')) {
        setSelectedCountry(COUNTRIES[2]); // EU
      } else if (timeZone.includes('Toronto') || timeZone.includes('Vancouver') || timeZone.includes('Montreal')) {
        setSelectedCountry(COUNTRIES[4]); // CA
      } else if (timeZone.includes('Sydney') || timeZone.includes('Melbourne') || timeZone.includes('Brisbane')) {
        setSelectedCountry(COUNTRIES[5]); // AU
      }
    } catch {
      // Default stays US
    }
  }, []);

  const setCountryByCode = (code: string) => {
    const match = COUNTRIES.find((c) => c.code === code);
    if (match) {
      setSelectedCountry(match);
      try {
        localStorage.setItem('acqsa_country', code);
      } catch {
        // Ignore storage errors
      }
    }
  };

  return (
    <CountryContext.Provider value={{ selectedCountry, setCountryByCode, countries: COUNTRIES }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};
