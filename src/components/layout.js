
import React from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import  {useDarkMode} from "./useDarkMode"
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Globalstyle";
import { lightTheme, darkTheme } from "./themes"
import Footer from './footer';



const Layout = ({ children }) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  
  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  
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

  if(!mountedComponent) return <div/>


  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles/>
      <div>
        <Header siteTitle={data.site.siteMetadata.title} theme={theme} toggleTheme={themeToggler}>
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
