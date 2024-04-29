import React, { useState, useEffect }  from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from 'react-native-elements';
import UsuarioService from '../../services/UsuarioService';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import refeicaoStyle from '../refeicao/RefeicaoStyle';
import formStyle from '../../style/FormStyle';
import alimentoStyle from '../alimentos/StyleAlimento';

export default function Receitas() {
    const [nomeReceita, setNomeReceita] = useState(null)
    const [receitas, setReceitas] = useState([]);

    const navigation = useNavigation();

    const navigateToReceita = (cdReceita) => {
        navigation.navigate('Receita', {
            cdReceita: cdReceita
        });
    };

    const navigateToNovaReceita = () => { 
        navigation.navigate('NovaReceita');
    };     

    const renderItem = ({ item }) => (
        <TouchableOpacity style={[alimentoStyle.cardAlimento, { width: '100%' }]} onPress={() => navigateToReceita(item.cdReceita)}>   
            <MaterialCommunityIcons name={"book-open-page-variant"} size={35} color="rgba(6, 63, 73, 1)"/>               
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontWeight: 'bold', color: 'rgba(6, 63, 73, 1)' }}>{item.txTitulo}</Text>
                <Text style={{ color: 'rgba(6, 63, 73, .5)' }}>{item.txTipo}</Text> 
            </View>                        
        </TouchableOpacity>            
    );
    

    async function loadReceitas() {
        try {
            var receitasList = null;
            console.log(nomeReceita + "1");
            if (nomeReceita === null){
                receitasList = await UsuarioService.getReceitas();
                console.log(nomeReceita + "2 = if true");
            }else{
                console.log(nomeReceita + "3 = if false");
                receitasList = await UsuarioService.getReceitasByPesquisa(nomeReceita);
            }
            
            setReceitas(receitasList);
        } catch (error) {
            setReceitas(null);
        }
    }

    useEffect(() => {
        
        loadReceitas();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: 'white',  }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '96%', marginTop: 20 }}>
                    <TouchableOpacity onPress={loadReceitas}>
                        <MaterialCommunityIcons name={"magnify"} size={35} color="#616161" style={{ marginBottom: 20}}/>
                    </TouchableOpacity>
                    <Input
                        style={formStyle.inputPesquisa}
                        placeholder="Pesquisar receitas"
                        placeholderTextColor="#7A7A7A"
                        onChangeText={value => setNomeReceita(value)}
                        containerStyle={{ flex: 1, borderWidth: 0, margin: 0, padding: 0 }}
                        inputContainerStyle={{ borderBottomWidth: 0, margin: 0, padding: 0 }}
                        inputStyle={{ borderWidth: 0, margin: 0, padding: 0 }}
                    />
                    
                </View>
    
                <Button title="Criar nova receita" 
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginBottom: 25,
                    }}
                    buttonStyle={{
                        backgroundColor: 'rgba(8, 69, 80, 1)',
                        borderRadius: 8,
                    }}
                    onPress={() => navigateToNovaReceita()}/>
                    
                {receitas && receitas.length > 0 ? (
                    <FlatList
                        style={{ flex: 1 }} // Adicionando flex: 1 para ocupar todo o espaço disponível
                        data={receitas}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.cdReceita.toString()}
                    />
                ) : (
                    <Text style={[refeicaoStyle.semAlimento]}>Nenhuma receita encontrada!</Text>
                )}
    
                <Text></Text>
                <Text></Text>
            
            </View>           
    
        </View>
    );
};
