/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('/src/assets/img/img.jpg')",
      },
    },
  },
  plugins: [],
};
