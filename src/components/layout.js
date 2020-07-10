
import React, {useState} from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Globalstyle";
import { lightTheme, darkTheme } from "./themes"
import Footer from './footer';



const Layout = ({ children }) => {
  let stored
  if (typeof window !== 'undefined') {
    if (stored === 'false') {
      stored = false
    } else {
      stored = true
    }
    console.log(stored ? 'dark mode' : 'light mode')
  }
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
        <Header siteTitle={data.site.siteMetadata.title} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}>
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
