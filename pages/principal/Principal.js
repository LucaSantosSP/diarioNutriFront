import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Perfil from '../perfil/Perfil';
import NovoAlimento from '../alimentos/NovoAlimento';
import Historico from '../historico/Historico';
import Menu from '../menu/Menu';


const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
      <Tab.Navigator
        initialRouteName="Feed"
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
            tabBarLabel: 'Menu',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="NovoAlimento"
          component={NovoAlimento}
          options={{
            tabBarLabel: 'NovoAlimento',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Historico"
          component={Historico}
          options={{
            tabBarLabel: 'Histórico',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}