import React from "react"
import styled from "@emotion/styled"
import { Media } from "./media"

const DesktopName = styled.a({
  fontSize: "2rem",
  letterSpacing: "0.2rem",
  fontFamily: "'Boogaloo', cursive",
  color: "white",
  textDecoration: "none",
})

const MobileName = styled.a({
  fontSize: "1.4rem",
  fontFamily: "'Boogaloo', cursive",
  color: "white",
  textDecoration: "none",
})

const Name = () => {
  return (
    <div>
      <Media at="sm">
        <MobileName href="/">Alejandro Garrido López</MobileName>
      </Media>
      <Media greaterThanOrEqual="md">
        <DesktopName href="/">Alejandro Garrido López</DesktopName>
      </Media>
    </div>
  )
}

export default Name
