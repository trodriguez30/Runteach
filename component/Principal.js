import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, Button} from 'react-native';
import PrincipalTab from './PrincipalTab';
import NavBar from './NavBar';
import { Constants } from 'expo';
import firebase from '.././Firebase';
import Helpers from './Helpers';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffca3a',
    flexGrow: 1,
    justifyContent: 'center'
  },
  user: {
  	marginTop: 10,
  	marginBottom: 10,
    width: 70,
    height: 70
  },
  text:{
    opacity: 0.9,
    marginBottom: 10,
  },
  name: {
  	textAlign: 'center',
  	color: '#fff',
    fontSize: 16,
  },
  ubication:{
  	textAlign: 'center',
  	color: '#fff',
    fontSize: 13, 
  },
})

export default class Principal extends Component {

  constructor() {
    super();
    
    console.ignoredYellowBox = [
      'Setting a timer'
    ];

    this.state={
      nombre:'',
      apellido:'',
      ubicacion:''
    }

  }
 
    Data = {}

    async componentDidMount(){
    //console.log(firebase.auth().currentUser.uid);
    try{
    let user = await firebase.auth().currentUser
    Helpers.getNombre(user.uid ,(nombre) => {
      this.setState({
        nombre: nombre,
      })
    })
    Helpers.getApellido(user.uid ,(apellido) => {
      this.setState({
        apellido: apellido,
      })
    })
    Helpers.getUbicacion(user.uid ,(ubicacion) => {
      this.setState({
        ubicacion: ubicacion,
      })
    })
  }catch(error){
    console.log(error)
  }
    
}

  render() {
    var user = {};
    user = this.Data;
    return (
    	<View>
    		<View>
          <NavBar />
        </View>
        <View style={styles.container}>
          <Image 
            style={styles.user}
            source={require('.././assets/img/icons/user.png')} 
          />
          <View style={styles.text}>
            <Text>{this.state.nombre+' '+this.state.apellido}</Text>
            <Text style={styles.ubication}>
              <Image
              style={styles.touchIcon}
              source={require('.././assets/img/icons/location.png')}/>
              {this.state.ubicacion}
            </Text>
          </View>
        </View>
	      <View>
	        <PrincipalTab />
	     </View>
      	</View>
    )
  }
}