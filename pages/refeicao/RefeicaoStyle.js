import { StyleSheet } from 'react-native';

const refeicaoStyle = StyleSheet.create({
    navigationContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },

    //Tabela alimentos
    containerCinza: {
        width: '100%', 
        backgroundColor: 'white', 
        paddingHorizontal: 20, 
        paddingVertical: 10,
        marginTop: 20,
    },

    tableAlimentos: {
        marginBottom: 10,
        backgroundColor: 'rgba(243, 243, 243, 1)',
        padding: 5,
        paddingBottom: 20,
        borderRadius: 8,
    },
    firstRowAlimentos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    rowAlimentos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#084550',
        paddingVertical: 8,
    },
    firstCellAlimentos: {
        flex: 1,
        textAlign: 'left',
        lineHeight: 30,
        marginLeft: 15,
        color: '#0F9DB6',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cellLeftAlimentos: {
        flex: 1,
        textAlign: 'left',
        lineHeight: 30,
        marginLeft: 15,
    },
    firstTextCellLeft: {
        flex: 1,
        textAlign: 'left',
        color: '#0F9DB6',
        fontSize: 18,
    },
    secondTextCellLeft: {
        flex: 1,
        textAlign: 'left',
        color: '#6D6D6D',
        fontSize: 16,
    },
    cellRigthAlimentos: {
        marginRight: 15,
    },
    textCellRigth: {
        color: '#6D6D6D',
        fontSize: 18,
        textDecorationLine: 'underline',
    }
});

export default refeicaoStyle

