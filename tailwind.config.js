/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Bebas Neue"', "sans-serif"],
        body: ["Inter", "sans-serif"],
        oxanium: ["Oxanium", "sans-serif"],
      },
      colors: {
        brand: {
          "brand-red": "#E11B22",
          "brand-dark": "#121212",
          "brand-gray": "#1E1E1E",
        },
      },
    },
  },
  plugins: [],
};
