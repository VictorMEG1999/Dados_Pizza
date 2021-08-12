import * as React from "react";
import { NativeBaseProvider, Button, Text, Box } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function Menu() {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Menu</Text>
        <Button onPress={() => navigation.navigate("Login")}>
          Go to login
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
