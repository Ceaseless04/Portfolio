// /** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: 'jit', // added just-in-time mode, making the builds faster
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'a': ['League Spartan Nav Bar'],
    },
  },
  plugins: [],
});
