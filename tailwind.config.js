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
      'light-khaki':'#E9F4A6',
      'palatinate-blue':'#2B27DA',
      'halloween-orange':'#F36122',
      'shadow-black':'#FFFFFF',
    },
    fontFamily:{
      outfit: ['Outfit', 'sans-serif'],
      pathway: ['Pathway Gothic One', 'sans-serif'],
    },
    extend: {
      boxShadow:{
        custom1 : 'box-shadow: -1px 4px 4px 6px rgba(0, 0, 0, 0.35);'
      }      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

}