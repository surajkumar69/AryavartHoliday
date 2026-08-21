/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0e2417',      // Deep forest dark green
          forest: '#1b3b2b',    // Primary deep forest green
          moss: '#2d543e',      // Vibrant moss green
          olive: '#3e6346',     // Elegant olive tone
          cream: '#fcfaf4',     // Off-white luxury background
          sand: '#f4efe4',      // Soft warm sand
          warm: '#e6ded0',      // Neutral accent warm beige
          gold: '#c5a059',      // Subtle golden accent
          goldLight: '#e5ca8f', // Soft gold highlight
          brown: '#5c4033',     // Earthy brown accent
          textDark: '#1a221d',  // Rich charcoal text
          textMuted: '#586b5e'  // Subtle muted green text
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-lg': '0 20px 40px -15px rgba(27, 59, 43, 0.08)',
        'luxury': '0 30px 60px -12px rgba(14, 36, 23, 0.15)',
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
