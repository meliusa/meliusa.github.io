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
      },
      screens: {
        "2xl": "1320px",
      },
      // Tambahkan keyframes dan animasi di sini
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
      },
    },
  },
  plugins: [],
};
