import { ComponentProps } from "react";
import { Button } from "react-native";

interface ButtonProps extends ComponentProps<typeof Button> {}

export function ButtonView(props: ButtonProps) {

  return (
    <Button 
      {...props}
      color="red"
    />
  )
}