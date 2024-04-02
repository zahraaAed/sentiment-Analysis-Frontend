

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
        'content':'#56003e',
        'contentBackground':'#8e134f',
        'emailbg':'#e8f0fe',
        "about":"#7e4a84",
        "pink-700":"#a92f68"
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

