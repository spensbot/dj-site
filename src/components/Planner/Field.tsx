import React from "react"
import styled from "styled-components"
import { State, stateKeys } from "./State"
import dayjs from "dayjs"
import * as EC from "./EditComponents"
import DocMaker from "../../util/DocMaker"

interface FieldProps {
  stateKey: keyof State
  selected: keyof State
  state: State
  setSelected: (newSelected: keyof State) => void
  setState: (newState: State) => void
}

function attendee_string(normalized: number | undefined): string {
  return `${EC.attendee_count(normalized)}`
}

function mix_string(normalized: number | undefined): string {
  return `${Math.round((normalized ?? 0) * 100)}%`
}

export const fieldsInfo: {
  [key in keyof State]: {
    EditComponent: (props: EC.Props<State[key]>) => React.ReactElement
    def: State[key]
    label: string
    valToString?: (val: State[key]) => string
    explanation?: string
    insight?: string[]
  }
} = {
  name: {
    EditComponent: EC.Text_,
    def: "",
    label: "Your Name(s)",
    explanation: "Who will I have the pleasure of assisting?",
  },
  date: {
    EditComponent: EC.Date_,
    def: dayjs().unix(),
    label: "Date",
    valToString: (val) => dayjs(val * 1000).format("MMM, DD, YYYY"),
    explanation: "When is the wedding?",
  },
  location: {
    EditComponent: EC.Text_,
    def: "",
    label: "Location",
    explanation: "Where will the wedding take place?",
  },
  attendeeCount: {
    EditComponent: EC.Slider_(attendee_string),
    def: 0.5,
    label: "Guests",
    valToString: attendee_string,
    explanation: `How many guests will attend?`,
    insight: ["Very Small, We want a dance party with just us", ""],
  },
  internet: {
    EditComponent: EC.Bool_,
    def: true,
    label: "Internet?",
    explanation: `Will there be internet at the venue?`,
  },
  planner: {
    EditComponent: EC.Text_,
    def: "DJ",
    label: "Organizer",
    explanation: `Who should the DJ/Announcer look to for timing of announcements?
    Note that this can only be 1 person`,
  },
  announcer: {
    EditComponent: EC.Text_,
    def: "DJ",
    label: "Announcer",
    explanation: `Who would you like to MC your reception? This person will announce things like toasts, cake cutting, etc. and keep things moving.
    Note that the DJ will announce first dances.`,
  },
  slowPlaylist: {
    EditComponent: EC.Text_,
    def: "",
    label: "Slow Playlist",
    explanation:
      "Give me a link to a playlist with slow songs you would like at your wedding",
  },
  dancePlaylist: {
    EditComponent: EC.Text_,
    def: "",
    label: "Dance Playlist",
    explanation:
      "Give me a link to a playlist with upbeat, dancy songs for your wedding",
  },
  clientMix: {
    EditComponent: EC.Slider_(mix_string),
    def: 0.5,
    label: "Client Mix",
    valToString: mix_string,
    explanation:
      "How much would you like me to stick to the provided playlists?",
    insight: [
      "Play songs that fit the vibe",
      "Play songs that fit the vibe, but play one of our songs every now and again",
      "Play an even mix of our songs",
      "Mostly play our songs, but you can throw on another song if it really fits",
      "Only play the songs we give you",
    ],
  },
  strobesOk: {
    EditComponent: EC.Bool_,
    def: true,
    label: "Strobe Lights?",
    explanation: "Can strobe lights be used at the reception?",
  },
  lasersOk: {
    EditComponent: EC.Bool_,
    def: true,
    label: "Lasers?",
    explanation: "Can lasers be used at the reception?",
  },
  hazeOk: {
    EditComponent: EC.Bool_,
    def: true,
    label: "Haze?",
    explanation:
      "Can haze be used at the reception? Haze is like fog and makes the lights look cooler",
  },
  time: {
    EditComponent: EC.Time_,
    def: dayjs().unix(),
    label: "Time",
    valToString: (val) => dayjs(val * 1000).format("HH:mm"),
    explanation: "",
  },
}

export default function Field({
  stateKey,
  selected,
  state,
  setState,
  setSelected,
}: FieldProps) {
  const { EditComponent, def, label, valToString, explanation } =
    fieldsInfo[stateKey]
  const fieldInfo = fieldsInfo[stateKey]

  const isSelected = stateKey === selected
  const hasBeenEdited = state[stateKey] !== undefined
  if (!hasBeenEdited && !isSelected) return null

  const val = state[stateKey]

  let valString = `${val}`
  if (valToString !== undefined) {
    valString = valToString(val)
  }

  if (isSelected) {
    return (
      <Selected>
        <div>
          <EditComponent
            value={val}
            label={label}
            setField={(newVal) =>
              setState({
                ...state,
                [stateKey]: newVal,
              })
            }
          />
          {explanation && <Info>{explanation}</Info>}
        </div>
        <div style={{ height: "2rem" }} />
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
    opacity: 1;
  }
`

export function saveState(state: State) {
  let doc = new DocMaker()

  doc.p(`Wedding Outline for ${state.name}\n`)

  for (const key of stateKeys) {
    let string = `${state[key]}`
    let valToString = fieldsInfo[key].valToString
    if (valToString !== undefined) {
      string = valToString(state[key])
    }

    doc.p(`${fieldsInfo[key].label}  ${string}`)
  }

  doc.p(`\nFeel Free to email this to me, and let's start planning!`)
  doc.p(`spenser0saling@gmail.com`)

  doc.download_as(`Wedding Outline for ${state.name}`)
}

export function copyState(state: State) {
  let doc = new DocMaker()

  doc.p(`Wedding Outline for ${state.name}\n`)

  for (const key of stateKeys) {
    let string = `${state[key]}`
    let valToString = fieldsInfo[key].valToString
    if (valToString !== undefined) {
      string = valToString(state[key])
    }

    doc.p(`${fieldsInfo[key].label}  ${string}`)
  }

  doc.copy()
}

export function emailState(state: State) {
  let doc = new DocMaker()

  doc.p(`Wedding Outline for ${state.name}\n`)

  for (const key of stateKeys) {
    let string = `${state[key]}`
    let valToString = fieldsInfo[key].valToString
    if (valToString !== undefined) {
      string = valToString(state[key])
    }

    doc.p(`${fieldsInfo[key].label}  ${string}`)
  }

  doc.email(`Wedding Outline for ${state.name}`)
}
