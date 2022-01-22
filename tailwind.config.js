module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#121212",
        primary: "#9741EC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // ...
    fontFamily: false,
  },
};
