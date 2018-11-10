import React, {Component} from 'react';
import { StyleSheet, View , TouchableOpacity, TextInput, Dimensions, Picker} from 'react-native';
import firebase from '.././Firebase';
import { SearchBar } from 'react-native-elements';
import MapView from 'react-native-maps';
import {createStackNavigator} from 'react-navigation'
import Helpers from './Helpers';

class App extends React.Component {
  static navigationOptions = {
    title: 'Buscar Tutoría',
    headerStyle: { backgroundColor: '#ffca3a'},
  };

  constructor(props) {
    super(props);

    console.ignoredYellowBox = [
      'Warning', 'Setting a timer'
    ];

    this.state = {
      area: '',
      areas:[],
    }
}
    async componentDidMount(){
    try{
      let user = await firebase.auth().currentUser
      Helpers.getTotalAreas(user.uid, (areas) => {
        this.setState({
          areas: areas,
        })
      })
    }catch(error){
      console.log(error)
    }    
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Picker
            selectedValue={this.state.area}
            onValueChange={(itemValue, itemIndex) => this.setState({area: itemValue})}>
            <Picker.Item label="Área..." value="" />
            {this.state.areas.map((item, index) => {
               return (< Picker.Item label={item} value={item} key={index} />);

            })}  
          </Picker> 
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
          onPress={() => this.props.navigation.navigate('ListaTutoresScreen', {area:this.state.area, universidad: 'universidad de la costa'})}
          />

          <MapView.Marker
          coordinate={{
            latitude: 10.995551,
            longitude: -74.791463,
          }}
          title={'Universidad Simon Bolivar'}
          image={require('../assets/img/icons/marker.png')}
          onPress={() => this.props.navigation.navigate('ListaTutoresScreen', {area:this.state.area, universidad: 'universidad Simón Bolivar'})}
          />

          <MapView.Marker
          coordinate={{
            latitude: 10.988781,
            longitude: -74.787995,
          }}
          title={'Universidad Libre - Sede Centro'}
          image={require('../assets/img/icons/marker.png')}
          onPress={() => this.props.navigation.navigate('ListaTutoresScreen', {area:this.state.area, universidad: 'Universidad Libre - Sede Centro'})}
          />

          <MapView.Marker
          coordinate={{
            latitude: 11.021438,
            longitude: -74.865183,
          }}
          title={'Universidad Libre - Sede Norte'}
          image={require('../assets/img/icons/marker.png')}
          onPress={() => this.props.navigation.navigate('ListaTutoresScreen', {area:this.state.area, universidad: 'Universidad Libre - Sede Norte'})}
          />

          <MapView.Marker
          coordinate={{
            latitude: 11.019550,
            longitude: -74.850462,
          }}
          title={'Universidad del Norte'}
          image={require('../assets/img/icons/marker.png')}
          onPress={() => this.props.navigation.navigate('ListaTutoresScreen', {area:this.state.area, universidad: 'Universidad del Norte'})}
          />

          <MapView.Marker
          coordinate={{
            latitude: 11.004218,
            longitude: -74.823658,
          }}
          title={'Universidad Autónoma del Caribe'}
          image={require('../assets/img/icons/marker.png')}
          onPress={() => this.props.navigation.navigate('ListaTutoresScreen', {area:this.state.area, universidad: 'Universidad Autónoma del Caribe'})}
          />

          <MapView.Marker
          coordinate={{
            latitude: 11.0199172,
            longitude:  -74.871631,
          }}
          title={'Universidad del Atlántico'}
          image={require('../assets/img/icons/marker.png')}
          onPress={() => this.props.navigation.navigate('ListaTutoresScreen', {area:this.state.area, universidad: 'Universidad del Atlántico'})}
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