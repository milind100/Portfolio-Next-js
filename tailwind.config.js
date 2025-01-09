/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Centra: ["Centra", "sans-serif"],
      },
      colors: {
        rorange: "#ec8a60",
        orange: "#FCA61F",
        black: "#0d2137",
        gray: "#788097",
        blue: "#2E77AE",
        whiten: "#E0EAF5",
      },
      boxShadow: {
        boxShadow: "0px 19px 60px rgb(0 0 0 / 8%)",
        orangeCard: "rgba(252, 166, 31, 0.45)",
        smboxShadow: "-79px 51px 60px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
