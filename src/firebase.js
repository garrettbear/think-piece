import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyAt_6AQ65dbhN2Ds4rOKCcSFf2E8_SKFYE",
  authDomain: "think-piece-2.firebaseapp.com",
  databaseURL: "https://think-piece-2.firebaseio.com",
  projectId: "think-piece-2",
  storageBucket: "think-piece-2.appspot.com",
  messagingSenderId: "461967925096"
};

firebase.initializeApp(config);

window.firebase = firebase; // ONLY FOR DEBUG PURPOSES -- REMOVE

export default firebase;
