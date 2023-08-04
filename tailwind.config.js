const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.purple[600],
        background: "#ebecf0",
        text: "#3f4c5c"
      },
    },
  },
  plugins: [],
};
