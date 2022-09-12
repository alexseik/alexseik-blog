import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const base = css({
  fontSize: "2rem",
  letterSpacing: "0.2rem",
  fontFamily: "'Boogaloo', cursive",
  color: "white",
  textDecoration: "none",
})

const Base = styled.a``

const Name = () => {
  return (
    <Base href="/" css={base}>
      Alejandro Garrido López
    </Base>
  )
}

export default Name
