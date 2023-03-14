module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "dash-layout": "rgb(41, 70, 62)",
        "light-white": "rgba(255,255,255,0.17)",
      },
      width: {
        300: "300px",
      },
      height: {
        540: "540px",
      },
      fontSize: {
        10: "0.625rem",
      },
      screens: {
        sm: "260px",
        // => @media (min-width: 640px) { ... }

        md: "600px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
