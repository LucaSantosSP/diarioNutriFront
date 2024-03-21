import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import NavigationButtons from '../../util/NavBar';
import { useNavigation } from '@react-navigation/native';
import refeicaoStyle from './RefeicaoStyle';
import { Button } from 'react-native-elements';
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
                  <Text style={refeicaoStyle.firstTextCellLeft}>Ovo cozido</Text>
                  <Text style={refeicaoStyle.secondTextCellLeft}>100 gramas - 541 Kcal</Text>
                </View>
                <View style={[refeicaoStyle.cellRigth, refeicaoStyle.corTitulo]}>
                  <Text style={[refeicaoStyle.textCellRigth]}>Mais</Text>
                  <Text></Text>
                </View>
              </View>

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
