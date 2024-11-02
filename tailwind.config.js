/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        'primery--color': '#211f1d',
        'secondery--color': '#c86305' 
      },
    },
  },
  plugins: [],
}

