import React, { useState } from "react"
import styled from "styled-components"
import Container from "../Container"
import Field from "./Field"
import SubmitButton from "./SubmitButton"
import { State, stateKeys } from "./State"
import { fieldsInfo } from "./Field"

const SAVE_KEY = "plannerState"

function getDefaultState() {
  return { [stateKeys[0]]: fieldsInfo[stateKeys[0]].def }
}

export default function Planner() {
  let startingState = getDefaultState()
  if (typeof window !== "undefined") {
    const saveString = localStorage.getItem(SAVE_KEY)
    if (saveString) startingState = JSON.parse(saveString)
  }

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
        <p>This form will help me plan for the big day.</p>
        <p>We can work out the details and create a contract later!</p>
      </PlanningSubtitle>
      <Fields>
        {stateKeys.map((stateKey) => (
          <Field
            key={stateKey}
            stateKey={stateKey}
            selected={selected}
            state={state}
            setState={setState}
            setSelected={setSelected}
          />
        ))}
      </Fields>
      <SubmitButton
        state={state}
        setState={setState}
        setSelected={setSelected}
        resetState={resetState}
      />
      <div style={{ height: "8rem" }} />
      <h2>Contact</h2>
      <p>Spenser0Saling@gmail.com</p>
    </Container>
  )
}

const Root = styled.div``

const Fields = styled.div`
  margin-bottom: 0.5rem;
`

const PlanningTitle = styled.h2``

const PlanningSubtitle = styled.h4``
