/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        'primery--color': '#211f1d',
        'secondery--color': '#c86305' 
      },
      screens:{
        'sm' : '350px',
        'md' : '750px',
        'lg': '1024px'

      }
    },
  },
  plugins: [],
}

