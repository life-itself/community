const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // support wider width for large screens >1440px eg. in hero
      maxWidth: {
        "8xl": "88rem",
      },
      fontFamily: {
        sans: ["ui-sans-serif", ...defaultTheme.fontFamily.sans],
        serif: ["ui-serif", ...defaultTheme.fontFamily.serif],
        mono: ["ui-monospace", ...defaultTheme.fontFamily.mono],
        headings: ["Restora", ...defaultTheme.fontFamily.sans],
        research: ["EB Garamond", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        background: {
          DEFAULT: colors.white,
          dark: colors.slate[900],
        },
        primary: {
          DEFAULT: colors.gray[700],
          dark: colors.gray[300],
        },
        // lifeitself theme color
        secondary: {
          DEFAULT: "#F0CA5E",
          dark: "#F0CA5E",
        },
      },
    },
  },
  /* eslint global-require: off */
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/line-clamp'),
  ],
};
