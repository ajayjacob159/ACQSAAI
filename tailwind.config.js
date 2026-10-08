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
          900: '#1E293B',
          800: '#334155',
          700: '#475569',
        },
        hotPink: '#FF1B6B',
        electricViolet: '#7C3AED',
        oceanBlue: '#0077FF',
        emeraldAccent: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'Poppins', 'sans-serif'],
        heading: ['Poppins', 'Plus Jakarta Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(135deg, #FF1B6B 0%, #0077FF 50%, #7C3AED 100%)',
      }
    },
  },
  plugins: [],
}
