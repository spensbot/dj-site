import React from 'react'
import { State, stateKeys } from './State'
import { Button } from '@material-ui/core'

interface Props {
  state: State
  setSelected: (newSelected: keyof State) => void
}

function nextToComplete(state: State) {
  for (const key of stateKeys)
    if (state[key] === undefined)
      return key
  return undefined
}

export default function SubmitButton({ state, setSelected }: Props) {
  const next = nextToComplete(state)

  if (next === undefined) {
    return <Button>Submit</Button>
  } else {
    return <Button color='info' onClick={() => setSelected(next)}>Continue</Button>
  }
}