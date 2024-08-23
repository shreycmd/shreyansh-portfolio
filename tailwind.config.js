/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'custom-radial-gradient': 'linear-gradient(-90deg, rgba(249,225,253,1) 0%, rgba(218,255,251,1) 59%)',
        'custom-radial-gradient2':'linear-gradient(90deg, rgba(132,224,242,1) 10%, rgba(232,232,232,1) 89%)',
        "btn-grad":'radial-gradient(circle, rgba(215,255,255,1) 9%, rgba(139,217,251,1) 59%, rgba(163,230,247,1) 93%, rgba(158,228,246,1) 100%)'
      },
      backgroundColor: {
        'custom-color': 'rgb(251,228,255)',
      },

    },
  },
  plugins: [],
}

