import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';


export default class Logo extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Image 
            style={styles.logo}
            source={require('.././assets/img/runteach.png')} 
          />
          <Text style={styles.title}>RunTeach</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  title: {
    color: '#0b2333',
    textAlign: 'center',
    opacity: 0.9,
    fontSize: 20,
    fontWeight: '700' 
  }
});

