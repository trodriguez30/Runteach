import firebase from '.././Firebase';

  class Helpers {
    static getNombre(userId,callback){
      let NamePath = "/users/"+userId+"/nombre"
      firebase.database().ref(NamePath).on('value',(snapshot) => {
        let nombre = ''
        if (snapshot.val()) {
          nombre = snapshot.val()
        }
        callback(nombre)
      })
    }

    static getApellido(userId,callback){
      let LNamePath = "/users/"+userId+"/apellido"
      firebase.database().ref(LNamePath).on('value',(snapshot) => {
        let apellido = ''
        if (snapshot.val()) {
          apellido = snapshot.val()
        }
        callback(apellido)
      })
    }

    static getUniversidad(userId,callback){
      let UnivPath = "/users/"+userId+"/universidad"
      firebase.database().ref(UnivPath).on('value',(snapshot) => {
        let univ = ''
        if (snapshot.val()) {
          universidad = snapshot.val()
        }
        callback(universidad)
      })
    }

    static getCarrera(userId,callback){
      let CarreraPath = "/users/"+userId+"/carrera"
      firebase.database().ref(CarreraPath).on('value',(snapshot) => {
        let carrera = ''
        if (snapshot.val()) {
          carrera = snapshot.val()
        }
        callback(carrera)
      })
    }

    static getUbicacion(userId,callback){
      let UbiPath = "/users/"+userId+"/ubicacion"
      firebase.database().ref(UbiPath).on('value',(snapshot) => {
        let ubicacion = ''
        if (snapshot.val()) {
          ubicacion = snapshot.val()
        }
        callback(ubicacion)
      })
    }

    static getSemestre(userId,callback){
      let SemestrePath = "/users/"+userId+"/semestre"
      firebase.database().ref(SemestrePath).on('value',(snapshot) => {
        let semestre = ''
        if (snapshot.val()) {
          semestre = snapshot.val()
        }
        callback(semestre)
      })
    }

    static getEdad(userId,callback){
      let EdadPath = "/users/"+userId+"/edad"
      firebase.database().ref(EdadPath).on('value',(snapshot) => {
        let edad = ''
        if (snapshot.val()) {
          edad = snapshot.val()
        }
        callback(edad)
      })
    }

    static getCelular(userId,callback){
      let CelularPath = "/users/"+userId+"/celular"
      firebase.database().ref(CelularPath).on('value',(snapshot) => {
        let celular = ''
        if (snapshot.val()) {
          celular = snapshot.val()
        }
        callback(celular)
      })
    }


  }

  module.exports = Helpers
