import * as React from "react"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DayjsUtils from "@date-io/dayjs"
import { ThemeProvider } from "styled-components"
import "@fontsource/roboto"
import "@fontsource/urbanist"
import "@fontsource/pacifico"

interface Theme_t {
  spacing: (val: number) => string
  sectionSpacing: string
}

const theme: Theme_t = {
  spacing: (val) => `${val}rem`,
  sectionSpacing: "5rem",
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Roboto"
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

export default function Layout({ children }) {
  return (
    <>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
          <Footer />
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </>
  )
}
