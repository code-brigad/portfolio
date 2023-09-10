/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#111827",
        whiteBorder: "#2E3A5A",
        pink: "#D946EF",
        telegram: "#28A8EA",
        linkedin: "#0077B5",
        github: "#5141DA"
      },
      backgroundImage: {
        linearBluePink: "linear-gradient(90deg, #2563EB, #D946EF)",
        linearBluePinkHover: "linear-gradient(90deg, #2563EB 60%, #D946EF 100%)",
        linearPurple: "linear-gradient(#8A7FD9, #402F8F)",
        linearRed: "linear-gradient(#D97F95, #923250)",
        linearBlue: "linear-gradient(#84CAFF, #84CAFF)",
        linearGreen: "linear-gradient(#92EFC3, #2F8F5B)",
        linearAqua: "linear-gradient(#84D8ED, #4292BB)",
      },
      fontFamily: {
        black: 'DMSans-Black, sans-serif',
        extrabold: 'DMSans-ExtraBold, sans-serif',
        bold: 'DMSans-Bold, sans-serif',
        semibold: 'DMSans-SemiBold, sans-serif',
        medium: 'DMSans-Medium, sans-serif',
        regular: 'DMSans-Regular, sans-serif'
      }
    },
  },
  plugins: [],
}
