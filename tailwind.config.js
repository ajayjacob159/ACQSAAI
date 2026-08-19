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
          950: '#0F172A',
          900: '#091B22',
          850: '#1E293B',
          800: '#334155',
          700: '#475569',
          600: '#64748B'
        },
        aqua: {
          DEFAULT: '#00C2B3',
          glow: 'rgba(0, 194, 179, 0.25)',
          light: '#0077FF',
          green: '#10B981',
          purple: '#7C3AED'
        },
        slate: {
          950: '#0F172A',
          900: '#1E293B',
          800: '#334155',
          700: '#475569',
          600: '#64748B',
          500: '#94A3B8',
          400: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50:  '#F8FAFC'
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
          '15%': { opacity: '0.6' },
          '100%': { transform: 'scale(3.8)', opacity: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(0, 194, 179, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(0, 119, 255, 0.4)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'acqsa-gradient': 'linear-gradient(135deg, #00C2B3 0%, #0077FF 50%, #7C3AED 100%)',
        'light-hero-atmosphere': 'radial-gradient(circle at 50% 35%, rgba(0,194,179,0.12), transparent 45%), radial-gradient(circle at 75% 25%, rgba(0,119,255,0.08), transparent 45%), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      }
    },
  },
  plugins: [],
}
