import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UsuarioService from '../../services/UsuarioService';
import { Button } from 'react-native-elements';
import Perfil from '../perfil/Perfil';
import Receitas from '../receitas/receitas';
import NovoAlimento from '../alimentos/NovoAlimento';
import Historico from '../historico/Historico';

function UserList() {
  const [users, setUsers] = useState([]); // Estado para armazenar os usuários

  useEffect(() => {
    // Função para carregar os usuários
    async function loadUsers() {
      try {
        // Obtenha os usuários do serviço de usuário
        const userList = await UsuarioService.getUsers();
        // Atualize o estado com a lista de usuários
        setUsers(userList);
      } catch (error) {
        console.error('Erro ao carregar os usuários:', error);
      }
    }

    // Carregue os usuários quando o componente for montado
    loadUsers();
  }, []); // A dependência vazia garante que isso só seja executado uma vez ao montar o componente

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Usuários</Text>
      {users.map(user => (
        <Text key={user.cdUsuario}>{user.cdUsuario} - {user.txUsuario}</Text> // Supondo que cada usuário tenha um atributo "name" e um "id"
      ))}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Menu() {
  return (
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#084550',
        }}
      >
        <Tab.Screen
          name="Home"
          component={UserList} // Substituído Feed por UserList
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Receitas"
          component={Receitas}
          options={{
            tabBarLabel: 'Receitas',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
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