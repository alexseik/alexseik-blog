import "@fontsource/montserrat"
import "./src/styles/global.scss"

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname)
}
