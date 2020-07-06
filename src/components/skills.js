import React from 'react'
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'


const SkillsContainer = styled.div `
        margin-top: 10rem;

        .skills-content {
            max-width: 900px;
        }
        h2 {
            font-size: 2.5rem;
        }
        p {
            font-weight: 300;
            font-size: 1.5rem;
            color: ${props => props.theme.colors.secondaryTextColor};
        }
        ul {
            display: flex;
            align-items: center;
            margin-top: 3rem;
            flex-wrap: wrap;
            justify-content: center;
        li {
            line-height: 1.6;
            position: relative;
            display: flex;
            font-weight: 700;
            margin: 0.75rem 1.5rem;
            padding: 0 1rem;
            align-items: center;
            flex-direction: row-reverse;
            color: ${props => props.theme.colors.secondaryTextColor};
            img {
                height: 45px;
                margin-right: 0.4rem;
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
    <SkillsContainer>
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
