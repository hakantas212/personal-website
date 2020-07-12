import React from 'react'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const NavLinks = styled.div`
  width: 100%;
  ul {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    list-style: none;
    position: relative;
    margin-bottom: 0;
    margin-top: 0;
    margin-right: 1rem;
    @media only screen and (max-width: 768px) {
    flex-flow: nowrap;
    padding: 4rem 0;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 0;
    }

  li {
    border-radius: 5px;
    margin: 0.4rem;
    :hover {
      transition: all 0.3s ease-in-out 0s;
      background-color: var(--color-hover);
      color: var(--color-textColor);
    }

      a {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        font-weight: 500;
        font-size: 1.1em;
        padding: 1rem;
        @media only screen and (max-width: 768px) {
          padding: 1rem;
        }

        &.active {
          border-radius: 5px;
          font-weight: 700;
          background: var(--color-hover);;

        }
        &.active:hover,
        .active:focus {  
        transition: all 0.3s ease-in-out 0s;
        background: none;
        }
      }
    }
  }
`



const Navbar = () => {
const data = useStaticQuery(graphql`
  query SiteLinksQuery {
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
    <NavLinks>
        <ul>
          {data.site.siteMetadata.menuLinks.map(link => {
            return (
              <li key={link.name}>
              <Link activeClassName="active" to={link.link}>
                {link.name}
              </Link>
              </li>
            )})
          }
        </ul>
    </NavLinks>
    )
}

export default Navbar
