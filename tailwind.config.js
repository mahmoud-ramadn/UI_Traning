/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        noto: ["Noto Kufi Arabic", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        black: "#000000",
        dark: {
          100: "#0E1016",
          200: "#181818",
        },
        primary: {
          100: "#0F0C17",
          500: "#0e0c15",
          600: "#0e0e1c",
        },
        gray: {
          100: "#CAD1E9",
          200: "#EEEBE8",
          300: "#F3F1ED",
        },
        gradients: {
          one: "#000000",
          two: "#1B1530",
          three: "#27242D",
        },
        blue: {
          100: "#1E21E9",
          200: "#4F75FE",
        },
        purple: {
          100: "#7950FF",
        },
        green: {
          100: "#098709",
        },
        wheat: {
          100: "#eee9df",
          200: "#FBF9F5",
        },
        brown: {
          100: "#2D2323",
          200: "#1F1717",
          300: "#4A3E3E",
        },
        yellow: {
          100: "#FFBB00",
        },
      },

      backgroundImage: {
        "identity-gradient": "linear-gradient(90deg, #F33CC0 0%, #4349FF 100%)",
      },
    },
    container: {
      center: true,
      screens: {
        "2xl": "1200px",
      },
      padding: "14px",
    },
  },
  plugins: [],
};
