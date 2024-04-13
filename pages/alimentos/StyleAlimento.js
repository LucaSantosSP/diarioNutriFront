import { StyleSheet } from 'react-native';

const alimentoStyle = StyleSheet.create({
    
    //Estilo para card alimento
    cardAlimento: {
        flexDirection: 'row', 
        alignItems: 'center',
        width: '100%',
        height: 80, 
        backgroundColor: '#F3F3F3', 
        paddingHorizontal: 20, 
        paddingVertical: 10,
        marginBottom: 20,     
        borderRadius: 8,
    },
    cardAlimentoEspacamento: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    //Alimento
    alimento: {
        flex: 1,
        textAlign: 'left',
        lineHeight: 30,
        marginLeft: 15,
        color: '#0F9DB6',
        fontSize: 18,
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

    // Tela novo alimento
    cardCinza: {
        width: '85%',
        backgroundColor: '#F3F3F3',
        borderRadius: 8,
        padding: 8,
        marginTop: 10,
        marginBottom: 10,
    },
    tablePicker: {
        marginBottom: 10,
        backgroundColor: 'rgba(243, 243, 243, 1)',
        padding: 5,
        paddingBottom: 20,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textPicker: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        lineHeight: 30,
        marginLeft: 15,
        color: '#084550',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default alimentoStyle