import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#ffca3a',
  },
  title: {
    color: '#rgba(0, 0, 0, 0.65)',
    textAlign: 'left',
  },
  buttonText: {
    color: '#rgba(0, 0, 0, 0.45)',
  },
})

export default class NavBarAndroid extends Component {

  render() {
    return (
	      	<NavBar style={styles}>
	        	<NavButton>
	            <NavButtonText style={styles.buttonText}>
	              <Image source={require('.././assets/img/icons/menu.png')} />
	            </NavButtonText>
	          	</NavButton>
	          	<NavTitle style={styles.title}>
	          		{"Perfil"}
	        	</NavTitle>
	          <NavButton>
	            <NavButtonText style={styles.buttonText}>
	              <Image source={require('.././assets/img/icons/notification.png')} />
	            </NavButtonText>
	          </NavButton>
	      	</NavBar>
    )
  }
}