import React, { useState, useEffect }  from 'react';
import { Text, View, ScrollView } from 'react-native';
import NavigationButtons from '../../util/NavBar';
import { useNavigation } from '@react-navigation/native';
import refeicaoStyle from '../refeicao/RefeicaoStyle';
import { Button } from 'react-native-elements';
import UsuarioService from '../../services/UsuarioService';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import alimentoStyle from './StyleAlimento';


export default function Alimento({ route }) {
  const navigation = useNavigation();
  const { cdAlimento, cdRefeicao } = route.params;
  const [tabAlimentoObj, setAlimento] = useState([]);

  useEffect(() => {
    async function loadAlimento() {
      try {
        const alimentoList = await UsuarioService.getAlimento(cdAlimento);
        setAlimento(alimentoList);
      } catch (error) {
        console.error('Erro ao carregar alimento:', error);
      }
    }
    loadAlimento();
  }, [cdAlimento]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white',  }}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          

          <Text>{tabAlimentoObj.txAliemnto}</Text>
          <Text></Text>
          <Text></Text>
          
        </View>
        <View style={alimentoStyle.containerBranco}>
          <Text h4 h4Style={{color: 'rgba(0, 151, 178, 1)', marginBottom: 5}}><MaterialCommunityIcons name="notebook-edit" size={25} color={{color: 'rgba(0, 151, 178, 1)'}}/> Tabela de Nutrientes</Text>
            <View style={alimentoStyle.table}>
            <View style={alimentoStyle.firstRow}>
                <Text style={alimentoStyle.firstCell}>Macronutrientes</Text>
                <Text style={[alimentoStyle.cellRigth, alimentoStyle.corTitulo]}>  </Text>
              </View>
              <View style={alimentoStyle.row}>
                <Text style={alimentoStyle.cellLeft}>Calorias</Text>
                <Text style={[alimentoStyle.cellRigth, alimentoStyle.corTitulo]}> {tabAlimentoObj.vlKcal} g </Text>
              </View>
              <View style={alimentoStyle.row}>
                <Text style={[alimentoStyle.cellLeft, alimentoStyle.corTitulo]}>Carboidratos</Text>
                <Text style={alimentoStyle.cellRigth}> {tabAlimentoObj.vlCarboidrato} g </Text>
              </View>
              <View style={alimentoStyle.row}>
                <Text style={[alimentoStyle.cellLeft, alimentoStyle.corTitulo]}>Gordura</Text>
                <Text style={alimentoStyle.cellRigth}> {tabAlimentoObj.vlGordura} g </Text>
              </View>
              <View style={alimentoStyle.row}>
                <Text style={[alimentoStyle.cellLeft, alimentoStyle.corTitulo]}>Umidade</Text>
                <Text style={alimentoStyle.cellRigth}> {tabAlimentoObj.vlUmidade} ml </Text>
              </View>
              <View style={alimentoStyle.rowLast}>
                <Text style={[alimentoStyle.cellLeft, alimentoStyle.corTitulo]}>Proteina</Text>
                <Text style={alimentoStyle.cellRigth}> {tabAlimentoObj.vlProteina} g </Text>
              </View>
            </View>
          </View>
      </ScrollView>
      <View style={refeicaoStyle.navigationContainer}>
        <NavigationButtons navigation={navigation} />
      </View>
    </View>
  );
};
