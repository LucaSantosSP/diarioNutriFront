import React, { useState, useEffect }  from 'react';
import { Alert, Text, View, ScrollView } from 'react-native';
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

  console.log(cdAlimento, cdRefeicao);

  const adicionarAlimento = () => {

      UsuarioService.adicionarNovoAlimento(cdAlimento, cdRefeicao)
      console.log(cdRefeicao);
      Alert.alert("Novo alimento adicionado com sucesso!")   
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white',  }}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          

          <Text>{tabAlimentoObj.txAliemnto}</Text>
          
        </View>
        <View style={alimentoStyle.containerBranco}>
            <View style={alimentoStyle.table}>
            <View style={alimentoStyle.firstRow}>
                <Text style={alimentoStyle.firstCell}>Informação Nutricional</Text>
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
                <Text style={[alimentoStyle.cellLeft, alimentoStyle.corTitulo]}>Colesterol</Text>
                <Text style={alimentoStyle.cellRigth}> {tabAlimentoObj.vlColesterol} mg/dl </Text>
              </View>
              <View style={alimentoStyle.row}>
                <Text style={[alimentoStyle.cellLeft, alimentoStyle.corTitulo]}>Fibra Alimentar</Text>
                <Text style={alimentoStyle.cellRigth}> {tabAlimentoObj.vlFibraAlimentar} g </Text>
              </View>
              <View style={alimentoStyle.row}>
                <Text style={[alimentoStyle.cellLeft, alimentoStyle.corTitulo]}>Proteina</Text>
                <Text style={alimentoStyle.cellRigth}> {tabAlimentoObj.vlProteina} g </Text>
              </View>
              <View style={alimentoStyle.row}>
                <Text style={[alimentoStyle.cellLeft, alimentoStyle.corTitulo]}>Sódio</Text>
                <Text style={alimentoStyle.cellRigth}> {tabAlimentoObj.vlSodio} mg </Text>
              </View>
              <View style={alimentoStyle.rowLast}>
                <Text style={[alimentoStyle.cellLeft, alimentoStyle.corTitulo]}>Umidade</Text>
                <Text style={alimentoStyle.cellRigth}> {tabAlimentoObj.vlUmidade} ml </Text>
              </View>
            </View>

            <Button title="Adicionar alimento" 
                buttonStyle={{
                    backgroundColor: 'rgba(8, 69, 80, 1)',
                    borderRadius: 5,
                    marginTop: 35,
                    marginBottom: 35
                }}
                onPress={() => adicionarAlimento()}
            />

          </View>


      </ScrollView>
      <View style={refeicaoStyle.navigationContainer}>
        <NavigationButtons navigation={navigation} />
      </View>
    </View>
  );
};
