import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import Toggle from './toggle'
import Navbar from "./navbar"

const Inner = styled.div `
  max-width: 1280px;
  display: flex;
  padding: 2rem 1rem;
  margin: auto;
  width: 100%;
  z-index: 9999;
  position: relative;
  align-items: center;
  @media only screen and (max-width: 768px) {
    justify-content: space-between;

  }
  
  nav {
    display: flex;
    position: relative;
    width: 100%;
    justify-content: flex-end;
    @media only screen and (max-width: 768px) {
      position: fixed;
      }
  }

  
`
const BrandLogo = styled.div`
    align-items: center;
    margin-left: 0;
    width: 60px;
    height:60px;
    min-width: 40px;
    @media only screen and (max-width: 768px) {
      width: 40px;
      height:40px;
    }
    
`
const MenuToggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  z-index: 4444;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    order: 3;
    position: relative;
    margin: 0;
    padding: 0;
    width: 30px;
    height: 30px;
  }
`
const Navbox = styled.div`
  display: flex;
  height: 100%;

    @media (max-width: 768px) {
      position: fixed;
      width: 60%;
      display: flex;
      padding-top: 2vh;
      background-color: ${props => props.theme.colors.background};
      transition: all 0.3s ease-in;
      border-left: 1px solid ${props => props.theme.colors.background};
      top: 0;
      right: ${props => (props.open ? "-100%" : "0")};
      justify-content: center;
      box-shadow: -11px 3px 24px -15px rgba(0,0,0,0.35);
`

const Hamburger = styled.div`
  background-color: ${props => props.theme.colors.textColor};
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: ${props => props.theme.colors.textColor};
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Header = ({theme, toggleTheme }) => {
  const [navBar, setNavBar] = useState(false);

  
  useEffect(() => {
    if (navBar === true) {
      document.body.classList.add('noscroll');
    }

    return function cleanup() {
      document.body.classList.remove('noscroll');
    };
  }, [navBar]);


return (

  <header>
      <Inner>
        <BrandLogo >
          <Link id="logo" to="/" ></Link>
        </BrandLogo>
        <MenuToggle  navBar={navBar} onClick={() => (setNavBar(!navBar))}>
          {navBar ? <Hamburger open /> : <Hamburger />}
        </MenuToggle>
        <nav>
        {navBar ? (
          <Navbox>
            <Navbar />
          </Navbox>
          ) : (
          <Navbox open>
            <Navbar />
          </Navbox>
          )}
        </nav>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </Inner>

  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
