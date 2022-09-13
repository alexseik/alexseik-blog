import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  top: 0;
  height: 100vh;
  align-items: center;
`

const Overlay = styled.div`
  width: 80%;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export declare interface HeroProps {
  children?: React.ReactNode
}

const HeroImage = (props: HeroProps) => {
  const { children } = props
  return (
    <Container>
      <StaticImage
        src="../../images/virgen-de-la-hoz.jpg"
        alt="virgen de la hoz"
        className="hero-image"
        css={css`
          width: 100%;
          height: 100vh;
        `}
        imgStyle={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
        }}
      />
      <Overlay>{children}</Overlay>
    </Container>
  )
}

export default HeroImage
