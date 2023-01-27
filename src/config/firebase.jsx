import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGVVynlnyO7_w7NZMaQhB_t-M2SMJMgDM",
  authDomain: "eval-h3hitema.firebaseapp.com",
  databaseURL: "https://eval-h3hitema-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eval-h3hitema",
  storageBucket: "eval-h3hitema.appspot.com",
  messagingSenderId: "852192871304",
  appId: "1:852192871304:web:4188f8f05ada88ceb5303d"
};


// Use this to initialize the firebase App
const firebaseApp =firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const fs = firebase
export { auth, db, fs };