/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'min': '1600px', 'max': '3840px' },
        // => @media (max-width: 1279px) { ... }

        'lg': { 'max': '1200px' },
        // => @media (max-width: 1023px) { ... }

        'sm': { 'max': '400px' },
        // => @media (max-width: 639px) { ... }

        'md': { 'max': '995px' },
        // => @media (max-width: 767px) { ... }

        'm_lg': '1440px',

        'm_lg1': '1920px',

        'm_md': '995px',

        'm_sm': '393px',

        
      },
      fontFamily: {
        Poppins: ["Poppins"],
      }
    },
  },
  plugins: [],
}
