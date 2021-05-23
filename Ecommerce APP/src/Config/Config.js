import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3WTOfQUlcdsiBWhAoSLtfg5ceXUImDfY",
    authDomain: "ecommerce-app-1921e.firebaseapp.com",
    projectId: "ecommerce-app-1921e",
    storageBucket: "ecommerce-app-1921e.appspot.com",
    messagingSenderId: "266008519763",
    appId: "1:266008519763:web:e9e0c0403b61b878ae92a6",
    measurementId: "G-DVBC9S3LV2"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export { auth, db, storage }

