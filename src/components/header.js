import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled  from 'styled-components'
import Navbar from "./navbar"
import Toggle from "./toggle"

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
const Home = styled(Link)`
    align-items: center;
    margin-left: 0;
    width: 60px;
    height:60px;
    min-width: 60px;
    @media only screen and (max-width: 768px) {
      width: 45px;
      height:45px;
    } 
`

const MenuToggle = styled.div`
  display: none;
  height: 100%;
  width: 100%;
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
    width: 45px;
    height: 45px;
  }
`
const Navbox = styled.div`
  display: flex;
  height: 100%;

    @media (max-width: 768px) {
      position: fixed;
      width: 50%;
      display: flex;
      padding-top: 2vh;
      transition: all 0.3s ease-in;
      top: 0;
      justify-content: center;
      box-shadow: -11px 3px 24px -15px rgba(0,0,0,0.35);
      background-color: var(--color-background);
      right: ${props => (props.open ? "-100%" : "0")};
`

const Hamburger = styled.div`
  width: 45px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  background-color: var(--color-textColor);

  ::before,
  ::after {
    width: 45px;
    height: 3px;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    background-color: var(--color-textColor);
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-13px, 0px)" : "rotate(0deg)"};
    top: -13px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 13px;
  }
`

const Logo = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 60px;
  height: 60px;
  @media only screen and (max-width: 768px) {
    width: 45px;
    height:45px;
  } 

  .st0 { 
    fill: var(--color-logoDark);
  }
  .st1 {
    fill: var(--color-logoLight);
  }
`;

const Header = () => {
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

  <header >
      <Inner>
        <Home to="/" >
        <Logo className="my-logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          viewBox="0 0 490.4 520.3">
          <path className="st0" d="M50,0h390.4c27.5,0,50,22.5,50,50v420.3c0,27.5-22.5,50-50,50H50c-27.5,0-50-22.5-50-50V50C0,22.5,22.5,0,50,0z
            "/>
          <path className="st1" d="M312.6,75v76.2c0,79.2-135.5,78.3-135.9,118.2V75h-72v370.3h72V341.4c0.3-50.2,135.9-39,135.9-118.2v222.1h72
            V75H312.6z"/>
        </Logo>
        </Home>
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
        <Toggle/>
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
