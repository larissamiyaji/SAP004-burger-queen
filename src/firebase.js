import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCWwRiN3doLWny1igDXSFz6sVyVFzfqYGE",
    authDomain: "burger-queen04.firebaseapp.com",
    databaseURL: "https://burger-queen04.firebaseio.com",
    projectId: "burger-queen04",
    storageBucket: "burger-queen04.appspot.com",
    messagingSenderId: "285508123474",
    appId: "1:285508123474:web:b942369079f8d0dcc8188b",
    measurementId: "G-97X0XWW1P4"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
