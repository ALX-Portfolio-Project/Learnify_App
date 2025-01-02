/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom font here if needed
        sans: ['YourCustomFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

