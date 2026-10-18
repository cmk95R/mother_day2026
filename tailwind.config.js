/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastel: "#F8C8DC",
        intenso: "#E75480",
        bordo: "#722F37",
        crema: "#FFF7F0",
        dorado: "#D4AF37",
        noche: "#1A0910",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        glow: "0 0 25px rgba(231, 84, 128, 0.45)",
        gold: "0 0 30px rgba(212, 175, 55, 0.35)",
      }
    },
  },
  plugins: [],
};
