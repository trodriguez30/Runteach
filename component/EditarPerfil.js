import React, {Component} from 'react';
import { StyleSheet, Button, KeyboardAvoidingView, ScrollView, Text, View , TouchableOpacity, Image, TextInput, Alert, Picker} from 'react-native';
import Logo from './Logo';
import firebase from '.././Firebase';
import Helpers from './Helpers';

class EditarPerfil extends React.Component {
  static navigationOptions = {
    title: 'Editar perfil',
    headerStyle: { backgroundColor: '#ffca3a'},
  };

  constructor() {

    super();

    console.ignoredYellowBox = [
      'Warning', 'Setting a timer'
    ];

    this.state = { 
      nombre:'',
      apellido:'',
      universidad:'',
      carrera:'',
      semestre:'',
      edad:'',
      sexo:'',
      celular:''
    }
  }

  

  componentDidMount(){
    try{
      let user = firebase.auth().currentUser
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
      Helpers.getUniversidad(user.uid ,(universidad) => {
        this.setState({
          universidad: universidad,
        })
      })
      Helpers.getCarrera(user.uid ,(carrera) => {
        this.setState({
          carrera: carrera,
        })
      })
      Helpers.getSemestre(user.uid ,(semestre) => {
        this.setState({
          semestre: semestre,
        })
      })
      Helpers.getEdad(user.uid ,(edad) => {
        this.setState({
          edad: edad,
        })
      })
      Helpers.getSexo(user.uid ,(sexo) => {
        this.setState({
          sexo: sexo,
        })
      })
      Helpers.getCelular(user.uid ,(celular) => {
        this.setState({
          celular: celular,
        })
      })
    }catch(error){
      console.log(error)
    }  
  }

  handleEditarPerfil = () => {
    let user = firebase.auth().currentUser;
    firebase.database().ref('users/' + user.uid).update({
      nombre:this.state.nombre,
      apellido:this.state.apellido,
      universidad:this.state.universidad,
      carrera:this.state.carrera,
      semestre:this.state.semestre,
      edad:this.state.edad,
      sexo:this.state.sexo,
      celular:this.state.celular,
    }).catch(
      error => {Alert.alert(error.message);}
    );
    Alert.alert("Mensaje", "Cambios guardados");
      this.props.navigation.navigate('PrincipalScreen');
  }
  
  render() {
    return (
      <KeyboardAvoidingView behavior='padding'>
      <ScrollView style={styles.formContainer}>
        <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/profile.png')} style={styles.icon} />
            <TextInput
            style={styles.inputText}
            onChangeText={nombre => this.setState({ nombre })}
            value={this.state.nombre}
            underlineColorAndroid='transparent'
            placeholder="Nombre"
            returnKeyType="next"
            onSubmitEditing={() => this.apellidosInput.focus()}
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/profile.png')} style={styles.icon} />
            <TextInput
            style={styles.inputText}
            onChangeText={apellido => this.setState({ apellido })}
            value={this.state.apellido}
            underlineColorAndroid='transparent'
            placeholder="Apellido"
            returnKeyType="next"
            ref={(input) => this.apellidosInput = input}
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/university.png')} style={styles.icon} />
            <Picker
      			  selectedValue={this.state.universidad}
      			  style={styles.pickerList}
      			  onValueChange={(itemValue, itemIndex) => this.setState({universidad: itemValue})}
      			  mode="dropdown">
      			  <Picker.Item label="Universidad..." value="" />
      			  <Picker.Item label="Universidad de la Costa" value="universidad de la costa" />
      			  <Picker.Item label="Universidad Simón Bolivar" value="Universidad Simón Bolivar" />
      			  <Picker.Item label="Universidad Libre - Sede Norte" value="Universidad Libre - Sede Norte" />
              <Picker.Item label="Universidad Libre - Sede Centro" value="Universidad Libre - Sede Centro" />
      			  <Picker.Item label="Universidad del Norte" value="Universidad del Norte" />
      			  <Picker.Item label="Universidad Autónoma del Caribe" value="Universidad Autónoma del Caribe" />
      			  <Picker.Item label="Universidad del Atlántico" value="Universidad del Atlántico" />
      			</Picker>
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/promotion.png')} style={styles.icon} />
            <TextInput
            style={styles.inputText}
            onChangeText={carrera => this.setState({ carrera })}
            value={this.state.carrera}
            underlineColorAndroid='transparent'
            placeholder="Carrera"
            returnKeyType="next"
            ref={(input) => this.carreraInput = input}
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/semestre.png')} style={styles.icon} />
           	<Picker
      			  selectedValue={this.state.semestre}
      			  style={styles.pickerList}
      			  onValueChange={(itemValue, itemIndex) => this.setState({semestre: itemValue})}>
      			  <Picker.Item label="Semestre..." value="" />
      			  <Picker.Item label="1" value="1" />
      			  <Picker.Item label="2" value="2" />
      			  <Picker.Item label="3" value="3" />
      			  <Picker.Item label="4" value="4" />
      			  <Picker.Item label="5" value="5" />
      			  <Picker.Item label="6" value="6" />
      			  <Picker.Item label="7" value="7" />
      			  <Picker.Item label="8" value="8" />
      			  <Picker.Item label="9" value="9" />
      			  <Picker.Item label="10" value="10" />
      			</Picker>
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/calendar.png')} style={styles.icon} />
            <TextInput
            style={styles.inputText}
            onChangeText={edad => this.setState({ edad })}
            value={this.state.edad}
            underlineColorAndroid='transparent'
            placeholder="Edad"
            returnKeyType="next"
            ref={(input) => this.edadInput = input}
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/mf.png')} style={styles.icon} />
            <Picker
      			  selectedValue={this.state.sexo}
      			  style={styles.pickerList}
      			  onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>
      			  <Picker.Item label="Sexo..." value="" />
      			  <Picker.Item label="Femenino" value="Femenino" />
      			  <Picker.Item label="Masculino" value="Masculino" />
      			</Picker>
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/phone.png')} style={styles.icon} />
            <TextInput
            style={styles.inputText}
            onChangeText={celular => this.setState({ celular })}
            value={this.state.celular}
            underlineColorAndroid='transparent'
            placeholder="Celular"
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
            ref={(input) => this.celularInput = input}
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              onPress={this.handleEditarPerfil}
              style={styles.touch}>
              <Text style={styles.buttonText}>GUARDAR CAMBIOS</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  icon:{
    position: 'absolute',
    width: 18,
    height: 18,
    left: 7,
    top: 7,
  },
  inputText: {
    height: 30,
    paddingLeft: 40,
    backgroundColor: 'rgba(255,255,255,0.20)',
    marginBottom: 20,
    color: '#0b2333',
    paddingHorizontal: 10,
    borderRadius: 30,
    fontSize: 15,
  },
  pickerList:{
  	height: 30,
    marginLeft: 40,
    backgroundColor: 'rgba(255,255,255,0.20)',
    marginBottom: 20,
    color: '#0b2333',
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginBottom: 15
  },
  touch: {
    height: 40,
    backgroundColor: '#0b2333',
    paddingVertical: 10,
    justifyContent: 'center',
    borderRadius: 30
  },
  buttonText:{
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700' 
  },
});


 export default EditarPerfil;