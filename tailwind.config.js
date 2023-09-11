/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        syne : ['Syne', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}