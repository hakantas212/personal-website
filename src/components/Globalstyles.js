import { createGlobalStyle} from "styled-components"



const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0; 
    height: 100%; 
    overflow-y: scroll;
  }

  body {
    background: var(--color-background);
    color: var(--color-textColor);
    transition: background-color 0.3s ease 0s;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    margin: 0;
    overflow: hidden;
  }
  a {
    color: var(--color-textColor);
  }

  body.noscroll {
    margin: 0; 
    height: 100%; 
    overflow: hidden;
}


  a {
    font-size: 2em;
    text-decoration: none;
  }

  section {
    max-width: 1280px;
    margin: auto;
    padding: 0 1rem;
    position: relative;
  }

  header {
    width: 100%;
  }

  .skills-container {
    p, span, li {

    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    gap: 4rem;
    padding-right: 0.75rem;
    position: relative;
  }

  .card-project {
    width: 100%;
    height: auto;
    position: relative;
    display: grid;
    grid-template-rows: 1fr auto auto;
    border-radius: .25rem .25rem 1rem 1rem;
    background-color: var(--color-cardBackground);
    box-shadow: 10px -10px 0 var(--color-hover);
    border: 1px solid var(--color-borderColor);
    transition: all 0.3s ease-in-out 0s;

    &:hover {
      transition: all 0.3s ease-in-out 0s;
      transform: translateX(3px);
      border: 1px solid var(--color-cardHover);
      box-shadow: 0px 2px 10px var(--color-cardHover);
      }

    img {
      object-fit: cover;
      width: 100%;
      height: auto;
      border-radius: .25rem .25rem 0rem 0rem;
    }

    .card-content {
      width: 100%;
      padding-left: 1rem;

      p{
        color: var(--color-secondaryTextColor)
      }
  
      ul {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        margin: 0px;
        padding: 0px;
  
        li {
          display: inline-block;
          line-height: 1.75;
          letter-spacing: .025em;
          text-transform: uppercase;
          font-size: .7rem;
          font-weight: 600;
          border-radius: .25rem;
          padding: .15rem 0.75rem;
          font-style: italic;
          cursor: default;
          align-items: center;
          margin: 0 0.75rem 0.5rem 0;
          background-color: var(--color-labelColor);
          color: var(--color-textColor);
          }
      } 
    }
    
    .project-links {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;

      a {
        margin: 1.75rem 1.40rem 1.75rem .75rem;
        width: 30px;
        height: 30px;

        svg {
          height: 100%;
          width: 100%;
          transition: all 0.3s ease-in-out 0s;
          fill: var(--color-iconColor);
            &:hover {
              fill: var(--color-iconHover);
          }
        }
      }
    }
  }

  footer {
    margin-top: 3rem; 
    padding: 2rem;
    height: 400px;
    margin-bottom: 0;
    background: var(--color-secondaryBackground);
    width: 100%;
    color: var(--color-textColor);
    a {
      font-size: 1.1rem;
      text-decoration: underline;
      color: var(--color-textColor);
    }
    .footer-text {
      text-align: right;
      margin-bottom: 0rem;
      margin-top: 1rem;
      a {
        font-size: 0.75rem;
        text-decoration: none;
        font-weight: 700;
        color: var(--color-secondaryTextColor);
        border-spacing: 10px;
        text-indent: 15px;
        line-height: 2em;
        box-sizing:border-box;
        padding-bottom: 4px;
        border-bottom: 4px solid var(--color-iconColor);
        &:hover {
          color: var(--color-textColor);
          transition: all 0.3s ease-in-out 0s;
        }
      }
    }

    .footer-container {
      .footer-content {
        h3 {
          font-size: 2.5em;
        }
        p {
          font-size: 1.25rem;
          font-weight: 300;
        }
      }
      
      .footer-items {
        display: flex;
        justify-content: space-between;
        margin-top: 3rem;
        align-items: center;
        .footer-links  {
          margin:0;
          padding: 0;
          display: flex;
          list-style: none;
          li {
            margin-left: 1.5rem;
          
            svg {
              transition: all 0.3s ease-in-out 0s;
              fill: var(--color-iconColor);
              &:hover {
                transform: scale(1.2);
                fill: var(--color-iconHover);
              }
            }
          }
        }
      }
    }
  }
  `

  export default GlobalStyles