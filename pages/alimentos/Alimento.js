import React, { useState, useEffect }  from 'react';
import { Alert, Text, View, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
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
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedMedida, setSelectedMedida] = useState('quantidade');


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

      UsuarioService.adicionarNovoAlimento(cdAlimento, cdRefeicao, selectedQuantity)
      console.log(cdRefeicao);
      Alert.alert("Novo alimento adicionado com sucesso!")   
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white',  }}>
      <ScrollView>
        <View>
          <Text  style={[alimentoStyle.alimento]}>{tabAlimentoObj.txAliemnto}</Text>
          <Text style={[alimentoStyle.cellRigth]}> {tabAlimentoObj.vlKcal} Kcal </Text>
        </View>
        <View style={alimentoStyle.containerBranco}>
          <View style={alimentoStyle.tablePicker}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={[alimentoStyle.textPicker]}>Quantidade:</Text>
              <View style={{ flexDirection: 'row' }}>
                <Picker
                  selectedValue={selectedQuantity}
                  style={{ height: 50, width: 150, marginRight: '10%', backgroundColor: 'rgba(233, 230, 230, 1)' }}
                  onValueChange={(itemValue) => setSelectedQuantity(itemValue)}>
                  {[...Array(100).keys()].map((value) => (
                    <Picker.Item key={value + 1} label={`${value + 1}`} value={value + 1} />
                  ))}
                </Picker>
                <Picker
                  selectedValue={selectedMedida}
                  style={{ height: 50, width: 150, backgroundColor: 'rgba(233, 230, 230, 1)', alignItems: 'left' }}
                  onValueChange={(itemValue) => setSelectedMedida(itemValue)}>
                  <Picker.Item label="Gramas" value="gramas" />
                  <Picker.Item label="Unidade" value="unidade" />
                </Picker>
              </View>
            </View>
          </View>
        </View>


        <View style={alimentoStyle.containerBranco}>
            <View style={alimentoStyle.table}>
            <View style={alimentoStyle.firstRow}>
                <Text style={alimentoStyle.firstCell}>Informação Nutricional</Text>
              </View>
              <View style={alimentoStyle.row}>
                <Text style={alimentoStyle.cellLeft}>Calorias</Text>
                <Text style={[alimentoStyle.cellRigth]}> {tabAlimentoObj.vlKcal} g </Text>
              </View>
              <View style={alimentoStyle.row}>
                <Text style={[alimentoStyle.cellLeft]}>Carboidratos</Text>
                <Text style={alimentoStyle.cellRigth}> {tabAlimentoObj.vlCarboidrato} g </Text>
              </View>
              <View style={alimentoStyle.row}>
                <Text style={[alimentoStyle.cellLeft]}>Colesterol</Text>
                <Text style={alimentoStyle.cellRigth}> {tabAlimentoObj.vlColesterol} mg/dl </Text>
              </View>
              <View style={alimentoStyle.row}>
                <Text style={[alimentoStyle.cellLeft]}>Fibra Alimentar</Text>
                <Text style={alimentoStyle.cellRigth}> {tabAlimentoObj.vlFibraAlimentar} g </Text>
              </View>
              <View style={alimentoStyle.row}>
                <Text style={[alimentoStyle.cellLeft]}>Proteina</Text>
                <Text style={alimentoStyle.cellRigth}> {tabAlimentoObj.vlProteina} g </Text>
              </View>
              <View style={alimentoStyle.row}>
                <Text style={[alimentoStyle.cellLeft]}>Sódio</Text>
                <Text style={alimentoStyle.cellRigth}> {tabAlimentoObj.vlSodio} mg </Text>
              </View>
              <View style={alimentoStyle.rowLast}>
                <Text style={[alimentoStyle.cellLeft]}>Umidade</Text>
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

          <Text></Text>
          <Text></Text>

      </ScrollView>
      <View style={refeicaoStyle.navigationContainer}>
        <NavigationButtons navigation={navigation} />
      </View>
    </View>
  );
};
