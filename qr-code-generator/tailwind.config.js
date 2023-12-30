/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', "*.html"],
  theme: {
    extend: {
      colors: {
        'cultured-white': '#F2F5F9',
        'royal-blue': '#3662E3',
        'dark-grey': '#111729',
        'light-grey': '#364153',
        'dark-blue': '#4e80ee33',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

