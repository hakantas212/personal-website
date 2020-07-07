import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Toggle from './toggle'

const Inner = styled.div `
  max-width: 1280px;
  display: flex;
  padding: 2rem 0.75rem;
  align-items: center;
  margin: auto;
  width: 100%;
  @media only screen and (max-width: 768px) {
    padding: 1.75rem 1.75rem;
    flex-flow: wrap;
    justify-content: center;
  }
  

  nav {
    border-top: none;
    background: transparent;
    display: flex;
    position: relative;
    width: 100%;
    @media only screen and (max-width: 768px) {
      order: 3;
      margin-top: 1rem;
      }


    ul {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      list-style: none;
      position: relative;
      margin-bottom: 0;
      width: 100%;
      @media only screen and (max-width: 768px) {
      flex-flow: nowrap;
      padding: 1rem 0;
      justify-content: center;
      }

    li {
      border-radius: 5px;
      margin: 0.4rem;
      :hover {
        transition: all 0.3s ease-in-out 0s;
        background-color: ${props => props.theme.colors.hover};
        color: ${props => props.theme.colors.textColor};
      }

        a {
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          font-weight: 700;
          font-size: 1.1em;
          padding: 1rem;
          @media only screen and (max-width: 768px) {
            padding: 1rem;
          }

          &.active {
            background: ${props => props.theme.colors.hover};
            border-radius: 5px;
          }
          &.active:hover,
          .active:focus {  
          transition: all 0.3s ease-in-out 0s;
          background: none;
          }
        }
      }
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
      align-self: flex-end;
      flex: 1;
    }
    
`;

const Header = ({isDark, setIsDark, menuLinks}) => (

  <header>
      <Inner>
        <BrandLogo >
          <Link id="logo" to="/" >

          </Link>
        </BrandLogo>
        <nav>
            <ul>
              {menuLinks.map(link => (
                <li key={link.name}>
                  <Link activeClassName="active" to={link.link}>
                    {link.name}
                  </Link>
                  </li>
                ))}
            </ul>
        </nav>  
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
