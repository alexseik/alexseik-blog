import { useState, useEffect } from "react"

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [matches, query])

  return matches
}

export default useMediaQuery

export const isDesktop = () => useMediaQuery("(min-width: 1024px)")

export const isTablet = () =>
  useMediaQuery("(min-width: 768px) and (max-width: 1023px)")

export const isMobile = () => useMediaQuery("(max-width: 767px)")
