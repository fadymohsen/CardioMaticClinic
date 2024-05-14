/** @type {import('tailwindcss').Config} */
// tailwind.config.js

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a8efd",
        secondary: "#54de54",
      },
    },
  },
  plugins: [],
});
