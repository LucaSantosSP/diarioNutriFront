import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import NavigationButtons from '../../util/NavBar';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/MainStyle';
import formStyle from '../../style/FormStyle';
import alimentoStyle from './StyleAlimento';
import { Text, Button, Input } from 'react-native-elements';
import UsuarioService from '../../services/UsuarioService';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text';

export default function NovoAlimento() {
  const navigation = useNavigation();
  const [nomeAlimento, setNomeAlimento] = useState(null)
  const [nomeGrupo, setGrupo] = useState(null)
  const [proteina, setProteina] = useState(null)
  const [gordura, setGordura] = useState(null)
  const [carboidratos, setCarboidratos] = useState(null)
  const [umidade, setUmidade] = useState(null)
  const [fibraAlimentar, setFibraAlimentar] = useState(null)
  const [colesterol, setColesterol] = useState(null)
  const [sodio, setSodio] = useState(null)
  const [kcal, setKcal] = useState(null)
  const [errorAlimento, setErrorAlimento] = useState(null)

  const validar = () => {
    let error = false
    setErrorAlimento(null)

    if (nomeAlimento == null) {
        setErrorAlimento("Nome da refeição campo obrigatório!")
        error = true
    }
    return !error
  }

  const salvar = () => {
    if (validar()) {
        let data = {
            txAliemnto: nomeAlimento,
            txGrupo: nomeGrupo,
            vlProteina: proteina,
            vlCarboidrato: carboidratos,
            vlGordura: gordura,
            vlUmidade: umidade,
            vlFibraAlimentar: fibraAlimentar,
            vlColesterol: colesterol,
            vlSodio: sodio,
            vlKcal: kcal,
        }

        UsuarioService.cadastrarAlimento(data)
        .then((response) => {
          console.log(response.data)
          Alert.alert("Novo alimento criado com sucesso!")   
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

            <Text style={alimentoStyle.cardCinza}>Preencha os campos abaixo para acrescentar um novo alimento ao seu banco</Text>

            <Text style={formStyle.labelNovoAlimento}>Nome do alimento</Text>
            <Input
                style={formStyle.input}
                placeholder="Exemplo: banana"
                placeholderTextColor="white"
                onChangeText={value => setNomeAlimento(value)}
                errorMessage={errorAlimento}
                containerStyle={{ width: '90%', borderWidth: 0, margin: 0, padding: 0 }} 
                inputContainerStyle={{ borderBottomWidth: 0, margin: 0, padding: 0 }} 
                inputStyle={{ borderWidth: 0, margin: 0, padding: 0 }}
            />

            <Text style={formStyle.labelNovoAlimento}>Nome do grupo</Text>
            <Input
                style={formStyle.input}
                placeholder="Exemplo: Frutas"
                placeholderTextColor="white"
                onChangeText={value => setGrupo(value)}
                containerStyle={{ width: '90%', borderWidth: 0, margin: 0, padding: 0 }} 
                inputContainerStyle={{ borderBottomWidth: 0, margin: 0, padding: 0 }} 
                inputStyle={{ borderWidth: 0, margin: 0, padding: 0 }}
            />

            <View style={formStyle.hrAzul}></View>

            <Text style={formStyle.labelNovoAlimento}>Quantidade de Calorias</Text>
            <Input
                style={formStyle.input}
                placeholder="Kcal"
                placeholderTextColor="white"
                onChangeText={value => setKcal(value)}
                containerStyle={{ width: '90%', borderWidth: 0, margin: 0, padding: 0 }} 
                inputContainerStyle={{ borderBottomWidth: 0, margin: 0, padding: 0 }} 
                inputStyle={{ borderWidth: 0, margin: 0, padding: 0 }}
            />

            <Text style={formStyle.labelNovoAlimento}>Quantidade de proteína</Text>
            <Input
                style={formStyle.input}
                placeholder="0.0 g"
                placeholderTextColor="white"
                onChangeText={value => setProteina(value)}
                containerStyle={{ width: '90%', borderWidth: 0, margin: 0, padding: 0 }} 
                inputContainerStyle={{ borderBottomWidth: 0, margin: 0, padding: 0 }} 
                inputStyle={{ borderWidth: 0, margin: 0, padding: 0 }}
            />

            <Text style={formStyle.labelNovoAlimento}>Quantidade de carboidratos</Text>
            <Input
                style={formStyle.input}
                placeholder="0.0 g"
                placeholderTextColor="white"
                onChangeText={value => setCarboidratos(value)}
                containerStyle={{ width: '90%', borderWidth: 0, margin: 0, padding: 0 }} 
                inputContainerStyle={{ borderBottomWidth: 0, margin: 0, padding: 0 }} 
                inputStyle={{ borderWidth: 0, margin: 0, padding: 0 }}
            />

            <Text style={formStyle.labelNovoAlimento}>Quantidade de Gordura</Text>
            <Input
                style={formStyle.input}
                placeholder="0.0 g"
                placeholderTextColor="white"
                onChangeText={value => setGordura(value)}
                containerStyle={{ width: '90%', borderWidth: 0, margin: 0, padding: 0 }} 
                inputContainerStyle={{ borderBottomWidth: 0, margin: 0, padding: 0 }} 
                inputStyle={{ borderWidth: 0, margin: 0, padding: 0 }}
            />

            <Text style={formStyle.labelNovoAlimento}>Quantidade de Umidade</Text>
            <Input
                style={formStyle.input}
                placeholder="0.0 g"
                placeholderTextColor="white"
                onChangeText={value => setUmidade(value)}
                containerStyle={{ width: '90%', borderWidth: 0, margin: 0, padding: 0 }} 
                inputContainerStyle={{ borderBottomWidth: 0, margin: 0, padding: 0 }} 
                inputStyle={{ borderWidth: 0, margin: 0, padding: 0 }}
            />

            <Text style={formStyle.labelNovoAlimento}>Quantidade de Fibra Alimentar</Text>
            <Input
                style={formStyle.input}
                placeholder="0.0 g"
                placeholderTextColor="white"
                onChangeText={value => setFibraAlimentar(value)}
                containerStyle={{ width: '90%', borderWidth: 0, margin: 0, padding: 0 }} 
                inputContainerStyle={{ borderBottomWidth: 0, margin: 0, padding: 0 }}
                inputStyle={{ borderWidth: 0, margin: 0, padding: 0 }}
            />

            <Text style={formStyle.labelNovoAlimento}>Quantidade de Colesterol</Text>
            <Input
                style={formStyle.input}
                placeholder="0.0 g"
                placeholderTextColor="white"
                onChangeText={value => setColesterol(value)}
                containerStyle={{ width: '90%', borderWidth: 0, margin: 0, padding: 0 }} 
                inputContainerStyle={{ borderBottomWidth: 0, margin: 0, padding: 0 }} 
                inputStyle={{ borderWidth: 0, margin: 0, padding: 0 }}
            />

            <Text style={formStyle.labelNovoAlimento}>Quantidade de Sódio</Text>
            <Input
                style={formStyle.input}
                placeholder="0.0 g"
                placeholderTextColor="white"
                onChangeText={value => setSodio(value)}
                containerStyle={{ width: '90%', borderWidth: 0, margin: 0, padding: 0 }} 
                inputContainerStyle={{ borderBottomWidth: 0, margin: 0, padding: 0 }} 
                inputStyle={{ borderWidth: 0, margin: 0, padding: 0 }}
            />

            <Button title="Salvar" 
                buttonStyle={{
                    backgroundColor: 'rgba(8, 69, 80, 1)',
                    borderRadius: 5,
                    marginTop: 35,
                    marginBottom: 35
                }}
                onPress={() => salvar()}
            />

            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </View>
      </ScrollView>
      <View style={styles.navigationContainer}>
        <NavigationButtons navigation={navigation} />
      </View>
    </View>
  );
};
