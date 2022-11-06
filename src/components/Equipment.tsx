import React from "react"
import styled from "styled-components"
import Container from "./Container"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

export default function Equipment({}: Props) {
  return (
    <Root>
      {/* <StaticImage
        style={{ height: "100%" }}
        src="../images/DanceFar4.jpg"
        alt="A lit wedding party"
      /> */}
      <Cover>
        <Container>
          <h2>Equipment</h2>
          <p>
            I own most of the equipment necessary to perform a wedding, from
            ceremony to reception.
          </p>
          <h4>Sound</h4>
          <p>
            I rent sound equipment from a reputable, local company. This ensures
            that every show I do has the ideal sound setup. If you want to go
            bigger, that is always an option!
          </p>
          <h4>Lighting</h4>
          <p>
            I have one of the best light systems you will ever see from a
            personal DJ. The setup contains pars, derby lights, light bars,
            strobes, moving spotlights, and more. I even bring 4 edison bulb
            string lights that can be controlled with the rest of the setup. Or
            I can take control of string lights at the venue if possible.
          </p>
          <p>
            Most importantly, my lighting setup runs on a app I designed myself.{" "}
            <Link href="captivatesynth.com">Captivate</Link> allows me to
            synchronize every light to music. It also allows me to take control
            in a way you rarely see outside of a high-production show.
          </p>
          <h4>Redundancy</h4>
          <p>
            I recognize how imporant it is that things go perfectly on the big
            day, so I plan for redundancy at every reasonable point of the
            system. I run lighing and sound on separate laptops, but each laptop
            is capable of running both if need be. And I bring a dedicated
            backup phone that is pre-loaded with hand-selected songs.
          </p>
        </Container>
      </Cover>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  /* height: 100vh; */
  color: #f8f8f8;
  background-color: #444;
`

const Cover = styled.div`
  /* position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0005;
  padding: 20vh 0;
`

const Row = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  margin: 0 -1rem;
  justify-content: space-between;
`

const Item = styled.div`
  margin: 1rem;
  min-width: 15rem;
  flex: 1 1 15rem;
`

const Link = styled.a`
  color: #55f;
`
