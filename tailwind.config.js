/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('public/images/pattern-bg-desktop.png')",
        'mobile': "url('public/images/pattern-bg-mobile.png')",
      }
    },
  },
  plugins: [],
}