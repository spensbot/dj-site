import React from 'react'
import styled from 'styled-components'
import { State } from './State'
import dayjs from 'dayjs'
import * as EC from './EditComponents'

interface FieldProps {
  stateKey: keyof State
  selected: keyof State
  state: State
  setSelected: (newSelected: keyof State) => void
  setState: (newState: State) => void
}

const fieldsInfo: { [key in keyof Required<State>]: {
  EditComponent: (props: EC.Props<State[key]>) => React.ReactElement
  def: State[key]
  label: string
  toString: (val: State[key]) => string
} } = {
  date: { EditComponent: EC.Date_, def: dayjs().unix(), label: 'Date' },
  location: { EditComponent: EC.Text_, def: '', label: 'Location' },
  indoor: { EditComponent: EC.Bool_, def: true, label: 'Indoors?' },
  attendeeCount: { EditComponent: EC.Slider_, def: 50, label: 'Guests' },
  internet: { EditComponent: EC.Bool_, def: true, label: 'Internet?' },
  planner: { EditComponent: EC.Text_, def: 'DJ', label: 'Organizer'},
  announcer: { EditComponent: EC.Text_, def: 'DJ', label: 'Announcer'},
  slowPlaylist: { EditComponent: EC.Text_, def: '', label: 'Slow Playlist'},
  dancePlaylist: { EditComponent: EC.Text_, def: '', label: 'Long Playlist'},
  clientMix: { EditComponent: EC.Slider_, def: 0.5, label: 'Song Mix'},
  slowMix: { EditComponent: EC.Slider_, def: 0.2, label: 'Slow Song Mix'},
  strobesOk: { EditComponent: EC.Bool_, def: true, label: 'Strobes?'},
  lasersOk: { EditComponent: EC.Bool_, def: true, label: 'Lasers?'},
  hazeOk: { EditComponent: EC.Bool_, def: true, label: 'Haze?'},
  time: { EditComponent: EC.Time_, def: dayjs().unix() / 1000, label: 'Time'}
}

export default function Field({ stateKey, selected, state, setState, setSelected }: FieldProps) {
  const {EditComponent, def, label, toString} = fieldsInfo[stateKey]
  
  const isSelected = stateKey === selected
  const hasBeenEdited = state[stateKey] !== undefined
  if (!hasBeenEdited && !isSelected) return null

  const val = state[stateKey]

  if (isSelected) {
    return (
      <Root>
        <EditComponent value={val} label={label} setField={newVal => setState({
          ...state,
          [stateKey]: newVal
        })}/>
      </Root>
    )
  } else {
    return (
      <Root>
        {label + ':' + toString(val)}
      </Root>
    )
  }
}

const Root = styled.div`

`
