module.exports = {
    content: [
        './assets/**/*.{vue,js,css}',
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
      screens: {
        xl: {max: '1280px'},
        lg: {max: '1024px'},
        md: {max: '768px'},
        sm: {max: '640px'},
        xs: {max: '500px'},
      },
      extend: {
        fontFamily: {
            HelveticaNeue: "HelveticaNeue",
        },
        colors: {
            'light-gray': '#F5F5F5',
            'jet-black': '#111111',
            'pale-silver': '#ADACAC',
            'white-o-2': '#ffffff33',
            'pale-gray': '#DFDBDB',
            'black-o-5': 'rgb(0 0 0 / 50%)'
        },
        padding: {
            '4.5percent': '4.5%',
            '8.4percent': '8.4%',
        },
        height: {
          '400': '400px',
          '560': '560px',
          '700': '700px',
          '750': '750px',
          '990': '990px',
          '1300': '1300px',
        },
        spacing: {
          '5px': '5px',
          '15px': '15px',
          '23px': '23px',
          '26px': '26px',
          '30px': '30px',
          '34px': '34px',
          '60px': '60px',
          '61px': '61px',
          '84px': '84px',
          '89px': '89px',
          '94px': '94px',
          '120px': '120px',
          '136px': '136px',
          '168px': '168px',
          '180px': '180px',
          '250px': '250px',
          '400px': '400px',
          '530px': '530px',
        }

      },
    },
  }