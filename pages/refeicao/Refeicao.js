import React, { useState, useEffect }  from 'react';
import { Text, View, ScrollView } from 'react-native';
import NavigationButtons from '../../util/NavBar';
import { useNavigation } from '@react-navigation/native';
import refeicaoStyle from './RefeicaoStyle';
import { Button } from 'react-native-elements';
import UsuarioService from '../../services/UsuarioService';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Refeicao({ route }) {
  const navigation = useNavigation();
  const { key } = route.params;
  const cdRefeicao = { key }.key;
  const [alimentosRefeicoes, setAlimentosRefeicoes] = useState([]);

  useEffect(() => {
    async function loadRefeicaoAlimento() {
      try {
        const refeicoesAlimentoList = await UsuarioService.getRefeicaoAlimento(cdRefeicao);
        setAlimentosRefeicoes(refeicoesAlimentoList);
      } catch (error) {
        setAlimentosRefeicoes(null);
      }
    }
    loadRefeicaoAlimento();
  }, [cdRefeicao]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white',  }}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={refeicaoStyle.containerCinza}>
            <View style={refeicaoStyle.tableAlimentos}>
              <View style={refeicaoStyle.firstRowAlimentos}>
                <Text style={refeicaoStyle.firstCellAlimentos}>Lista de alimentos</Text>
              </View>              

              {alimentosRefeicoes && alimentosRefeicoes.length > 0 ? (
                alimentosRefeicoes.map(alimentoRefeicao => (
                  <View style={refeicaoStyle.rowAlimentos} key={alimentoRefeicao.tabAlimentoObj.id}>
                    <View style={refeicaoStyle.cellLeftAlimentos}>
                      <Text style={refeicaoStyle.firstTextCellLeft}>{alimentoRefeicao.tabAlimentoObj.txAliemnto}</Text>
                      <Text style={refeicaoStyle.secondTextCellLeft}>100 gramas - {alimentoRefeicao.tabAlimentoObj.vlKcal} Kcal</Text>
                    </View>
                    <View style={[refeicaoStyle.cellRigthAlimentos]}>
                      <Text style={[refeicaoStyle.textCellRigth]}>Mais</Text>
                      <Text></Text>
                    </View>
                  </View>
                ))
              ) : (
                <Text style={[refeicaoStyle.semAlimento]}>Sem alimentos</Text>
              )}


              <Button title="Adicionar seu alimento" 
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
                marginTop: 30,
              }}
              buttonStyle={{
                backgroundColor: 'rgba(8, 69, 80, 1)',
                borderRadius: 8,
              }}/>

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
