import React from "react"
import styled from "styled-components"
import Container from "./Container"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

export default function Why({}: Props) {
  return (
    <Root>
      <StaticImage
        style={{ height: "100%" }}
        src="../images/DanceClose.jpg"
        alt="A lit wedding party"
      />
      <Cover>
        <Container bg="#000a">
          <h2>Why I DJ</h2>
          <p>Simply put, because it's fun!</p>
          <p>
            I love weddings. It's an honor to be a part of such a beautiful day.
            I enjoy crafting a fun, danceable atmosphere and energy for the
            reception.
          </p>
          <p>
            Because it's not a full-time job, I bring an energy and enthusiasm
            that most DJ's can't.
          </p>
          <p>
            At my first gig, I even hooked up the venue's overhead string lights
            to my lighting rig. Every light in the place was synchronized.
          </p>
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
