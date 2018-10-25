import * as firebase from 'firebase';


const firebaseConfig = {  
    apiKey: "AIzaSyCqpHWp-hAFbRr7zX_MyxrXmVWvn4NC_ic",
    authDomain: "runteach-a14a0.firebaseapp.com",
    databaseURL: "https://runteach-a14a0.firebaseio.com",
    projectId: "runteach-a14a0",
    storageBucket: "runteach-a14a0.appspot.com",
    messagingSenderId: "240619409117"
};
const firebaseApp = firebase.initializeApp(firebaseConfig); 

export default firebase;