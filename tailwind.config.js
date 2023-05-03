/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      metrophobic: ["Metrophobic", "sans-serif"],
      Metropolis: ["Metropolis", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
      Catamaran: ["Catamaran", "sans-serif"],
      georgia: ['Georgia', 'serif'],
    },
    extend: {
      animation: {
        pulse: 'pulse 6s infinite',
      },
      transitionProperty: {
          'height': 'height'
      }
    },
  },
  plugins: [],
}
