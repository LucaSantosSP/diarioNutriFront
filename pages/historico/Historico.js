import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input, Text} from 'react-native-elements';
import UsuarioService from '../../services/UsuarioService';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import refeicaoStyle from '../refeicao/RefeicaoStyle';
import menuStyle from '../menu/MenuStyle';
import styles from '../../style/MainStyle';

const screenWidth = Dimensions.get('window').width;

export default function Historico() {
  const [dtRefeicao, setDtRefeicao] = useState(null);
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

  const proteinValue = Macronutriente.txProteina ? parseFloat(Macronutriente.txProteina) : 0;
  const carboidratoValue = Macronutriente.txCarboidrato ? parseFloat(Macronutriente.txCarboidrato) : 0;
  const gorduraValue = Macronutriente.txGordura ? parseFloat(Macronutriente.txGordura) : 0;
  const totalValue = proteinValue + carboidratoValue + gorduraValue;

  const proteinPercentage = totalValue > 0 ? ((proteinValue / totalValue) * 100).toFixed(2) : 0;
  const carboidratoPercentage = totalValue > 0 ? ((carboidratoValue / totalValue) * 100).toFixed(2) : 0;
  const gorduraPercentage = totalValue > 0 ? ((gorduraValue / totalValue) * 100).toFixed(2) : 0;

  const pieData = totalValue > 0 ? [
    {
      name: '% Proteína',
      value: parseFloat(proteinPercentage),
      color: '#4F0828',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: '% Carbo',
      value: parseFloat(carboidratoPercentage),
      color: '#CFC67C',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: '% Gordura',
      value: parseFloat(gorduraPercentage),
      color: '#4796A4',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ] : [
    {
      name: 'Sem valores',
      value: 1,
      color: 'rgba(243, 243, 243, 1)',
      legendFontColor: '#fff',
      legendFontSize: 15,
    }
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '96%', marginTop: 20 }}>
          <TouchableOpacity onPress={loadMacronutriente}>
            <MaterialCommunityIcons name={"magnify"} size={35} color="#616161" style={{ marginBottom: 20 }} />
          </TouchableOpacity>
          <TextInputMask
                placeholder="Data de nascimento"
                type={'datetime'}
                options={{
                    format: 'DD/MM/YYYY'
                }}
                value={dtRefeicao}
                onChangeText={value => {
                    setDtRefeicao(value)
                }}
                style={styles.maskedInput}
            />
        </View>

        <Text h4 h4Style={{color: 'rgba(0, 151, 178, 1)'}}>
            {dtRefeicao ? dtRefeicao : "Hoje"}
        </Text>


        <View>
          <PieChart
            data={pieData}
            width={screenWidth}
            height={220}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            accessor="value"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
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
            style={{ flex: 1 }}
            data={Macronutriente}
            renderItem={renderItem}
          />
        ) : (
          <Text style={[refeicaoStyle.semAlimento]}></Text>
        )}

        <Text></Text>
        <Text></Text>
      </View>
    </ScrollView>
  );
}
