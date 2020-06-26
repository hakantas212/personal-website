import Logo from '../images/logo-light.svg'
import LogoDark from '../images/logo-dark.svg'

export const lightTheme = {
  name: 'light',
  logo: LogoDark,
  colors: {
    background: '#f1f2f3',
    cardBackground: '#233044',
    textColor: '#233143',
    buttonColor: 'rgba(35, 49, 67, 0.08)',
    hover: 'rgba(237, 120, 66, 0.07)',
    labelColor: 'rgba(237, 120, 66, 0.375)',
    secondaryBackground: '#ed7842',
    secondaryTextColor: '#334259',
    borderColor: '#ed7842',
    gradient: 'linear-gradient(101deg, rgba(69,139,180,1) 0%, rgba(186,223,245,1) 100%)',
  },

  }
  
  export const darkTheme = {
    name: 'dark',
    logo: Logo,
    colors: {
      background: '#233044',
      cardBackground: '#f1f2f3',
      textColor: '#f1f2f3',
      buttonColor: 'rgba(0,0,0,.2);',
      hover: 'rgba(237, 120, 66, 0.02)',
      labelColor: 'rgba(237, 120, 66, 0.975)',
      secondaryBackground: 'rgb(35, 48, 68)',
      secondaryTextColor: '#ed7842',
      borderColor: '#ed7842',
      gradient: 'linear-gradient(101deg, rgba(69,139,180,1) 0%, rgba(186,223,245,1) 100%)',
    },
  
  }