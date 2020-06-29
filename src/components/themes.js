import Logo from '../images/logo-light.svg'
import LogoDark from '../images/logo-dark.svg'

export const lightTheme = {
  name: 'light',
  logo: LogoDark,
  colors: {
    background: '#f1f2f3',
    cardBackground: '#f1f2f3',
    textColor: '#233143',
    buttonColor: 'rgba(35, 49, 67, 0.08)',
    hover: 'rgba(237, 120, 66, 0.2)',
    labelColor: 'rgba(237, 120, 66, 0.3)',
    secondaryBackground: '#ed7842',
    secondaryTextColor: 'rgba(119, 124, 155, 1)',
    borderColor: 'rgba(237, 120, 66, 0.2)',
    gradient: 'linear-gradient(101deg, rgba(69,139,180,1) 0%, rgba(186,223,245,1) 100%)',
    iconColor: 'rgba(119, 124, 155, 1)',
    iconHover: '#233143',
    cardHover: 'rgba(119, 124, 155, 0.3)'
  },

  }
  
  export const darkTheme = {
    name: 'dark',
    logo: Logo,
    colors: {
      background: '#233044',
      cardBackground: 'rgba(35, 48, 68, 0.56)',
      textColor: '#f1f2f3',
      buttonColor: 'rgba(0,0,0,.2);',
      hover: 'rgba(0, 0, 0, 0.35)',
      labelColor: 'rgba(0, 0, 0, 0.3)',
      secondaryBackground: 'rgb(35, 48, 68)',
      secondaryTextColor: 'rgba(119, 124, 155, 1);',
      borderColor: 'rgba(237, 120, 66, 0.4)',
      gradient: 'linear-gradient(101deg, rgba(69,139,180,1) 0%, rgba(186,223,245,1) 100%)',
      iconColor: 'rgba(119, 124, 155, 1)',
      iconHover: '#f1f2f3',
      cardHover: 'rgba(0,0,0,0.35)'
    },
  
  }