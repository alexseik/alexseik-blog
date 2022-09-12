import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const base = css({
  fontSize: "20px",
  fontFamily: "'Gill Sans Extrabold', Helvetica, sans-serif",
  color: "black",
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
