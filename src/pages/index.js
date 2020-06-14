import React from "react";
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"




const HomePage = () => (

  <Layout>
    <SEO title="Home" />
    <h1>Hello.</h1>
    <h2>I'm Hakan, a Front-end developer living in Stockholm.</h2>
    <p>Go to About page <Link to="/about/">About</Link></p>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default HomePage
