import React from 'react'
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'


const SkillsContainer = styled.div `
        margin-top: 1rem;

        .skills-content {
            max-width: 900px;
        }
        h2 {
            font-size: 2.5rem;
            font-family: 'Inter', sans-serif;
        }
        p {
            font-weight: 400;
            font-size: 1.5rem;
        }
        ul {
            display: flex;
            align-items: center;
            margin-top: 3rem;
            flex-wrap: wrap;
            justify-content: center;
            @media only screen and (max-width: 768px) {
                flex-direction: row;
                flex-wrap: wrap;
                width: 100%;
                justify-content: space-between;
                padding: 0;
            }


        li {
            line-height: 1.6;
            position: relative;
            display: flex;
            font-weight: 700;
            margin: 0.75rem 1.5rem;
            padding: 0 1rem;
            align-items: center;
            flex-direction: row-reverse;
            img {
                height: 45px;
                margin-right: 0.4rem;
            }
            @media only screen and (max-width: 768px) {
                margin: 0.75rem 1rem;
                padding: 0;
            }
            @media only screen and (max-width: 568px) {
                margin: 0.75rem 0.5rem;
            }
    }

`


function Skills() {

    const data = useStaticQuery(graphql`
    query {
        allContentfulSkills {
            edges {
              node {
                id
                title
                subtitle
                skillLogo {
                    title
                    file {
                      url
                    }
                  }
              }
            }
         }
  }
    `)

return ( 
    <SkillsContainer className="skills-container">
        <SEO title="Skills" />  
        {data.allContentfulSkills.edges.map((skills) => {
            return (
                <div key={skills.node.id}>
                    <div className="skills-content">
                        <h2>{skills.node.title}</h2>
                        <p>{skills.node.subtitle}</p>
                    </div>
                    <ul>
                    {skills.node.skillLogo.map((image, i) => {
                        return (
                            <li key={i}><span>{image.title}</span><img src={image.file.url} alt=""/></li>
                        )
                    })}
                    </ul>
                </div>
            )
        })}
    </SkillsContainer>
    )
}

export default Skills
