/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#6439BF",
        second : "#804BF2",
        third : "#AD8DF2",
        four:"#F2D06B",
        five:"#F2F2F2"
      }
    },
  },
  plugins: [],
}