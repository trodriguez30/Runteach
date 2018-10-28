import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import firebase from '.././Firebase';

export default class App extends Component {
   render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchContainer}
        >
          <Image
            style={styles.touchIcon}
            source={require('.././assets/img/icons/student.png')}
            />
          <Text style={styles.touchText}>
            ESTUDIANTE
          </Text>
        </TouchableOpacity>    
        <TouchableOpacity style={styles.touchContainer}>
          <Text style={styles.touchText}>TUTOR</Text>
          <Image
            style={styles.touchIcon}
            source={require('.././assets/img/icons/tutor.png')}
          />
        </TouchableOpacity>      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 50
  },
  touchContainer: {
    marginTop: 20,
    height: 60,
    backgroundColor: '#0b2333',
    paddingVertical: 20,
    justifyContent: 'center',
  },
  touchIcon:{
    position: 'absolute',
    marginLeft: 20,
    top: 16,
  },
  touchText:{
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700', 
    fontSize: 20,
    paddingLeft: 50,
  },
});
