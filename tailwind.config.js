/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#e07a5f",
        secondary: "#81b29a",
        dark: "#3d405b",
        light_yellow: "#f4f1de",
        dark_orange: "#e07a5f",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
