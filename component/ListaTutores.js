import React, {Component} from 'react';
import { StyleSheet, ScrollView, Text, View , SectionList, TouchableOpacity, FlatList} from 'react-native';
import Logo from './Logo';
import firebase from '.././Firebase';
import Helpers from './Helpers';
import { ListItem } from 'react-native-elements'

class ListaTutores extends React.Component {
  static navigationOptions = {
    title: 'Tutores disponibles',
    headerStyle: { backgroundColor: '#ffca3a'},
  };

  constructor() {
    super();
    
    console.ignoredYellowBox = [
      'Warning', 'Setting a timer'
    ];

    this.state={
      areas: [],
      descripcion:'',
      tutorId:'',
      titulo:'',
      area:'',
      tutores:[]
    }

  }

  async componentDidMount(){
    const { navigation } = this.props;
    const getArea = navigation.getParam('area', 'NO-ID');
    const getUniversidad = navigation.getParam('universidad', 'NO-ID');
    let user = await firebase.auth().currentUser
    try{
      Helpers.getTutores((tutores) => {
        tutores.forEach((child) => {
          Helpers.getTutoresDisponibles(child,user.uid,getArea,getUniversidad,(disponibles)=>{
            if(disponibles){
              Helpers.getInfoTutores(child, (infoTutores) => {
                this.setState({tutores: this.state.tutores.concat([infoTutores])})
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
      <ScrollView>
        <View>
          <FlatList
            data={this.state.tutores}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={item[1]}
                subtitle={item[2]}
                onPress={() => this.props.navigation.navigate('TutorSeleccionadoScreen', {tutorId:item[0]})}
              />
            )}
            keyExtractor={item => item[0]}
          />
        </View>
      </ScrollView>
     );
  }
}

 export default ListaTutores;