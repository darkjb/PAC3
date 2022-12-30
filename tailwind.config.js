/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      'sans-serif-family': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
      'serif-family': ['"Georgia"', '"Times New Roman"', 'serif'],
    },
    screens: {
      'small': '576px',
      // => @media (min-width: 576px) { ... }

      'medium': '768px',
      // => @media (min-width: 768px) { ... }

      'large': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xxl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '5px',
      md: '6px'
    },
    extend: {
      margin: {
        '10p': '10px',
        '20p': '20px',
        '50p': '50px'
      },
      padding: {
        '5p': '5px'
      }
    },
  },
  plugins: [],
}
