import React, { Component } from 'react';
import Login from './component/Login';
import Principal from './component/Principal';
import SignUp from './component/SignUp';
import BuscarTutoria from './component/BuscarTutoria';
import OpcionesTutor from './component/OpcionesTutor';
import ListaTutores from './component/ListaTutores';
import TutorSeleccionado from './component/TutorSeleccionado';
import SolicitudTutoria from './component/SolicitudTutoria';
import Notificaciones from './component/Notificaciones';
import DetallesHistorialEstudiante from './component/DetallesHistorialEstudiante';
import DetallesHistorialTutor from './component/DetallesHistorialTutor';
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
		screen:SignUp,
	},
	BuscarTutoriaScreen:{
		screen:BuscarTutoria
	},
	OpcionesTutorScreen:{
		screen:OpcionesTutor
	},
	ListaTutoresScreen:{
		screen:ListaTutores
	},
	TutorSeleccionadoScreen:{
		screen:TutorSeleccionado
	},
	SolicitudTutoriaScreen:{
		screen:SolicitudTutoria
	},
	NotificacionesScreen:{
		screen:Notificaciones,
	},
	DetallesHistorialEstudianteScreen:{
		screen:DetallesHistorialEstudiante
	}
	,
	DetallesHistorialTutorScreen:{
		screen:DetallesHistorialTutor
	}
})