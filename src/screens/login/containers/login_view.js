import * as React from "react";
import { NativeBaseProvider, Button, Text, Box } from "native-base";
import { useNavigation } from "@react-navigation/core";

export default function Login() {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>login</Text>
        <Button onPress={navigation.navigate("Menu")}>Go to login</Button>
      </Box>
    </NativeBaseProvider>
  );
}
