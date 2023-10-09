/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgGen:"#354634",

        secAmar:"#FBB13C",
        secGreen:"#90BE6D",
        secPink:"#B98389",
        secPinkH:"#EA638C",

        lightRed:"#D18675",
        lighViolet:"#9C97C4",
        lightBlue:"#9AC2C5",

        textGray:"#353238",
        textOrange:"#FFF199",
        textGreen:"#E0F7B6"

      },      
      fontFamily:{
        'DMSIt':'DMSansIt',
        'DMS':'DMSans',
        'Sifonn':'sifonn',
      },
    },
  },
  plugins: [],
}

