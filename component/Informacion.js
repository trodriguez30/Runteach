import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, ScrollView } from 'react-native';
import Helpers from './Helpers';
import firebase from '.././Firebase';

export default class SectionListBasics extends Component {
	
	constructor() {
	super();

	this.state={
    universidad:'',
    carrera:'',
    semestre:'',
    edad:'',
    sexo:'',
  	}

  }

  async componentDidMount(){
    //console.log(firebase.auth().currentUser.uid);
    try{
    let user = await firebase.auth().currentUser
    Helpers.getUniversidad(user.uid ,(universidad) => {
      this.setState({
        universidad: universidad,
      })
    })
    Helpers.getCarrera(user.uid ,(carrera) => {
      this.setState({
        carrera: carrera,
      })
    })
    Helpers.getSemestre(user.uid ,(semestre) => {
      this.setState({
        semestre: semestre,
      })
    })
    Helpers.getEdad(user.uid ,(edad) => {
      this.setState({
        edad: edad,
      })
    })
    Helpers.getSexo(user.uid ,(sexo) => {
      this.setState({
        sexo: sexo,
      })
    })
  }catch(error){
    console.log(error)
  }
    
	}

  render() {
    return (
      <ScrollView style={styles.container}>
        <SectionList
          sections={[
            {title: 'Información básica', data: [ this.state.universidad, 'Carrera: ' + this.state.carrera, 'Semestre: ' + this.state.semestre, 'Edad: ' + this.state.edad + ' Año(s)', 'Sexo: ' + this.state.sexo]},
            {title: 'Áreas de conocimiento', data: ['Matemáticas discretas', 'Física cuántica', 'Modelos de ingeniería']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		height: 260,
	},
    sectionHeader: {
	    paddingTop: 5,
	    paddingLeft: 10,
	    paddingRight: 10,
	    paddingBottom: 5,
	    fontSize: 15,
	    textAlign: 'center', 
	    backgroundColor: '#0b2333',
	    color: '#fff',
	  },
	  item: {
	    padding: 10,
	    fontSize: 13,
	    height: 40,
	  },
})


