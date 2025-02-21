/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'xs': '3px',
        '2xs': '2px'
      },
      colors: {
        'primary-darker': '#080620',
        'primary-dark': '#0C0930',
        'primary': '#140F50',
        'primary-light':'#433F73',
        'primary-lighter': '#F3F3F6',

        'secondary-darker': '#081D66',
        'secondary-dark': '#0C2B99',
        'secondary': '#1448FF',
        'secondary-light': '#436DFF',
        'secondary-lighter': '#F3F6FF',

        'tertiary-darker': '#63605A',
        'tertiary-dark': '#958F86',
        'tertiary': '#F8EFE0',
        'tertiary-light': '#F9F2E6',
        'tertiary-lighter': '#FFFEFD',

        'accent-darker': '#342B66',
        'accent-dark': '#4F4099',
        'accent': '#836BFF',
        'accent-light': '#9C89FF',
        'accent-lighter': '#F9F8FF',
      }
    },
    fontSize: {
      '2xs': '.5rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  plugins: [],
}

