
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.scss"
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../components/Globalstyle";
import  {useDarkMode} from "../components/useDarkMode"
import { lightTheme, darkTheme } from "../components/theme"
import Toggle from "./toggle"



const Layout = ({ children }) => {

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles/>
      <Header  siteTitle={data.site.siteMetadata.title} />
      <div>
      <Toggle theme={theme} toggleTheme={themeToggler} />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
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
