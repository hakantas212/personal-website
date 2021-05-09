const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}


module.exports = {
  siteMetadata: {
    title: `Personal Website`,
    description: `Front-end developer`,
    author: `Hakan Tas`,
    "menuLinks": [
      {
        "name": "About",
        "link": "/about"
      },
      {
        "name": "Projects",
        "link": "/projects"
      },
      {
        "name": "Photography",
        "link": "/photography"
      },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-light.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-172481986-1`
      }
    },

    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "internal__",
  
        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://api.unsplash.com/users/hakantas212/photos/?&per_page=50&client_id=${process.env.ACCESS_KEY}`,
  
        method: "GET",
  
        headers: {
          "Content-Type": "application/json"
        },

        name: `UnsplashPhotos`,
  
        // Request body
        data: {},
        
        // Request parameters
        // Only available from version 2.1.0
        params: {
          per_page: 1,
          stats: true
        },
  
      }
    },

    {
      resolve: `gatsby-plugin-remote-images`,
      options: { 
        nodeType: `UnsplashPhotos`, 
        imagePath: 'url' 
      }
    },
  ],
}
