import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { Text} from 'react-native-elements';
import UsuarioService from '../../services/UsuarioService';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import menuStyle from './MenuStyle';

export default function Menu() {
    const [tabUsuarioObj, setTabUsuarioObj] = useState([]);
    const foto = tabUsuarioObj.txFoto ? { uri: tabUsuarioObj.txFoto } : require('../../images/dafaultUsuario.png');
  
    useEffect(() => {
      // Função para carregar informações do usuário
      async function loadUser() {
        try {
          const user = await UsuarioService.getUser();
          setTabUsuarioObj(user);
        } catch (error) {
          console.error('Erro ao carregar os usuários:', error);
        }
      }

      loadUser();
    }, []);
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <View style={menuStyle.header}>
        <Image
          source={foto}
          style={menuStyle.imagem}
        />
          <View>
            <Text h4 h4Style={{ color: 'white' }}>Olá,</Text>
            <Text h4 h4Style={{ color: '#8EAAAF', fontSize: 14 }}>{tabUsuarioObj.txUsuario}</Text>
          </View>
        </View>

        <View style={menuStyle.containerBranco}>
        <Text h4 h4Style={{color: 'rgba(0, 151, 178, 1)', marginBottom: 5}}><MaterialCommunityIcons name="notebook-edit" size={25} color={{color: 'rgba(0, 151, 178, 1)'}}/> Resumo</Text>
          <View style={menuStyle.table}>
          <View style={menuStyle.firstRow}>
              <Text style={menuStyle.firstCell}>Macronutrientes</Text>
              <Text style={[menuStyle.cellRigth, menuStyle.corTitulo]}>  </Text>
            </View>
            <View style={menuStyle.row}>
              <Text style={menuStyle.cellLeft}>Proteína</Text>
              <Text style={[menuStyle.cellRigth, menuStyle.corTitulo]}> % </Text>
            </View>
            <View style={menuStyle.row}>
              <Text style={[menuStyle.cellLeft, menuStyle.corTitulo]}>Carboidratos</Text>
              <Text style={menuStyle.cellRigth}> % </Text>
            </View>
            <View style={menuStyle.row}>
              <Text style={[menuStyle.cellLeft, menuStyle.corTitulo]}>Gordura</Text>
              <Text style={menuStyle.cellRigth}> % </Text>
            </View>
            <View style={menuStyle.rowLast}>
              <Text style={[menuStyle.cellLeft, menuStyle.corTitulo]}>Calorias total</Text>
              <Text style={menuStyle.cellRigth}> Kcal </Text>
            </View>
            <View style={menuStyle.row}>
              <Text style={[menuStyle.cellLeft, menuStyle.corTitulo]}>Água total</Text>
              <Text style={menuStyle.cellRigth}> ml </Text>
            </View>
          </View>
        </View>

        <View style={menuStyle.containerBranco}>
          <Text h4 h4Style={{color: 'rgba(0, 151, 178, 1)', marginBottom: 5}}><MaterialCommunityIcons name="silverware-variant" size={25} color={{color: 'rgba(0, 151, 178, 1)'}}/> Refeições</Text>
          
        </View>
        

      </View>
    );
  }