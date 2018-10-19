import React, {Component} from 'react';
import { StyleSheet, KeyboardAvoidingView, Text} from 'react-native';
import { LinearGradient} from 'expo';
import Logo from './Logo';
import LoginForm from './LoginForm';
import LoginButton from './LoginButton';
import LoginOptions from './LoginOptions';
import Principal from './Principal';


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
        <LoginButton />
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
  }
});


 export default Login;