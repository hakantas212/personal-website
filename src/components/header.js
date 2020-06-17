import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Toggle from './toggle'
import { GlobalStyles } from "./Globalstyle";




const Inner = styled.div `
  max-width: 80%;
  padding: 1.45em 1em;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Nav = styled.nav `
  ul {
    display: flex;
    list-style: none;
    padding: 0px;
  }
  li {
    padding-left: 1em;
  }

`
const HeaderLogo = styled(Link)`
    text-decoration: none;
`;

const Header = ({isDark, setIsDark}) => (


  <header>
    <GlobalStyles/>
      <Inner>
        <HeaderLogo id="logo" to="/">
        </HeaderLogo>
        <Nav>
          <ul>
            <Link to="/about"><li>About</li></Link>
            <Link to="/page-2"><li>Projects</li></Link>
            <Link to="/photography"><li>Photography</li></Link>
            <Link to="/about"><li>Contact</li></Link>
          </ul>
        </Nav>
        <Toggle isDark={isDark} setIsDark={setIsDark} />
      </Inner>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
