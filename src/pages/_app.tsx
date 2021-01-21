import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, tokens } from '@theme';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={tokens}>
        <GlobalStyle theme={tokens} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
