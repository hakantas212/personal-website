import React  from 'react';
import styled from 'styled-components';
import { lightTheme } from './themes';
import Moon from '../images/moon.svg'
import Sun from '../images/sun.svg'

const Button = styled.button`
    width: 80px;
    height: 30px;
    border-radius: 30px;
    background: ${props => props.theme.colors.gradient};
    border: none;
    cursor: pointer;
    outline: none;
    margin-left: 1rem;
    @media only screen and (max-width: 768px) {
      margin-left: 0;
    }

    img {
      max-width: 1.4rem;
      height: 100%;
      transition: all 0.1s linear;
  
      &:first-child {
        transform: ${props => props.theme === lightTheme  ? 'translateX(-20px)' : 'translateX(20px)'};
      }
  
      &:nth-child(2) {
        transform: ${props => props.theme === lightTheme  ? 'translateX(30)' : 'translateX(10)'};
      }
    }

`;



const Toggle = ({ isDark, setIsDark }) => {
  function handleClick() {
    localStorage.setItem('isDark', !isDark);
    setIsDark(!isDark);
  }
    return (
      <Button onClick={handleClick}>
         { isDark === true ? <img src={Moon} alt="Moon" title="Moon"/> :
          <img src={Sun} alt="Sun" title="Sun"/>
         } 
      </Button>
    );
};



export default Toggle;