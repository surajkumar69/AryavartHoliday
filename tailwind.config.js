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
          cream: '#fdfbf7',       // Main warm cream background
          ivory: '#fcfaf4',       // Soft off-white luxury card bg
          beige: '#f5efe6',       // Neutral warm beige
          sand: '#eae0d0',        // Light sand border & accents
          sage: '#8a9a86',        // Subtle light sage olive accent
          sageLight: '#e9efe9',   // Light sage highlight
          sageDark: '#5a6956',    // Dark sage text accent
          charcoal: '#222222',    // Primary rich dark text
          mutedText: '#666666',   // Subtitle text color
          gold: '#c5a059',        // Golden touch accent
          goldLight: '#e5ca8f',   // Light gold accent
          textDark: '#222222',    // Charcoal text
          textMuted: '#666666'    // Muted text
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'luxury': '0 25px 50px -12px rgba(138, 154, 134, 0.12)',
        'sticky': '0 10px 30px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
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
