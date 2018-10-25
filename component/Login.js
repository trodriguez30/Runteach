import React, {Component} from 'react';
import { StyleSheet, Button, KeyboardAvoidingView, Text, View , TouchableOpacity, Image, TextInput} from 'react-native';
import { LinearGradient} from 'expo';
import Logo from './Logo';
import LoginOptions from './LoginOptions';
import firebase from '.././Firebase';


class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('PrincipalScreen'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <LinearGradient
          colors={['rgba(11,35,51,0.8)', 'transparent']}
          style={styles.Gradient}
        >
        </LinearGradient>
        <Logo />
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Image source={require('.././assets/img/icons/profile.png')} style={styles.icon} />
            <TextInput
            style={styles.inputText}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            underlineColorAndroid='transparent'
            placeholder="Email"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
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
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={this.handleLogin}
          style={styles.touch}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
      </View>
        <LoginOptions style={styles.loginOptions}/>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8d368',
  },
  Gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },
  text:{
    paddingVertical: 10,
    textAlign: 'center',
    color: '#0b2333',
    fontWeight: '700' 
  },
  formContainer: {
    paddingHorizontal: 20
  },
  icon:{
    position: 'absolute',
    width: 22,
    height: 22,
    left: 9,
    top: 9,
  },
  inputText: {
    height: 40,
    paddingLeft: 40,
    backgroundColor: 'rgba(255,255,255,0.20)',
    marginBottom: 20,
    color: '#0b2333',
    paddingHorizontal: 10,
    borderRadius: 30,
    fontSize: 15,
  },
  buttonContainer: {
    paddingHorizontal: 20
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


 export default Login;