import React from 'react'
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'


const SkillsContainer = styled.div `
    padding: 2rem;
    ul {
    display: flex;
    align-items: center;
    li {
        margin-left: 3em;
        font-weight: 400;
        line-height: 1.6;
        position: relative;

        &:before {
            position: absolute;
            display: block;
            content:  url('${props => props.iconUrl}');
            text-indent: -999999px; /* move the bullet point out of sight */
            left: -.75em;
            width: 4em; /* desired width of the image */
            height: 4em; /* unrelated to image height; this is so it gets snipped */
            background-repeat: no-repeat;
            background-image: url(${props => props.iconUrl});
            background-size: 4em 4em;
            background-position: 0 .3em;
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
                skill
                title
                subtitle
                skillLogo {
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
            const iconUrl = skills.node.skillLogo[0].file.url;
            console.log(iconUrl)
            return (
                <div key={skills.node.id}>
                    <h2>{skills.node.title}</h2>
                    <p>{skills.node.subtitle}</p>
                    {/* <img src={skills.node.skillLogo[0].file.url}></img> */}
                    <ul>
                        {skills.node.skill.map((item, i) => {
                            return (
                            <li key={i}>{item}</li>
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
