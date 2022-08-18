import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
  }
  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
    width: full;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
