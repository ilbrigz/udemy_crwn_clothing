import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDzSWmfHMQFZ8e3G4gkXD6YWJOWHHc4u0s",
  authDomain: "crown-db-5c461.firebaseapp.com",
  databaseURL: "https://crown-db-5c461.firebaseio.com",
  projectId: "crown-db-5c461",
  storageBucket: "",
  messagingSenderId: "310302414821",
  appId: "1:310302414821:web:908dc5c65f743626"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
