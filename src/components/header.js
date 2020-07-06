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
  @media only screen and (max-width: 768px) {
    padding: 2rem 2rem;
  }
  

  nav {
    border-top: none;
    background: transparent;
    display: flex;
    position: relative;
    flex: 1 1 0%;

    ul {
      display: flex;
      justify-content: flex-end;
      margin: 0;
      padding: 0;
      flex-wrap: wrap;
      list-style: none;
      position: relative;
      width: 100%;

    li {
      display: flex;
      align-items: start;
      align-content: center;
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
            font-size: 0.9rem;

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
