/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        darkText: '#3b4363',
        scoreText: '#2a46c0',
        headerOutline: '#606e85',
        emptyChoiceBg: "#192845",
        ring1: "#1f2a4ab3",
        ring2: "#253453cc",
        ring3: "#2b3956e6",
        darkBackground: "#00000080",

      },

    },

  },
  plugins: [],
}
