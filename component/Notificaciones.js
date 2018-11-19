import React, {Component} from 'react';
import { StyleSheet, ScrollView, Text, View , SectionList, TouchableOpacity, FlatList, Dimensions, Image} from 'react-native';
import firebase from '.././Firebase';
import Helpers from './Helpers';
import { ListItem } from 'react-native-elements'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

class ListaTutores extends React.Component {
  static navigationOptions = {
    title: 'Notificaciones',
    headerStyle: { backgroundColor: '#ffca3a'},
  };

  constructor() {
    super();
    
    console.ignoredYellowBox = [
      'Warning', 'Setting a timer'
    ];

    this.state={
      notificacionesEstudianteContestadas: [],
      notificacionesEstudiantePendientes: [],
      notificacionesEstudianteHistorial: [],
      notificacionesTutorPendientes: [],
      notificacionesTutorHistorial: [],
    }

  }

  async componentDidMount(){
    let user = await firebase.auth().currentUser
    try{
      Helpers.getHistorial((historial) => {
        historial.forEach((child) => {
          Helpers.getHistorialEstudiante(child,user.uid,(estudiante)=>{
            if(estudiante){
              Helpers.getHistorialInfo(child, (infoHistorial) => {
                if(infoHistorial[3]=='pendiente'){
                  this.setState({notificacionesEstudiantePendientes: this.state.notificacionesEstudiantePendientes.concat([infoHistorial])})
                }else if(infoHistorial[3]!='pendiente' && infoHistorial[9]=='false'){
                  this.setState({notificacionesEstudianteContestadas: this.state.notificacionesEstudianteContestadas.concat([infoHistorial])})
                }else if(infoHistorial[9]=='true'){
                  this.setState({notificacionesEstudianteHistorial: this.state.notificacionesEstudianteHistorial.concat([infoHistorial])})
                }
              })
            }
          })
        })
      })
      Helpers.getHistorial((historial) => {
        historial.forEach((child) => {
          Helpers.getHistorialTutor(child,user.uid,(tutor)=>{
            if(tutor){
              Helpers.getHistorialInfo(child, (infoHistorial) => {
                if(infoHistorial[3]=='pendiente'){
                  this.setState({notificacionesTutorPendientes: this.state.notificacionesTutorPendientes.concat([infoHistorial])})
                }else{
                  this.setState({notificacionesTutorHistorial: this.state.notificacionesTutorHistorial.concat([infoHistorial])})
                }
              })
            }
          })
        })
      })
    }catch(error){
      console.log(error)
    } 
  }
  
  render() {
    return (
        <View>
          <ScrollableTabView
            style={{flex:0, height: Dimensions.get('window').height,}}
            initialPage={0}
            renderTabBar={() => <DefaultTabBar />}
          >
            <ScrollView tabLabel='Estudiante'>
              <View>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>Solicitudes contestadas</Text>
                </View>
                <FlatList
                  data={this.state.notificacionesEstudianteContestadas.reverse()}
                  renderItem={({ item }) => (
                    <ListItem
                      roundAvatar
                      avatar={require('.././assets/img/icons/estudiante.png')}
                      title={item[1]}
                      subtitle={item[2]}
                      onPress={() => this.props.navigation.navigate('DetallesHistorialEstudianteScreen', {infoId:item[0],tutorId:item[6]})}
                    />
                  )}
                  keyExtractor={item => item[0]}
                />
              </View>
              <View>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>Solicitudes pendientes</Text>
                </View>
                <FlatList
                  data={this.state.notificacionesEstudiantePendientes.reverse()}
                  renderItem={({ item }) => (
                    <ListItem
                      roundAvatar
                      avatar={require('.././assets/img/icons/estudiante.png')}
                      title={item[1]}
                      subtitle={item[2]}
                      onPress={() => this.props.navigation.navigate('DetallesHistorialEstudianteScreen', {infoId:item[0],tutorId:item[6]})}
                    />
                  )}
                  keyExtractor={item => item[0]}
                />
              </View>
              <View>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>Historial de solicitudes</Text>
                </View>
                <FlatList
                  data={this.state.notificacionesEstudianteHistorial}
                  renderItem={({ item }) => (
                    <ListItem
                      roundAvatar
                      avatar={require('.././assets/img/icons/estudiante.png')}
                      title={item[1]}
                      subtitle={item[2]}
                      onPress={() => this.props.navigation.navigate('DetallesHistorialEstudianteScreen', {infoId:item[0],tutorId:item[6]})}
                    />
                  )}
                  keyExtractor={item => item[0]}
                />
              </View>
            </ScrollView>
            <ScrollView tabLabel='Tutor'>
              <View>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>Solicitudes pendientes</Text>
                </View>
                <FlatList
                  data={this.state.notificacionesTutorPendientes.reverse()}
                  renderItem={({ item }) => (
                    <ListItem
                      roundAvatar
                      avatar={require('.././assets/img/icons/tutorh.png')}
                      title={item[1]}
                      subtitle={item[2]}
                      onPress={() => this.props.navigation.navigate('DetallesHistorialTutorScreen', {infoId:item[0],estudianteId:item[5]})}
                    />
                  )}
                  keyExtractor={item => item[0]}
                />
              </View>
              <View>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>Historial de solicitudes</Text>
                </View>
                <FlatList
                  data={this.state.notificacionesTutorHistorial.reverse()}
                  renderItem={({ item }) => (
                    <ListItem
                      roundAvatar
                      avatar={require('.././assets/img/icons/tutorh.png')}
                      title={item[1]}
                      subtitle={item[2]}
                      onPress={() => this.props.navigation.navigate('DetallesHistorialTutorScreen', {infoId:item[0],estudianteId:item[5]})}
                    />
                  )}
                  keyExtractor={item => item[0]}
                />
              </View>
            </ScrollView>
          </ScrollableTabView>
        </View>
     );
  }
}

const styles = StyleSheet.create({
  titleContainer:{
    backgroundColor: '#0b2333',
    paddingVertical: 10,
  },
  titleText:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
})

 export default ListaTutores;