/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-gray': '#2A2B2F',
        'secondary-gray': '#36373B',
        'text-main': '#B2BECB',
        'text-secondary': '#838588'
      },
    },
  },
  plugins: [],
}

