import React, { useState, useEffect }  from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../util/NavBar';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from 'react-native-elements';
import UsuarioService from '../../services/UsuarioService';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import refeicaoStyle from '../refeicao/RefeicaoStyle';
import formStyle from '../../style/FormStyle';
import alimentoStyle from './StyleAlimento';

export default function AlimentoPesquisa({ route }) {
    const [nomeAlimento, setNomeAlimento] = useState(null)
    const [alimentos, setAlimentos] = useState([]);

    const navigation = useNavigation();
    const { key } = route.params;
    const cdRefeicao = { key }.key;

    async function loadAlimentos() {
        try {
            var alimentosList = null;
            console.log(nomeAlimento + "1");
            if (nomeAlimento === null){
                alimentosList = await UsuarioService.getAlimentos();
                console.log(nomeAlimento + "2 = if true");
            }else{
                console.log(nomeAlimento + "3 = if false");
                alimentosList = await UsuarioService.getAlimentosByPesquisa(nomeAlimento);
            }
            
            setAlimentos(alimentosList);
        } catch (error) {
            console.error('Erro ao carregar os alimentos:', error);
        }
    }

    useEffect(() => {
        
        loadAlimentos();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: 'white',  }}>
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', width: '96%', marginTop: 20 }}>
                    <TouchableOpacity onPress={loadAlimentos}>
                        <MaterialCommunityIcons name={"magnify"} size={35} color="#616161" style={{ marginBottom: 20}}/>
                    </TouchableOpacity>
                    <Input
                        style={formStyle.inputPesquisa}
                        placeholder="Pesquisar alimentos"
                        placeholderTextColor="#7A7A7A"
                        onChangeText={value => setNomeAlimento(value)}
                        containerStyle={{ flex: 1, borderWidth: 0, margin: 0, padding: 0 }}
                        inputContainerStyle={{ borderBottomWidth: 0, margin: 0, padding: 0 }}
                        inputStyle={{ borderWidth: 0, margin: 0, padding: 0 }}
                    />
                    
                </View>

                <Button title="Criar novo alimento" 
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginBottom: 25,
                    }}
                    buttonStyle={{
                        backgroundColor: 'rgba(8, 69, 80, 1)',
                        borderRadius: 8,
                    }}
                    onPress={() => navigateToAlimentoPesquisa()}/>

                {alimentos.map(alimento => (
                     <TouchableOpacity style={alimentoStyle.cardAlimento} /*</View>onPress={() => navigateToRefeicao(alimento.cdAlimento)}*/>   
                        <MaterialCommunityIcons name={"rice"} size={35} color="rgba(6, 63, 73, 1)"/>               
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', color: 'rgba(6, 63, 73, 1)' }}>    {alimento.txAliemnto}</Text>
                            <Text style={{ color: 'rgba(6, 63, 73, .5)' }}>    {alimento.vlKcal} Kcal</Text> 
                        </View>                        
                    </TouchableOpacity>            
                ))}

                <Text></Text>
                <Text></Text>
                <Text></Text>
            
            </View>
        </ScrollView>
        <View style={refeicaoStyle.navigationContainer}>
            <NavigationButtons navigation={navigation} />
        </View>
        </View>
    );
};
