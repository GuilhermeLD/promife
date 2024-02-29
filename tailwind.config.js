/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ed4d67',
        secondary: '#C53E54',
        blur: 'rgba(0, 0, 0, .4)',
        date: '#171717',
        title: '#212529',
        text: '#6C757D',
      },
      fontFamily: {
        sans: 'Poppins',
      },
      backgroundImage: {
        home: "url('/img/promi-bg.jpg')",
        home2: "url('/img/promi-bg2.jpg')",
        mapImage: "url('/img/map-image.png')",
      },
    },
  },
  plugins: [],
}
