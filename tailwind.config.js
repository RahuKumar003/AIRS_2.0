/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation : {
      spin : 'spin 5s linear infinite',
      ping : 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;'
    },
    fontFamily : {
      ubuntu : ["Ubuntu","sans-serif"]
    }
  },
  plugins: [],
}