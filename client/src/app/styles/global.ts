import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    color: black;
    text-decoration: none;
    font-family: system-ui;
    font-size: 16px;
    box-sizing: border-box;
  }

  body {
    width: 1000px;
    height: 100vh;
    margin: 0 auto;
  }

  #root {
    height: 100vh;
  }
`