import React from "react"
import styled from "styled-components"
import { State, stateKeys } from "./State"
import { Button } from "@mui/material"
import { copyState, emailState, fieldsInfo, saveState } from "./Field"
import { ModalContext } from "../Modal"

interface Props {
  state: State
  setState: (newState: State) => void
  setSelected: (newSelected: keyof State) => void
  resetState: () => void
}

function nextToComplete(state: State) {
  for (const key of stateKeys) if (state[key] === undefined) return key
  return undefined
}

export default function SubmitButton({
  state,
  setState,
  setSelected,
  resetState,
}: Props) {
  const { modal, setModal } = React.useContext(ModalContext)

  const next = nextToComplete(state)

  const onContinue = () => {
    setState({
      ...state,
      //@ts-ignore
      [next]: fieldsInfo[next].def,
    })
    //@ts-ignore
    setSelected(next)
  }

  const onReset = () => {
    // I hate this method, but I don't have time to figure out how to get a modal working in Gatsby
    if (confirm("Start Over?\nAll fields will be erased")) {
      resetState()
    }

    // setModal({
    //   title: "Start Over?",
    //   text: "All fields will be erased",
    //   button: {
    //     label: "Yes",
    //     onClick: () => {
    //       resetState()
    //       setModal(null)
    //     },
    //   },
    //   secondaryButton: {
    //     label: "Nevermind",
    //     onClick: () => setModal(null),
    //   },
    // })
  }

  return (
    <Root>
      {next === undefined ? (
        <>
          <Button
            variant="contained"
            style={{ marginRight: "1rem" }}
            onClick={() => saveState(state)}
          >
            Save Details
          </Button>
          <Button
            variant="contained"
            style={{ marginRight: "1rem" }}
            onClick={() => copyState(state)}
          >
            Copy
          </Button>
          <Button
            variant="contained"
            style={{ marginRight: "1rem" }}
            onClick={() => emailState(state)}
          >
            Email
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={onContinue}
        >
          Continue
        </Button>
      )}
      <Button variant="outlined" onClick={onReset}>
        Start Over
      </Button>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
`
