/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#091d28',
        'custom-light-blue': '#C5D5E3',
        'custom-inner-blue': '#E8F0F5 ',
      },
    },
  },
  plugins: [],
}

