/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // "./src/**/**/*.{js,ts,jsx,tsx}",
    "*",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        "primary-light": "#3730a3",
      },
      // colors: {
      //   primary: "#106976",
      //   "primary-light": "#57969F",
      //   secondary: "#0D0F0E",
      // },
      fontFamily: {
        allison: ['"Allison"', "cursive"],
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
