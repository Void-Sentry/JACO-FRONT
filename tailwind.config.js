/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      primary: '#385E72',
      secondary: '#6AABD2',
      tertiary: '#B7CFDC',
      quartenary: '#D9E4EC',
      success: '#4CAF50',
      warning: '#FFEB3B',
      error: '#F44336',
      black: '#385E72',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        svg: "url('/static/ovini.svg')"
      }
    },
  },
  plugins: [
    require('tailwindcss-hero-patterns'),
  ],
}

// background-color: #d9e4ec;
// background-image: ;
