import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD3WTGksYsgIAIddizOPKoTrJAY8RFsPx8",
    authDomain: "dukan-db.firebaseapp.com",
    projectId: "dukan-db",
    storageBucket: "dukan-db.appspot.com",
    messagingSenderId: "150066722698",
    appId: "1:150066722698:web:2a51a45a52c607ffe6fa73"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export  default firebase;