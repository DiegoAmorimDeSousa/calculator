import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    background: #EFEFEF;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;