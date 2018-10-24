import firebase from 'firebase';

const settings = {
    timestampsInSnapshots: true
};

const config = {
    apiKey: "AIzaSyBJeD40D8YEBbNReNTyvqSam9mFiarDDxM",
    authDomain: "datenight-d37db.firebaseapp.com",
    databaseURL: "https://datenight-d37db.firebaseio.com",
    projectId: "datenight-d37db",
    storageBucket: "datenight-d37db.appspot.com",
    messagingSenderId: "951612788545"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings(settings);

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const firestore = firebase.firestore();
  const auth = firebase.auth();
export {firebase, googleProvider, facebookProvider, firestore, auth };