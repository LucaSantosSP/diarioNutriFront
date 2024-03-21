import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import NavigationButtons from '../../util/NavBar';
import { useNavigation } from '@react-navigation/native';
import refeicaoStyle from './RefeicaoStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Refeicao({ route }) {
  const navigation = useNavigation();
  const { key } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: 'white',  }}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <View style={refeicaoStyle.containerBranco}>
            <View style={refeicaoStyle.table}>
              <View style={refeicaoStyle.firstRow}>
                <Text style={refeicaoStyle.firstCell}>Lista de alimentos</Text>
              </View>
              
              <View style={refeicaoStyle.row}>
                <View style={refeicaoStyle.cellLeft}>
                  <Text style={refeicaoStyle.firstTextCellLeft}>Ovo</Text>
                  <Text style={refeicaoStyle.secondTextCellLeft}>100 gramas - 541 Kcal</Text>
                </View>
                <View style={[refeicaoStyle.cellRigth, refeicaoStyle.corTitulo]}>
                  <Text style={[refeicaoStyle.textCellRigth]}>Mais</Text>
                  <Text></Text>
                </View>
              </View>

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
