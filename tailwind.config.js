/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mb': {'max': '510px'},
      },
      animation: {
        's-p': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}