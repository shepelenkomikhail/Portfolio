/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html", "public/index.html"],
  theme: {
    extend: {
      colors: {
        buttonYellow: "#F5EE84",
        titleYellow: "#EEE776",
      },
      boxShadow: {
        'custom-blur': '0px 1px 4px 0px rgba(0, 0, 0, 0.01)',
      },
      fontSize: {
        '7xl': '86px',
      },
      borderRadius: {
        'extra': '100px',
      },
      width: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

