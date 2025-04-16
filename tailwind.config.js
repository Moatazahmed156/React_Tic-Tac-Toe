// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient":
          "linear-gradient(40deg, #ea00ff, #ea00ff, #03d5ff, #03d5ff)",
      },
      keyframes: {
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-in-from-left":
          "slide-in-from-left 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards",
        "pop-in": "pop-in 0.5s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards",
      },
    },
  },
  plugins: [],
};
