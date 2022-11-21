import React from "react"
import styled from "styled-components"
import Container from "./Container"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

const Content = () => (
  <Cover>
    <Container bg="#000a">
      <h2>Equipment</h2>
      <h4>Sound</h4>
      <p>
        I rent sound equipment from a reputable, local company. This ensures
        that every show I do has the ideal sound setup. If you want to go
        bigger, that is always an option!
      </p>
      <h4>Lighting</h4>
      <p>
        I have one of the best light systems you will ever see from a personal
        DJ. The setup contains pars, derby lights, light bars, strobes, moving
        spotlights, and more. I even bring 4 edison bulb string lights that can
        be controlled with the rest of the setup. Or I can take control of
        string lights at the venue if possible.
      </p>
      <p>
        Most importantly, my lighting setup runs on a app I designed myself.{" "}
        <Link href="captivatesynth.com">Captivate</Link> allows me to
        synchronize every light to the music in a way rarely seen outside of a
        high-production show.
      </p>
      <h4>Redundancy</h4>
      <p>
        I recognize how imporant it is that things go perfectly on the big day,
        so I plan for redundancy at every reasonable point in the system. I run
        lighing and sound on separate laptops, but each laptop is capable of
        running both if need be. And I bring a dedicated backup phone that is
        pre-loaded with hand-selected songs.
      </p>
    </Container>
  </Cover>
)

export default function Equipment({}: Props) {
  return (
    <Root>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <StaticImage
          style={{ width: "100%", height: "100%" }}
          src="../images/DanceFar4.jpg"
          alt="A lit wedding party"
        />
      </div>
      <Content />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Content />
      </div>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  color: #f8f8f8;
  background-color: #444;
`

const Cover = styled.div`
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0005;
  padding: 15vh 0;
`

const Link = styled.a`
  color: #bbf;
`
