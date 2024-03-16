import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Button, Text} from 'react-native-elements';
import UsuarioService from '../../services/UsuarioService';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../style/MainStyle';
import perfilStyle from './PerfilStyle'

export default function Perfil({navigation}) {

    const logout = (navigation) => {
      navigation.reset({
        index: 0,
        routes: [{name: "Login"}]
      })
    } 

    const [tabUsuarioObj, setTabUsuarioObj] = useState([]); 
  
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
  
    const foto = tabUsuarioObj.txFoto ? { uri: tabUsuarioObj.txFoto } : require('../../images/dafaultUsuario.png');

    return (
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={foto}
            style={perfilStyle.imagem}
          />
          <Text h4 h4Style={{color: 'rgba(0, 151, 178, 1)',}} key={tabUsuarioObj.cdUsuario}>{tabUsuarioObj.txUsuario}</Text>

          <View style={styles.containerBranco}>
            <View style={perfilStyle.tablePessoal}>
              <View style={perfilStyle.rowPessoal}>
                <Text style={perfilStyle.cellPessoal}>Idade</Text>
                <Text style={perfilStyle.cellPessoal}>Altura</Text>
                <Text style={perfilStyle.cellPessoal}>Sexo</Text>
              </View>
              <View style={perfilStyle.rowPessoal}>
                <Text style={perfilStyle.cellPessoal}>NF</Text>
                <Text style={perfilStyle.cellPessoal}>{tabUsuarioObj.vlAltura}</Text>
                <Text style={perfilStyle.cellPessoal}>{tabUsuarioObj.ckSexo}</Text>
              </View>
            </View>

            <Text h4 h4Style={{color: 'rgba(0, 151, 178, 1)'}}><MaterialCommunityIcons name="weight-lifter" size={25} color={{color: 'rgba(0, 151, 178, 1)'}}/>Meu corpo</Text>
            <View style={perfilStyle.table}>
              <View style={perfilStyle.row}>
                <Text style={perfilStyle.cell}></Text>
                <Text style={[perfilStyle.cell, perfilStyle.corTitulo]}>Atual</Text>
                <Text style={[perfilStyle.cellLast, perfilStyle.corTitulo]}>Ideal</Text>
              </View>
              <View style={perfilStyle.row}>
                <Text style={[perfilStyle.cell, perfilStyle.corTitulo]}>IMC</Text>
                <Text style={perfilStyle.cell}>{tabUsuarioObj.vlImcAtual}</Text>
                <Text style={perfilStyle.cellLast}>{tabUsuarioObj.vlImcIdeal}</Text>
              </View>
              <View style={perfilStyle.row}>
                <Text style={[perfilStyle.cell, perfilStyle.corTitulo]}>Peso</Text>
                <Text style={perfilStyle.cell}>{tabUsuarioObj.vlPeso} Kg</Text>
                <Text style={perfilStyle.cellLast}>{tabUsuarioObj.vlPesoIdeal}</Text>
              </View>
            </View>
          </View>
          

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
      </ScrollView>
    );
  }