/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./shop.html"],
  theme: {

    container:{
      padding: {
        "mid": "0",
        "mobile": "30px",
        Default: 0
      }
    },

    extend: {
      screens: {
        'mobile': '350px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'mid': '992px',
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1200px',
        // => @media (min-width: 1200px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }


        'm2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'mxl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'mlg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mmid': {'max': '992'},

      'mmd': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'msm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      },

      colors: {
        'red' : 'red',
        'gray': '#7e7e7e',
        'border': '#e1e1e1',
        'partdored': '#ff3a4a'
      }
    },
  },
  plugins: [],
}

