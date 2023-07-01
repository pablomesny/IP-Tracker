/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-pattern': "url('/background/pattern-bg-desktop.png')"
      },
      colors: {
        'very-dark-gray': '#2b2b2b',
        'dark-gray': '#969696',
      },
      fontSize: {
        '2xs': '.625rem',
      }
    },
  },
  plugins: [],
}