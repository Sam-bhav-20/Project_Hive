/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Paci: ["Pacifico", "cursive"],
        Patua: ["Patua One", "serif"],
        Crete: ["Crete Round", "serif"],
        Lilita: ["Lilita One", "sans-serif"],
        Acme: ["Acme", "sans-serif"],
       },
    },
  },
  plugins: [],
}

