import firebase from 'firebase-app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBzvfm0QssuUdbOXMjDk6gOeroOgW2fiAU",
    authDomain: "react-firebase-jvde.firebaseapp.com",
    databaseURL: "https://react-firebase-jvde.firebaseio.com",
    projectId: "react-firebase-jvde",
    storageBucket: "react-firebase-jvde.appspot.com",
    messagingSenderId: "647861303244"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase