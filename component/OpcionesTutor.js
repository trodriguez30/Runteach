import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, Switch, ScrollView, Dimensions, Alert } from 'react-native';
import firebase from '.././Firebase';
import Helpers from './Helpers';



export default class OptionsTutor extends Component {

  static navigationOptions = {
      title: 'Opciones Tutor',
      headerStyle: { backgroundColor: '#ffca3a'},
  };
  

  constructor() {
    super();
  
    console.ignoredYellowBox = [
      'Warning', 'Setting a timer'
    ];

    this.state={
      isOnEstadoToggleSwitch: false,
      isOnMatematicasToggleSwitch: false,
      isOnCalculoToggleSwitch: false,
      isOnFisicaToggleSwitch: false,
      isOnInglesToggleSwitch: false,
      isOnProgramacionToggleSwitch: false,
      isOnQuimicaToggleSwitch: false,
    }

  }

    Data = {}

    async componentDidMount(){
      let user = await firebase.auth().currentUser;
        try{
        Helpers.getEstado(user.uid ,(estado) => {
          this.setState({
            isOnEstadoToggleSwitch: estado,
          })
        })
        Helpers.getMatematicas(user.uid ,(matematicas) => {
          this.setState({
            isOnMatematicasToggleSwitch: matematicas,
          })
        })
        Helpers.getCalculo(user.uid ,(calculo) => {
          this.setState({
            isOnCalculoToggleSwitch: calculo,
          })
        })
        Helpers.getFisica(user.uid ,(fisica) => {
          this.setState({
            isOnFisicaToggleSwitch: fisica,
          })
        })
        Helpers.getIngles(user.uid ,(ingles) => {
          this.setState({
            isOnInglesToggleSwitch: ingles,
          })
        })
        Helpers.getProgramacion(user.uid ,(programacion) => {
          this.setState({
            isOnProgramacionToggleSwitch: programacion,
          })
        })
        Helpers.getQuimica(user.uid ,(quimica) => {
          this.setState({
            isOnQuimicaToggleSwitch: quimica,
          })
        })
      }catch(error){
        console.log(error)
      }
    }

  _handleToggleSwitchEstado = async () =>
    this.setState({
      isOnEstadoToggleSwitch: !this.state.isOnEstadoToggleSwitch,
  });

  _handleToggleSwitchMatematicas = async () =>
  this.setState({
    isOnMatematicasToggleSwitch: !this.state.isOnMatematicasToggleSwitch,
  });

  _handleToggleSwitchCalculo = async () =>
  this.setState({
    isOnCalculoToggleSwitch: !this.state.isOnCalculoToggleSwitch,
  });

  _handleToggleSwitchIngles = async () =>
  this.setState({
    isOnInglesToggleSwitch: !this.state.isOnInglesToggleSwitch,
  });

  _handleToggleSwitchProgramacion = async () =>
  this.setState({
    isOnProgramacionToggleSwitch: !this.state.isOnProgramacionToggleSwitch,
  });

  _handleToggleSwitchFisica = async () =>
  this.setState({
        isOnFisicaToggleSwitch: !this.state.isOnFisicaToggleSwitch
  });

  _handleToggleSwitchQuimica = async () =>
  this.setState({
    isOnQuimicaToggleSwitch: !this.state.isOnQuimicaToggleSwitch,
  });


    _handleUpdate = async () => {
      let user = await firebase.auth().currentUser;
      firebase.database().ref('tutores/' + user.uid).update({
        estado: this.state.isOnEstadoToggleSwitch
      }).catch(
        error => {Alert.alert(error.message);}
      );
      firebase.database().ref('tutores/' + user.uid + '/areas').update({
        matematicas: this.state.isOnMatematicasToggleSwitch,
        calculo: this.state.isOnCalculoToggleSwitch,
        fisica: this.state.isOnFisicaToggleSwitch,
        ingles: this.state.isOnInglesToggleSwitch,
        programacion: this.state.isOnProgramacionToggleSwitch,
        quimica: this.state.isOnQuimicaToggleSwitch,
      }).catch(
        error => {Alert.alert(error.message);}
      );
      Alert.alert("Mensaje", "Cambios guardados");
      this.props.navigation.navigate('PrincipalScreen');
    }


    render(){
      var user = {};
      user = this.Data;
      return(
        <View>
          <ScrollView>
            <View>
              <View style={styles.titleSwitchContainer}>
                <Text style={styles.titleSwitchText}>Estado de disponibilidad</Text>
              </View>
              <View style={styles.switchContainer}>
                <Text>Disponibilidad</Text>
                <Switch
                    onValueChange={this._handleToggleSwitchEstado}
                    value={this.state.isOnEstadoToggleSwitch}
                />   
              </View>
            </View>
            <View>
              <View style={styles.titleSwitchContainer}>
                <Text style={styles.titleSwitchText}>Áreas de conocimiento</Text>
              </View>
              <View style={styles.switchContainer}>
                <Text>Matematicas</Text>
                <Switch
                    onValueChange={this._handleToggleSwitchMatematicas}
                    value={this.state.isOnMatematicasToggleSwitch}
                />
              </View>
              <View style={styles.switchContainer}>
                <Text>Calculos</Text>
                <Switch
                    onValueChange={this._handleToggleSwitchCalculo}
                    value={this.state.isOnCalculoToggleSwitch}
                />
              </View>
              <View style={styles.switchContainer}>
                <Text>Ingles</Text>
                <Switch
                    onValueChange={this._handleToggleSwitchIngles}
                    value={this.state.isOnInglesToggleSwitch}
                />
              </View>
              <View style={styles.switchContainer}>
                <Text>Programación</Text>
                <Switch
                    onValueChange={this._handleToggleSwitchProgramacion}
                    value={this.state.isOnProgramacionToggleSwitch}
                />
              </View>
              <View style={styles.switchContainer}>
                <Text>Física</Text>
                <Switch
                    onValueChange={this._handleToggleSwitchFisica}
                    value={this.state.isOnFisicaToggleSwitch}
                />
              </View>
              <View style={styles.switchContainer}>
                <Text>Química</Text>
                <Switch
                    onValueChange={this._handleToggleSwitchQuimica}
                    value={this.state.isOnQuimicaToggleSwitch}
                />
              </View>
            </View>
          </ScrollView>
          <View>
            <TouchableOpacity 
              onPress={this._handleUpdate}
              style={styles.touch}>
              <Text style={styles.touchText}>CONFIRMAR CAMBIOS</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  titleSwitchContainer:{
    backgroundColor: '#0b2333',
    paddingVertical: 10,
  },
  titleSwitchText:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  switchContainer:{
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 20,
  },
  touch:{
    position: 'absolute', 
    left: 0, 
    right: 0, 
    bottom: 0,
    height: 60,
    backgroundColor: '#0b2333',
    justifyContent: 'center',
  },
  touchText:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '700', 
  }
});

