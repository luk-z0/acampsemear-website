/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'mossgreen': '#688848',
      'olive-black': '#212A16',
      'light-khaki': '#E9F4A6',
      'palatinate-blue': '#2B27DA',
      'halloween-orange': '#F36122',
      'shadow-black': '#FFFFFF',
      red: {
        50: '#fdf2f2',
        100: '#fde8e8',
        200: '#fbd5d5',
        300: '#f8b4b4',
        400: '#f98080',
        500: '#f05252',
        600: '#e02424',
        700: '#c81e1e',
        800: '#9b1c1c',
        900: '#771d1d',
      },
      green: {
        50: '#f3faf7',
        100: '#def7ec',
        200: '#bcf0da',
        300: '#84e1bc',
        400: '#31c48d',
        500: '#0e9f6e',
        600: '#057a55',
        700: '#046c4e',
        800: '#03543f',
        900: '#014737',
      },
      blue: {
        50: '#ebf5ff',
        100: '#e1effe',
        200: '#c3ddfd',
        300: '#a4cafe',
        400: '#76a9fa',
        500: '#3f83f8',
        600: '#1c64f2',
        700: '#1a56db',
        800: '#1e429f',
        900: '#233876',
      },
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#f9fafb',
        100: '#f4f5f7',
        200: '#e5e7eb',
        300: '#d2d6dc',
        400: '#9fa6b2',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#252f3f',
        900: '#161e2e',
      },
      orange: {
        100: '#FFD699',
        200: '#FFB266',
        300: '#FF9933',
        400: '#FF8000',
        500: '#FF6600', 
        600: '#E65C00',
        700: '#CC5200',
        800: '#B24800',
        900: '#993D00',
      },
      yellow: {
        100: '#FFF4CC',
        200: '#FFE699',
        300: '#FFD266',
        400: '#FFC833',
        500: '#FFBF00', 
        600: '#E6AB00',
        700: '#CC9900',
        800: '#B38600',
        900: '#996600',
      },
    },
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
      pathway: ['Pathway Gothic One', 'sans-serif'],
    },
    letterSpacing: {
      '5': '0.5em',
      '6': '0.6em',
      '7': '0.7em',
      '8': '0.8em',
    },
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-15px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' }
        }
      },
      animation: {
        'slide-down': 'slideDown 0.2s linear'
      },
      boxShadow: {
        custom1: 'box-shadow: -1px 4px 4px 6px rgba(0, 0, 0, 0.35);'
      },
      screens: {
        'dim': { 'max': '639px', 'min': '200px' }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animated'),
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-transparent': {
          'background-color': 'rgba(0, 0, 0, 0)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],

}