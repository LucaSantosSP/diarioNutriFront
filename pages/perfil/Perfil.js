import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UsuarioService from '../../services/UsuarioService';
import { Button } from 'react-native-elements';

export default function Perfil({navigation}) {

    const logout = (navigation) => {
        navigation.reset({
          index: 0,
          routes: [{name: "Login"}]
        })
      } 

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
        <Button title="Logout" 
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          buttonStyle={{
            backgroundColor: 'rgba(8, 69, 80, 1)',
            borderRadius: 8,
          }}
          onPress={() => logout(navigation)}/>
      </View>
    );
  }