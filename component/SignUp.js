import React, {Component} from 'react';
import { StyleSheet, Button, KeyboardAvoidingView, ScrollView, Text, View , TouchableOpacity, Image, TextInput, Alert, Picker} from 'react-native';
import Logo from './Logo';
import firebase from '.././Firebase';


class SignUp extends React.Component {
  static navigationOptions = {
    title: 'Registro',

  };

  constructor() {
  super();
  console.ignoredYellowBox = [
  'Setting a timer'
  ];
  }

  state = { nombre:'', apellido:'', universidad:'', carrera:'', ubicacion:'', semestre:'',edad:'', sexo:'', celular:'' ,email: '', password: '', errorMessage: null }

  handleSignup = () => {
    const { email, password, nombre, apellido, universidad, carrera, ubicacion, semestre, edad, sexo, celular } = this.state
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
    firebase.database().ref('users/' + res.user.uid).set({
        nombre: nombre,
        apellido: apellido,
        universidad: universidad,
        carrera: carrera,
        ubicacion: ubicacion,
        semestre: semestre,
        edad: edad,
        celular: celular,
        sexo: sexo,
    }).catch(
        error => {Alert.alert(error.message);}
    )
    }).then(() => { 
    	Alert.alert("Mensaje", "Cuenta creada correctamente");
    	this.props.navigation.navigate('LoginScreen');
    })   
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
			  <Picker.Item label="Universidad Libre" value="Universidad Libre" />
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
            onSubmitEditing={() => this.ubicacionInput.focus()}
            ref={(input) => this.carreraInput = input}
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/ubication.png')} style={styles.icon} />
            <TextInput
            style={styles.inputText}
            onChangeText={ubicacion => this.setState({ ubicacion })}
            value={this.state.ubicacion}
            underlineColorAndroid='transparent'
            placeholder="Ubicación"
            returnKeyType="next"
            ref={(input) => this.ubicacionInput = input}
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
          <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/email.png')} style={styles.icon} />
            <TextInput
            style={styles.inputText}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            underlineColorAndroid='transparent'
            placeholder="Email"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            ref={(input) => this.emailInput = input}
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/key.png')} style={styles.icon} />
            <TextInput
              style={styles.inputText}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              underlineColorAndroid='transparent'
              placeholder="Password"
              returnKeyType="go"
              secureTextEntry
              placeholderTextColor="rgba(11,35,51,0.7)"
              ref={(input) => this.passwordInput = input}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              onPress={this.handleSignup}
              style={styles.touch}>
              <Text style={styles.buttonText}>SIGN UP</Text>
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


 export default SignUp;