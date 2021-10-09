import * as React from "react"
import styled from 'styled-components'
import Planner from '../components/Planner/Planner'
import Title from '../components/Title'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Layout from '../components/Layout'
import Why from '../components/Why'
import Equipment from '../components/Equipment'
import Modal, { Modal_t } from '../components/Modal'
import { ModalContext, SetModalContext } from '../components/Context'

export default function indexPage() {
  const [modal, setModal] = React.useState<Modal_t | null>(null)

  return (
    <SetModalContext.Provider value={setModal}>
      <ModalContext.Provider value={modal}>
        <Layout>
          <Title />
          <S />
          <About />
          <S />
          <Why />
          <S />
          <Testimonials />
          <S />
          <Equipment />
          <S />
          <Planner />
          <S />
          <Modal />
        </Layout>
        </ModalContext.Provider>
      </SetModalContext.Provider>
  )
}

const S = styled.div`
  height: 10rem;
`