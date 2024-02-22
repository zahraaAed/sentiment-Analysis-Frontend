/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Background':'#D0B5DD',
        'content':'#49003d',
        'contentBackground':'#1b2028',
      },
      width: {
        "150px": "150px",
       "100%":"40%",
      },
      height: {
      
       "100%":"20%",
      },
    },
  },
  plugins: [],
}

