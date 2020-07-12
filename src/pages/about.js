import React from 'react'
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import styled from 'styled-components'


const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: no-wrap;
    @media only screen and (max-width: 1024px) {
      flex-flow: column;
      article {
        order:2;
        margin: auto;
      }
      .image-wrapper {
        margin: auto !important;
    }
  }
  width: 100%;
    article {
      width: 100%;
      max-width: 700px;
      white-space: normal;
      flex: 1 1 100%;
      
      p {
        margin-bottom: 50px;
        white-space: break-spaces;
        font-size: 1.25rem;
        font-weight: 400;
      }
    }
    
  .image-wrapper {
    width: 200px;
    height: 200px;
    margin: 3rem;

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
            id
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
                <AboutWrapper key={edge.node.id} >
                  <article >
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
