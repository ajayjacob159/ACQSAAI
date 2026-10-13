import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, Check } from 'lucide-react';
import { useCountry } from '../context/CountryContext';

export const CountrySelector: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { selectedCountry, setCountryByCode, countries } = useCountry();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button with Framer Motion hover & tap */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 transition-colors shadow-2xs font-mono text-slate-800 ${
          compact
            ? 'px-2.5 py-1 text-[11px]'
            : 'px-3 py-1.5 text-xs'
        }`}
        aria-label="Select Country & Currency"
      >
        <span className="text-sm leading-none" role="img" aria-label={selectedCountry.name}>
          {selectedCountry.flag}
        </span>
        <span className="font-bold text-slate-900 tracking-tight">
          {selectedCountry.currency}
        </span>
        <span className="text-slate-400 font-normal">
          ({selectedCountry.symbol})
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </motion.div>
      </motion.button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-64 origin-top-right rounded-2xl bg-white border border-slate-200 p-1.5 shadow-xl ring-1 ring-black/5 z-50 text-left focus:outline-none"
          >
            <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                Select Market & Currency
              </span>
              <Globe className="w-3.5 h-3.5 text-slate-400" />
            </div>

            <div className="max-h-72 overflow-y-auto py-1 space-y-0.5">
              {countries.map((country) => {
                const isSelected = country.code === selectedCountry.code;
                return (
                  <motion.button
                    key={country.code}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.1 }}
                    type="button"
                    onClick={() => {
                      setCountryByCode(country.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-colors ${
                      isSelected
                        ? 'bg-slate-950 text-white shadow-xs'
                        : 'hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-base shrink-0" role="img" aria-label={country.name}>
                        {country.flag}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-xs font-poppins font-bold truncate ${
                            isSelected ? 'text-white' : 'text-slate-900'
                          }`}>
                            {country.name}
                          </span>
                          <span className={`text-[10px] font-mono px-1 rounded ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/60 text-slate-600'
                          }`}>
                            {country.currency}
                          </span>
                        </div>
                        <span className={`text-[10px] block truncate font-mono ${
                          isSelected ? 'text-slate-300' : 'text-slate-400'
                        }`}>
                          Pilot {country.pilotPrice} • {country.note}
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-[#FF1B6B] shrink-0 ml-2" />
                    )}
                  </motion.button>
                );
              })}
            </div>

            <div className="px-3 py-1.5 border-t border-slate-100 bg-slate-50/60 rounded-b-xl text-[10px] font-mono text-slate-400 text-center">
              Pricing updates automatically
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
