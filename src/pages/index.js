import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'


const Container = styled.div`
  margin: 10rem;

  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.secondaryTextColor};
    font-weight: 500;
  }

  span {
    line-height: 1;
    font-size: 15rem;
    font-weight: 800;
    letter-spacing: 6px;
    background: -webkit-linear-gradient(101deg, rgba(69,139,180,0.2) 0%, rgba(186,223,245,0.001) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    right: 100px;
    top: 400px;
    position: absolute;
  }
`


const HomePage = () => (

  <Layout>
    <SEO title="Home" />
    <Container>
      <span>Welcome</span>
      <h1>Hi, I'm Hakan</h1>
      <h3>I’m a Stockholm based front-end developer, focused towards developing good looking websites with a primary focus on performance and future maintainability.</h3> 
    </Container>
  </Layout>
)

export default HomePage
