/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mustard: {
          50: "#FAF6EE",
          100: "#F3E8C9",
          200: "#E8CF8A",
          300: "#D4A017",
          400: "#B8860B",
          500: "#9A6F09",
          600: "#7A5807",
          700: "#5C4205",
          800: "#3E2D03",
          900: "#231A02",
        },
        charcoal: {
          50: "#F5F4F3",
          100: "#E5E3E0",
          400: "#5C5853",
          600: "#3A3733",
          800: "#2A2A28",
          900: "#1B1A18",
        },
        herbal: {
          50: "#EFF6E5",
          400: "#6FA32E",
          600: "#3B6D11",
          800: "#27500A",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
