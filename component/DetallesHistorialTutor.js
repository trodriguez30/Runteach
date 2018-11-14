import React, {Component} from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, Dimensions, Alert} from 'react-native';
import Logo from './Logo';
import firebase from '.././Firebase';
import Helpers from './Helpers';

class ListaTutores extends React.Component {
  static navigationOptions = {
    title: 'Detalles',
    headerStyle: { backgroundColor: '#ffca3a'},
  };

  constructor() {
    super();
    

    this.state={
      historial:[],
      estudianteId: '',
      nombreEstudiante: '',
      apellidoEstudiante:'',
      respuesta:'',
    }

  }

  async componentDidMount(){
    const { navigation } = this.props;
    const getInfoId = navigation.getParam('infoId', 'NO-ID');
    const getEstudianteId = navigation.getParam('estudianteId', 'NO-ID');
    try{
     Helpers.getHistorialInfo(getInfoId, (infoHistorial) => {
        this.setState({historial: infoHistorial})
      })
     Helpers.getNombre(getEstudianteId ,(nombre) => {
        this.setState({
          nombreEstudiante: nombre,
        })
      })
      Helpers.getApellido(getEstudianteId ,(apellido) => {
        this.setState({
          apellidoEstudiante: apellido,
        })
      })
    }catch(error){
      console.log(error)
    } 
  }

  handleAceptarTutoria = async () => {
      let user = await firebase.auth().currentUser;
      firebase.database().ref('historial/' + this.state.historial[0]).update({
        estado: 'aceptada'
      }).then( () => {
        Alert.alert("Mensaje", "Solicitud Aceptada, espere contacto del estudiante");
        this.props.navigation.navigate('PrincipalScreen');
      }).catch(
        error => {Alert.alert(error.message);}
      )
    }

    handleRechazarTutoria = async () => {
      let user = await firebase.auth().currentUser;
      firebase.database().ref('historial/' + this.state.historial[0]).update({
        estado: 'rechazada'
      }).then( () => {
        Alert.alert("Mensaje", "Solicitud Rechazada");
        this.props.navigation.navigate('PrincipalScreen');
      }).catch(
        error => {Alert.alert(error.message);}
      )
    }
  
  render() {
    let res;
    if(this.state.historial[3]=='pendiente'){
      res = <View style={styles.touchContainer}>
              <TouchableOpacity
                onPress={this.handleAceptarTutoria}
                style={styles.touchAceptar}>
                <Text style={styles.touchTextAceptar}>Aceptar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleRechazarTutoria}
                style={styles.touchRechazar}>
                <Text style={styles.touchTextRechazar}>Rechazar</Text>
              </TouchableOpacity>
            </View>;
    }else{
      res = <View style={styles.resContainer}>
              <Text style={styles.resText}>Solicitud {this.state.historial[3]}</Text>
             </View>; 
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Titulo:</Text>
          <TextInput
            style={styles.inputText}
            editable={false}
            value={this.state.historial[8]}
          />
          <Text style={styles.text}>Área:</Text>
          <TextInput
            style={styles.inputText}
            editable={false}
            value={this.state.historial[2]}
          />
          <Text style={styles.text}>Estudiante:</Text>
          <TextInput
            style={styles.inputText}
            editable={false}
            value={this.state.nombreEstudiante + ' ' + this.state.apellidoEstudiante}
          />
          <Text style={styles.text}>Fecha:</Text>
          <TextInput
            style={styles.inputText}
            editable={false}
            value={this.state.historial[7]}
          />
          <Text style={styles.text}>Descripción:</Text>
          <TextInput
            editable={false}
            multiline = {true}
            numberOfLines = {4}
            value={this.state.historial[4]}
          />
          {res}
        </View>
      </ScrollView>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  text:{
    marginVertical: 5,
    color: '#0b2333',
    fontWeight: '700',
    fontSize: 15,
  },
  inputText:{
    height: 30,
    fontSize: 15,
  },
  touchContainer: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  touchAceptar:{
    height: 40,
    backgroundColor: '#0b2333',
    paddingVertical: 10,
    justifyContent: 'center',
    marginVertical: 10,
    width: ((Dimensions.get('window').width)/2)-20,
  },
  touchTextAceptar:{
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700' ,
    fontSize: 15,
  },
  touchRechazar:{
    height: 40,
    width: ((Dimensions.get('window').width)/2)-20,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    justifyContent: 'center',
    marginVertical: 10,
  },
  touchTextRechazar:{
    textAlign: 'center',
    color: '#0b2333',
    fontWeight: '700' ,
    fontSize: 15,
  },
  resContainer:{
    marginVertical: 15,
  },
  resText:{
    color: '#0b2333',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});


 export default ListaTutores;