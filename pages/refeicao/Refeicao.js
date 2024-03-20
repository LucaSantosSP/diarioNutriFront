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
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{key}!</Text>

          <View style={refeicaoStyle.containerBranco}>
            <View style={refeicaoStyle.table}>
              <View style={refeicaoStyle.firstRow}>
                <Text style={refeicaoStyle.firstCell}>Lista de alimentos</Text>
              </View>
              <View style={refeicaoStyle.row}>
                <Text style={refeicaoStyle.cellLeft}>Ovo</Text>
                <Text style={[refeicaoStyle.cellRigth, refeicaoStyle.corTitulo]}> Mais </Text>
              </View>
            </View>
          </View>

          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>
          <Text>l</Text>

          
        </View>
      </ScrollView>
      <View style={refeicaoStyle.navigationContainer}>
        <NavigationButtons navigation={navigation} />
      </View>
    </View>
  );
};
