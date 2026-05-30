/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Butter & Ink palette — light, playful, classy.
        ivory: {
          50: '#FFFDF7',
          100: '#FFFAF0', // page background
          200: '#FBF3E0',
          300: '#F4E6C7',
        },
        butter: {
          50: '#FEF8E0',
          100: '#FCEDB7',
          200: '#F9DC78',
          300: '#F5C94B',
          400: '#F2B441', // primary brand
          500: '#E29A1F',
          600: '#B97812',
        },
        rose: {
          50: '#FFF1F3',
          100: '#FFDDE3',
          200: '#FBC0CB',
          300: '#F7A3B5',
          400: '#F38BA0', // secondary brand
          500: '#E26882',
          600: '#C24A66',
        },
        ink: {
          50: '#F1F2F5',
          200: '#A9B0BF',
          400: '#5F6781',
          600: '#384765',
          700: '#27375A',
          800: '#1F2C49',
          900: '#1B2A41', // primary text
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      animation: {
        'float-slow': 'float 12s ease-in-out infinite',
        'wiggle': 'wiggle 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, -30px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 24px -8px rgba(27, 42, 65, 0.08)',
        'lift': '0 12px 32px -12px rgba(242, 180, 65, 0.35)',
        'rose-lift': '0 12px 32px -12px rgba(243, 139, 160, 0.35)',
      },
    },
  },
  plugins: [],
}
