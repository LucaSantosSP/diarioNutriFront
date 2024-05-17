import { StyleSheet } from 'react-native';

const receitaStyle = StyleSheet.create({
    
    //Foto
    imagem: {
        width: 120,
        height: 120,
        borderTopLeftRadius : 8,
        borderBottomLeftRadius : 8,
        marginRight: 20,
    },

    //Tabela default 
    table: {
        marginBottom: 20,
        backgroundColor: 'rgba(243, 243, 243, 1)',
        padding: 5,
        borderRadius: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingVertical: 0,
    },
    cell: {
        flex: 1,
        textAlign: 'center',
        borderRightWidth: 1.5,
        lineHeight: 30,
        borderRightColor: '#000',
    },
    cellLast: {
        flex: 1,
        textAlign: 'center',
        lineHeight: 30,
    },

    // Cor texto
    corTitulo: {
        color: 'rgba(0, 151, 178, 1)',
        fontWeight: 'bold',
    },

    //Formatação Icon
    icon: {
        padding: 60,
    },

    //Tabela dados pessoais
    tablePessoal: {
        marginBottom: 25,
        backgroundColor: 'rgba(0, 151, 178, 1)',
        borderRadius: 8,
    },
    cellPessoal: {
        flex: 1,
        textAlign: 'center',
        borderRightWidth: 1.5,
        borderRightColor: 'white',
        lineHeight: 30,
        color: 'white',
    },
    rowPessoal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 0,
    },

    //Estilo para card alimento
    cardAlimento: {
        flexDirection: 'row', 
        alignItems: 'center',
        width: '100%',
        height: 120, 
        backgroundColor: '#0F9DB6', 
        paddingRight: 20,
        paddingVertical: 0,
        marginBottom: 20,     
        borderRadius: 8,
    },

    //****************TELA REICEITA************

    //Foto Tela Receita
    imagemReceita: {
        width: '85%',
        height: 120,
        borderTopLeftRadius : 8,
        marginTop: 20,
    },
    containerTopReiceita: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%',
        backgroundColor: '#F3F3F3',
    },
    leftText: {
        flex: 1,
        textAlign: 'left',
        paddingLeft: 5,
        color: '#858585'
    },
    rightText: {
        flex: 1,
        textAlign: 'right',
        color: '#858585'
    },

    //card Ingredientes
    containerIngredientes: {
        justifyContent: 'space-between',
        width: '85%',
        backgroundColor: '#F3F3F3',
        marginTop: 20,
    },

    titleText: {
        flex: 1,
        textAlign: 'left',
        paddingLeft: 10,
        color: '#0097B2',
        fontWeight: 'bold',
        marginBottom: 10,
    },

    conteudoText: {
        flex: 1,
        textAlign: 'left',
        paddingLeft: 10,
        color: '#333',
    },



});

export default receitaStyle

