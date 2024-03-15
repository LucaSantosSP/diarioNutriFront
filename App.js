import { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import styles from './style/MainStyle';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/login/Login';
import Menu from './pages/principal/Principal';
import Cadastro from './pages/cadastro/Cadastro';
import Refeicao from './pages/refeicao/Refeicao';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    initialRouteName="Menu"
    screenOptions={{
      tabBarActiveTintColor: '#084550',
      headerStyle: { backgroundColor: '#084550' }, 
      headerTintColor: '#fff', 
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }}/>
      <Stack.Screen name="Cadastro" component={Cadastro} />
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



