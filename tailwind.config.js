/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aldrich: ["Aldrich", "sans-serif"],
      },
      screens: {
        'ios' : '320px',
        samsungS8: "360px",
        'xs': '390px',
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1150px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  darkMode: ["class"],
  plugins: [
    // eslint-disable-next-line global-require
    require("@tailwindcss/forms"),
    // ...
  ],
}
