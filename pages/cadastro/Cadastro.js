import { useState } from 'react';
import { Alert, View } from 'react-native';
import { Text, Input, Button, CheckBox } from 'react-native-elements';
import styles from '../../style/MainStyle';
import { TextInputMask } from 'react-native-masked-text';
import UsuarioService from '../../services/UsuarioService';

export default function Cadastro({navigation}) {

    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const [dtNascimento, setDtNascimento] = useState(null)
    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorSenha, setErrorSenha] = useState(null)
    const [errorDtNascimento, setErrorDtNascimento] = useState(null)
    const [errorAltura, setErrorAltura] = useState(null)
    const [errorPeso, setErrorPeso] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const validar = () => {
        let error = false
        setErrorNome(null)
        setErrorEmail(null)
        setErrorSenha(null)
        setErrorAltura(null)
        setErrorPeso(null)

        const rEmail = /^\S+@\S+\.\S+$/

        if (nome == null) {
            setErrorNome("Nome campo obrigatório!")
            error == true
        }
        if (email == null) {
            setErrorEmail("E-mail campo obrigatório!")
            error == true
        }
        if (!rEmail.test(String(email).toLowerCase())) {
            setErrorEmail("Preencha um e-mail real!")
            error == true
        }
        if (senha == null) {
            setErrorSenha("Senha campo obrigatório!")
            error == true
        }
        if (altura == null) {
            setErrorAltura("Altura campo obrigatório!")
            error == true
        }
        if (peso == null) {
            setErrorPeso("Peso campo obrigatório!")
            error == true
        }
        return !error
    }

    const salvar = () => {
        if (validar() === true){

            setLoading(true)
            
            let data = {
                txUsuario: nome,
                txEmail: email,
                txSenha: senha,
                vlAltura: altura,
                vlPeso: peso
            }

            UsuarioService.cadastrar(data)
            .then((response) => {
              setLoading(false)
              console.log(response.data)
              Alert.alert("Usuário cadastrado com sucesso!")   
            })
            .catch((error) => {
              setLoading(false)
              Alert.alert("Houve um erro inesperado") 
            })

        }
    }

    return (
        <View style={styles.container}>
            <Text h3 h3Style={{color: 'rgba(8, 69, 80, 1)',}}>CADASTRE-SE</Text>

            <Input
                placeholder="Nome"
                onChangeText={value => setNome(value)}
                errorMessage={errorNome}
            />

            <Input
                placeholder="E-mail"
                onChangeText={value => setEmail(value)}
                keyboardType="email-address"
                errorMessage={errorEmail}
            />

            <Input
                placeholder="Senha"
                onChangeText={value => setSenha(value)}
                secureTextEntry={true}
                errorMessage={errorSenha}
            />

            <View style={styles.containerMask}>
                <TextInputMask
                    placeholder="Data de nascimento"
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    value={dtNascimento}
                    onChangeText={value => {
                        setDtNascimento(value)
                    }}
                    style={styles.maskedInput}
                    errorMessage={errorDtNascimento}
                />
            </View>

            <Input
                placeholder="Altura"
                onChangeText={value => setAltura(value)}
                keyboardType="number-pad"
                errorMessage={errorAltura}
            />

            <Input
                placeholder="Peso"
                onChangeText={value => setPeso(value)}
                keyboardType="number-pad"
                errorMessage={errorPeso}
            />


            <Button title="Entrar" 
                buttonStyle={{
                backgroundColor: 'rgba(8, 69, 80, 1)',
                borderRadius: 5,
                }}
                onPress={() => salvar()}/>

        </View>
    );
}


