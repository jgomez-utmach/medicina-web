/** @type {import('tailwindcss').Config} */
//const colors = require('tailwindcss/colors');
//colors: { ...colors },
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/layout/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#080aa3',
      secondary: '#e6197f',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#080aa3',
      secondary: '#e6197f',
      blanco: '#ffffff',
      gris: '#1b1b1b',
    }),
    extend: {
      gridTemplateColumns: {
        nav: 'repeat(auto-fit, minmax(min-content, 1fr))',
      },
    },
    fontFamily: {
      oswald: ['Oswald'],
    },
  },
};
