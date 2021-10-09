import React from 'react'
import styled from 'styled-components'
import { State, stateKeys } from './State'
import { Button } from '@material-ui/core'
import { fieldsInfo } from './Field'
import { SetModalContext } from '../Context'

interface Props {
  state: State
  setState: (newState: State) => void
  setSelected: (newSelected: keyof State) => void
  resetState: () => void
}

function nextToComplete(state: State) {
  for (const key of stateKeys)
    if (state[key] === undefined)
      return key
  return undefined
}

export default function SubmitButton({ state, setState, setSelected, resetState }: Props) {
  const setModal = React.useContext(SetModalContext)

  const next = nextToComplete(state)

  const onContinue = () => {
    setState({
      ...state,
      [next]: fieldsInfo[next].def
    })
    setSelected(next)
  }

  const onReset = () => {
    setModal({
      title: 'Start Over?',
      text: 'All fields will be erased',
      button: {
        label: 'Yes',
        onClick: () => { resetState(); setModal(null) }
      },
      secondaryButton: {
        label: 'Nevermind',
        onClick: () => setModal(null)
      }
    })
  }

  return (
    <Root>
      {next === undefined
        ? <Button variant="contained" style={{marginRight: '1rem'}}>Create Contract</Button>
        : <Button variant="contained" style={{marginRight: '1rem'}} onClick={onContinue}>Continue</Button>
      }
      <Button variant='outlined' onClick={onReset}>Start Over</Button>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
`