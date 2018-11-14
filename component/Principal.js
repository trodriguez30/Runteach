import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, Button, Dimensions, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { Constants } from 'expo';
import firebase from '.././Firebase';
import Helpers from './Helpers';
import Informacion from './Informacion';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffca3a',
    flexGrow: 1,
    justifyContent: 'center'
  },
  navBar: {
    backgroundColor: '#ffca3a',
  },
  navBarTitle: {
    color: '#rgba(0, 0, 0, 0.65)',
    textAlign: 'left',
  },
  navBarOption: {
    color: '#rgba(0, 0, 0, 0.45)',
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
      notificacionEstudiante:[],
      notificacionTutor:[],
    }

  }
 
  Data = {}

  async componentDidMount(){
    const { navigation } = this.props;
    const getData = navigation.getParam('data', 'NO-ID');
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

       /*los valores de notificacion estudiante y de notificacion tutor tienen que actualizarce automaticamente 
       cuando se conteste una tutoria en la parte de tutor o cuando se marque como visto una solicitud de tutoria 
       en la parte de estudiante
       estos números se muestran en la barra de navegacion al lado de la campana
       cuando carga por primera vez si se actualiza pero despues de contestar alguna notificacion no se modifican
       los helpers de abajo cargan en un array todas las notificaciones
       que despues en el render se cuentan la longitud para saber cuantas notificaciones hay*/

       Helpers.getHistorial((historial) => {
        historial.forEach((child) => {
          Helpers.getNotificacionesEstudiante(child,user.uid, (not) => {
            if(not){
              this.setState({
                notificacionEstudiante: this.state.notificacionEstudiante.concat([child]),
              })
            }
          })
          Helpers.getNotificacionesTutor(child,user.uid, (not) => {
            if(not){
              this.setState({
                notificacionTutor: this.state.notificacionTutor.concat([child]),
              })
            }
          })
        })
      })
      
    }catch(error){
      console.log(error)
    }  
  }

      

  render() {
    return (
    	<View>
    		<View>
          <NavBar style={styles}>
            <NavButton>
              <NavButtonText style={styles.navBarOption}>
                <Image source={require('.././assets/img/icons/menu.png')} />
              </NavButtonText>
              </NavButton>
              <NavTitle style={styles.navBarTitle}>
                {"Perfil"}
            </NavTitle>
            <NavButton
            onPress={() => this.props.navigation.navigate('NotificacionesScreen')}
            >
              <NavButtonText style={styles.navBarOption}>
              <Text>
                {this.state.notificacionEstudiante.length + this.state.notificacionTutor.length}
                <Image source={require('.././assets/img/icons/notification.png')} />
                </Text>
              </NavButtonText>
            </NavButton>
          </NavBar>
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