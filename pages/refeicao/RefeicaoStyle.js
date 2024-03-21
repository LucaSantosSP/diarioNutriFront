import { StyleSheet } from 'react-native';

const refeicaoStyle = StyleSheet.create({
    navigationContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
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
        color: '#0F9DB6',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cellLeft: {
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
    cellRigth: {
        marginRight: 15,
    },
    textCellRigth: {
        color: '#6D6D6D',
        fontSize: 18,
        textDecorationLine: 'underline',
    }
});

export default refeicaoStyle

