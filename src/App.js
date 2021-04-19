import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <div>New App</div>
    </ThemeProvider>
  );
}

export default App;
