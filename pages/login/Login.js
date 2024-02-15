import { useState } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import styles from '../../style/MainStyle';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Menu"}]
    })
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
        buttonStyle={{
          backgroundColor: 'rgba(8, 69, 80, 1)',
          borderRadius: 5,
        }}
        onPress={() => entrar()}/>
    </View>
  );
}


