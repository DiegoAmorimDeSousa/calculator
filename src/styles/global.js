import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&family=Rubik+Moonrocks&display=swap');

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

  :root {
    --font-family-rubik: 'Rubik Moonrocks', cursive;
    --font-family-roboto: 'Roboto Condensed', sans-serif;
    --color-white: #FFFFFF;
    --color-purple: #914BBB;
    --color-purple-hover: #4D3D93;
  }
`;