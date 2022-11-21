import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../styles"
import Footer from "./Footer"
import { ModalContext, Modal_t } from "./Modal"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const [modal, _setModal] = useState<Modal_t | null>(null)

  const setModal = (modal: Modal_t | null) => {
    console.log("setModal")
    _setModal(modal)
  }

  return (
    <ThemeProvider theme={theme}>
      <ModalContext.Provider
        value={{
          modal,
          setModal,
        }}
      >
        <GlobalStyle />
        <main>{children}</main>
        <Footer />
      </ModalContext.Provider>
    </ThemeProvider>
  )
}

export default Layout
