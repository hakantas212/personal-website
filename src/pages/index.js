import React from "react";
import Layout from "../components/layout"
import Skills from "../components/skills"
import SEO from "../components/seo"
import styled from 'styled-components'


const TextWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  width: 750px;
  height: 320px;
  max-width: 100%;
  display: block;


  h1 {
    font-size: 3rem;
    margin:0;
    @media only screen and (max-width: 768px) {
     font-size: 2.5rem;
    }
  }

  p {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 1rem;
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
    left: -250px;
    top: -200px;
    position: relative;
    display: inline-block;
    user-select: none;
    @media only screen and (max-width: 1024px) {
      display: none;
     }
  }
`


const HomePage = () => (

  <Layout>
    <SEO title="Home" />
      <TextWrapper>
        <h1>Hi, I'm Hakan.</h1>
        <p>I’m a creative front-end developer based in Stockholm, Sweden. I have a passion for clean UI, responsive Web design and photography.</p>
        <span className="hero-text">Welcome</span>
      </TextWrapper>
      <Skills></Skills>
  </Layout>
)

export default HomePage
