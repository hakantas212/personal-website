import React from 'react';
import { ThemeContext } from './themeContext';
import styled  from 'styled-components'
import Moon from '../images/moon.svg'
import Sun from '../images/sun.svg'


const ToggleTheme = styled.label`
    display: inline-flex;
    width: 60px;
    height: 30px;
    align-items: center;
    z-index: -1;

    span {
      position: relative;
      cursor: pointer;
      ::before, ::after {
        content: '';
        display: block;
        margin: 0 3px;
        transition: all 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
        background: #F4F4F7;
      }

      ::before {
        height: 1.7rem;
        width: 3.6rem;
        border-radius: 2em;
        opacity: 1;
        z-index: -1;
        position: relative;
        background-color: var(--color-iconColor);      }
      ::after {
        position: absolute;
        top: 50%;
        height: 1.9rem;
        width: 1.9rem;
        border-radius: 50%;
        box-shadow: 0 0 8px rgba(0,0,0,0.2), 0 0 2px rgba(0,0,0,0.4);
        transform: ${props => props.value === 'dark' ? 'translate(100%, -50%)' : ' translate(-5%, -50%)'} ;
      }

    }

    [type=checkbox] {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }
    .icon-wrapper {
      position: absolute;
      width: 4rem;
      height: 1.3rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      img {
        max-width: 1.3rem;
        height: 100%;
        position: relative;
      }
    }

`;

const Toggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
      <ToggleTheme value={colorMode}>
          <input
          type="checkbox"
          checked={colorMode === 'dark'}
          onChange={ev => {
          setColorMode(ev.target.checked ? 'dark' : 'light');
          }}
        />
          <div className="icon-wrapper">
          <img src={Moon} alt="Moon" title="Moon"/>
          <img src={Sun} alt="Sun" title="Sun"/>
          </div>
          <span></span>
      </ToggleTheme>
  );
};

export default Toggle;