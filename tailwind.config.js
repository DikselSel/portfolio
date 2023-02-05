/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '400px',
      md: '800px',
      lg: '1200px',
      xl: '1920px',
    },
    colors:{
      'myGray': '#D6D6D6',
      'myBlack': '#2D2D2D',
      'myMilkBlack': '#3b3b3b',
      'myWhite': '#FFFFFF',
      'myGreen': '#8BFC6F',
      'myBlue': '#15D0F9'
    },
    fontSize:{
      ultrabig: '7rem',
      big: '5rem',
      xl: '2rem',
      lg: '1.7rem',
      md: '1.5rem',
      bignormal: '1.2rem',
      normal: '1rem',
      sm: '0.8rem',
      tiny: '0.5rem',
    },
    extend: {},
  },
  plugins: [],
}
