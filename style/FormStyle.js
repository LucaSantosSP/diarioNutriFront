import { StyleSheet } from 'react-native';

const formStyle = StyleSheet.create({
    
    //Titulo página
    textTitle: {
        marginTop: 35,
        marginBottom: 35,
    },

    //redefine input
    inputDefault: {
        borderWidth: 0, // Remove a borda do input
        backgroundColor: 'transparent', // Define o fundo como transparente
      },

    //Input
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#0F9DB6', // Cor de fundo para o input
        borderRadius: 5,
        paddingHorizontal: 10,
        color: 'white',
        borderWidth: 0,
        fontSize: 18,
    },

    //label dos inputs
    label: {
        width: '80%',
        borderRadius: 5,
        paddingHorizontal: 10,
        color: '#084550',
        borderWidth: 0,
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },

    //Label novo alimento
    labelNovoAlimento: {
        width: '85%',
        borderRadius: 5,
        paddingHorizontal: 10,
        color: '#084550',
        borderWidth: 0,
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },

    //Estilo do input de pesquisa
    inputPesquisa: {
        width: '80%',
        height: 50,
        backgroundColor: '#F3F3F3', // Cor de fundo para o input
        borderRadius: 5,
        paddingHorizontal: 10,
        color: '#616161',
        borderWidth: 0,
        fontSize: 18,
    },

    //linha Azul
    hrAzul: {
        width: '85%',
        borderBottomWidth: 1, 
        borderBottomColor: '#084550',
        marginBottom: 20,
    }
});

export default formStyle

