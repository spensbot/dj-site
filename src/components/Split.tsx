import React from 'react'
import styled from 'styled-components'

interface Props {
  flexL: string
  flexR: string
  spacing?: string
  children: React.ReactNodeArray
}

export default function Split({children, flexL, flexR, spacing="2rem"}: Props) {
  return (
    <Root style={{marginRight: '-' + spacing, marginBottom: '-' + spacing}}>
      <Left style={{flex: flexL, marginRight: spacing, marginBottom: spacing}}>
        {children[0]}
      </Left>
      <Right style={{flex: flexR, marginRight: spacing, marginBottom: spacing}}>
        {children[1]}
      </Right>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Left = styled.div``

const Right = styled.div``
