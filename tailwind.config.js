/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", 
            "./src/**/*/.{jsx,tsx,js,ts}",
            "./src/app.jsx",
            "./src/main.jsx",
            "./src/components/main.jsx",
            "./src/components/navbar.jsx",
            "./src/components/person.jsx",
            "./src/components/maps.jsx",
            "./src/components/weather.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
});

