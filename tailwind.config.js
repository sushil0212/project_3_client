/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "rotate-360": "rotate360 20s linear infinite",
        "glow-and-move": "glowMove 10s ease-in-out infinite",
        "pulse-on-hover": "pulseHover 0.5s ease-in-out infinite",
      },
      keyframes: {
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        glowMove: {
          "0%, 100%": { transform: "translate(0, 0)", opacity: "1" },
          "50%": { transform: "translate(30px, -30px)", opacity: "0.7" },
        },
        pulseHover: {
          "0%": { transform: "scale(1)", filter: "brightness(100%)" },
          "50%": { transform: "scale(1.2)", filter: "brightness(150%)" },
          "100%": { transform: "scale(1)", filter: "brightness(100%)" },
        },
      },
    },
  },
  plugins: [],
};
