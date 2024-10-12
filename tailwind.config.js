/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Poppins','sans-serif'],
        'secondary': ["Montserrat", 'sans-serif']
      },
      colors:{
        'heroBg' : '#03315c',
        'para': 'rgb(0 0 / 80%)',
        'primary' : '#e8bb45'
      }
    },
  },
  plugins: [],
}

