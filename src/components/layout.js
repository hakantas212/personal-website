
import React, {useState}  from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import styled, {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Globalstyle";
import { lightTheme, darkTheme } from "./themes"
import Footer from './footer';
import Moon from '../images/moon.svg'
import Sun from '../images/sun.svg'


const Button = styled.button`
    width: 80px;
    height: 30px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background:  ${props => props.theme.colors.gradient};
    outline: none;
    margin-left: 1rem;
    z-index: -1;
    @media only screen and (max-width: 768px) {
      margin-left: 0;
    }

    img {
      max-width: 1.4rem;
      height: 100%;
      transition: all 0.1s linear;
  
      &:first-child {
        transform: ${props => props.theme === lightTheme  ? 'translateX(-20px)' : 'translateX(20px)'};
      }
  
      &:nth-child(2) {
        transform: ${props => props.theme === darkTheme  ? 'translateX(30)' : 'translateX(10)'};
      }
    }

`;



const Layout = ({ children}) => {
  typeof window !== 'undefined' && window.localStorage
  const stored = window.localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)



  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <>
    <GlobalStyles/>
      <div>
      <Button onClick={() => {
          setIsDarkMode(!isDarkMode);
          localStorage.setItem("isDarkMode", !isDarkMode);
          console.log("hello")
          }}>
          { isDarkMode ? <img src={Moon} alt="Moon" title="Moon"/> :
            <img src={Sun} alt="Sun" title="Sun"/>
          } 
      </Button>
        <Header siteTitle={data.site.siteMetadata.title}>
        </Header>
        <main>
          <section>
            {children}
          </section>
        </main>
        <Footer></Footer>
      </div>
    </>
    </ThemeProvider>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
