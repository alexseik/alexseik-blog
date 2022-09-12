import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import HeroImage from "./hero-image"
import Name from "./name"

const links = [
  {
    to: "/cv",
    name: "Currículum",
  },
  {
    to: "blog",
    name: "Blog",
  },
]

const linkStyles = {
  color: "white",
  display: "inline-block",
  margin: "0 0.5rem",
  padding: "0.25rem",
  textDecoration: "none",
}

const menusStyles = css({
  listStyleType: "none",
  display: "flex",
  justifyContent: "center",
})

const Menus = () => {
  return (
    <ul css={menusStyles}>
      {links.map((link) => (
        <li key={link.to}>
          <Link to={link.to} style={linkStyles}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const navbarStyles = css({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  padding: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
})

const sectionStyles = css({})

const Navbar = () => {
  return (
    <section css={sectionStyles}>
      <HeroImage />
      <header css={navbarStyles}>
        <Name />
        <Menus></Menus>
      </header>
    </section>
  )
}

export default Navbar
