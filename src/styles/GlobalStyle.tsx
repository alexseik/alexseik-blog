import React from "react"
import { Global, css } from "@emotion/react"

// const globalCss = css`
//   html {
//     font-size: 16px;
//     box-sizing: border-box;
//     height: 100%;
//     scroll-behavior: smooth;
//   }
//   body {
//     padding: 0;
//     margin: 0;
//     height: 100%;
//     font-family: "Arboria-Book";
//     > #root {
//       height: 100%;
//     }
//   }
// `
const globalCss = css``

const GlobalStyles = () => {
  return <Global styles={globalCss} />
}

export default GlobalStyles
