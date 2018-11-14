import React, {Component} from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, Dimensions, TouchableOpacity, Alert} from 'react-native';
import Logo from './Logo';
import firebase from '.././Firebase';
import Helpers from './Helpers';

class ListaTutores extends React.Component {
  static navigationOptions = {
    title: 'Detalles',
    headerStyle: { backgroundColor: '#ffca3a'},
  };

  constructor() {
    super();
    

    this.state={
      historial:[],
      tutorId: '',
      nombreTutor: '',
      apellidoTutor:'',
      celularTutor:'',
    }

  }

  async componentDidMount(){
    const { navigation } = this.props;
    const getInfoId = navigation.getParam('infoId', 'NO-ID');
    const getTutorId = navigation.getParam('tutorId', 'NO-ID');
    try{
     Helpers.getHistorialInfo(getInfoId, (infoHistorial) => {
        this.setState({historial: infoHistorial})
      })
     Helpers.getNombre(getTutorId ,(nombre) => {
        this.setState({
          nombreTutor: nombre,
        })
      })
      Helpers.getApellido(getTutorId ,(apellido) => {
        this.setState({
          apellidoTutor: apellido,
        })
      })
      Helpers.getCelular(getTutorId ,(celular) => {
        this.setState({
          celularTutor: celular,
        })
      })
    }catch(error){
      console.log(error)
    } 
  }

  handleMarcarVisto = async () => {
      let user = await firebase.auth().currentUser;
      firebase.database().ref('historial/' + this.state.historial[0]).update({
        visto: 'true'
      }).then( () => {
        Alert.alert("Mensaje", "Solicitud vista");
        this.props.navigation.navigate('PrincipalScreen');
      }).catch(
        error => {Alert.alert(error.message);}
      )
    }
  
  render() {
    let res;
    let num;
    if(this.state.historial[3]!='pendiente' && this.state.historial[9]=='false'){
      res = <View style={styles.touchContainer}>
              <TouchableOpacity
                onPress={this.handleMarcarVisto}
                style={styles.touchVisto}>
                <Text style={styles.touchTextVisto}>Marcar como visto</Text>
              </TouchableOpacity>
            </View>;
    }else{
      res = <View style={styles.resContainer}>
                <Text style={styles.resText}>Solicitud {this.state.historial[3]}</Text>
               </View>;
    }
    if(this.state.historial[3]=='aceptada'){
      num = <View>
              <Text style={styles.text}>Celular:</Text>
              <TextInput
                style={styles.inputText}
                editable={false}
                value={this.state.celularTutor}
              />
            </View>;
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Titulo:</Text>
          <TextInput
            style={styles.inputText}
            editable={false}
            value={this.state.historial[8]}
          />
          <Text style={styles.text}>Área:</Text>
          <TextInput
            style={styles.inputText}
            editable={false}
            value={this.state.historial[2]}
          />
          <Text style={styles.text}>Tutor:</Text>
          <TextInput
            style={styles.inputText}
            editable={false}
            value={this.state.nombreTutor + ' ' + this.state.apellidoTutor}
          />
          <Text style={styles.text}>Fecha:</Text>
          <TextInput
            style={styles.inputText}
            editable={false}
            value={this.state.historial[7]}
          />
          <Text style={styles.text}>Descripción:</Text>
          <TextInput
            editable={false}
            multiline = {true}
            numberOfLines = {4}
            value={this.state.historial[4]}
          />
          {num}
          <Text style={styles.text}>Estado:</Text>
          <TextInput
            editable={false}
            multiline = {true}
            numberOfLines = {4}
            value={this.state.historial[3]}
          />
          {res}
        </View>
      </ScrollView>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  text:{
    marginVertical: 5,
    color: '#0b2333',
    fontWeight: '700',
    fontSize: 15,
  },
  inputText:{
    height: 30,
    fontSize: 15,
  },
  touchContainer: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  touchVisto:{
    height: 40,
    backgroundColor: '#0b2333',
    paddingVertical: 10,
    justifyContent: 'center',
    marginVertical: 10,
    width: (Dimensions.get('window').width)-40,
  },
  touchTextVisto:{
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700' ,
    fontSize: 15,
  },
  resContainer:{
    marginVertical: 15,
  },
  resText:{
    color: '#0b2333',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


 export default ListaTutores;