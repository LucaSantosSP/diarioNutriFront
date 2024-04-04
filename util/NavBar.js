import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

class NavigationButtons extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'white', borderTopWidth: 1, borderTopColor: '#e1e1e1' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginTop: 5 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={{ flexDirection: 'column', alignItems: 'center' }}>
            <MaterialCommunityIcons name="home" color="#8b8b8b" size={25} style={{ margin: 0, padding: 0 }} />
            <Text style={{ marginLeft: 5, marginTop: 0, padding: 0 }}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AlimentoPesquisa')} style={{ flexDirection: 'column', alignItems: 'center' }}>
            <MaterialCommunityIcons name="plus" color="#8b8b8b" size={25} style={{ margin: 0, padding: 0 }} />
            <Text style={{ marginLeft: 5, margin: 0, padding: 0 }}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Historico')} style={{ flexDirection: 'column', alignItems: 'center' }}>
            <MaterialCommunityIcons name="calendar" color="#8b8b8b" size={25} style={{ margin: 0, padding: 0 }} />
            <Text style={{ marginLeft: 5, margin: 0, padding: 0 }}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={{ flexDirection: 'column', alignItems: 'center' }}>
            <MaterialCommunityIcons name="account" color="#8b8b8b" size={25} style={{ margin: 0, padding: 0 }} />
            <Text style={{ marginLeft: 5, margin: 0, padding: 0 }}></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default NavigationButtons;
