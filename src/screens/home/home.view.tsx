import { Text, View } from "react-native";
import { useHomeController } from "./home.controller";

export function HomeView() {
  const controller = useHomeController()

  return (
    <View>
      <Text>Home View</Text>

      <Text>{controller.randomState}</Text>
    </View>
  )
}
