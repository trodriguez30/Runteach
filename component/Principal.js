import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, Button, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import NavBar from './NavBar';
import { Constants } from 'expo';
import firebase from '.././Firebase';
import Helpers from './Helpers';
import Informacion from './Informacion';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

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
  nameContainer:{
    opacity: 0.9,
    marginBottom: 5,
    flexDirection: 'row',
  },
  circleState: {
    width: 10,
    height: 10,
    borderRadius: 10/2,
  },
  textName: {
  	textAlign: 'center',
  	color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ubication:{
  	textAlign: 'center',
  	color: '#fff',
    fontSize: 13, 
    marginBottom: 5,
  },
  rolContainer: {
    flex: 1,
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
      ubicacion:'',
      currentColor:'#ff595e',
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
       Helpers.getEstado(user.uid ,(estado) => {
        if(estado){
          this.setState({
            currentColor: '#8ac926',
          })
        }else{
          this.setState({
            currentColor: '#ff595e',
          })
        }
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
          <View style={styles.nameContainer}>
            <Text style={styles.textName}>{this.state.nombre+' '+this.state.apellido}</Text>
            <View style={[styles.circleState, {backgroundColor: this.state.currentColor}]} />
          </View>
          <View style={styles.ubicationContainer}>
            <Text style={styles.ubication}>
              <Image
              style={styles.touchIcon}
              source={require('.././assets/img/icons/location.png')}/>
              {this.state.ubicacion}
            </Text>
          </View>
        </View>
	      <View>
	        <ScrollableTabView
            style={{flex:0, height: Dimensions.get('window').height,}}
            initialPage={0}
            renderTabBar={() => <DefaultTabBar />}
          >
            <ScrollView tabLabel='Perfil'><Informacion /></ScrollView>
            <View tabLabel='Rol'>
              <View style={styles.rolContainer}>
                <TouchableOpacity style={styles.touchContainer}
                onPress={() => this.props.navigation.navigate('BuscarTutoriaScreen')}
                >
                  <Image
                    style={styles.touchIcon}
                    source={require('.././assets/img/icons/student.png')}
                    />
                  <Text style={styles.touchText}>
                    ESTUDIANTE
                  </Text>
                </TouchableOpacity>    
                <TouchableOpacity style={styles.touchContainer}
                onPress={() => this.props.navigation.navigate('OpcionesTutorScreen')}
                >
                  <Text style={styles.touchText}>TUTOR</Text>
                  <Image
                    style={styles.touchIcon}
                    source={require('.././assets/img/icons/tutor.png')}
                  />
                </TouchableOpacity>      
              </View>
            </View>
            <ScrollView tabLabel='Configuración'></ScrollView>
          </ScrollableTabView>
	     </View>
      	</View>
    )
  }
}