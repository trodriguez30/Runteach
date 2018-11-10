import React, {Component} from 'react';
import { StyleSheet, ScrollView, Text, View , SectionList, Image, TouchableOpacity} from 'react-native';
import Logo from './Logo';
import firebase from '.././Firebase';
import Helpers from './Helpers';

class ListaTutores extends React.Component {
  static navigationOptions = {
    title: 'Tutor seleccionado',
    headerStyle: { backgroundColor: '#ffca3a'},
  };

 constructor() {
    super();
    
    console.ignoredYellowBox = [
      'Warning', 'Setting a timer'
    ];

    this.state={
      nombre:'',
      apellido:'',
      ubicacion:'',
      currentColor:'#ff595e',
      universidad:'',
      carrera:'',
      semestre:'',
      edad:'',
      sexo:'',
      areas: [],
      tutorId:'',
    }

  }
 

  async componentDidMount(){
    const { navigation } = this.props;
    const getTutor = navigation.getParam('tutorId', 'NO-ID');
    this.setState({
          tutorId: getTutor,
        })
    try{
      Helpers.getNombre(getTutor ,(nombre) => {
        this.setState({
          nombre: nombre,
        })
      })
      Helpers.getApellido(getTutor ,(apellido) => {
        this.setState({
          apellido: apellido,
        })
      })
      Helpers.getUbicacion(getTutor ,(ubicacion) => {
        this.setState({
          ubicacion: ubicacion,
        })
      })
       Helpers.getEstado(getTutor ,(estado) => {
        if(estado){
          this.setState({
            currentColor: '#8ac926',
          })
        }else{
          this.setState({
            currentColor: '#ff595e',
          })
        }
      })
       Helpers.getUniversidad(getTutor ,(universidad) => {
        this.setState({
          universidad: universidad,
        })
      })
      Helpers.getCarrera(getTutor ,(carrera) => {
        this.setState({
          carrera: carrera,
        })
      })
      Helpers.getSemestre(getTutor ,(semestre) => {
        this.setState({
          semestre: semestre,
        })
      })
      Helpers.getEdad(getTutor ,(edad) => {
        this.setState({
          edad: edad,
        })
      })
      Helpers.getSexo(getTutor ,(sexo) => {
        this.setState({
          sexo: sexo,
        })
      })
      Helpers.getAreas(getTutor ,(areas) => {
        this.setState({
          areas: areas,
        })
      })
    }catch(error){
      console.log(error)
    }    
  }
  
  render() {
    return (
        <View>
          <ScrollView>
            <View style={styles.perfilContainer}>
              <Image 
                style={styles.user}
                source={require('.././assets/img/icons/user.png')} 
              />
              <View style={styles.nameContainer}>
                <Text style={styles.textName}>{this.state.nombre+' '+this.state.apellido}</Text>
                <View style={[styles.circleState, {backgroundColor: this.state.currentColor}]} />
              </View>
              <View style={styles.ubicationContainer}>
                <Text style={styles.ubication}>
                  <Image
                  style={styles.touchIcon}
                  source={require('.././assets/img/icons/location.png')}/>
                  {this.state.ubicacion}
                </Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <SectionList
                sections={[
                  {title: 'Información básica', data: [ this.state.universidad, 'Carrera: ' + this.state.carrera, 'Semestre: ' + this.state.semestre, 'Edad: ' + this.state.edad + ' Año(s)', 'Sexo: ' + this.state.sexo]},
                  {title: 'Áreas de conocimiento', data: this.state.areas },
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
              />
            </View>
          </ScrollView>   
          <View>
            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('SolicitudTutoriaScreen', {tutorId:this.state.tutorId})}
              style={styles.touch}>
              <Text style={styles.touchText}>
                <Image
                source={require('.././assets/img/icons/support.png')} 
              />
              </Text>
            </TouchableOpacity>
          </View>
        </View>   
     );
  }
}

const styles = StyleSheet.create({
  perfilContainer: {
    alignItems: 'center',
    backgroundColor: '#ffca3a',
    justifyContent: 'center'
  },
  user: {
    marginTop: 10,
    marginBottom: 10,
    width: 70,
    height: 70
  },
  nameContainer:{
    opacity: 0.9,
    marginBottom: 5,
    flexDirection: 'row',
  },
  circleState: {
    width: 10,
    height: 10,
    borderRadius: 10/2,
  },
  textName: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ubication:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 13, 
    marginBottom: 5,
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
  touch:{
    position: 'absolute', 
    right: 10, 
    bottom: 10,
    width: 70,
    height: 70,
    borderRadius: 70/2,
    backgroundColor: '#ffca3a',
    justifyContent: 'center',
    alignItems:'center', 
  },
});


 export default ListaTutores;