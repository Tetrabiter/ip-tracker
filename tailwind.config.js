/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('src/images/pattern-bg-desktop.png')",
        'mobile': "url('src/images/pattern-bg-mobile.png')",
      }
    },
  },
  plugins: [],
}