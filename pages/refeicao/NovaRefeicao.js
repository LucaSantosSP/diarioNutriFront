import React, { useState } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import NavigationButtons from '../../util/NavBar';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/MainStyle';
import formStyle from '../../style/FormStyle';
import { Button, Input } from 'react-native-elements';
import UsuarioService from '../../services/UsuarioService';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text';

export default function Refeicao() {
  const navigation = useNavigation();
  const [nomeRefeicao, setNomeRefeicao] = useState(null)
  const [hora, setHora] = useState(null)
  const [errorRefeicao, setErrorRefeicao] = useState(null)
  const [errorHora, setErrorHora] = useState(null)

  const validar = () => {
    let error = false
    setErrorRefeicao(null)
    setErrorHora(null)

    if (nomeRefeicao == null) {
        setErrorRefeicao("Nome da refeição campo obrigatório!")
        error = true
    }
    if (hora == null) {
        setErrorHora("Hora da refeição campo obrigatório!")
        error = true
    }
    return !error
  }

  const salvar = () => {
    if (validar()) {
        let data = {
            txRefeicaoTipo: nomeRefeicao,
            dtHoraRefeicaoTipo: hora,
        }

        UsuarioService.cadastrarRefeicao(data)
        .then((response) => {
          console.log(response.data)
          Alert.alert("Nova refeição criada com sucesso!")   
        })
        .catch((error) => {
            console.log(data)
          Alert.alert("Houve um erro inesperado") 
        })
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white', }}>
      <ScrollView>
        <Text h3 h3Style={{color: 'rgba(8, 69, 80, 1)',}}>CADASTRE-SE</Text>

        <Input
            placeholder="Nome da refeição"
            onChangeText={value => setNomeRefeicao(value)}
            errorMessage={errorRefeicao}
        />

        <TextInputMask
            type={'datetime'}
            options={{
            format: 'HH:mm:ss'
            }}
            value={hora}
            onChangeText={value => setHora(value)}
            keyboardType="numeric"
            placeholder="HH:mm:ss"
        />

        <Button title="Adicionar refeição" 
            buttonStyle={{
                backgroundColor: 'rgba(8, 69, 80, 1)',
                borderRadius: 5,
            }}
            onPress={() => salvar()}
        />
      </ScrollView>
      <View style={styles.navigationContainer}>
        <NavigationButtons navigation={navigation} />
      </View>
    </View>
  );
};
