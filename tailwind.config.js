/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_blue: {
          100: "#122069",
          200: "#0420B2",
        },
      },
      fontFamily: {
        primary: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
