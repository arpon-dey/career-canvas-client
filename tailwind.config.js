/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({

  content: ["./index.html", "./src/**/*.{react,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'Space':"'Space Grotesk','sans-serif'",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald"]
  }
})

