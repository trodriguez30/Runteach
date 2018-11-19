import React, {Component} from 'react';
import { StyleSheet, Button, KeyboardAvoidingView, ScrollView, Text, View , TouchableOpacity, Image, TextInput, Alert, Picker} from 'react-native';
import Logo from './Logo';
import firebase from '.././Firebase';
import {createStackNavigator} from 'react-navigation'

class RecuperarPw extends React.Component {
  static navigationOptions = {
    title: 'Recuperar contraseña',
    headerStyle: { backgroundColor: '#ffca3a'},
  };

state = {email: ''}

handleRecuperarPw = () => {
    const { email } = this.state
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert("Aviso", "Ingrese al correo electronico, sigua las instrucciones")
        this.props.navigation.navigate('LoginScreen')
      }).catch(
        error => {(Alert.alert("ERROR", "Email incorrecto"));
      }
    )
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <View>
          <Text
          style={styles.textContainer}>
          Digite su el correo electronico asociado a la cuenta
          </Text>
        </View>
        <View>
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.handleRecuperarPw}
            style={styles.touch}>
            <Text style={styles.buttonText}>Recuperar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  textContainer: {
    textAlign: 'center',
    marginTop: 25,
  },
  icon:{
    position: 'absolute',
    marginTop: 50,
    width: 18,
    height: 18,
    left: 7,
    top: 7,
  },
  inputText: {
    height: 30,
    paddingLeft: 40,
    backgroundColor: 'rgba(255,255,255,0.20)',
    marginTop: 50,
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
  }
});



 export default RecuperarPw;
