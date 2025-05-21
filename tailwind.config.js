/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      primary: "#1D4ED8",
      secondary: "#9333EA",
      accent: "#FBBF24",
    },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
}

