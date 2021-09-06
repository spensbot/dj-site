import * as React from "react"
import styled from 'styled-components'
import Container from '../components/Container'
import Split from '../components/Split'
import { StaticImage } from 'gatsby-plugin-image'

export default function Testimonials() {
  return (
    <Root>
      <Container>
          <Split flexR="2 1 25rem" flexL="0 0 15rem">
            <>
              <StaticImage style={{borderRadius: '50rem'}} src="../images/MeganJonPortrait.jpg" alt="Testimonial Givers, Jon and Megan at their wedding" />
            </>
            <>
              <Names>Jon & Megan</Names>
              <Quote>
                "We can't thank you enough for all the time and energy you put into making our wedding celebration one of the best and most memorable days of our lives. Your love and passion for your craft radiates from you and set the tone for the entire evening. People were drawn to the dance floor and would not leave (literally)! We had so much fun and many people told is it was the best reception they had ever been to, which would not have been the reality without you."
              </Quote>
              
            </>
          </Split>
      </Container>
    </Root>
  )
}

const Root = styled.div`

`

const Quote = styled.div`
  font-size: 1.3rem;
  font-style: italic;
  color: #333;
`

const Names = styled.div`
  font-size: 1.7rem;
  margin-bottom: 1rem;
`