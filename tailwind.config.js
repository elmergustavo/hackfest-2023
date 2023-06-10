/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        Figtree: ['Figtree', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF6A38',
          100: '#FE4311',
          200: '#EF2907',
        },
        secondary: {
          DEFAULT: '#3A3042',
          100: '#473A52',
          200: '#534262',
        }
      },
    },
  },
  plugins: [],
};
