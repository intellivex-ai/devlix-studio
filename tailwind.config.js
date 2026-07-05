/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        secondaryBg: '#F8F9FA',
        primaryGreen: '#22C55E',
        accentGreen: '#16A34A',
        dark: '#111111',
        brandText: '#1A1A1A',
        glassBg: 'rgba(255, 255, 255, 0.45)',
        glassBorder: 'rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        editorial: ['Fraunces', 'serif'],
      },
      boxShadow: {
        'premium': '0 8px 32px 0 rgba(0, 0, 0, 0.04)',
        'premium-hover': '0 12px 40px 0 rgba(0, 0, 0, 0.08)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.04)',
        'hard': '4px 4px 0px 0px #111111',
        'hard-hover': '6px 6px 0px 0px #111111',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
