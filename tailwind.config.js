/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens:{
      'mobile': '320px',
    

      'tablet': '481px',
    

      'laptop': '769px',


      'desktop': '1024px',
      
       
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

