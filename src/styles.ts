import { createGlobalStyle } from "styled-components"

const theme = {
  bg: "#bbb",
  text: "#003",
  accent: "#226",
  accentText: "#fff",
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
  h1 {
    font-size: 3rem;
    margin: 0;
    margin-bottom: 3rem;
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    margin-bottom: 2.5rem;
  }
  h3 {
    font-size: 2rem;
    margin: 0;
    margin-bottom: 2rem;
  }
  h4 {
    font-size: 1.7rem;
    margin: 0;
    margin-bottom: 1.7rem;
  }
  h5 {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.0rem;
    margin: 0;
    margin-bottom: 1.3rem;
  }
`

export { theme, GlobalStyle }
