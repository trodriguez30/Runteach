import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, Switch, ScrollView, Dimensions } from 'react-native';
import firebase from '.././Firebase';
import Helpers from './Helpers';



export default class OptionsTutor extends Component {

  static navigationOptions = {
      title: 'Opciones Tutor',
      headerStyle: { backgroundColor: '#ffca3a'},
  };
  
  state = {
    isOnEstadoToggleSwitch: false,
    isOnMatematicasToggleSwitch: false,
    isOnCalculoToggleSwitch: false,
    isOnCienciasCivilesToggleSwitch: false,
    isOnFisicaToggleSwitch: false,
    isOnHumanidadesToggleSwitch: false,
    isOnInglesToggleSwitch: false,
    isOnMetodosNumericosToggleSwitch: false,
    isOnProgramacionToggleSwitch: false,
    isOnQuimicaToggleSwitch: false,
  };

  _handleToggleSwitchEstado = () =>
    this.setState(state => ({
      isOnEstadoToggleSwitch: !state.isOnEstadoToggleSwitch,
    }));

    _handleToggleSwitchMatematicas = () =>
    this.setState(state => ({
      isOnMatematicasToggleSwitch: !state.isOnMatematicasToggleSwitch,
    }));

    _handleToggleSwitchCalculo = () =>
    this.setState(state => ({
      isOnCalculoToggleSwitch: !state.isOnCalculoToggleSwitch,
    }));

    _handleToggleSwitchIngles = () =>
    this.setState(state => ({
      isOnInglesToggleSwitch: !state.isOnInglesToggleSwitch,
    }));

    _handleToggleSwitchProgramacion = () =>
    this.setState(state => ({
      isOnProgramacionToggleSwitch: !state.isOnProgramacionToggleSwitch,
    }));

    _handleToggleSwitchFisica = () =>
    this.setState(state => ({
      isOnFisicaToggleSwitch: !state.isOnFisicaToggleSwitch,
    }));

    _handleToggleSwitchQuimica = () =>
    this.setState(state => ({
      isOnQuimicaToggleSwitch: !state.isOnQuimicaToggleSwitch,
    }));

    _handleToggleSwitchHumanidades = () =>
    this.setState(state => ({
      isOnHumanidadesToggleSwitch: !state.isOnHumanidadesToggleSwitch,
    }));

    _handleToggleSwitchCienciasCiviles = () =>
    this.setState(state => ({
      isOnCienciasCivilesToggleSwitch: !state.isOnCienciasCivilesToggleSwitch,
    }));

    _handleToggleSwitchMetodosNumericos = () =>
    this.setState(state => ({
      isOnMetodosNumericosToggleSwitch: !state.isOnMetodosNumericosToggleSwitch,
    }));

    render(){
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
              <View style={styles.switchContainer}>
                <Text>Humanidades</Text>
                <Switch
                    onValueChange={this._handleToggleSwitchHum}
                    value={this.state.isOnHumToggleSwitch}
                />
              </View>
              <View style={styles.switchContainer}>
                <Text>Ciencias Civiles</Text>
                <Switch
                    onValueChange={this._handleToggleSwitchCienciasCiviles}
                    value={this.state.isOnCienciasCivilesToggleSwitch}
                />
              </View>
              <View style={styles.switchContainer}>
                <Text>Metodos Numericos</Text>
                <Switch
                    onValueChange={this._handleToggleSwitchMetodosNumericos}
                    value={this.state.isOnMetodosNumericosToggleSwitch}
                />
              </View>
            </View>
          </ScrollView>
          <View>
            <TouchableOpacity 
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

