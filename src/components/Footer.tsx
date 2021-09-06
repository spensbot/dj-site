import React from 'react'
import styled from 'styled-components'

interface Props {

}

export default function Footer({ }: Props) {
  return (
    <Root>
      <Text>
        Made with ❤️ in Portland, OR
      </Text>
    </Root>
  )
}

const Root = styled.div`
  background-color: #333;
  color: #aaa;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`

`
