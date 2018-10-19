import React, {Component} from 'react';
import { Alert, Text, TextInput, StyleSheet, View, TouchableOpacity, Image} from 'react-native';


export default class LoginButton extends Component {
  _onPressButtonLogIn(){
    Alert.alert('You tapped the LogIn Button')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={this._onPressButtonLogIn}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  buttonContainer: {
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


