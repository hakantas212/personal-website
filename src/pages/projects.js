import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import githubIcon from '../images/github-icon.svg'
import linkIcon from '../images/link-icon.svg'





const Projects = () => {

const data = useStaticQuery(graphql`
query {
  allContentfulProject {
    edges{
      node {
        id
        title
        projectDescription {
          projectDescription
        }
      	projectImage {
      	fluid {
          src
        }
        }
        techStack
        githubLink
        demoLink
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
              <img src={edge.node.projectImage.fluid.src} alt={edge.node.title}></img>
              <div className="card-content">
                <h2>{edge.node.title}</h2>
                {Object.values(edge.node.projectDescription).map((desc, i) => {
                      return <p key={i}>{desc}</p>
                    })}
                  <ul>
                    {edge.node.techStack.map((stack,i) => {
                    return(
                      <li key={i}>{stack}</li>
                    )
                    })}
                </ul>
              </div>
              <div className="project-links">
                <a href={edge.node.githubLink} target="_blank" rel="noreferrer"><img src={githubIcon} alt="github-icon"></img></a>
                <a href={edge.node.demoLink} target="_blank" rel="noreferrer"><img src={linkIcon} alt="link-icon"></img></a>
              </div>
            </div>
        )
      })}
    </div>
  </Layout>
  )
}

export default Projects
