const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue[600],
        background: "#242424",
      },
    },
  },
  plugins: [],
};
