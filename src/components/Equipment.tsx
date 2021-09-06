import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import { StaticImage } from 'gatsby-plugin-image'

interface Props {

}

export default function Equipment({ }: Props) {
  return (
    <Root>
      <StaticImage style={{height: '100%'}} src="../images/DanceFar4.jpg" alt="A lit wedding party" />
      <Cover>
        <Container>
          <h2>Equipment</h2>
          <p>2x 150 watt Speakers</p>
          <p>Other Stuff</p>
        </Container>
      </Cover>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  height: 100vh;
  color: #f8f8f8;
`

const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0005;
`
