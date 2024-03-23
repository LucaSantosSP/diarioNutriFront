import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Perfil from '../perfil/Perfil';
import NovoAlimento from '../alimentos/NovoAlimento';
import Historico from '../historico/Historico';
import Menu from '../menu/Menu';
import Refeicao from '../refeicao/Refeicao';
import NovaRefeicao from '../refeicao/NovaRefeicao';
import NavigationButtons from '../../util/NavBar';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      screenOptions={{
        tabBarActiveTintColor: '#084550',
        headerStyle: { backgroundColor: '#084550' }, 
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Menu"
        component={Menu} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="NovoAlimento"
        component={NovoAlimento}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Historico"
        component={Historico}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Principal() {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#084550',
        headerStyle: { backgroundColor: '#084550' }, 
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Refeicao" component={Refeicao} options={{ title: 'Refeição' }}/>
      <Stack.Screen name="NavigationButtons" component={NavigationButtons} />
      <Stack.Screen name="NovaRefeicao" component={NovaRefeicao} options={{ title: 'Nova refeição' }}/>
    </Stack.Navigator>
  );
}
