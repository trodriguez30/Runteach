import React from 'react';
import { Text, Dimensions, View, ScrollView } from 'react-native';
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