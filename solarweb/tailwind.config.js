module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
        basic: "#FFFFFF",
      },

      fontFamily: {
        barlo: ["Barlow Condensed", "sans - serif"],
        bella: ["Bellefair", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
