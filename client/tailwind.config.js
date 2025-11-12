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
        second : "#e9f79e",
        third : "#e9f79e",
        five:"#F2F2F2",
        six: "#f9f9f9"
      }
    },
  },
  plugins: [],
}