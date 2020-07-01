import React from "react";
import Layout from "../components/layout"
import Skills from "../components/skills"
import SEO from "../components/seo"
import styled from 'styled-components'


const TextWrapper = styled.div`
  margin: 5rem;

  h1 {
    font-size: 2.75rem;
  }

  h3 {
    font-size: 1.75rem;
    color: ${props => props.theme.colors.secondaryTextColor};
    font-weight: 600;
  }

  .hero-text {
    line-height: 1;
    font-size: 15rem;
    font-weight: 800;
    letter-spacing: 6px;
    background: -webkit-linear-gradient(101deg, rgba(69,139,180,0.15) 0%, rgba(186,223,245,0.001) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    left: 100px;
    top: 350px;
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
        <h3>I’m a Stockholm based front-end developer, focused towards developing good looking websites with a primary focus on performance and future maintainability.</h3>
      </TextWrapper>
      <Skills></Skills>
  </Layout>
)

export default HomePage
