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

export const Slider_ = ({ value, label, setField }: Props<number>) => {
  return (
    <>
      <ItemLabel>{label}</ItemLabel>
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

`

const Row = styled.div`
  display: flex;
  align-items: center;
`
