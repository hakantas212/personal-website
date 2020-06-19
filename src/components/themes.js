import Logo from '../images/logo-light.svg'
import LogoDark from '../images/logo-dark.svg'

export const lightTheme = {
  name: 'light',
  logo: LogoDark,
  colors: {
    background: '#ffffff',
    textColor: '#233044',
    gradient: 'linear-gradient(101deg, rgba(69,139,180,1) 0%, rgba(186,223,245,1) 100%);',
    hover: 'rgba(0,0,0,.05);',

  },
  }
  
  export const darkTheme = {
    name: 'dark',
    logo: Logo,
    colors: {
      background: '#233044',
      textColor: '#ffffff',
      gradient: 'linear-gradient(101deg, rgba(69,139,180,1) 0%, rgba(186,223,245,1) 100%);',
      hover: 'rgba(0,0,0,.2);',

    },
    

  }