import React  from 'react';
import styled from 'styled-components';

const Button = styled.button`
  
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
  outline: none;
  }

`;



const Toggle = ({ isDark, setIsDark }) => {
  function handleClick() {
    localStorage.setItem('isDark', !isDark);
    setIsDark(!isDark);
  }
    return (
      <Button onClick={handleClick}>

      </Button>
    );
};



export default Toggle;