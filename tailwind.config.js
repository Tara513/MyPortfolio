/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0",
        // HTP colors
        htpBordeaux: "#722f37",
        htpWhite: "#ffffff",
        // ColocMatch colors
        colocPink: "#ff69b4",
        colocWhite: "#ffffff",
        // Carrefour colors
        carrefourBlue: "#004e9e",
        carrefourRed: "#e30613",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 