import React from "react"
import styled from "styled-components"

export default function Container({ children, bg }: { children; bg?: string }) {
  return <Root style={{ backgroundColor: bg }}>{children}</Root>
}

const Root = styled.div`
  width: 90%;
  max-width: 55rem;
  margin: auto;
  padding: 1rem;
`
