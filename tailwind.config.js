const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#232F3E",
          dark: "#1E1E1E",
          orange: {
            base: "#FF3C20",
            muted: "#FC5B44"
          }
        }
      },
      fontFamily: {
        'rubik': ['"Rubik"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
};
