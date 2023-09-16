/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        main: '5px 5px 0 black'
      },
      dropShadow:{
        main: '2px 2px 10px black'
      },
      fontFamily:{
        montserrat: 'Montserrat, sans-serif'
      }
    },
  },
  plugins: [],
}

