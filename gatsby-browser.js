import React from 'react';
import App from './src/components/App';
import "typeface-inter"
import "typeface-archivo"
export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};

