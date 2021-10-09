import React from "react"
import styled from 'styled-components'
import { Slider, TextField, Switch } from '@material-ui/core'
import { DatePicker, TimePicker } from '@material-ui/pickers'

export interface Props<T> {
  value: T
  label: string
  setField: (newVal: T) => void
}

export const Date_ = ({ value, label, setField }: Props<number>) => {
  return <DatePicker label={label} value={new Date(value)} onChange={newDate => setField(newDate.unix())} />
}

export const Time_ = ({ value, label, setField }: Props<number>) => {
  return <TimePicker label={label} value={new Date(value)} onChange={newDate => setField(newDate.unix())}/>
}

export function PickItem<T>( list: T[], normalized: number ) {
  const max = list.length
  let index = Math.floor(normalized * max)
  if (index === max) { index -= 1 }
  return list[index]
}

function pickOne<T>(normalizedVal: number, list: T[]) {
  let index = Math.floor(normalizedVal * list.length)
  if (index === list.length) index -= 1;
  return list[index]
}

export function getSliderInsight(val: number, label: string) {
  if (label === 'Guests') {
    if (val < 0.005) return `I don't need anybody; I'm marrying myself - Just play music so I can dance.`
    if (val > 0.99) return 'medium wedding: (The equipment is not loud enough for a group of more than 100 people)'
    return pickOne(val, [
      'very small wedding',
      'small wedding',
      'medium wedding'
    ])
  } else if (label === 'Client Mix') {
    return pickOne(val, [
      'Play songs that fit the vibe',
      'Play songs that fit the vibe, but be sure to play one of our songs every now and again',
      'Play an even mix of our songs',
      'Mostly play our songs, and throw in random songs occasionally as you see fit',
      'Only play the songs we give you'
    ])
  } else if (label === 'Slow Song Mix') {
    return pickOne(val, [
      'Only play bangers, no slow songs please',
      'Feel it out, play a slow song on occasion if it feels appropriate',
      'Play a slow song for every 3 or 4 dancy songs',
      'Play an even mix of slow/upbeat songs',
      'Only play slow jams, I wanna cry all reception'
    ])
  } else {
    return ''
  }
}

export const Slider_ = ({ value, label, setField }: Props<number>) => {
  console.log(value)
  
  const insight = getSliderInsight(value * 0.01, label)

  return (
    <>
      <ItemLabel>
        {`${label} - ${value}`}
        <Insight>{insight}</Insight>
      </ItemLabel>
      <Slider value={value} onChange={(e, newVal) => setField(newVal as number)}/>
    </>
  )
}

export const Text_ = ({ value, label, setField }: Props<string>) => {
  return <TextField id={label} value={value} label={label} onChange={(e) => setField(e.target.value)} />
}

export const Bool_ = ({ value, label, setField }: Props<boolean>) => {
  return <Row>
    <ItemLabel>{label}</ItemLabel>
    <Switch checked={value} onChange={(e) => setField(e.target.checked)}></Switch>
  </Row>
}

const ItemLabel = styled.div`
  display: flex;
  align-items: center;
`

const Insight = styled.span`
  margin-left: 1rem;
  opacity: 0.5;
  font-size: 0.9rem;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`
