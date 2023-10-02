/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#09001E',
      },
      borderColor: {
        'neon-purple': '#A94CFF',
        'neon-pink': '#FF6BAC',
      },
      borderWidth: {
        'neon': '4px',
      },
      boxShadow: {
        'neon-purple': '0 0 10px #A94CFF', // Purple neon drop shadow
        'neon-pink': '0 0 10px #FF6BAC',    // Pink neon drop shadow
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
