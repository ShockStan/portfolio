/** @type {import('tailwindcss').Config} */
module.exports = {
  
  darkMode: 'class',
  content: [
	"./src/**/*.{html,ts}"
],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '5px 5px 5px rgba(255, 255, 255, 0.75)',
      },
      fontFamily:{
        antique:['Inknut Antiqua', 'serif'],
        courier:['Courier Prime', 'monospace'],
        contrail:['Contrail One', 'cursive'],
        federo:['Federo', 'sans-serif'],
        hammer:['Hammersmith One', 'sans-serif'],
        khand:['Khand', 'sans-serif'],
        itim:['Sono', 'sans-serif'],
        title:['Sedgwick Ave Display', 'cursive'],
        curve:['Indie Flower', 'cursive'],
        logo:['Titan One', 'cursive'],
        gal:['gallient'],
        sigma:['Sigmar', 'cursive'],
        curve:['Pacifico', 'cursive']

      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        appear:{
          '0%':{opacity: 0},
          '100%':{opacity:1}
        },
        slide:{
          '100%':{top: '-360px'}
        }
      },
      animation: {
        slide: 'slide 12s steps(4) infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        appear: 'appear 5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

