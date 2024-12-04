/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      jakarta: "'Plus Jakarta Sans', sans-serif",
      poppins: "'Poppins', sans-serif",
    },
    extend: {
      colors: {
        brand: {
          50: "#D2FEE7",
          100: "#A5FDD0",
          200: "#4BFBA0",
          300: "#05E16F",
          400: "#038743",
          500: "#012D16",
          600: "#012311",
          700: "#01190C",
          800: "#00140A",
          900: "#000A05",
          950: "#000502",
        },
        neutral: {
          DEFAULT: "#596780",
          50: "#EDEFF2",
          100: "#DEE2E8",
          200: "#BAC2CF",
          300: "#99A4B8",
          400: "#75849F",
          500: "#596780",
          600: "#475366",
          700: "#363F4E",
          800: "#242933",
          900: "#13161B",
          950: "#080A0C",
        },
      },
    },
  },
  plugins: [],
};
