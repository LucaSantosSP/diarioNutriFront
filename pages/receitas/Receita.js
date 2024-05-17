import React from 'react';
import { ScrollView, Image, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import NavigationButtons from '../../util/NavBar';

import receitaStyle from './ReceitaStyle';
import refeicaoStyle from '../refeicao/RefeicaoStyle';

export default function Receita({ route }) {
    const navigation = useNavigation();
    // const { cdReceita } = route.params; // Descomente se precisar usar

    const foto = require('../../images/strogonoff.png');

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={foto}
                        style={receitaStyle.imagemReceita}
                    />  
                    <View style={receitaStyle.containerTopReiceita}>
                        <Text style={receitaStyle.leftText}>Salgado</Text>
                        <Text style={receitaStyle.rightText}>Valor nutricional: 395 Kcal</Text>
                    </View>

                    <View style={receitaStyle.containerIngredientes}>
                        <Text style={receitaStyle.titleText}>INGREDIENTES</Text>
                        <Text style={receitaStyle.conteudoText}>
                            - 1 filé de fraldinha (340g), aparado{'\n'}
                            - 3 colheres (sopa) de farinha de trigo{'\n'}
                            - 1 colher (sopa) de páprica suave{'\n'}
                            - 1/4 colher (chá) de sal{'\n'}
                            - 1/4 colher (chá) de pimenta moída na hora{'\n'}
                            - 1 colher (sopa) de azeite de oliva{'\n'}
                            - 2 dentes de alho bem picados{'\n'}
                            - 1 xícara e meia de cebola finamente fatiada (cerca de 1 unidade grande), separada em anéis{'\n'}
                            - 1 xícara e meia de pimentão verde cortado em tiras de 4-5cm de comprimento{'\n'}
                            - 230g de champignon fatiado{'\n'}
                            - 1 xícara de caldo de carne{'\n'}
                            - 1/2 xícara de creme de leite light{'\n'}
                        </Text>
                    </View>

                    <View style={receitaStyle.containerIngredientes}>
                        <Text style={receitaStyle.titleText}>MODO DE PREPARO</Text>
                        <Text style={receitaStyle.conteudoText}>
                        1. Corte a carne em fatias finas,                   
                            diagonalmente à fibra.{'\n'}{'\n'}
                        2. Misture 2 colheres (sopa) de farinha 
                            com a páprica, o sal e a pimenta em  
                            uma tigela rasa; acrescente a carne e 
                            sacuda para cobrir.{'\n'}{'\n'}
                        3. Aqueça o óleo de oliva em uma 
                            frigideira antiaderente grande, em 
                            fogo médio-alto. Acrescente a carne;         
                            cozinhe por cerca de 5 minutos, até as 
                            fatias dourarem dos dois lados. 
                            Adicione o alho, a cebola e o pimentão 
                            verde; cozinhe por 2 minutos, 
                            mexendo frequentemente. Junte os 
                            cogumelos e cozinhe por 2 minutos 
                            com a frigideira destampada. 
                            Acrescente o caldo de carne e deixe 
                            levantar fervura. Tampe, diminua o 
                            fogo para médio-baixo e cozinhe por 
                            10 minutos.{'\n'}{'\n'}
                        4. Nesse meio-tempo, em uma tigela 
                            pequena ou xícara, misture o creme de 
                            leite com a colher (sopa) de farinha 
                            restante e mexa até que fiquem 
                            homogêneos. Junte à mistura no fogo 
                            e cozinhe, mexendo constantemente, 
                            por 2 minutos ou até engrossar.{'\n'}
                        </Text>
                    </View>
                </View>
                <Text> {'\n'}{'\n'}{'\n'}</Text>
            </ScrollView>
            <View style={refeicaoStyle.navigationContainer}>
                <NavigationButtons navigation={navigation} />
            </View>
        </View>
    );
}
