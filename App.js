import React, { Component } from 'react';
import Login from './component/Login';
import Principal from './component/Principal';
import {createStackNavigator} from 'react-navigation'

export default class App extends React.Component {
  static navigationOptions = {
  	header: 'none'
  }
  render() {
    return (
    	<AppStackNavigator />
   	);
  }
}

const AppStackNavigator = new createStackNavigator({
	LoginScreen:{
		screen:Login,
		navigationOptions: () => ({
	      header: null
	    }),
	},
	PrincipalScreen:{
		screen:Principal,
		navigationOptions: () => ({
	      header: null
	    }),
	}
})

