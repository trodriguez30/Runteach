import React, {Component} from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, View , TouchableOpacity} from 'react-native';
import { LinearGradient} from 'expo';
import Logo from './Logo';
import LoginForm from './LoginForm';
import LoginOptions from './LoginOptions';



class Login extends React.Component {

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <LinearGradient
          colors={['rgba(11,35,51,0.8)', 'transparent']}
          style={styles.Gradient}
        >
        </LinearGradient>
        <Logo />
        <LoginForm />
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('PrincipalScreen')}
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