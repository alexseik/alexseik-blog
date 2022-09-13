import React from "react"
import { MediaContextProvider } from "./media"

export declare interface LayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <MediaContextProvider>{children}</MediaContextProvider>
}

export default Layout
