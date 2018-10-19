import React, {Component} from 'react';
import { Text, TextInput, StyleSheet, View, TouchableOpacity, Image} from 'react-native';


export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image source={require('.././assets/img/icons/profile.png')} style={styles.icon} />
          <TextInput
          style={styles.inputText}
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
            underlineColorAndroid='transparent'
            placeholder="Password"
            returnKeyType="go"
            secureTextEntry
            placeholderTextColor="rgba(11,35,51,0.7)"
            ref={(input) => this.passwordInput = input}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
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
});


