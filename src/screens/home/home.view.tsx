import { Text, View } from "react-native";
import { useHomeController } from "./home.controller";

import { CountView } from '@/components/advanced/count/count.view'

export function HomeView() {
  const controller = useHomeController()

  return (
    <View>
      <Text>Home View</Text>

      <Text>{controller.randomState}</Text>

      <CountView
        initialCount={120}
      />
    </View>
  )
}
