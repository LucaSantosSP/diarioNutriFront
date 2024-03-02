import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button, Text} from 'react-native-elements';
import UsuarioService from '../../services/UsuarioService';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Perfil({navigation}) {

    const logout = (navigation) => {
      navigation.reset({
        index: 0,
        routes: [{name: "Login"}]
      })
    } 

    const [tabUsuarioObj, setTabUsuarioObj] = useState([]); // Estado para armazenar os usuários
  
    useEffect(() => {
      // Função para carregar informações do usuário
      async function loadUsers() {
        try {
          const user = await UsuarioService.getUser();
          setTabUsuarioObj(user);
        } catch (error) {
          console.error('Erro ao carregar os usuários:', error);
        }
      }

      loadUsers();
    }, []);
  

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text h4 h4Style={{color: 'rgba(0, 151, 178, 1)',}} key={tabUsuarioObj.cdUsuario}>{tabUsuarioObj.txUsuario}</Text>

        <Text > Altura: {tabUsuarioObj.vlAltura} | Sexo: {tabUsuarioObj.ckSexo}</Text>
        <Text></Text>

        <Text h4 h4Style={{color: 'rgba(0, 151, 178, 1)'}}><MaterialCommunityIcons name="weight-lifter" color={{color: 'rgba(0, 151, 178, 1)'}}  />Meu corpo</Text>
        <Text > Peso: {tabUsuarioObj.vlPeso} Kg</Text>

        <Button title="Logout" 
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          buttonStyle={{
            backgroundColor: 'rgba(8, 69, 80, 1)',
            borderRadius: 8,
          }}
          onPress={() => logout(navigation)}/>
      </View>
    );
  }