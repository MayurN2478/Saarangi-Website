/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          darkest: '#1E100B',
          brown: '#3B2118',
          deep: '#2D1811',
          maroon: '#642D2B',
          cream: '#E9DCC7',
          gold: '#C49A55',
          goldLight: '#E0B979',
          goldDark: '#9E7637',
          ivory: '#F7F1E7',
          sand: '#ECE1D1',
          terracotta: '#8C3826',
          charcoal: '#221915'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      },
      boxShadow: {
        'vintage': '0 10px 30px -5px rgba(59, 33, 24, 0.15)',
        'vintage-lg': '0 20px 40px -10px rgba(59, 33, 24, 0.25)',
        'vintage-glow': '0 0 25px rgba(196, 154, 85, 0.35)',
      }
    },
  },
  plugins: [],
}
