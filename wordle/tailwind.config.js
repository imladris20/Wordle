/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "960px",
      lg: "1440px",
    },
    fontFamily: {
      sans: ["Fira Sans", "ui-sans-serif", "system-ui"],
      serif: ["Abril Fatface", "ui-serif", "Georgia"],
    },
    extend: {
      colors: {
        white: "#ffffff",
        present: "#b59f3b",
        correct: "#538d4e",
        absent: "#3a3a3c",
        inserting: "#565758",
        dark: "#121213",
      },
      fontFamily: {
        custom: ["Gen Jyuu Gothic", "sans"],
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
