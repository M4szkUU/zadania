/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: "#e3e3e3",
        black: "#000",
        goldenrod: "#e1b841",
        whitesmoke: "#f5f5f5",
        gray: {
          "100": "#111",
          "200": "rgba(0, 0, 0, 0.25)",
        },
      },
      spacing: {},
      fontFamily: {
        "inknut-antiqua": "'Inknut Antiqua'",
        "ingrid-darling": "'Ingrid Darling'",
      },
    },
    fontSize: {
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
