import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"





const Projects = () => {

const data = useStaticQuery(graphql`
query {
  allContentfulProject {
    edges{
      node {
        id
        title
      	projectImage {
      	fluid {
          src
        }
        } 
        techStack
      }
    }
  }
}
  `)

return (
  <Layout>
    <SEO title="Projects" />
    <div className="projects">
      {data.allContentfulProject.edges.map((edge) => {
        return (
            <div  className="card-project" key={edge.node.id}>
              <h2>{edge.node.title}</h2>
              <img src={edge.node.projectImage.fluid.src} alt={edge.node.title}></img>
              <div>{edge.node.techStack.map(stack => {
                  return(
                    <li>{stack}</li>
                  )
              })}
              </div>
            </div>
        )

      })}
    </div>
  </Layout>
  )
}

export default Projects
