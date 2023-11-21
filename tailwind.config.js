/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#E96479",
        secondary: "#865DFF",
        third: "#16FF00",
        fourth: "#6C00FF",
        green: "#03C988"
      }
    },
  },
  varients : {
    extend:{
      display : ["group-hover"],
    },
  },
  plugins: [],
}

