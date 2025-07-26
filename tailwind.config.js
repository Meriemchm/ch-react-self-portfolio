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
        second : "#e7d8fd",
        third : "#e9f79e",
        four:"#6439BF",
        five:"#F2F2F2",
        six: "#f9f9f9"
      }
    },
  },
  plugins: [],
}