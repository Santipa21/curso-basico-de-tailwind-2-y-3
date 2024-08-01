/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: { 
        'sanFrancisco': "url('../images/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../images/sanFranciscoDesktop.jpg')",
        'yosemite': "url('../images/yosemite.jpg')",
        'LA': "url('../images/LA.jpg')",
        'LAMobile': "url('../images/LAMobile.jpg')",
        'seattle': "url('../images/seattle.jpg')", 
        'new_york': "url('../images/new_york.jpg')",
        'norway': "url('../images/norway.jpg')",
        'sydney': "url('../images/sydney.jpg')",
        'miami': "url('../images/miami.jpg')",
        'miamiMobile': "url('../images/miamiMobile.jpg')",
        'switzerland': "url('../images/switzerland.jpg')",
        'bali': "url('../images/bali.jpg')",
        'baliMobile': "url('../images/baliMobile.jpg')",
        'chicago': "url('../images/chicago.jpg')",
        'chicagoMobile': "url('../images/chicagoMobile.jpg')",
        'europe': "url('../images/europe.jpg')",
        'iceland': "url('../images/iceland.jpg')", 
      },
      backgroundColor: theme =>({ 
        ...theme('colors'), 
        'primary': '#CC2D4A',
        'secondary': '#8FA206', 
        'tertiary': '#61AEC9', }), 
        textColor:{ 
        'primary': '#CC2D4A', 
        'secondary': '#8FA206', 
        'tertiary': '#61AEC9', 
        }, 
        fontFamily:{
          Montserrat:['Montserrat', 'sans-serif']
        }
    },
  },
  plugins: [],
}