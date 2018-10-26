import React, {Component} from 'react';
import { StyleSheet, Button, KeyboardAvoidingView, ScrollView, Text, View , TouchableOpacity, Image, TextInput, Alert} from 'react-native';
import { LinearGradient} from 'expo';
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
        celular: celular
    })
    }).catch(
        error => {Alert.alert(error.message);}
    )
    this.props.navigation.navigate('LoginScreen');
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
            onSubmitEditing={() => this.universidadInput.focus()}
            ref={(input) => this.apellidosInput = input}
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/university.png')} style={styles.icon} />
            <TextInput
            style={styles.inputText}
            onChangeText={universidad => this.setState({ universidad })}
            value={this.state.universidad}
            underlineColorAndroid='transparent'
            placeholder="Universidad"
            returnKeyType="next"
            onSubmitEditing={() => this.carreraInput.focus()}
            ref={(input) => this.universidadInput = input}
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
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
            onSubmitEditing={() => this.semestreInput.focus()}
            ref={(input) => this.ubicacionInput = input}
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/semestre.png')} style={styles.icon} />
            <TextInput
            style={styles.inputText}
            onChangeText={semestre => this.setState({ semestre })}
            value={this.state.semestre}
            underlineColorAndroid='transparent'
            placeholder="Semestre"
            returnKeyType="next"
            onSubmitEditing={() => this.edadInput.focus()}
            ref={(input) => this.semestreInput = input}
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
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
            onSubmitEditing={() => this.sexoInput.focus()}
            ref={(input) => this.edadInput = input}
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/mf.png')} style={styles.icon} />
            <TextInput
            style={styles.inputText}
            onChangeText={sexo => this.setState({ sexo })}
            value={this.state.sexo}
            underlineColorAndroid='transparent'
            placeholder="Sexo"
            returnKeyType="next"
            onSubmitEditing={() => this.celularInput.focus()}
            ref={(input) => this.sexoInput = input}
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
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