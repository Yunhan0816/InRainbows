import firebase from "firebase/app";
const firebaseui = require("firebaseui");
import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyCyX1-eSGM-myHydqEWc-lmNFIeyQTDCrA",
  authDomain: "inrainbows-171a7.firebaseapp.com",
  databaseURL: "https://inrainbows-171a7.firebaseio.com",
  projectId: "inrainbows-171a7",
  storageBucket: "inrainbows-171a7.appspot.com",
  messagingSenderId: "210440959778",
  appId: "1:210440959778:web:427881d0a0db267fce577b",
  measurementId: "G-R0KY65S2W4"
};
const app = firebase.initializeApp(config);
const auth = firebase.auth();
const db = app.firestore();

const authUI = new firebaseui.auth.AuthUI(auth);

const authUIConfig = {
  signInSuccessUrl: "/",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    }
  ]
};

export { auth, db, authUI, authUIConfig };
