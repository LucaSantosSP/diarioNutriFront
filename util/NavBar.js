import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

class NavigationButtons extends Component {
  handleNavigation = (screenName) => {
    const { currentScreen, navigation } = this.props;

    // Verifique se a tela a ser navegada é diferente da tela atual
    if (currentScreen !== screenName) {
      // Reset a pilha de navegação e navegue para a tela especificada
      navigation.reset({
        index: 0,
        routes: [{ name: screenName }],
      });
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'white', borderTopWidth: 1, borderTopColor: '#e1e1e1' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginTop: 5 }}>
          <TouchableOpacity onPress={() => this.handleNavigation('Menu')} style={{ flexDirection: 'column', alignItems: 'center' }}>
            <MaterialCommunityIcons name="home" color="#8b8b8b" size={25} style={{ margin: 0, padding: 0 }} />
            <Text style={{ marginLeft: 5, marginTop: 0, padding: 0 }}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleNavigation('AlimentoPesquisa')} style={{ flexDirection: 'column', alignItems: 'center' }}>
            <MaterialCommunityIcons name="plus" color="#8b8b8b" size={25} style={{ margin: 0, padding: 0 }} />
            <Text style={{ marginLeft: 5, margin: 0, padding: 0 }}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleNavigation('Historico')} style={{ flexDirection: 'column', alignItems: 'center' }}>
            <MaterialCommunityIcons name="calendar" color="#8b8b8b" size={25} style={{ margin: 0, padding: 0 }} />
            <Text style={{ marginLeft: 5, margin: 0, padding: 0 }}></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleNavigation('Perfil')} style={{ flexDirection: 'column', alignItems: 'center' }}>
            <MaterialCommunityIcons name="account" color="#8b8b8b" size={25} style={{ margin: 0, padding: 0 }} />
            <Text style={{ marginLeft: 5, margin: 0, padding: 0 }}></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default NavigationButtons;
