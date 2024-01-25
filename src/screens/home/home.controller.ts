import { useState } from "react"

export function useHomeController() {
  const [randomState, setRandomState] = useState(0)

  return {
    randomState
  }
}
