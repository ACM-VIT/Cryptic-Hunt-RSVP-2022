/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      headingBlack: "#070707",
      crypticOrange: "#FF7A01",
    },
    screens: {
      xxsm: "200px",
      xsm: "360px",
      sm:"500px",
      mod: "600px",
      md: "1200px",
      xmd: "1400px",
      lg: "1500px",
      xlg: "1800px"
    },
  },
  plugins: [],
};
