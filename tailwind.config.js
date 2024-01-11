/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '596': '596px',
        '75': '75px'
      },
      width: {
        '407.5': '407.5px',
        '838': '838px',
        '1280': '1280px',
        '30':  '30px',
        '293': '293px',
        '494':  '494px'
      },
      height:{
        '832': '832px',
        '75': '75px',
        '30': '30px'
      },
      inset:{
        '95': '95px',
        '23': '23px',
        '35': '35px',
        '5':  '5px',
        '472': '472.50px',
        '128': '128px',
        '211': '211px',
        '180': '180px',
        '15':  '15px',
        '120': '120px',
        '505': '505px',
        '284': '284px',
        '342': '342px',
        '400': '400px',
        '473': '473px',
        '521': '521px',
        '762': '762px',
        '420':  '420px',
        '357':  '357px',
        '415':  '415px',
        '503':  '503px',
        '551':  '551px'
      },
      colors: {
        customBlack: '#002528',
        customGrey: '#E2EAEA'
      },
      fontSize:{
        '22': '22px'
      },
      margin:{
        '30': '7rem',
        '40': '8rem',
        '50': '10rem',
        '128': '128px'
      },
      fontFamily:{
        'Inter': 'Inter'
      },
      borderRadius:{
        '15': '15px'
      },
    },
  },
  plugins: [],
}

  