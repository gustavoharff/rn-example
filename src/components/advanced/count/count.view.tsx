import { Text } from "react-native";
import { CountControllerConfig, useCountController } from "./count.controller";

interface CountViewProps extends CountControllerConfig {
}

export function CountView(props: CountViewProps) {
  const controller = useCountController(props)

  return (
    <Text>{controller.count}</Text>
  )
}