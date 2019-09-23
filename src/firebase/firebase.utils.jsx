import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDzSWmfHMQFZ8e3G4gkXD6YWJOWHHc4u0s',
  authDomain: 'crown-db-5c461.firebaseapp.com',
  databaseURL: 'https://crown-db-5c461.firebaseio.com',
  projectId: 'crown-db-5c461',
  storageBucket: '',
  messagingSenderId: '310302414821',
  appId: '1:310302414821:web:908dc5c65f743626',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //store user to the db
  //snapshop is for reading
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //if user not exist
  //documentRef is for crud
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  //return the userRef for other uses
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
