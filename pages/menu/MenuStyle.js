import { StyleSheet } from 'react-native';

const menuStyle = StyleSheet.create({
    //Header
    header: {
        backgroundColor: '#084550',
        top: 0, 
        left: 0, 
        width: '100%',
        color: 'white',
        flexDirection: 'row', 
        alignItems: 'center',
    },

    imagem: {
        width: 50,
        height: 50,
        borderRadius: 100,
        margin: 15,
    },

    //Tabela default 
    containerBranco: {
        width: '100%', 
        backgroundColor: 'white', 
        paddingHorizontal: 20, 
        paddingVertical: 10,
        marginTop: 20,
    },

    table: {
        marginBottom: 10,
        backgroundColor: 'rgba(243, 243, 243, 1)',
        padding: 5,
        paddingBottom: 20,
        borderRadius: 8,
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#084550',
        paddingVertical: 8,
    },
    rowLast: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 3,
        borderBottomColor: '#084550',
        paddingVertical: 8,
    },
    firstCell: {
        flex: 1,
        textAlign: 'left',
        lineHeight: 30,
        marginLeft: 15,
        color: '#084550',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cellLeft: {
        flex: 1,
        textAlign: 'left',
        lineHeight: 30,
        marginLeft: 15,
        color: '#0F9DB6',
        fontSize: 18,
    },
    cellRigth: {
        flex: 1,
        textAlign: 'left',
        lineHeight: 30,
        marginLeft: 15,
        color: '#084550',
        fontSize: 18,
        fontWeight: 'bold',
    },

    //Card Refeições 
    cardRefeicao: {
        flexDirection: 'row', 
        alignItems: 'center',
        width: '90%',
        height: 80, 
        backgroundColor: '#0F9DB6', 
        paddingHorizontal: 20, 
        paddingVertical: 10,
        marginBottom: 20,
        borderRadius: 8,
    },
    textoRefeicao: {
        color: '#fff',
        fontWeight: 'bold',
    },
    horaRefeicao: {
        color: '#fff'
    },
});

export default menuStyle

