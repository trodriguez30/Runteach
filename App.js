import React, { Component } from 'react';
import Login from './component/Login';
import Principal from './component/Principal';
import SignUp from './component/SignUp';
import BuscarTutoria from './component/BuscarTutoria';
import OpcionesTutor from './component/OpcionesTutor';
import {createStackNavigator} from 'react-navigation'
import * as firebase from 'firebase';


export default class App extends React.Component {
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
	},
	SignUpScreen:{
		screen:SignUp
	},
	BuscarTutoriaScreen:{
		screen:BuscarTutoria
	},
	OpcionesTutorScreen:{
		screen:OpcionesTutor
	}
})