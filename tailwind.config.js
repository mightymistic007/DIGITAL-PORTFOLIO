/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d9fb06',
        dark: '#1a1c1b',
        secondary: '#3f4816',
        muted: '#888680',
        'dark-card': '#302f2c'
      }
    },
  },
  plugins: [],
}
