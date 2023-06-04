/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'script.js'],
  theme: {
    extend: {
      keyframes:{
        'open-menu':{
          '0%':{transform: 'scaleY(0)'},
          '80%':{transform: 'scaleY(1.2)'},
          '100%':{transform: 'scaleY(1)'}
        }
      },
      animation:{
        'open-menu':'open-menu .5s ease-in-out forwards'
      }

    },

  },
  plugins: [],
}

