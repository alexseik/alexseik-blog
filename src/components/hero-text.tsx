import React, { useState, useEffect } from "react"
import Typewriter from "typewriter-effect"
import styled from "@emotion/styled"

const strings = [
  "<br/>Desarrollador JS con más de 10 años de experiencia",
  "<br/>Hago aplicaciones basadas en JavaScript",
  "<br/>Utilizo las últimas tecnologías y frameworks",
  "<br/>Tengo experiencia en múltiples lenguajes y tecnologías",
  "<br/>Soy Ingeniero Informático<br/>",
]

const TextsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  fontSize: "2rem",
  color: "white",
  padding: "1rem",
  backgroundColor: "rgb(0,0,180,0.4)",
  fontFamily: "'Boogaloo', cursive",
})

export declare interface DelayedTextProps {
  text: string
  delay: number
}

const DelayedText = (props: DelayedTextProps) => {
  const { text, delay } = props

  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true)
    }, delay)
  }, [delay])

  return isShown ? (
    <Typewriter
      onInit={(tw) => {
        tw.changeDelay(35).typeString(text).start()
      }}
      options={{
        cursor: "",
      }}
    />
  ) : (
    <div></div>
  )
}

const HeroText = () => {
  return (
    <TextsContainer>
      <DelayedText text={strings[0]} delay={0}></DelayedText>
      <DelayedText text={strings[1]} delay={3000}></DelayedText>
      <DelayedText text={strings[2]} delay={6000}></DelayedText>
      <DelayedText text={strings[3]} delay={9000}></DelayedText>
      <DelayedText text={strings[4]} delay={12000}></DelayedText>
    </TextsContainer>
  )
}

export default HeroText
