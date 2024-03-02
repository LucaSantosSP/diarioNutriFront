import { StyleSheet } from 'react-native';

const perfilStyle = StyleSheet.create({
    
    //Foto
    imagem: {
        width: 180,
        height: 180,
        borderRadius: 100,
    },

    //Tabela default 
    table: {
        marginBottom: 20,
        backgroundColor: 'rgba(243, 243, 243, 1)',
        padding: 5,
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

});

export default perfilStyle

