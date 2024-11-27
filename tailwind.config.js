/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html", "public/index.html"],
  theme: {
    extend: {
      colors: {

      },
      boxShadow: {
        'custom-blur': '0px 1px 4px 0px rgba(0, 0, 0, 0.01)',
      },
    },
  },
  plugins: [],
}

