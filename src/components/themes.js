import Logo from '../images/logo-light.svg'
import LogoDark from '../images/logo-dark.svg'

export const lightTheme = {
  name: 'light',
  logo: LogoDark,
  colors: {
    background: '#f1f2f3',
    cardBackground: '#f1f2f3',
    textColor: '#233143',
    buttonColor: 'rgba(179, 201, 234, 0.47)',
    hover: 'rgba(249, 139, 59, 0.2)',
    labelColor: 'rgba(249, 139, 59, 0.2)',
    secondaryBackground: 'rgba(186, 223, 245, 0.17)',
    secondaryTextColor: '#2D3848',
    borderColor: 'rgba(249, 139, 59, 0.2)',
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
      secondaryBackground: 'rgba(0, 0, 0, 0.15)',
      secondaryTextColor: '#f1f2f3',
      borderColor: 'rgba(237, 120, 66, 0.4)',
      gradient: 'linear-gradient(101deg, rgba(69,139,180,1) 0%, rgba(186,223,245,1) 100%)',
      iconColor: 'rgba(119, 124, 155, 1)',
      iconHover: '#f1f2f3',
      cardHover: 'rgba(0,0,0,0.35)'
    },
  
  }