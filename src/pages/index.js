import React from "react";
import Layout from "../components/layout"
import Skills from "../components/skills"
import SEO from "../components/seo"
import styled from 'styled-components'


const TextWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  max-width: 750px;
  width: 100%;

  h1 {
    font-size: 3rem;
    @media only screen and (max-width: 768px) {
     font-size: 2.5rem;
    }
  }

  p {
    font-size: 2rem;
    color: ${props => props.theme.colors.secondaryTextColor};
    background-color: ${props => props.theme.colors.background};
    font-weight: 500;
    @media only screen and (max-width: 768px) {
      font-size: 1.5rem;
     }
  }

  .hero-text {
    line-height: 1;
    font-size: 15rem;
    font-weight: 800;
    letter-spacing: 6px;
    background: -webkit-linear-gradient(101deg, rgba(69,139,180,0.1) 0%, rgba(186,223,245,0.001) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    left: 50px;
    top: 220px;
    position: absolute;
    user-select: none;
  }
`


const HomePage = () => (

  <Layout>
    <SEO title="Home" />
      <TextWrapper>
        <span className="hero-text">Welcome</span>
        <h1>Hi, I'm Hakan</h1>
        <p>I’m a Stockholm based front-end developer, focused towards developing good looking websites with a primary focus on performance and future maintainability.</p>
      </TextWrapper>
      <Skills></Skills>
  </Layout>
)

export default HomePage
