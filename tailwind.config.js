module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['"Anivers_Regular"','"Helvetica Neue"','Lato','sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
