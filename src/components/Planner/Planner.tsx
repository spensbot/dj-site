import React, { useState } from "react"
import styled from 'styled-components'
import Container from '../Container'
import Field from './Field'
import SubmitButton from './SubmitButton'
import { State, stateKeys } from './State'

export default function Planner() {
  const [state, setState] = useState<State>({})
  const [selected, setSelected] = useState<keyof State | null>(stateKeys[0])

  return (
    <Container>
      <PlanningTitle>Wedding Plan</PlanningTitle>
      <PlanningSubtitle>
        <p>Fill out this form to give me an idea of how you want your reception to go.</p>
        <p>If you want to move forward, we'll finalize the details and create a contract later :)</p>
      </PlanningSubtitle>
      <Fields>
        {stateKeys.map(stateKey => <Field key={stateKey} stateKey={stateKey} selected={selected} state={state} setState={setState} setSelected={setSelected}/>)}
      </Fields>
      <SubmitButton state={state} setSelected={setSelected}/>
    </Container>
  )
}

const Root = styled.div`

`

const Fields = styled.div`

`

const PlanningTitle = styled.h2`

`

const PlanningSubtitle = styled.h4`

`
