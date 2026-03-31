/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0e0e0e",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#cafd00",
          dim: "#a8d400",
        },
        surface: {
          DEFAULT: "#0e0e0e",
          container: "#151515",
          high: "#1a1a1a",
          highest: "#262626",
        },
        outline: {
          DEFAULT: "#757575",
          variant: "#484848",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
