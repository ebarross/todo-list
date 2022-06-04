import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #080708;
  }

  html, body, #root {
    height: 100%;
  }
`;
