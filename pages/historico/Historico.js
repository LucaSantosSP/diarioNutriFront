import React, { useState, useEffect }  from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from 'react-native-elements';
import UsuarioService from '../../services/UsuarioService';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import refeicaoStyle from '../refeicao/RefeicaoStyle';
import formStyle from '../../style/FormStyle';
import alimentoStyle from '../alimentos/StyleAlimento';
import menuStyle from '../menu/MenuStyle';

export default function Historico() {
  const [dtRefeicao, setDtRefeicao] = useState(null)
  const [Macronutriente, setMacronutriente] = useState([]);

  const navigation = useNavigation();

  const navigateToRefeicao = (cdRefeicao) => {
      navigation.navigate('Refeicao', {
          cdRefeicao: cdRefeicao
      });
  };

  async function loadMacronutriente() {
    try {
        var macronutrienteList = null;
        console.log(dtRefeicao + "1");
        if (dtRefeicao === null || dtRefeicao === '') {
            console.log(dtRefeicao + "2 = if true");
            macronutrienteList = await UsuarioService.getMacronutrientesByDate();
        } else {
            console.log(dtRefeicao + "3 = if false");
            macronutrienteList = await UsuarioService.getMacronutrientesByDatePesquisa(dtRefeicao);
        }
        
        setMacronutriente(macronutrienteList);
    } catch (error) {
        setMacronutriente(null);
    }
}

useEffect(() => {
    loadMacronutriente();
}, []);


  return (
      <View style={{ flex: 1, backgroundColor: 'white',  }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '96%', marginTop: 20 }}>
                  <TouchableOpacity onPress={loadMacronutriente}>
                      <MaterialCommunityIcons name={"magnify"} size={35} color="#616161" style={{ marginBottom: 20}}/>
                  </TouchableOpacity>
                  <Input
                      style={formStyle.inputPesquisa}
                      placeholder="Pesquisar refeição por data"
                      placeholderTextColor="#7A7A7A"
                      onChangeText={value => setDtRefeicao(value)}
                      containerStyle={{ flex: 1, borderWidth: 0, margin: 0, padding: 0 }}
                      inputContainerStyle={{ borderBottomWidth: 0, margin: 0, padding: 0 }}
                      inputStyle={{ borderWidth: 0, margin: 0, padding: 0 }}
                  />
                  
              </View>

              <View style={menuStyle.containerBranco}>
                    <View style={menuStyle.table}>
                        <View style={menuStyle.row}>
                            <Text style={menuStyle.cellLeft}>Proteína</Text>
                            <Text style={[menuStyle.cellRigth]}> {Macronutriente.txProteina} g </Text>
                        </View>
                        <View style={menuStyle.row}>
                            <Text style={[menuStyle.cellLeft]}>Carboidratos</Text>
                            <Text style={menuStyle.cellRigth}> {Macronutriente.txCarboidrato} g </Text>
                        </View>
                        <View style={menuStyle.row}>
                            <Text style={[menuStyle.cellLeft]}>Gordura</Text>
                            <Text style={menuStyle.cellRigth}> {Macronutriente.txGordura} g </Text>
                        </View>
                        <View style={menuStyle.row}>
                            <Text style={[menuStyle.cellLeft]}>Calorias total</Text>
                            <Text style={menuStyle.cellRigth}> {Macronutriente.txKcal} Kcal </Text>
                        </View>
                    </View>
                </View>
                  
              {Macronutriente && Macronutriente.length > 0 ? (
                  <FlatList
                      style={{ flex: 1 }} // Adicionando flex: 1 para ocupar todo o espaço disponível
                      data={Macronutriente}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.txProteina.toString()}
                  />
              ) : (
                  <Text style={[refeicaoStyle.semAlimento]}></Text>
              )}
  
              <Text></Text>
              <Text></Text>
          
          </View>           
  
      </View>
  );
};
