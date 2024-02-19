import { useState } from 'react';
import { Alert, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import styles from '../../style/MainStyle';
import UsuarioService from '../../services/UsuarioService';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)

  const entrar = () => {
    
    let data = {
      txEmail: email,
      txSenha: senha
    }

    UsuarioService.login(data)
    .then((response) => {
      navigation.reset({
        index: 0,
        routes: [{name: "Menu"}]
      })
    })
    .catch((error) => {
      Alert.alert("Houve um erro inesperado") 
    })
    
    
  }

  const cadastrar = () => {
      navigation.navigate("Cadastro")
  }

  return (
    <View style={styles.container}>
      <Text h3 h3Style={{color: 'rgba(8, 69, 80, 1)',}}>ENTRAR</Text>

      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />

      <Input
        placeholder="Senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => setSenha(value)}
        secureTextEntry={true}
      />

      <Button title="Entrar" 
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        buttonStyle={{
          backgroundColor: 'rgba(8, 69, 80, 1)',
          borderRadius: 8,
        }}
        onPress={() => entrar()}/>

      <Button title="Cadastrar" 
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        buttonStyle={{
          backgroundColor: 'rgba(8, 69, 80, 1)',
          borderRadius: 8,
        }}
        onPress={() => cadastrar()}/>
    </View>
  );
}


