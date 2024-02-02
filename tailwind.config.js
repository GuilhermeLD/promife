/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Primary: '#ed4d67',
        blur: 'rgba(0, 0, 0, .4)',
      },
      fontFamily: {
        sans: 'Poppins',
      },
      backgroundImage: {
        home: "url('/img/promi-bg.jpg')",
      },
    },
  },
  plugins: [],
}
