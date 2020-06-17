
import React, { useState } from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Globalstyle";
import { lightTheme, darkTheme } from "./themes"



const Layout = ({ children }) => {
  let localIsDark

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('isDark') === 'false') {
      localIsDark = false
    } else {
      localIsDark = true
    }
    console.log(localIsDark ? 'dark mode' : 'light mode')
  }

  const [isDark, setIsDark] = useState(localIsDark)




  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
    <>
    <GlobalStyles/>
      <div>
        <Header  siteTitle={data.site.siteMetadata.title} isDark={isDark} setIsDark={setIsDark}>
        </Header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {`GatsbyJS`}
        </footer>
      </div>
    </>
    </ThemeProvider>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
