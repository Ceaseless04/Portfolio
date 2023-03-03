/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // added just-in-time mode, making the builds faster
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
