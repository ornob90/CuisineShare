/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      playfair: ['"Playfair Display"', "system-ui"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
