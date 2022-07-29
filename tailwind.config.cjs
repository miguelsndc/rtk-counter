/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
    screens: {
      xs: '512px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
