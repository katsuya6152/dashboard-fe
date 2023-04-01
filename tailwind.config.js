/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      brand: {
        100: '#494d52',
        200: '#bbe159',
        300: '#aacb58',
        400: '#9ab657',
        500: '#8aa156',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
