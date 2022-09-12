import React from "react"
import { css } from "@emotion/react"
import HeroImage from "./hero-image"
import HeroText from "./hero-text"
import Navbar from "./navbar"

const sectionStyles = css({})

const Hero = () => {
  return (
    <section css={sectionStyles}>
      <HeroImage>
        <HeroText />
      </HeroImage>
      <Navbar />
    </section>
  )
}

export default Hero
