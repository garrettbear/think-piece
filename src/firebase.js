import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAaJL3nisi6lHTlDQq6-Vl6gzQ2zc4sDZ0",
  authDomain: "think-piece-live-2.firebaseapp.com",
  databaseURL: "https://think-piece-live-2.firebaseio.com",
  projectId: "think-piece-live-2",
  storageBucket: "think-piece-live-2.appspot.com",
  messagingSenderId: "401535693367"
};
firebase.initializeApp(config);

export const firestore = firebase.firestore();

// No longer need this with the Firebase update 😇
// firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase; //for dev purposes

export default firebase;
