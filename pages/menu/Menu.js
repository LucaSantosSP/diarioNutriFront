import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import UsuarioService from '../../services/UsuarioService';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import menuStyle from './MenuStyle';
import { useNavigation } from '@react-navigation/native';

export default function Menu({ navigation }) {
    const [tabUsuarioObj, setTabUsuarioObj] = useState([]);
    const [foto, setFoto] = useState(require('../../images/dafaultUsuario.png'));
    const [refeicoes, setRefeicoes] = useState([]);
    const [tabMacronutrientesObj, setTabMacronutrientesObj] = useState([]);
    const [reloadPage, setReloadPage] = useState(false);

    const navigateToRefeicao = (key) => {
        navigation.navigate('Refeicao', { key });
    };

    const navigateToNewRefeicao = () => {
        navigation.navigate('NovaRefeicao');
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Função para carregar dados toda vez que a tela é focada
            loadData();
        });

        return unsubscribe;
    }, [navigation]);

    const loadData = async () => {
        try {
            const user = await UsuarioService.getUser();
            setTabUsuarioObj(user);

            const refeicoesList = await UsuarioService.getRefeicoes();
            setRefeicoes(refeicoesList);

            const macronutrientes = await UsuarioService.getMacronutrientes();
            setTabMacronutrientesObj(macronutrientes);

            if (user.txFoto) {
                setFoto({ uri: user.txFoto });
            }
        } catch (error) {
            console.error('Erro ao carregar os dados:', error);
        }
    };

    // Função para recarregar a página
    const reloadPageData = () => {
        setReloadPage(prevState => !prevState);
    };

    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                <View style={menuStyle.header}>
                    <Image
                        source={foto}
                        style={menuStyle.imagem}
                    />
                    <View>
                        <Text h4 h4Style={{ color: 'white' }}>Olá,</Text>
                        <Text h4 h4Style={{ color: '#8EAAAF', fontSize: 14 }}>{tabUsuarioObj.txUsuario}</Text>
                    </View>
                </View>

                <View style={menuStyle.containerBranco}>
                    <Text h4 h4Style={{ color: 'rgba(0, 151, 178, 1)', marginBottom: 5 }}><MaterialCommunityIcons name="notebook-edit" size={25} color={{ color: 'rgba(0, 151, 178, 1)' }} /> Resumo</Text>
                    <View style={menuStyle.table}>
                        <View style={menuStyle.firstRow}>
                            <Text style={menuStyle.firstCell}>Macronutrientes</Text>
                            <Text style={[menuStyle.cellRigth]}>  </Text>
                        </View>
                        <View style={menuStyle.row}>
                            <Text style={menuStyle.cellLeft}>Proteína</Text>
                            <Text style={[menuStyle.cellRigth]}> {tabMacronutrientesObj.txProteina} g </Text>
                        </View>
                        <View style={menuStyle.row}>
                            <Text style={[menuStyle.cellLeft]}>Carboidratos</Text>
                            <Text style={menuStyle.cellRigth}> {tabMacronutrientesObj.txCarboidrato} g </Text>
                        </View>
                        <View style={menuStyle.row}>
                            <Text style={[menuStyle.cellLeft]}>Gordura</Text>
                            <Text style={menuStyle.cellRigth}> {tabMacronutrientesObj.txGordura} g </Text>
                        </View>
                        <View style={menuStyle.rowLast}>
                            <Text style={[menuStyle.cellLeft]}>Calorias total</Text>
                            <Text style={menuStyle.cellRigth}> {tabMacronutrientesObj.txKcal} Kcal </Text>
                        </View>
                        <View style={menuStyle.row}>
                            <Text style={[menuStyle.cellLeft]}>Água total</Text>
                            <Text style={menuStyle.cellRigth}> {tabMacronutrientesObj.txAgua} ml </Text>
                        </View>
                    </View>
                </View>

                <View style={[menuStyle.containerBranco, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                    <Text h4 h4Style={{ color: 'rgba(0, 151, 178, 1)', marginBottom: 5 }}>
                        <MaterialCommunityIcons name="silverware-variant" size={25} color="rgba(0, 151, 178, 1)" /> Refeições
                    </Text>
                    <TouchableOpacity onPress={() => navigateToNewRefeicao()}>
                        <Text h4 h4Style={{ color: 'rgba(0, 151, 178, 1)', marginBottom: 5 }}>
                            <MaterialCommunityIcons name="plus-circle-outline" size={25} color="rgba(0, 151, 178, 1)" />
                        </Text>
                    </TouchableOpacity>
                </View>

                {refeicoes.map(refeicao => (
                    <View style={menuStyle.cardRefeicao} key={refeicao.cdRefeicao}>
                        <TouchableOpacity onPress={() => navigateToRefeicao(refeicao.cdRefeicao)}>
                            <MaterialCommunityIcons name={refeicao.txIcon} size={45} color="rgba(255, 255, 255, 1)" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigateToRefeicao(refeicao.cdRefeicao)}>
                            <Text style={menuStyle.textoRefeicao}>    {refeicao.txRefeicao}</Text>
                            <Text style={menuStyle.horaRefeicao}>    {refeicao.dtHoraRefeicao}</Text>
                        </TouchableOpacity>
                    </View>
                ))}

            </View>
        </ScrollView >
    );
}
