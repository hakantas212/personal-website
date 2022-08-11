import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"



const Projects = () => {

const data = useStaticQuery(graphql`
  query {
    allContentfulProject (filter: {node_locale: {eq: "en"}}) {
      edges{
        node {
          id
          title
          projectDescription {
            projectDescription
          }
          projectImage {
          file {
            url
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
              <img src={edge.node.projectImage.file.url} alt={edge.node.title}></img>
              <div className="card-content">
                <h2>{edge.node.title}</h2>
                {Object.values(edge.node.projectDescription).map((desc, i) => {
                      return <p key={i}>{desc}</p>
                    })}
                  <ul>
                    {edge.node.techStack && edge.node.techStack.map((stack,i) => {
                    return(
                      <li key={i}>{stack}</li>
                    )
                    })}
                </ul>
              </div>
              <div className="project-links">
                {edge.node.githubLink !== null ?  <a href={edge.node.githubLink} target="_blank" rel="noreferrer">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 512 512" >
                  <g>
                    <path className="st0" d="M296.1,354.2C346,348.3,399,330.2,399,244c0-24.5-8.6-44.4-22.7-59.9c2.3-5.9,9.5-28.1-2.7-58.9
                      c0,0-18.1-5.9-60.8,22.7c-18.1-5-38.1-8.2-56.7-8.2c-19.1,0-39,3.2-56.7,8.2c-43.1-28.6-61.2-22.7-61.2-22.7
                      c-12.2,30.8-5,53.1-2.7,58.9c-14.1,15.4-22.7,35.4-22.7,59.9c0,86.2,53.1,104.3,102.9,110.2c-6.3,5.5-12.2,15.9-14.5,30.4
                      c-12.7,5.4-45.8,15.9-65.8-18.6c0,0-11.8-21.3-34-22.7c0,0-22.2-0.5-1.8,13.6c0,0,15,6.8,24.9,32.7c0,0,13.6,43.1,76.2,29.5v38.5
                      c0,5.9-4.5,12.7-15.9,10.9C96.1,439,32.2,354.6,32.2,255.8c0-123.8,100.2-224,224-224c123.3,0,224,100.2,223.6,224
                      c0,98.9-63.9,182.8-152.8,212.7c-11.3,2.3-15.9-4.5-15.9-10.9v-62.1C311.1,374.6,304.3,361,296.1,354.2L296.1,354.2z M512,256.2
                      C512,114.7,397.3,0,256.2,0C114.7,0,0,114.7,0,256.2C0,397.3,114.7,512,256.2,512C397.3,512,512,397.3,512,256.2L512,256.2z"/>
                  </g>
                </svg>
                </a> : '' }
                {edge.node.demoLink !== null ?  <a href={edge.node.demoLink} target="_blank" rel="noreferrer">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 64 64">
                  <g>
                    <g id="Icon-Link" transform="translate(30.000000, 380.000000)">
                      <path id="Fill-177" className="st0" d="M0.5-339.7c0.1,0.4,0.1,0.8,0.1,1.2c0,2.2-0.8,4.2-2.4,5.7l-3.2,3.2c-1.5,1.5-3.6,2.4-5.7,2.4
                        c-4.5,0-8.1-3.6-8.1-8.1c0-2.2,0.8-4.2,2.4-5.7l3.2-3.2c1.5-1.5,3.6-2.4,5.8-2.4c0.4,0,0.8,0.1,1.2,0.1l2.5-2.5
                        c-1.2-0.4-2.4-0.6-3.7-0.6c-3,0-5.8,1.2-7.9,3.3l-3.2,3.2c-2.1,2.1-3.3,4.9-3.3,7.9c0,6.1,5,11.1,11.1,11.1c3,0,5.8-1.2,7.9-3.3
                        l3.2-3.2c2.1-2.1,3.3-4.9,3.3-7.9c0-1.3-0.2-2.5-0.6-3.7L0.5-339.7"/>
                      <path id="Fill-178" className="st0" d="M14.9-372c-3,0-5.8,1.2-7.9,3.3l-3.2,3.2c-2.1,2.1-3.3,4.9-3.3,7.9c0,1.3,0.2,2.5,0.6,3.7
                        l2.5-2.5c-0.1-0.4-0.1-0.8-0.1-1.2c0-2.2,0.8-4.2,2.4-5.7l3.2-3.2c1.5-1.5,3.6-2.4,5.8-2.4c4.5,0,8.1,3.6,8.1,8.1
                        c0,2.2-0.8,4.2-2.4,5.7l-3.2,3.2c-1.5,1.5-3.6,2.4-5.7,2.4c-0.4,0-0.8-0.1-1.2-0.1L8-347.2c1.2,0.4,2.4,0.6,3.7,0.6
                        c3,0,5.8-1.2,7.9-3.3l3.2-3.2c2.1-2.1,3.3-4.9,3.3-7.9C26-367,21-372,14.9-372"/>
                      <path id="Fill-179" className="st0" d="M-5.9-338.5c-0.4,0-0.8-0.2-1.1-0.5c-0.6-0.6-0.6-1.6,0-2.3l16-16c0.6-0.6,1.6-0.6,2.3,0
                        c0.6,0.6,0.6,1.6,0,2.3l-16,16C-5.1-338.6-5.5-338.5-5.9-338.5"/>
                    </g>
                  </g>
                </svg>
                </a> : '' }
              </div>
            </div>
        )
      })}
    </div>
  </Layout>
  )
}

export default Projects
