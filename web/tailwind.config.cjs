/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
       sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage:{
          galaxy: "url('/background-galaxy.png')",
            'nlw-gradient': 'linear-gradient(79.00deg, #B472FC 3.08%, #43E7AD 83.94%, #E1D55D 4.57%)',
            'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      }
    },
  },
  plugins: [],
}
