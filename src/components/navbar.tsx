import React from "react"
import { css } from "@emotion/react"
import { Link, withPrefix } from "gatsby"
import Name from "./name"
import { Media } from "./media"

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

const menuButtonStyles = css({
  color: "white",
  display: "inline-block",
  margin: "0 0.5rem",
  padding: "0.25rem",
  cursor: "pointer",
})

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
  backgroundImage: `url(${withPrefix("/images/sky.jpg")})`,
  backgroundSize: "cover",
})

const Navbar = () => {
  return (
    <header css={navbarStyles}>
      <Name />
      <div>
        <Media at="sm">
          <span className="material-icons" css={menuButtonStyles}>
            menu
          </span>
        </Media>
        <Media greaterThanOrEqual="md">
          <Menus></Menus>
        </Media>
      </div>
    </header>
  )
}

export default Navbar
