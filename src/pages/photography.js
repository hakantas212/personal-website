import React from 'react'
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'



const Container = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(min(27rem, 100%), 1fr));
    grid-auto-rows: 33rem;
    width: 100%;

`
const ImageContainer = styled.div`
    position: relative;
    color: #fff;
        img {
            width: 100%;
            object-fit: cover;
            display: block;
            height: 100%;
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
            <h1>My Photographs</h1>
            <h5>Here are some photographs that I shot, you can find them on Unsplash.com</h5>
            <Container>
                {photoData.allInternalUnsplashPhotos.edges.map((edge) => {
                    console.log(edge)
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
                        </ImageContainer>
                    )
                })}
            </Container>
        </Layout>
    )
}

export default Photography
