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
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mmd: "860px",
      // => @media (min-width: 860px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        Centra: ["Centra", "sans-serif"],
      },
      colors: {
        rorange: "#ec8a60",
        orange: "#fd7e14",
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
  darkMode: "class",
};
