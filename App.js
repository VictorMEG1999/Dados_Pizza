import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, Button,Text, Box } from 'native-base';

function Menu({ navigation }) {
  return (

    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Menu</Text>
        <Button 
          onPress={() => navigation.navigate('login')}> 
          Go to login 
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
function login({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>It is ogin</Text>
        <Button   
          onPress={() => navigation.navigate('Menu')}>
          Go to Menu 
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="login" component={login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;