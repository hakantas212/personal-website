
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
  }

  const [isDark, setIsDark] = useState(localIsDark)




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
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
    <>
    <GlobalStyles/>
      <div>
        <Header menuLinks={data.site.siteMetadata.menuLinks}  siteTitle={data.site.siteMetadata.title} isDark={isDark} setIsDark={setIsDark}>
        </Header>
        <main>
          <section>
            {children}
          </section>
        </main>
        <footer>
          <section>
            © {new Date().getFullYear()}, Built with
            {`GatsbyJS`}
          </section>
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
