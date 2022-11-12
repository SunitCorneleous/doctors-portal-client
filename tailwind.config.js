/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  //...
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        doctorsPortal: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#282D33",
          "base-100": "#E9E7E9",
        },
      },
    ],
  },
};
