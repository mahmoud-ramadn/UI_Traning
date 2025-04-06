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
      colors: {
        black: "#000000",
        primary: {
          100: "#0F0C17",
          500: "#0e0c15",
          600: "#0e0e1c",
        },
        gray: {
          100: "#CAD1E9",
        },
        gradients: {
          one: "#000000",
          two: "#1B1530",
          three: "#27242D",
        },
        blue: {
          100: "#1E21E9",
        },
        purple: {
          100: "#7950FF",
        },
        green: {
          100: "#098709",
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
