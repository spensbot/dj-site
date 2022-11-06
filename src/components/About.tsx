import * as React from "react"
import styled from "styled-components"
import Container from "../components/Container"
import { StaticImage } from "gatsby-plugin-image"
import Split from "../components/Split"

export default function About() {
  return (
    <Root>
      <Container>
        <Split flexL="2 1 25rem" flexR="0 0 20rem">
          <>
            <h2>About the DJ</h2>
            <p>
              I'm a game developer by trade. But I have a passion for music and
              visuals.
            </p>
            <p>I've been playing, writing, and mixing music my entire life.</p>
            <p>
              Recently, I became fascinated with stage lighting, to the point of
              creating my own stage lighting software.
            </p>
            <p>
              Through the years, I developed an intimate understanding of the
              gear involved in a DJ setup.
            </p>
          </>
          <>
            <StaticImage src="../images/me.jpeg" alt="The DJ, Spenser Saling" />
          </>
        </Split>
      </Container>
    </Root>
  )
}

const Root = styled.div``
