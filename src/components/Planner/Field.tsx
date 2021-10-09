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

export const fieldsInfo: { [key in keyof Required<State>]: {
  EditComponent: (props: EC.Props<State[key]>) => React.ReactElement
  def: State[key]
  label: string
  valToString?: (val: State[key]) => string
  explanation?: string
  insight?: string[]
} } = {
  date: {
    EditComponent: EC.Date_, def: dayjs().unix(), label: 'Date',
    valToString: val => dayjs(val).format('DD/MM/YYYY'),
    explanation: 'When is the wedding?'
  },
  location: {
    EditComponent: EC.Text_, def: '', label: 'Location',
    explanation: 'Where will the wedding take place?'
  },
  indoor: {
    EditComponent: EC.Bool_, def: true, label: 'Indoors?',
    explanation: 'Will the reception take place indoors. Will the Dance Floor/DJ Booth be covered from the elements?'
  },
  attendeeCount: { EditComponent: EC.Slider_, def: 50, label: 'Guests',
    explanation: `How many guests will attend?`,
    insight: [
      'Very Small, We want a dance party with just us',
      ''
    ]
  },
  internet: { EditComponent: EC.Bool_, def: true, label: 'Internet?',
    explanation: `Will there be internet at the venue?`
  },
  planner: { EditComponent: EC.Text_, def: 'DJ', label: 'Organizer',
    explanation: `Who should the DJ/Announcer look to for timing of announcements?
    Note that this can only be 1 person`
  },
  announcer: { EditComponent: EC.Text_, def: 'DJ', label: 'Announcer',
    explanation: `Who would you like to MC your reception? This person will announce things like toasts, cake cutting, etc. and keep things moving.
    Note that the DJ will allows announce first dances.`
  },
  slowPlaylist: { EditComponent: EC.Text_, def: '', label: 'Slow Playlist',
    explanation: 'Give me a link to a playlist with slow songs you would like at your wedding'
  },
  dancePlaylist: { EditComponent: EC.Text_, def: '', label: 'Dance Playlist',
    explanation: 'Give me a link to a playlist with upbeat, dancy songs for your wedding'
  },
  clientMix: { EditComponent: EC.Slider_, def: 0.5, label: 'Client Mix',
    explanation: 'How much would you like me to stick to the provided playlists?',
    insight: [
      'Play songs that fit the vibe',
      'Play songs that fit the vibe, but be sure to play one of our songs every now and again',
      'Play an even mix of our songs',
      'Mostly play our songs, and throw in random songs occasionally as you see fit',
      'Only play the songs we give you'
    ]
  },
  slowMix: { EditComponent: EC.Slider_, def: 0.2, label: 'Slow Song Mix',
    explanation: 'What mix of slow songs would you like at the reception?',
    insight: [
      'Only play bangers, no slow songs please',
      'Feel it out, play a slow song on occasion if it feels appropriate',
      'Play a slow song for every 3 or 4 dancy songs',
      'Play an even mix of slow/upbeat songs',
      'Only play slow jams, I wanna cry all reception'
    ]
  },
  strobesOk: { EditComponent: EC.Bool_, def: true, label: 'Strobe Lights?',
    explanation: 'Can strobe lights be used at the reception?'
  },
  lasersOk: { EditComponent: EC.Bool_, def: true, label: 'Lasers?',
    explanation: 'Can lasers be used at the reception?'
  },
  hazeOk: { EditComponent: EC.Bool_, def: true, label: 'Haze?',
    explanation: 'Can haze be used at the reception? Haze is like fog and makes the lights look cooler'
  },
  time: {
    EditComponent: EC.Time_, def: dayjs().unix(), label: 'Time',
    valToString: val => dayjs(val).format('HH:mm'),
    explanation: ''
  }
}

export default function Field({ stateKey, selected, state, setState, setSelected }: FieldProps) {
  const { EditComponent, def, label, valToString, explanation } = fieldsInfo[stateKey]
  const fieldInfo = fieldsInfo[stateKey]
  
  const isSelected = stateKey === selected
  const hasBeenEdited = state[stateKey] !== undefined
  if (!hasBeenEdited && !isSelected) return null

  const val = state[stateKey]

  console.log(`key: ${stateKey} = ${val}`)

  let valString = `${val}`
  if (valToString !== undefined) {
    valString = valToString(val)
  }

  if (isSelected) {
    return (
      <Selected>
        <div>
          <EditComponent value={val} label={label} setField={newVal => setState({
            ...state,
            [stateKey]: newVal
          })} />
          {explanation && <Info>{explanation}</Info>}
        </div>
        <div style={{height: '2rem'}}/>
      </Selected>
    )
  } else {
    return (
      <NotSelected onClick={() => setSelected(stateKey)}>
        {`${label}: ${valString}`}
      </NotSelected>
    )
  }
}

const Selected = styled.div`
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Info = styled.div`
  margin-top: 0.5rem;
  opacity: 0.5;
  font-size: 0.9rem;
`

const NotSelected = styled.div`
  padding-bottom: 0.5rem;
  cursor: pointer;
  opacity: 0.5;
  :hover {
    opacity: 1.0;
  }
`
