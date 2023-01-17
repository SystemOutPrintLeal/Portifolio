import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px #000;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #E50914;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #E50914; 
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  } 

  body {
    background: linear-gradient(80deg, #0a0a0a, #111111);
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, a {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: #FFF;
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #FFF;
  }
`

export default {GlobalStyle}