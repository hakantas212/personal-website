import React from 'react';

import { ThemeProvider } from './themeContext';
import GlobalStyles from './Globalstyles';

function App({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default App;