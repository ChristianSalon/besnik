/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#063183",
        primaryLight: "#E6F0FF",
        primaryDark: "#0F1B4C",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
