import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

export default function Title() {
  return (
    <Root>
      <StaticImage
        style={{ height: "100%" }}
        src="../images/DanceFar3.jpg"
        alt="A lit wedding party"
      />
      <TitleCover>
        <TitleText>A Night to Remember</TitleText>
        <SiteText>Spenser Saling, Portland Area Wedding DJ</SiteText>
        {/* <SubtitleText>
          After the ceremony, relax and enjoy a dance party for everyone
        </SubtitleText> */}
      </TitleCover>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  height: 100vh;
  color: #f8f8f8;
`

const TitleCover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0003;
`

const SiteText = styled.h1`
  position: absolute;
  font-size: 2rem;
  left: 0;
  bottom: 0;
  margin: 2rem;
  padding: 1rem;
  font-weight: lighter;
  /* font-family: "Urbanist"; */
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`

const TitleText = styled.h1`
  position: absolute;
  font-size: 4rem;
  left: 0;
  top: 0;
  margin: 2rem;
  padding: 1rem;
  /* font-family: "Pacifico"; */
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`
