import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Default */
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }
  body {
    background-color: #0d0d0d;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Ubuntu', sans-serif !important;
  }
`;

export default GlobalStyle;
