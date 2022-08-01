/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.js",
    "./src/components/**/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: '#7FFFD4',
        },
      },
    },
  },
  plugins: [],
}
