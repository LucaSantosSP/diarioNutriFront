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

    
});

export default alimentoStyle