/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: '#080A0C',
        cardDark: '#101318',
        borderDark: '#20242A',
        textSecondary: '#A7ADB5',
        limeAccent: '#B8FF3D',
        hotPink: '#FF1B6B',
        electricViolet: '#7C3AED',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'Geist', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s infinite linear',
        'flow-line': 'flowLine 3s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(184, 255, 61, 0.15)' },
          '100%': { boxShadow: '0 0 35px rgba(184, 255, 61, 0.35)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        flowLine: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' }
        }
      },
    },
  },
  plugins: [],
}
