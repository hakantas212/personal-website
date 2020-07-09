import React  from 'react';
import styled from 'styled-components';
import Moon from '../images/moon.svg'
import Sun from '../images/sun.svg'

const Button = styled.button`
    width: 80px;
    height: 30px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background-color:  ${props => props.theme.secondaryTextColor};
    outline: none;
    margin-left: 1rem;
    z-index: -1;
    @media only screen and (max-width: 768px) {
      margin-left: 0;
    }

    img {
      max-width: 1.4rem;
      height: 100%;
      transition: all 0.1s linear;
  
      &:first-child {
        transform: ${props => props.theme === "light"  ? 'translateX(-20px)' : 'translateX(20px)'};
      }
  
      &:nth-child(2) {
        transform: ${props => props.theme === "dark"  ? 'translateX(30)' : 'translateX(10)'};
      }
    }

`;



const Toggle = ({theme,  toggleTheme }) => {
  
    return (
      <Button theme={ theme} onClick={toggleTheme}>
         { theme === "dark" ? <img src={Moon} alt="Moon" title="Moon"/> :
          <img src={Sun} alt="Sun" title="Sun"/>
         } 
      </Button>
    );
};



export default Toggle;