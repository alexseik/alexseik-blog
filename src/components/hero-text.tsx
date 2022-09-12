import React, { useState, useEffect } from "react"
import Typewriter from "typewriter-effect"
import styled from "@emotion/styled"

const strings = [
  "Desarrollador con más de 10 años de experiencia",
  "Hago aplicaciones basadas en JavaScript",
  "Utilizo las últimas tecnologías y frameworks",
  "Tengo experiencia en múltiples lenguajes y tecnologías",
  "Soy Ingeniero Informático",
]

const TextsContainer = styled.div({
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  fontSize: "2rem",
  color: "white",
  padding: "1rem",
  backgroundColor: "rgb(0,0,180,0.4)",
})

const Text = styled.div({
  margin: "1rem 0",
})

const EmptyText = styled.div({
  height: 0,
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
    <Text>
      <Typewriter
        onInit={(tw) => {
          tw.changeDelay(35).typeString(text).start()
        }}
        options={{
          cursor: "",
        }}
      />
    </Text>
  ) : (
    <EmptyText />
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
