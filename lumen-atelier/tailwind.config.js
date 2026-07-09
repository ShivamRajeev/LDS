/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#070707",
          charcoal: "#141414",
          ivory: "#f4e6c7",
          cream: "#f8edd8",
          gold: "#d2a956",
          goldMuted: "#c79a43",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Manrope", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        luxe: "0 14px 48px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};

