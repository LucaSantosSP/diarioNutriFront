import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import NavigationButtons from '../../util/NavBar';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/MainStyle';
import formStyle from '../../style/FormStyle';
import { Text, Button, Input } from 'react-native-elements';
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={formStyle.textTitle} h4 h3Style={{color: 'rgba(8, 69, 80, 1)',}}>Criar refeição</Text>

            <Text style={formStyle.label}>Nome da refeição</Text>
            <Input
                style={formStyle.input}
                placeholder="Nome da refeição"
                placeholderTextColor="white"
                onChangeText={value => setNomeRefeicao(value)}
                errorMessage={errorRefeicao}
                containerStyle={{ width: '85%', borderWidth: 0, margin: 0, padding: 0 }} // Removendo todas as bordas do contêiner
                inputContainerStyle={{ borderBottomWidth: 0, margin: 0, padding: 0 }} // Removendo a linha abaixo do input
                inputStyle={{ borderWidth: 0, margin: 0, padding: 0 }}
            />

            <Text style={formStyle.label}>Hora da refeição</Text>
            <TextInputMask
                placeholderTextColor="white"
                style={formStyle.input}
                type={'datetime'}
                options={{
                format: 'HH:mm:ss'
                }}
                value={hora}
                onChangeText={value => setHora(value)}
                keyboardType="numeric"
                placeholder="00:00:00"
            />

            <Button title="Adicionar refeição" 
                buttonStyle={{
                    backgroundColor: 'rgba(8, 69, 80, 1)',
                    borderRadius: 5,
                    marginTop: 35,
                    marginBottom: 35
                }}
                onPress={() => salvar()}
            />
        </View>
      </ScrollView>
      <View style={styles.navigationContainer}>
        <NavigationButtons navigation={navigation} />
      </View>
    </View>
  );
};
