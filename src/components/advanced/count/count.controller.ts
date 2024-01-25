import { useEffect, useState } from "react";

export function useCountController() {
  const [count, setCount] = useState(0)

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