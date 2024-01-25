import { useEffect, useState } from "react";

export interface CountControllerConfig {
  initialCount?: number
}

export function useCountController(config: CountControllerConfig) {
  const [count, setCount] = useState(config.initialCount || 0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(state => state + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return {
    count
  }
}