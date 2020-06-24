import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'


const Container = styled.div`
  margin: 10rem;

  h1 {
    line-height: 1.5em;
    font-size: 3em;
  }

  span {
    line-height: 1;
    font-size: 25em;
    font-weight: 800;
    letter-spacing: 6px;
    color: rgba(0, 0, 0, 0.04);
    position: relative;
    right: 300px;
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
      <h2>I’m a Stockholm based front-end developer, focused towards developing good looking websites with a primary focus on performance and future maintainability.</h2> 
    </Container>
  </Layout>
)

export default HomePage
