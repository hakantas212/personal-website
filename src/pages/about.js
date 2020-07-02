import React from 'react'
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import styled from 'styled-components'


const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-template-rows: 200px repeat(auto-fill, 100px) 300px;
  grid-gap: 50px;
    article {
      width: 100%;
      white-space: normal;
      
      p {
        margin-bottom: 50px;
        white-space: break-spaces;
      }
    }
    
  .image-wrapper {
    width: 200px;
    height: 200px;
    margin-top: 3rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100px;

    }
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAbout {
        edges {
          node {
            title
            about {
              about
            }
            profilePhoto {
              fluid {
                srcSet
                src
              }
            }
          }
        }
      }
    }
`)

    return (
      <Layout>
      <SEO title="Projects" />
            {data.allContentfulAbout.edges.map((edge) => { 
              return (
                <AboutWrapper >
                  <article>
                    <h1>{edge.node.title}</h1>
                    <p>{edge.node.about.about}</p>
                  </article>
                  <div className="image-wrapper">
                    <img src={edge.node.profilePhoto.fluid.src} alt="profile"/>
                  </div>
                </AboutWrapper>
              )
            })}
      </Layout>
    )
}

export default About
