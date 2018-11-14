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

    static getCelular(userId,callback){
      let LNamePath = "/users/"+userId+"/celular"
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
        let universidad = ''
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

    static getSexo(userId,callback){
      let SexoPath = "/users/"+userId+"/sexo"
      firebase.database().ref(SexoPath).on('value',(snapshot) => {
        let sexo = ''
        if (snapshot.val()) {
          sexo = snapshot.val()
        }
        callback(sexo)
      })
    }

    static getEstado(userId,callback){
      let EstadoPath = "/tutores/"+userId+"/estado"
      firebase.database().ref(EstadoPath).on('value',(snapshot) => {
        let estado = ''
        if (snapshot.val()) {
          estado = snapshot.val()
        }
        callback(estado)
      })
    }

    static getMatematicas(userId,callback){
      let MatematicasPath = "/tutores/"+userId+"/areas/matematicas"
      firebase.database().ref(MatematicasPath).on('value',(snapshot) => {
        let matematicas = ''
        if (snapshot.val()) {
          matematicas = snapshot.val()
        }
        callback(matematicas)
      })
    }

    static getCalculo(userId,callback){
      let CalculoPath = "/tutores/"+userId+"/areas/calculo"
      firebase.database().ref(CalculoPath).on('value',(snapshot) => {
        let calculo = ''
        if (snapshot.val()) {
          calculo = snapshot.val()
        }
        callback(calculo)
      })
    }

    static getFisica(userId,callback){
      let FisicaPath = "/tutores/"+userId+"/areas/fisica"
      firebase.database().ref(FisicaPath).on('value',(snapshot) => {
        let fisica = ''
        if (snapshot.val()) {
          fisica = snapshot.val()
        }
        callback(fisica)
      })
    }

    static getIngles(userId,callback){
      let InglesPath = "/tutores/"+userId+"/areas/ingles"
      firebase.database().ref(InglesPath).on('value',(snapshot) => {
        let ingles = ''
        if (snapshot.val()) {
          ingles = snapshot.val()
        }
        callback(ingles)
      })
    }

    static getProgramacion(userId,callback){
      let ProgramacionPath = "/tutores/"+userId+"/areas/programacion"
      firebase.database().ref(ProgramacionPath).on('value',(snapshot) => {
        let programacion = ''
        if (snapshot.val()) {
         programacion = snapshot.val()
        }
        callback(programacion)
      })
    }

    static getQuimica(userId,callback){
      let QuimicaPath = "/tutores/"+userId+"/areas/quimica"
      firebase.database().ref(QuimicaPath).on('value',(snapshot) => {
        let quimica = ''
        if (snapshot.val()) {
          quimica = snapshot.val()
        }
        callback(quimica)
      })
    }

    static getAreas(userId,callback){
      let AreasPath = "/tutores/"+userId+"/areas"
      firebase.database().ref(AreasPath).orderByValue().once('value', (snapshot) => {
        let areas = []
        if (snapshot.exists()) {
          snapshot.forEach((child) => {
            if(child.val()){
              areas.push(child.key)
            }
          })
        }
        callback(areas)
      })
    }

    static getTotalAreas(userId,callback){
      let AreasPath = "/tutores/"+userId+"/areas"
      firebase.database().ref(AreasPath).orderByValue().once('value', (snapshot) => {
        let areas = []
        if (snapshot.exists()) {
          snapshot.forEach((child) => {
              areas.push(child.key)
          })
        }
        callback(areas)
      })
    }


    static getTutores(callback){
      let AreasPath = "/tutores"
      firebase.database().ref(AreasPath).once('value',(snapshot) => {
        let lista = []
        if (snapshot.exists()) {
          snapshot.forEach((child) => {
            lista.push(child.key)
          })
        }
        callback(lista)
      })

    }

    static getInfoTutores(tutorId,callback){
      let AreasPath = "/users/"+tutorId
      firebase.database().ref(AreasPath).once('value',(snapshot) => {
        let user = []
        if (snapshot.exists()) {
          user.push(tutorId)
          user.push(snapshot.val().nombre+" "+snapshot.val().apellido)
          user.push(snapshot.val().carrera + " Sem. "+snapshot.val().semestre)
        }
        callback(user)
      })

    }

    static getTutoresDisponibles(tutor,userId,area,universidad,callback){
      firebase.database().ref('/tutores/'+tutor+'/estado').once('value',(estado) => {
        let disponible = ''
        if(estado.val()){
          firebase.database().ref('/tutores/'+tutor+'/areas/'+area).once('value',(areaS) => {
            if(areaS.val()){
              firebase.database().ref('/users/'+tutor+'/universidad').once('value',(uniS) => {
                if(uniS.val()==universidad && tutor!=userId){
                  callback(true)
                }
                else{
                  callback(false)
                }
              });
            }
          });
        }
        callback(false)
      });
    }

    static getCodigoHistorial(callback){
      let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
      let codigo = "";
      for (i=0; i<30; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random()*caracteres.length))
      }
      callback(codigo)
    }

    static getFechaHoraHistorial(callback){
      let hoy = new Date()
      let fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear()
      let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()
      let FechaHora = fecha + ' - ' + hora
      callback(FechaHora)
    }

    static getHistorial(callback){
      let HistorialPath = "/historial"
      firebase.database().ref(HistorialPath).once('value',(snapshot) => {
        let lista = []
        if (snapshot.exists()) {
          snapshot.forEach((child) => {
            lista.push(child.key)
          })
        }
        callback(lista)
      })
    }

    static getHistorialEstudiante(child,userId,callback){
      firebase.database().ref('/historial/'+child).once('value',(historial) => {
        if(historial.val().estudianteId==userId){
          callback(true)
        }else{
          callback(false)
        }
      })
    }

    static getHistorialTutor(child,userId,callback){
      firebase.database().ref('/historial/'+child).once('value',(historial) => {
        if(historial.val().tutorId==userId){
          callback(true)
        }else{
          callback(false)
        }
      })
    }

    static getHistorialInfo(child,callback){
      let AreasPath = "/historial/"+child
      firebase.database().ref(AreasPath).once('value',(snapshot) => {
        let historial = []
        if (snapshot.exists()) {
          historial.push(child) //0
          historial.push('Solicitud de tutoría') //1
          historial.push(snapshot.val().area) //2
          historial.push(snapshot.val().estado) //3
          historial.push(snapshot.val().descripcion) //4
          historial.push(snapshot.val().estudianteId) //5
          historial.push(snapshot.val().tutorId) //6
          historial.push(snapshot.val().fechahora) //7
          historial.push(snapshot.val().titulo) //8
          historial.push(snapshot.val().visto) //9
        }
        callback(historial)
      })
    }

    static getNotificacionesEstudiante(child,userId,callback){
      Helpers.getHistorialEstudiante(child,userId,(estudiante)=>{
            if(estudiante){
              Helpers.getHistorialInfo(child, (infoHistorial) => {
                if(infoHistorial[3]!='pendiente' && infoHistorial[9]=='false'){
                  callback(true)
                }
              })
            }
      })
    }

    static getNotificacionesTutor(child,userId,callback){
      Helpers.getHistorialTutor(child,userId,(tutor)=>{
            if(tutor){
              Helpers.getHistorialInfo(child, (infoHistorial) => {
                if(infoHistorial[3]=='pendiente'){
                  callback(true)
                }
              })
            }
      })
    }

}
  module.exports = Helpers
