import React, {Component} from 'react';
import { StyleSheet, ScrollView, Text, View , SectionList, TouchableOpacity, Picker, TextInput, Alert} from 'react-native';
import Logo from './Logo';
import firebase from '.././Firebase';
import Helpers from './Helpers';

class SolicitudTutoria extends React.Component {
  static navigationOptions = {
    title: 'Lista',
    headerStyle: { backgroundColor: '#ffca3a'},
  };

  constructor() {
    super();
    
    console.ignoredYellowBox = [
      'Warning', 'Setting a timer'
    ];

    this.state={
      areas: [],
      descripcion:'',
      tutorId:'',
      estudianteId:'',
      titulo:'',
      area:'',
      codigo:'',
      fechahora:'',
      estado:'pendiente',
    }

  }

  async componentDidMount(){
    const { navigation } = this.props;
    const getTutorId = navigation.getParam('tutorId', 'NO-ID');
     this.setState({
          tutorId: getTutorId,
        })
    try{
      let user = await firebase.auth().currentUser
      this.setState({
          estudianteId: user.uid,
        })
      Helpers.getAreas(getTutorId ,(areas) => {
        this.setState({
          areas: areas,
        })
      })
      Helpers.getCodigoHistorial((codigo) => {
        this.setState({
          codigo: codigo,
        })
      })
      Helpers.getFechaHoraHistorial((fechahora) => {
        this.setState({
          fechahora: fechahora,
        })
      })
    }catch(error){
      console.log(error)
    }    
  }

  handleEnviarSolicitud = () => {
    firebase.database().ref('historial/' + this.state.codigo).set({
        tutorId: this.state.tutorId,
        estudianteId: this.state.estudianteId,
        area: this.state.area,
        titulo: this.state.titulo,
        descripcion: this.state.descripcion,
        fechahora: this.state.fechahora,
        estado: this.state.estado,
        visto: 'false',
    }).then(() => { 
      Alert.alert("Mensaje", "Solicitud enviada correctamente");
      this.props.navigation.navigate('PrincipalScreen');
    }).catch(
        error => {Alert.alert(error.message);}
    )
  }
  
  render() {
    return (
        <View style={styles.formContainer}>
          <Text style={styles.formText}>Área de conocimiento:</Text>
          <Picker
            selectedValue={this.state.area}
            onValueChange={(itemValue, itemIndex) => this.setState({area: itemValue})}>
            <Picker.Item label="Área..." value="" />
            {this.state.areas.map((item, index) => {
               return (< Picker.Item label={item} value={item} key={index} />);
            })}  
          </Picker> 
          <Text style={styles.formText}>Título de tutoría:</Text>
          <TextInput
            onChangeText={titulo => this.setState({ titulo })}
            value={this.state.titulo}
            placeholder="Escriba título aquí..."
            placeholderTextColor="rgba(11,35,51,0.7)"
            style={styles.formInputText}
          />
          <Text style={styles.formText}>Descripción de tutoría:</Text>
          <TextInput
            onChangeText={descripcion => this.setState({ descripcion })}
            multiline = {true}
            numberOfLines = {8}
            value={this.state.descripcion}
            placeholder="Escriba descripción aquí..."
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              onPress={this.handleEnviarSolicitud}
              style={styles.touchEnviar}>
              <Text style={styles.touchTextEnviar}>Enviar solicitud</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => this.props.navigation.goBack()}
              style={styles.touchCancelar}>
              <Text style={styles.touchTextCancelar}>Cancelar solicitud</Text>
            </TouchableOpacity>
          </View>
        </View>
     );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  formText:{
    marginVertical: 5,
    color: '#0b2333',
    fontWeight: '700',
    fontSize: 15,
  },
  formInputText:{
    height: 30,
    fontSize: 15,
  },
  buttonContainer: {
    marginBottom: 15
  },
  touchEnviar:{
    height: 40,
    backgroundColor: '#0b2333',
    paddingVertical: 10,
    justifyContent: 'center',
    marginVertical: 10,
  },
  touchTextEnviar:{
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700' ,
    fontSize: 15,
  },
  touchCancelar:{
    height: 40,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    justifyContent: 'center',
    marginVertical: 10,
  },
  touchTextCancelar:{
    textAlign: 'center',
    color: '#0b2333',
    fontWeight: '700' ,
    fontSize: 15,
  },
});


 export default SolicitudTutoria;