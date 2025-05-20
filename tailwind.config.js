const { darkMode } = require('../tailwind.config');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'soft-gold': '#facc15',
        'divine-indigo': '#1e1b4b',
        'divine-purple': '#5b21b6',
      },
      fontFamily: {
        krishna: ['"Tangerine"', '"Gloock"', '"Crimson Pro"', 'serif'],
        ui: ['"Poppins"', '"Inter"', 'sans-serif'],
        tangerine: ['"Tangerine"', 'cursive'],
        parisienne: ['Parisienne', 'cursive'],
        satisfy: ['Satisfy', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class', // Enable dark mode
}