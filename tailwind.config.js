// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: "var(--coffee) ",
        cream: "var(--cream)",
        leaf: "var(--leaf)",
        peach: "var(--peach)",
        berry: "var(--berry)",
        charcoal: "var(--charcoal)",
        stone: "var(--stone)",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Open Sans"', "sans-serif"],
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateX(+100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-down": "slide-down 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
