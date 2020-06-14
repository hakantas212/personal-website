import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Logo from '../images/logo-light.svg'


const Inner = styled.div `
  max-width: 80%;
  padding: 1.45em 1em;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Img = styled.img `
  width: 70px;
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

  a {
    text-decoration: none;
    color: #233044

  }
`
const HeaderLogo = styled(Link) `
  display: flex;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <header>
      <Inner>
        <HeaderLogo to="/">
          <Img src={Logo} alt="Dark Logo" />
        </HeaderLogo>
        <Nav>
          <ul>
            <Link to="/about"><li>About</li></Link>
            <Link to="/about"><li>Projects</li></Link>
            <Link to="/about"><li>Photography</li></Link>
            <Link to="/about"><li>Contact</li></Link>
          </ul>
        </Nav>
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
