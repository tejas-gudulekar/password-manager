import firebase from "firebase";
require('firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyDMR8XL-UI0m-sXRRQPKjRlEp2MAVYs6r0",
    authDomain: "passwordmanager-cd322.firebaseapp.com",
    projectId: "passwordmanager-cd322",
    storageBucket: "passwordmanager-cd322.appspot.com",
    messagingSenderId: "162750579916",
    appId: "1:162750579916:web:103c7776afd39ab4792e69"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  export {db};