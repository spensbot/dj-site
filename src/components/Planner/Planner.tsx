import React, { useState } from "react"
import styled from 'styled-components'
import Container from '../Container'
import Field from './Field'
import SubmitButton from './SubmitButton'
import { State, stateKeys } from './State'
import { fieldsInfo } from './Field'

const SAVE_KEY = 'plannerState'

function getDefaultState() {
  return { [stateKeys[0]]: fieldsInfo[stateKeys[0]].def }
}

export default function Planner() {
  let startingState = getDefaultState()
  const saveString = localStorage.getItem(SAVE_KEY)
  if (saveString) startingState = JSON.parse(saveString)

  const [state, setStateRaw] = useState<State>(startingState)
  const [selected, setSelected] = useState<keyof State | null>(stateKeys[0])

  const setState = (newState: State) => {
    localStorage.setItem(SAVE_KEY, JSON.stringify(newState))
    setStateRaw(newState)
  }

  const resetState = () => {
    setState(getDefaultState())
    setSelected(stateKeys[0])
  }

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
      <SubmitButton state={state} setState={setState} setSelected={setSelected} resetState={resetState} />
    </Container>
  )
}

const Root = styled.div`

`

const Fields = styled.div`
  margin-bottom: 0.5rem;
`

const PlanningTitle = styled.h2`

`

const PlanningSubtitle = styled.h4`

`
