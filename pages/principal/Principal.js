import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Perfil from '../perfil/Perfil';
import Historico from '../historico/Historico';
import Menu from '../menu/Menu';
import Refeicao from '../refeicao/Refeicao';
import NovaRefeicao from '../refeicao/NovaRefeicao';
import NavigationButtons from '../../util/NavBar';
import { createStackNavigator } from '@react-navigation/stack';
import AlimentoPesquisa from '../alimentos/AlimentoPesquisa';
import Alimento from '../alimentos/Alimento';
import NovoAlimento from '../alimentos/NovoAlimento';
import Receitas from '../receitas/Receitas';
import Receita from '../receitas/Receita';

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
        name="Histórico"
        component={Historico}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Alimentos"
        component={AlimentoPesquisa}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="receipt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Receitas"
        component={Receitas}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="notebook-edit" color={color} size={size} />
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
      <Stack.Screen name="AlimentoPesquisa" component={AlimentoPesquisa} options={{ title: 'Alimentos' }}/>
      <Stack.Screen name="Alimento" component={Alimento} options={{ title: 'Informações' }}/>
      <Stack.Screen name="NovoAlimento" component={NovoAlimento} options={{ title: 'Novo Alimento' }}/>
      <Stack.Screen name="Receita" component={Receita} options={{ title: 'Receita' }}/>
    </Stack.Navigator>
  );
}
