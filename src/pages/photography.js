import React from 'react'
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import SEO from "../components/seo"
import { useInView } from "react-intersection-observer"; // 1.9K gzipped
import { motion, useAnimation } from "framer-motion";



const Container = styled.div`
    column-count: 3;
    column-gap: 1rem;
    column-width: 20rem;
`
const TextWrapper = styled.div`
    margin: 2.75rem 0;
    width: 750px;
    max-width: 100%;
    display: block;

    p {
        font-size: 1.1rem;
    }

    a {
        font-size: 1rem;
        font-weight: 700;
        border-bottom: 3px solid var(--color-iconColor);
        line-height: 2rem;
    }

    h3 {
        font-weight: 500;
    }
`
const ImageContainer = styled.div`
    position: relative;
    color: #fff;
        img {
            width: 100%;
            object-fit: cover;
            margin-bottom: 1rem;
        }
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
                regular

            }
            description
          }
        }
      }
    }
`)

    return (
        <Layout>
            <SEO title="Photography" />
            <TextWrapper>
                <h1>My Photography Journey</h1>
                <p>I have always been curious about technical deteails/post processing of an image, while I enjoy taking landscape & travel photos.
                I use <a href="https://unsplash.com/@hakantas212" target="_blank" rel="noreferrer">Unsplash</a> Community for my photographs, you can find more information such as focal length, camera, aperture and so on. </p>
                <h3>📷 Sony A7R II</h3>
            </TextWrapper>
            <Container>
                {photoData.allInternalUnsplashPhotos.edges.map((edge) => {
                    return (
                        <ImageContainer key={edge.node.id}>
                            <motion.img src={edge.node.urls.regular} alt={edge.node.description}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            
                            ></motion.img>
                            {/* <div className="overlay">
                                <div className="text">
                                    <span>{edge.node.description}</span>
                                    <span>{edge.node.statistics.downloads.total}</span>
                                    <span>{edge.node.statistics.views.total}</span>
                                </div>
                            </div> */}
                        </ImageContainer>
                    )
                })}
            </Container>
        </Layout>
    )
}

export default Photography
