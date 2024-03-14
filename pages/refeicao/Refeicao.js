import { Text, View } from 'react-native';

export default function Refeicao({ route }) {

    const { key } = route.params;


    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> { key }!</Text>
      </View>
    );
  }