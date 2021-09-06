import * as React from "react"
import styled from 'styled-components'
import Planner from '../components/Planner'
import Container from '../components/Container'

export default function Planning() {
  return (
    <Container>
      <PlanningTitle>Wedding Plan</PlanningTitle>
      <PlanningSubtitle>
        <p>Fill out this form to give me an idea of how you want your reception to go.</p>
        <p>If you want to move forward, we'll finalize the details and create a contract later :)</p>
      </PlanningSubtitle>
      <Planner />
    </Container>
  )
}

const Root = styled.div`

`

const PlanningTitle = styled.h2`

`

const PlanningSubtitle = styled.h4`

`
