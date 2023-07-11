/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'mossgreen':'#688848',
      'olive-black':'#212A16',
    },
    fontFamily:{
      outfit: ['Outfit', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

