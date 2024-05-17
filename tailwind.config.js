/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", 
            "./src/**/*.{jsx,tsx,js,ts}",
            "./src/*.{jsx,tsx,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
	      banner: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        'banner': '2px 2px 0.5px rgba(0, 0, 0, 0.6)',
        'bannerlg': '4px 4px 1px rgba(0, 0, 0, 0.6)',
      },
      zIndex: {
        '100': '100',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
});

