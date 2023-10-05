/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },

    colors: {
      'violet': '#855BB8',
      'pink': '#FF8282',
      'green': '#7ADDBA',
      'orange': '#FE9B27',
      'blue': '#829DFF',
      'dark': '#131313',
      'white': '#FFFFFF',
      'light-gray': '#F0F0EF',
      'dark-gray': '#E8E8E8',
      'blue-hover': '#6378C3',
      'orange-hover': '#FF8A00',
      'green-hover': '#64B89A',
      'transparent': 'transparent'
    },

    fontFamily: {
      'main': ["var(--font-lato)"],
      'second': ["var(--font-rajdhani)"],
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        xl: '3.1rem'
      }
    },
  },
  plugins: [],
}
