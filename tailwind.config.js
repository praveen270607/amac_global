module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e6f6ff',
          500: '#0ea5a4', // teal-ish
        }
      }
    },
  },
  plugins: [],
}
