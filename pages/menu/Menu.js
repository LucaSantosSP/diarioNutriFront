import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import UsuarioService from '../../services/UsuarioService';

export default function Menu() {
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