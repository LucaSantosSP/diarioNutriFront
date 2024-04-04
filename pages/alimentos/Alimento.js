import React, { useState, useEffect }  from 'react';
import { Text, View, ScrollView } from 'react-native';
import NavigationButtons from '../../util/NavBar';
import { useNavigation } from '@react-navigation/native';
import refeicaoStyle from '../refeicao/RefeicaoStyle';
import { Button } from 'react-native-elements';
import UsuarioService from '../../services/UsuarioService';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
      </ScrollView>
      <View style={refeicaoStyle.navigationContainer}>
        <NavigationButtons navigation={navigation} />
      </View>
    </View>
  );
};
