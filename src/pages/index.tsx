import * as React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Planner from "../components/Planner/Planner"
import Title from "../components/Title"
import About from "../components/About"
import Testimonials from "../components/Testimonials"
import Why from "../components/Why"
import Equipment from "../components/Equipment"
import Modal, { Modal_t } from "../components/Modal"

export default function indexPage() {
  return (
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
  )
}

const S = styled.div`
  height: 10rem;
`
