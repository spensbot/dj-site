import { Button } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { ModalContext } from './Context'

export interface ModalButton_t {
  label: string
  onClick: () => void
}

export interface Modal_t {
  title: string
  text: string
  button: ModalButton_t
  secondaryButton?: ModalButton_t
}

const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null

export default function Modal() {
  const modal = useContext(ModalContext)
  
  if (modal === null) return null

  const { title, text, button, secondaryButton } = modal

  const child = (
    <Root>
      <Modal_>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Button variant='contained' color='primary' style={{marginRight: '1rem'}} onClick={button.onClick}>{button.label}</Button>
        { secondaryButton && <Button variant='outlined' onClick={secondaryButton.onClick}>{secondaryButton.label}</Button> }
      </Modal_>
    </Root>
  )

  if (portalRoot) return ReactDOM.createPortal(child, portalRoot)

  return 
}

const Root = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #0007;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal_ = styled.div`
  padding: 3rem;
  -webkit-box-shadow: 5px 5px 30px 0px #00000088; 
  box-shadow: 5px 5px 30px 0px #00000088;
  & > * {
    margin-bottom: 1rem;
  }
  background-color: #fff;
  min-width: 10rem;
`

const Title = styled.div`
  font-size: 1.6rem;
`

const Text = styled.div`
  font-size: 0.9rem;
  opacity: 0.5;
`