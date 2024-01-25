import { Text } from "react-native";
import { useCountController } from "./count.controller";

export function CountView() {
  const controller = useCountController()

  return (
    <Text>{controller.count}</Text>
  )
}