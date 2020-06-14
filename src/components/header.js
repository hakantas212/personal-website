import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Logo from '../images/logo-dark.svg'

const Container = styled.div `
  margin-bottom: 1.45em;
`
const Inner = styled.div `
  max-width: 80%;
  padding: 1.45em 1em;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Img = styled.img `
  max-width: 70px;
`
const Nav = styled.ul `
  display: flex;
  list-style: none;
  padding: 0px;
`
const HeaderLogo = styled(Link) `
  display: flex;
`

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Inner>
        <HeaderLogo to="/">
          <Img src={Logo} alt="Dark Logo" />
        </HeaderLogo>
        <nav>
          <Nav>
            <li>About</li>
            <li>Photography</li>
            <li>Contact</li>
          </Nav>
        </nav>
      </Inner>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
