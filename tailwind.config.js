/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
      screens: {
        'sm': {'min': '140px', 'max': '767px'},     //small screens
        'md': {'min': '768px', 'max': '940px'},    //medium screens
        'lg': {'min': '941px', 'max': '1440px'},   //large screens
        'xl': {'min': '1441px', 'max': '1535px'},   
        },
      extend: {
        
      },
      
    },
    plugins: [],
  }