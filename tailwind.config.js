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
    },
  },
  plugins: [],
};
