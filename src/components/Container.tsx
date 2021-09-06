import React from 'react'
import styled from 'styled-components'

export default function Container({children}) {
  return (
    <Root>
      {children}
    </Root>
  )
}

const Root = styled.div`
  width: 90%;
  max-width: 55rem;
  margin: auto;
`
