/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.jsx', './component/**/*.jsx', './styles/**/*.css'],
  darkMode: 'media',
  theme: {
    minHeight: {
      '25%': '25%',
      '50%': '50%',
      '75%': '75%',
      '100%': '100%',
      '80%': '80%',
      '83%': '83%',
      '84%': '84%',
      '85%': '85%',
      '86%': '86%',
      '90%': '90%',
    },
    maxHeight: {
      '20%': '20%',
      '25%': '25%',
      '50%': '50%',
      '75%': '75%',
      '100%': '100%',
      '80%': '80%',
      '83%': '83%',
      '84%': '84%',
      '85%': '85%',
      '86%': '86%',
      '90%': '90%',
    },
    fontSize: {
      '3xs': '0.5rem',
      '2xs': '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      // '2xl': '1.563rem',
      // '3xl': '1.953rem',
      // '4xl': '2.441rem',
      // '5xl': '3.052rem',
    },
    extend: {
      colors: {
        regalGray: '#243c5a',
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              // 'code::before': {
              //   display: 'none',
              // },
              // 'code::after': {
              //   display: 'none',
              // },
              // 'blockquote p:first-of-type::before': {
              //   display: 'none',
              // },
              // 'blockquote p:last-of-type::after': {
              //   display: 'none',
              // },
              // "pre[class*='language-']": {
              //   fontSize: '14px !important',
              // },
              // "code[class*='language-']": {
              //   fontSize: '14px !important',
              // },
              // 'p:first-child > img': {
              //   marginTop: 0,
              //   boxShadow: '0 10px 14px rgba(0, 0, 0, 0.2)',
              // },
              // 'p, li': {
              //   textAlign: 'justify',
              // },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      margin: ['last'],
      // dark mode
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
