import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class OptionsAccount extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.optionsText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.optionsText}>Forgot your Password?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
    marginTop: 20,
  },
  optionsText: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});