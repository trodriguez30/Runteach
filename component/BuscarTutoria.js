import React, {Component} from 'react';
import { StyleSheet, View , TouchableOpacity, TextInput, Dimensions} from 'react-native';
import firebase from '.././Firebase';
import { SearchBar } from 'react-native-elements';
import MapView from 'react-native-maps';
import {createStackNavigator} from 'react-navigation'

class App extends React.Component {
  static navigationOptions = {
    title: 'Buscar Tutoría',
    headerStyle: { backgroundColor: '#ffca3a'},
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
        lightTheme
        icon={{ type: 'font-awesome', name: 'search' }}
        placeholder='Escriba área de conocimiento aquí...' />
        <View style={styles.mapContainer}>
          <MapView style={styles.map}
          region={{
            latitude: 10.995088,
            longitude: -74.791034,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          >
          <MapView.Marker
          coordinate={{
            latitude: 10.995088,
            longitude: -74.791034,
          }}
          title={'Universidad de la Costa'}
          image={require('../assets/img/icons/marker.png')}
          />

          <MapView.Marker
          coordinate={{
            latitude: 10.995551,
            longitude: -74.791463,
          }}
          title={'Universidad Simon Bolivar'}
          image={require('../assets/img/icons/marker.png')}
          />

          <MapView.Marker
          coordinate={{
            latitude: 10.988781,
            longitude: -74.787995,
          }}
          title={'Universidad Libre - Sede Centro'}
          image={require('../assets/img/icons/marker.png')}
          />

          <MapView.Marker
          coordinate={{
            latitude: 11.021438,
            longitude: -74.865183,
          }}
          title={'Universidad Libre - Sede Norte'}
          image={require('../assets/img/icons/marker.png')}
          />

          <MapView.Marker
          coordinate={{
            latitude: 10.995551,
            longitude: -74.791463,
          }}
          title={'Universidad Simon Bolivar'}
          image={require('../assets/img/icons/marker.png')}
          />

          <MapView.Marker
          coordinate={{
            latitude: 11.019550,
            longitude: -74.850462,
          }}
          title={'Universidad del Norte'}
          image={require('../assets/img/icons/marker.png')}
          />

          <MapView.Marker
          coordinate={{
            latitude: 11.004218,
            longitude: -74.823658,
          }}
          title={'Universidad Autónoma del Caribe'}
          image={require('../assets/img/icons/marker.png')}
          />

          <MapView.Marker
          coordinate={{
            latitude: 11.0199172,
            longitude:  -74.871631,
          }}
          title={'Universidad del Atlántico'}
          image={require('../assets/img/icons/marker.png')}
          />

          </MapView>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  mapContainer: {
    flex:1, 
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

 export default App;