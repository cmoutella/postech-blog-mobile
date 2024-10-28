const nativeWind = require("nativewind/preset")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./ui/**/*.{js,jsx,ts,tsx}"],
  presets: [nativeWind],
  theme: {
    extend: {},
  },
  plugins: [],
}

