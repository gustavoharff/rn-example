import { useEffect, useState } from "react"
import { Text } from "react-native"

export function CountView() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(state => state + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Text>{count}</Text>
  )
}