/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      sm: '520px',
      md: '768px',
      lg: '968px',
      xl: '1440px',
    },
    colors: {
      'dr': '#380F17',
      'mr': '#8F0B13',
      'lr': '#DC2011',
      'l': '#EFDFC5',
      'g': '#252B2B',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    fontFamily: {
      OpenGost: ['OpenGost Type A TT', 'OpenGost Type A TT'],
      sans: ['Roboto', 'Roboto'],
      bebas: ['Bebas', 'Bebas Neue'],
      znikomit: ['ZnikomitNo25', 'ZnikomitNo25'],
    },
    extend: {},
  },
  plugins: [],
}

