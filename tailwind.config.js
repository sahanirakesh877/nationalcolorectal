/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bgImage.png')",
      },
      animation: {
        'slow-bounce': 'bounce 2.5s infinite',
      }
    },
  },
  plugins: [],
}

