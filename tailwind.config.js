/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#C5744C',
        'dark': '#232323',
        'light': '#ebebeb'
      }
    },
    fontFamily: {
      "main": "var(--main-font)",
      "deco": "var(--deco-font)",
    }
  },
  plugins: [],
};
