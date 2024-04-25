/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      mainColor: "#2555C8",
      white: "#ffffff",
      black: "#000000",
      grayText: "#939393",
      errorRed: "#FF1919"
    }
  },
  plugins: [],
}

