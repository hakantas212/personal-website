import { createGlobalStyle} from "styled-components"


export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textColor};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }


  a {
    color: ${props => props.theme.colors.textColor};
    font-size: 2em;
  
  }

  #logo {
    background-image: url(${props => props.theme.logo});
    width:70px;
    height:75px;
    position:relative;
    display:block;
  }

  header {
    background-color: ${props => props.theme.colors.headerColor}
  }
  `