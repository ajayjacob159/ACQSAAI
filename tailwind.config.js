/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020103', // Deep midnight black
          900: '#040810',
          850: '#071621',
          800: '#09242A',
          700: '#0d323a',
          600: '#144651'
        },
        neon: {
          pink: '#F13DE8',   // High-voltage neon magenta
          cyan: '#00F0FF',   // High-voltage neon cyan
          aqua: '#20D6C7',   // Medical aqua
          green: '#6dffb6',  // Electric clinical green
          purple: '#8B7CFF', // Deep electric violet
          blue: '#327DF5'    // Electric blue
        },
        aqua: {
          DEFAULT: '#20D6C7',
          glow: 'rgba(32, 214, 199, 0.35)',
          light: '#00F0FF',
          green: '#6dffb6',
          purple: '#8B7CFF'
        },
        slate: {
          950: '#091B22',
          400: '#89A3AA',
          100: '#F5FAF8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'Plus Jakarta Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        jura: ['Jura', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 25s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'sonar': 'sonar 3s ease-out infinite',
        'rail-scroll': 'railScroll 22s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        railScroll: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' }
        },
        sonar: {
          '0%': { transform: 'scale(0.75)', opacity: '0' },
          '15%': { opacity: '0.7' },
          '100%': { transform: 'scale(4.2)', opacity: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(32, 214, 199, 0.3)' },
          '100%': { boxShadow: '0 0 45px rgba(241, 61, 232, 0.6)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'acqsa-gradient': 'linear-gradient(135deg, #20D6C7 0%, #00F0FF 40%, #F13DE8 80%, #8B7CFF 100%)',
        'adrenaline-gradient': 'linear-gradient(135deg, #F13DE8 0%, #00F0FF 50%, #6dffb6 100%)',
      }
    },
  },
  plugins: [],
}
