import React from 'react'
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'


const Container = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
    grid-auto-rows: 200px;
`
const ImageContainer = styled.div`
    position: relative;
    color: #fff;
    overflow:hidden;
    clear: both;
        img {
            object-fit: cover;
            width: 100%;
            max-height:100%;
            height:auto;
            
        }
    &:hover .overlay {
        opacity: 1;
    }
        .overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: .5s ease;
            background-color: rgba(35, 49, 67, 0.35);
        }
  }
`


  




const Photography = () => {



const photoData = useStaticQuery(graphql`
    query MyQuery {
        allInternalUnsplashPhotos(filter: {id: {ne: "dummy"}}, sort: {fields: statistics___views___total, order: DESC }) {
        edges {
            node  {
            id
            likes
            statistics {
                downloads {
                  total
                }
                views {
                  total
                }
              }
            urls {
                raw
                full
                regular
                small
                thumb
            }
            description
          }
        }
      }
    }
`)

    return (
        <Layout>
        <section>
            <h1>My Photographs</h1>
            <Container>
                {photoData.allInternalUnsplashPhotos.edges.map((edge) => {
                    // console.log(edge)
                    return (
                        <ImageContainer key={edge.node.id}>
                            <img src={edge.node.urls.regular} alt=""></img>
                            <div className="overlay">
                                <div className="text">
                                    <span>{edge.node.description}</span>
                                    <span>{edge.node.statistics.downloads.total}</span>
                                    <span>{edge.node.statistics.views.total}</span>
                                </div>
                            </div>
                            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
                        </ImageContainer>
                    )
                })}
            </Container>
        </section>
        </Layout>
    )
}

export default Photography
