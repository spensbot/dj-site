import React, { useState } from "react"
import styled from 'styled-components'
import { Slider, Button, TextField, Switch } from '@material-ui/core'
import { DatePicker, TimePicker } from '@material-ui/pickers'
import { Dayjs } from 'dayjs'

interface TimeSlot {
  minutes: number
  title: string
  comment: string
  sub: string[]
}

interface State {
  date?: number // unix
  location?: string
  indoor?: boolean
  attendeeCount?: number
  internet?: boolean
  planner?: 'dj' | string
  announcer?: 'dj' | string
  // MUSIC
  slowPlaylist?: string
  dancePlaylist?: string
  clientMix?: number
  slowMix?: number
  // LIGHTS
  strobesOk?: boolean
  lasersOk?: boolean
  hazeOk?: boolean
  // TIMELINE
  time?: number
  // slots?: TimeSlot[]
}

const DateItem = ({ k, state, setState }: ItemProps) => {
  const val = state[k] as number

  const onChange = (newDate: Dayjs) => setState({
    ...state,
    [k]: newDate.unix()
  })
    
  return <DatePicker label={k} value={new Date(val * 1000)} onChange={onChange} />
}

const TimeItem = ({ k, state, setState }: ItemProps) => {
  const val = state[k] as number

  const onChange = (newVal: Dayjs) => setState({
    ...state,
    [k]: newVal.unix()
  })
    
  return <TimePicker label={k} value={new Date(val * 1000)} onChange={onChange}/>
}

const SliderItem = ({ k, state, setState }: ItemProps) => {
  const val = state[k] as number

  const onChange = (newVal: number) => setState({
    ...state,
    [k]: newVal
  })
    
  return (
    <>
      <ItemLabel>{k}</ItemLabel>
      <Slider value={val} onChange={(e, newVal) => onChange(newVal as number)}/>
    </>
  )
}

const TextItem = ({ k, state, setState }: ItemProps) => {
  const val = state[k] as string

  const onChange = (newVal: string) => setState({
    ...state,
    [k]: newVal
  })
    
  return <TextField id={k} value={val} label={k} onChange={(e) => onChange(e.target.value)} />
}

const BoolItem = ({ k, state, setState }: ItemProps) => {
  const val = state[k] as boolean

  const onChange = (newVal: boolean) => setState({
    ...state,
    [k]: newVal
  })
    
  return <Row>
    <ItemLabel>{k}</ItemLabel>
    <Switch checked={val} onChange={(e) => onChange(!val)}></Switch>
  </Row>
}


const components: {[key in keyof Required<State>]: (props: ItemProps) => React.ReactElement} = {
  date: DateItem,
  location: TextItem,
  indoor: BoolItem,
  attendeeCount: SliderItem,
  internet: BoolItem,
  planner: TextItem,
  announcer: TextItem,
  slowPlaylist: TextItem,
  dancePlaylist: TextItem,
  clientMix: SliderItem,
  slowMix: SliderItem,
  strobesOk: BoolItem,
  lasersOk: BoolItem,
  hazeOk: BoolItem,
  time: TimeItem
}

type StateKey = keyof State

const keys: StateKey[] = ['date', 'location', 'indoor', 'attendeeCount', 'internet', 'planner', 'announcer', 'slowPlaylist', 'dancePlaylist', 'clientMix', 'slowMix', 'strobesOk', 'lasersOk', 'hazeOk', 'time'] // 'slots']

export default function Planner() {
  const [state, setState] = useState<State>({})

  return (
    <Root>
      {keys.map((key, i) => {
        const component = components[key]
        const props: ItemProps = {
          key: key,
          k: key,
          state: state,
          setState: setState
        } 
        return shouldShow(i, state) ? component(props) : null
      })}
    </Root>
  )
}

function shouldShow(i: number, state: State): boolean {
  if (i === 0) {
    return true
  } else {
    if (state[keys[i]] === undefined && state[keys[i-1]] === undefined) {
      return false
    } else {
      return true
    }
  }
}

// type SetState = (newState: State) => void
// type MakeItem<T> = (setState: SetState) => (props: ItemProps<T>) => React.ReactElement

interface ItemProps {
  key: string
  k: keyof State
  state: State
  setState: (newState: State) => void
}

// const MakeSliderItem: MakeItem<number> = (setState) => ({ k, val, onChange }) => (
//   <>
//     <ItemLabel>{k}</ItemLabel>
//     <Slider value={val} onChange={(e, val) => onChange(val as number)}/>
//   </>
// )

// const MakeTextItem: MakeItem<string> = (setState) => ({k, val, onChange}) => (
//   <TextField id={k} value={val} label={k} onChange={(e) => onChange(e.target.value)} />
// )

// const MakeBoolItem: MakeItem<boolean> = (setState) => ({ k, val, onChange }) => (
//   <Switch checked={val} onChange={(e) => onChange(!val)}></Switch>
// )

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 35rem;
`

const ItemRoot = styled.div`

`

const ItemLabel = styled.div`

`

const Row = styled.div`
  display: flex;
  align-items: center;
`