import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Chakra Petch', sans-serif;
    width: 100vw;
    height: 100vh;
  }
  `;
