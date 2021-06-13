module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      red: '#F3353E',
      blue: '#000F26',
    }),

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
