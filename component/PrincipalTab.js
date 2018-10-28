import React from 'react';
import { Text, Dimensions, View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Informacion from './Informacion';
import Rol from './Rol';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

export default () => {
  return <ScrollableTabView
    style={{flex:0, height: Dimensions.get('window').height,}}
    initialPage={0}
    renderTabBar={() => <DefaultTabBar />}
  >
    <ScrollView tabLabel='Perfil'><Informacion /></ScrollView>
    <View tabLabel='Rol'><Rol /></View>
    <ScrollView tabLabel='Historial'></ScrollView>
    <ScrollView tabLabel='Editar'></ScrollView>
  </ScrollableTabView>;
}


const styles = StyleSheet.create({
  RolContainer: {
    marginTop: 30,
    paddingHorizontal: 50
  },
  touchContainer: {
    marginTop: 20,
    height: 60,
    backgroundColor: '#0b2333',
    paddingVertical: 20,
    justifyContent: 'center',
  },
  touchIcon:{
    position: 'absolute',
    marginLeft: 20,
    top: 16,
  },
  touchText:{
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700', 
    fontSize: 20,
    paddingLeft: 50,
  },
});
