import React, {Component} from 'react';
import { StyleSheet, Button, KeyboardAvoidingView, ScrollView, Text, View , TouchableOpacity, Image, TextInput, Alert, Picker} from 'react-native';
import firebase from '.././Firebase';
import {createStackNavigator} from 'react-navigation'

class CambiarPw extends React.Component {
  static navigationOptions = {
    title: 'Cambiar contraseña',
    headerStyle: { backgroundColor: '#ffca3a'},
  };

  state = {
    password: '', 
    newPass:'',
  }

  handleCambiarPw = () => {
    if(this.state.password==''){
     (Alert.alert("ERROR", "Digite contraseña actual"))
      this.passwordActInput.focus()
    }else if(this.state.newPass==''){
      (Alert.alert("ERROR", "Digite nueva contraseña"))
      this.passwordNewInput.focus()
    }else{
      const { password, newPass } = this.state
      const user = firebase.auth().currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(
          user.email, 
          password,
      );
      user.reauthenticateAndRetrieveDataWithCredential(credential).then(() => {
        user.updatePassword(newPass).then(() => {
          Alert.alert("Aviso", "Cambio de contraseña exitoso")
          this.props.navigation.navigate('PrincipalScreen')
        }).catch((error) => { 
          (Alert.alert("Aviso", "Fallo al actualizar contraseña, vuelva a intentar más tarde")) 
        });
      }).catch((error) => { 
        (Alert.alert("ERROR", "contraseña incorrecta"))
        this.passwordNewInput.clear()
        this.passwordActInput.clear()
        this.passwordActInput.focus()
      });
    }
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <View>
        <Image source={require('.././assets/img/icons/key.png')} style={styles.icon} />
            <TextInput
            style={styles.inputText}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            underlineColorAndroid='transparent'
            placeholder="Actual contraseña"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordNewInput.focus()}
            ref={(input) => this.passwordActInput = input}
            secureTextEntry
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
        </View>
        <View>
        <Image source={require('.././assets/img/icons/key.png')} style={styles.icon} />
            <TextInput
            style={styles.inputText}
            onChangeText={newPass => this.setState({ newPass })}
            value={this.state.newPass}
            underlineColorAndroid='transparent'
            placeholder="Nueva contraseña"
            returnKeyType="next"
            ref={(input) => this.passwordNewInput = input}
            secureTextEntry
            placeholderTextColor="rgba(11,35,51,0.7)"
            />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.handleCambiarPw}
            style={styles.touch}>
            <Text style={styles.buttonText}>Confirmar</Text>
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



 export default CambiarPw;
