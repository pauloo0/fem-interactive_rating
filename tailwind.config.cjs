/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'hsl(25, 97%, 53%)',
        light_grey: 'hsl(217, 12%, 63%)',
        medium_grey: 'hsl(216, 12%, 54%)',
        dark_blue: 'hsl(213, 19%, 18%)',
        darker_blue: 'hsl(212, 19%, 13%)',
        very_dark_blue: 'hsl(216, 12%, 8%)',
      },
      fontSize: {
        paragraph: '15px',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
